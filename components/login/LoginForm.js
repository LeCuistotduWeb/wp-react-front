import { useState } from 'react';
import axios from 'axios';
import Router from 'next/router';
import defaultConfig from '../../config'
import clientApi from "../../api/clientApi";

const LoginForm = (props) => {
  
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')

    const login = (event) => {
        event.preventDefault()
        setMessage('');
        clientApi.login(username, password)
        .then(res => {
            console.log({res})
            const { data } = res;
            localStorage.setItem(defaultConfig.process.env.JWT_AUTH_SECRET_KEY, data.token);
            localStorage.setItem('user', data.user_nicename);
            Router.push('/');
        })
        .catch((err) => {
            console.log({err})
            setMessage('Sorry, that username and password combination is not valid.');
        });
    }

    return (
        <div>
            <h1>Log in</h1>
            <p><strong>Log in to view hidden posts only available to authenticated users.</strong></p>
            <p className="message"><strong>{message}</strong></p>
            <form onSubmit={(e) => login(e)}>
                <input
                className="db w-100 pa3 mv3 br6 ba b--black"
                value={username}
                onChange={e => setUsername(e.target.value)}
                type="text"
                placeholder="Username"
                />
                <input
                className="db w-100 pa3 mv3 br6 ba b--black"
                value={password}
                onChange={e => setPassword(e.target.value)}
                type="password"
                placeholder="Password"
                />
                <input
                className="round-btn invert ba bw1 pv2 ph3"
                type="submit"
                value="Log in"
                />
            </form>
        </div>
    );
}

export default LoginForm;
