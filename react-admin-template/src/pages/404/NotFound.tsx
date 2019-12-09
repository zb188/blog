import React from "react";
import { withRouter } from "react-router-dom";
import "./style.less";

const NotFound = () => (
  <div>
    <div>
      <h1 className="tip404">404</h1>
    </div>
    <div>
      <span>抱歉，你访问的页面不存在</span>
    </div>
  </div>
);

export default withRouter(NotFound);
