import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useState } from "react";
import { appAuth } from "../firebase/config";
import { useAuthContext } from "./useAuthContext";

export const useSignup = () => {
    // 에러 정보 저장
    const [error, setError] = useState(null);
    // 현재 서버와 통신 상태를 저장합니다.
    const [isPending, setIsPending] = useState(false);
    const { dispatch } = useAuthContext();

    const signup = (email, password, displayName) => {
        setError(null); // 아직 에러가 없기 때문
        setIsPending(true);

        createUserWithEmailAndPassword(appAuth, email, password)
        .then((userCredential)=> {
            // 회원가입하면 사용자의 정보가 담긴다.
            const user = userCredential.user;
            console.log(user);

            if(!user) {
                throw new Error('회원가입에 실패했습니다.');
            }

            updateProfile(appAuth.currentUser, { displayName } ) // 현재 로그인한 유저 정보 
            .then(() => {
                dispatch({type: 'login', payload : user})
                setError(null);
                setIsPending(false);
            }).catch ((err) => {
                setError(err.message);
                setIsPending(false);
            })
        }).catch ((err) => {
            setError(err.message);
            setIsPending(false);
        })
    }
    return {error, isPending, signup}
}