const axios = require('axios').default;
const fs = require('fs')

// 使用之前 将这个url地址 替换为自己后台swagger网站的地址
const baseUrl = "http://192.167.5.112:7041";

const control = new Set([])

function tranChildren(data, path) {
  return data.map((e) => {
    const text =
      `
      /**
      * ${e.title}
      */
      function ${e.urlName.split('_')[0]}(paramsData = {}) {
          return (info)=>{
              return {target,isUrl:true,method:'POST',url:'${path}${e.url}',params:{...paramsData},...info}
          }
      }`
    return text
  }).join('')
}

function tranParent(name, data, path) {
  const str =
    `
     function ${name} (target) {
       ${tranChildren(data,path)}
       return {${data.map((e)=>e.urlName.split('_')[0]).toString()}}
     }
  `
  return str
}

function tranData(data, path = '') {
  const str = Object.keys(data).map((e) => {
    if (control.has(e)) {
      control.add(e + '_' + path.split('/')[1].toLocaleUpperCase())
      return tranParent(e + '_' + path.split('/')[1].toLocaleUpperCase(), data[e], path)
    }else {
      control.add(e)
      return tranParent(e, data[e], path)
    }
  }).join('')
  return `
    ${str.toString()}
  `
}

/**
 * 初始化获取网络请求数据
 *
 * @param {any}
 */
function getInitalNetWorkData(urlAddress) {
  return new Promise((resolve, reject) => {
    try {
      axios.get(baseUrl + urlAddress)
        .then((e) => {
          if (e.status === 200) {
            try
            {
              let obj = {}
              let path = e.data.basePath.split('/')[1]
              Object.keys(e.data.paths).forEach((el) => {
                const postData = e.data.paths[el].post || e.data.paths[el].get || e.data.paths[el].delete
                if (!postData) {
                  console.log("输出错误", e.data.paths[el]);
                }
                const name = postData.tags[0]
                if (name) {
                  if (!obj[name]) {
                    obj[name] = []
                  }
                  obj[name].push({
                    url: el,
                    title: postData.summary,
                    urlName: postData.operationId
                  })
                }else {
                  console.log('输出name',name)
                }
              })
              const content = tranData(obj, e.data.basePath.slice(0, -1));
              resolve({ text: content, arr: e.data.tags.map((el) => el.name) });
            }catch(error) {
              console.log('object',error)
            }

          } else {
            resolve({ error: true });
          }
        }) 
        .catch(error=>{
          resolve({ error: true});
        })
    } catch (error) {
      resolve({ error });
    }
  })
}

let urlText = "";
let funArr = []
function getNetInfo (filterData,excludeData) {
  axios.get("http://192.167.5.112:7041/swagger-resources")
  .then(async(e)=>{
    let filterResult = e.data.filter((ed) => filterData.length > 0 ? filterData.some((ef) => ed.url.indexOf(ef) !== -1) : true)
    filterResult = filterResult.filter((ed) => {
      return ed.url.indexOf('sso') == -1 &&ed.url.indexOf('app') == -1 

    })
    for (let i = 0; i < filterResult.length; i++) {
      const data = await getInitalNetWorkData(filterResult[i].url);
      if (!data.error) {
        urlText += data.text;
      }
    }
    const text = `
      ${urlText.toString()}
      export default {${Array.from(control).toString()}}
    `
    fs.writeFileSync("./src/command/api.js", text, "utf8");
  })
}

getNetInfo(['trace','upms/company','supe','inspection','company','reset','admin','vertify','info','brace','iot'],[])