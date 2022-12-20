import styles from './Login.module.css';
import { useState } from 'react';

export default function Login () {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleData = (e) => {
        if(e.target.type === 'email') {
            setEmail(e.target.value);
        } else if (e.target.type === 'password') {
            setPassword(e.target.value);
        }
    }

    const hnadleSubmit = (e) => {
        e.preventDefault();
        console.log(email, password);
    }

    return (
        <form className={styles.login_form} onSubmit={hnadleSubmit}>
            <fieldset>
                <legend>로그인</legend>
                <label htmlFor="myEmail">Email</label>
                <input type="email" id="myEmail" required value={email} onChange={handleData}/>
                <label htmlFor="myPassword">password</label>
                <input type="password" id="myPassword" required value={password} onChange={handleData}/>

                <button type="submit" className={styles.btn}>로그인</button>
            </fieldset>
        </form>
    )
}