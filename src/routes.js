import React from 'react';
import { Switch, Route} from 'react-router-dom';

import Cadastro from './cadastro';
import Login from './login';

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/cadastro" exact component={Cadastro} />
        </Switch>
    )
}