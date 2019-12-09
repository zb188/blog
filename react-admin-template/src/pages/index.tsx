import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainLayout from "./Layout/Main";

import Routes from "./routes";

function MainPage() {
  return (
    <Router>
      <MainLayout>
        <Switch>
          {Routes.map((item, i) => {
            return <Route exact key={i} path={item.path} component={item.component} />;
          })}
        </Switch>
      </MainLayout>
    </Router>
  );
}

export default MainPage;
