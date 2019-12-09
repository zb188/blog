import React from "react";
// import {mock as server} from '../../tools/request';
import "./style.less";
export default () => {
  React.useEffect(() => {
    // get(`v1/roles`).then(({ data }) => {
    //   console.log('data is', data);
    // })
  }, []);
  return <h2 className="news">Hi, news page</h2>;
};
