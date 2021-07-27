import React from "react";
import { Switch, Route } from "react-router-dom";

import Home     from './components/Home'
import Projects from './components/Projects'
import Contact  from './components/Contact'

export default (
      <Switch>
            <Route component={Home} exact path="/" />
            <Route component={Projects} path="/projects" />
            <Route component={Contact} path="/contact" />
      </Switch>
)