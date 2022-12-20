import styles from './Signup.module.css';
import { useState } from 'react';
import { useSignup } from '../../hooks/useSignup';

export default function Signup () {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [displayName, setDisplayname] = useState(""); //fb랑 약속된 이름임
    const { error, isPending, signup} = useSignup();

    const handleData = (e) => {
        if(e.target.type === 'email') {
            setEmail(e.target.value);
        } else if (e.target.type === 'password') {
            setPassword(e.target.value);
        } else if (e.target.type === 'text' ) {
            setDisplayname(e.target.value)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email, password);
        signup(email, password, displayName)
    }

    return (
        <form className={styles.singup_form} onSubmit={handleSubmit}>
            <fieldset>
                <legend>회원가입</legend>
                <label htmlFor="myEmail">Email</label>
                <input type="email" id="myEmail" required value={email} onChange={handleData}/>

                <label htmlFor="myPassword">password</label>
                <input type="password" id="myPassword" required value={password} onChange={handleData}/>

                <label htmlFor="myNickname">password</label>
                <input type="text" id="myNickname" required value={displayName} onChange={handleData}/>

                <button type="submit" className={styles.btn}>회원가입</button>
            </fieldset>
        </form>
    )
}