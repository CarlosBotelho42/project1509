import React from 'react';
import { Switch, Route} from "react-router-dom";

import Landing from "../pages/landing";
import Login from "../pages/login";
import Dashboard from "../pages/dashboard";

function Routes() {
    return (
        <Switch>
            <Route exact path='/' component={Landing} />
            <Route exact path='/Login' component={Login} />
            <Route exact path='/Dashboard' component={Dashboard} />
        </Switch>
    )
}

export default Routes;
