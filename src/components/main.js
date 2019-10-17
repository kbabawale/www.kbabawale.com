import React from 'react';
import { Route, BrowserRouter, Switch, Redirect } from "react-router-dom";
import Homepage from './homepage';
import NotFound from './notfound';
import Blog from './blog';
import Blogs from './blogs';

export default class Main extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Homepage} />
                    <Route exact path="/blogs" component={Blogs} />
                    <Route exact path="/blog/:blog" component={Blog} />
                    <Route path="/reload" component={null} key="reload" />
                    <Route component={NotFound} />
                </Switch>
            </BrowserRouter>
        )
    }
}