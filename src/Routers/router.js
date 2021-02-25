import {Route} from 'react-router-dom';
// import SignIn from '../Components/Register/SignIn';
// import SignInDeatils from '../Components/Register/SignInDeatils';
import App from '../Components/HomePage/App.js';
import UserRouter from "./UserRouter";

const ReactRouter = () => {
    return (
        <>
            {/* <Route exact path="/" component={SignIn}/> */}
            <UserRouter exact path="/HomePage" component={App}/>
            {/* <UserRouter path="/SignInDeatils" component={SignInDeatils} /> */}
        </>
    )
}

export default ReactRouter