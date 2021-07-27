import React from "react";
import asyncComponent from "./../utils/asyncComponent";
import {Switch, Route} from "react-router-dom";
import {Layout} from "antd";

const {Content} = Layout;

const Pages = () => {

    return (
        <Layout className="layout">
            <Content>
                <Switch>
                    <Route path={`/`} exact component={asyncComponent(() => import('./Home'))}/>
                </Switch>
            </Content>
        </Layout>
    )
}

export default Pages;