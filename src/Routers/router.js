import React from 'react';
import {Route} from 'react-router-dom';
import Footer from "../Components/shared/Footer";
import HomePage from "../Components/homePage/HomePage";
import Wine from "../Components/wine/Wine";
import AdminHomePage from "../Components/admin/AdminHomePage";
import Login from "../Components/login/Login";
import UserRouter from "./UserRouter";
import AdminRouter from "./AdminRouter";

const ReactRouter = () => {
    return (
        <>
            <Route exact path='/' component={Login}/>
            <UserRouter path='/dashboard' component={HomePage}/>
            <UserRouter path='/result-wine' component={TemplateList}/>
            <UserRouter path='/description' component={Task}/>
            <UserRouter path='/favorites' component={Task}/>
            <UserRouter path='/cart' component={Task}/>

            <AdminRouter exact path='/admin' component={AdminHomePage}/>

            <Footer/>
        </>
    )
}

export default ReactRouter