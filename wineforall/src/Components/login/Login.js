import React from 'react';
import './Login.css'
import {GoogleLogin} from 'react-google-login'
import Header from "../shared/Header";
import {useHistory} from "react-router-dom";
import {useCookies} from "react-cookie";

const Login = (props) => {
    let history = useHistory();
    const [cookies, setCookie] = useCookies(['user']);

    const googleSuccess = async (response) => {
        const body = {token: response.tokenId}
        fetch(`https://task--it.herokuapp.com/authLogin`, {
            method: 'POST',
            credentials: 'include',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(body),
        })
            .then(response => response.json())
            .then(result => {
                const cookiePromise = new Promise((resolve, reject) => {
                    setCookie('user', result)
                    resolve()
                })
                cookiePromise.then(() => {
                    if (result)
                        if (result.admin)
                            history.push('/admin')
                        else history.push('/dashboard')
                })
            })
    }

    const googleFailure = (response) => {
        console.log(response);
    }

    return (
        <div className={'login-page'}>
            <Header/>
            <div className={'login-circle'}/>
            <div className={'login-content'}>
                <div className={'login-btn'}>
                    <GoogleLogin
                        clientId='554171649210-i97q2kqu31t4hg021qdpmjn9kbobor0h.apps.googleusercontent.com'
                        onSuccess={googleSuccess}
                        onFailure={googleFailure}
                    />
                </div>
                <div className={'login-text'}>
                    <p>Choose a wine by personal preference</p>
                    <p>Start by filtering initial preferences for a perfect choice</p>
                    <p>Learn about the wine and its notes</p>
                    <p>Purchase the perfect wine to complete the experience</p>
                </div>
            </div>
        </div>
    )
}

export default Login