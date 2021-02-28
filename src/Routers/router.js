import React from 'react';
import {Route} from 'react-router-dom';
import HomePage from "../Components/homePage/HomePage";
import Wine from "../Components/wine/WineCard";
import AdminHomePage from "../Components/admin/Admin";
import Login from "../Components/login/Login";
// import UserRouter from "./UserRouter";
// import AdminRouter from "./AdminRouter";
import Footer from '../Components/global/Footer' ;
import Search from '../Components/search/Search';
import Favorite from '../Components/client/Favorite';
import Manufacturer from '../Components/manufacturer/Manufacturer';
import Admin from '../Components/admin/Admin'
import LoginDeatails from '../Components/login/LoginDeatails'
// import { Favorite } from '@material-ui/icons';

const ReactRouter = () => {
    return (
        <>  
           
           <Route exact path='/' component={Login}/>
           <Route  path='/search' component={Search}/>
           <Route  path='/favorite' component={Favorite}/>
           <Route  path='/admin' component={Admin}/>
           {/* <Route  path='/manufacture-sell' component={Manufacturer}/> */}

           {/* <Route  path='/dashboard' component={ad}/> */}
           {/* <Route path='/admin' component={Login}/> */}
            {/* <UserRouter path='/dashboard' component={HomePage}/> */}
            {/* <UserRouter path='/result-wine' component={TemplateList}/> */}
            {/* <UserRouter path='/description' component={Task}/>
            <UserRouter path='/favorites' component={Task}/>
            <UserRouter path='/cart' component={Task}/>
            */}

            {/* <AdminRouter exact path='/admin' component={AdminHomePage}/> */}

            <Footer/>
        </>
    )
}

export default ReactRouter