import { onAuthStateChanged } from 'firebase/auth';
import { createContext, useEffect, useReducer } from 'react'; 
import { appAuth } from '../firebase/config';

// context 객첵를 생성
const AuthContext = createContext();

// 유저 정보 관리
const authReducer = (state, action) => {
    switch(action.type) {
        case 'login' :
            return {...state, user : action.payload}
        case 'logout' :
            return {...state, user : null}
        case 'isAuthReady' :
            return {...state, user :  action.payload, isAuthReady: true}
        default:
            return state
    }
}
// context를 구독할 컴포넌의 묶음 범위를 설정합니다. 
const AuthContextProvider = ({ children }) => {
    useEffect(() => {
        // 로그인 후 새로고침하게 되면 로그인 api 통신하기도 전에 컴포넌트가 불러와져서 logout된 것처럼 보임
        // 이런 현상을 방지하는 fb 지원 함수가 onAuthStateChange임
        const unsubscribe = onAuthStateChanged(appAuth, (user) => {
            dispatch({type : 'isAuthReady', payload: user})
        })
        return unsubscribe;
    }, [])

    const [state, dispatch] = useReducer(authReducer, {
        user: null, 
        isAuthReady: false,
    })
    
    console.log("user State : ", state);
    return (
        <AuthContext.Provider value={{ ...state, dispatch }}>
            { children }
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthContextProvider }