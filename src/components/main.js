import React from 'react';
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Homepage from './homepage';
import NotFound from './notfound';
import Blog from './blog';
import BlogsPage from './blogspage';
import Login from './login';
import Users from './users';
import Adduser from './add_user';
import Edituser from './edit_user';
import Addarticle from './add_article';
import Articles from './articles';
import EditArticle from './edit_article';


export default class Main extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Homepage} />
                    <Route exact path="/blogs" component={BlogsPage} />
                    <Route exact path="/blog/:id" component={Blog} />
                    <Route exact path="/articles" component={Articles} />
                    <Route exact path="/article/add" component={Addarticle} />
                    <Route exact path="/users" component={Users} />
                    <Route exact path="/users/add" component={Adduser} />
                    <Route exact path="/user/edit/:id" component={Edituser} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/article/edit/:id" component={EditArticle} />
                    <Route path="/reload" component={null} key="reload" />
                    <Route component={NotFound} />
                </Switch>
            </BrowserRouter>
        )
    }
}