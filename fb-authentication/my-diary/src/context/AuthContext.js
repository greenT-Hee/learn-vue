import { createContext, useReducer } from 'react'; 

// context 객첵를 생성
const AuthContext = createContext();

// 유저 정보 관리
const authReducer = (state, action) => {
    switch(action.type) {
        case 'login' :
            return {...state, user : action.payload}
        case 'logout' :
            return {...state, user : null}
        default:
            return state
    }
}


// context를 구독할 컴포넌의 묶음 범위를 설정합니다. 
const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, {
        user: null
    })
    
    console.log("user State : ", state);
    return (
        <AuthContext.Provider value={{ ...state, dispatch }}>
            { children }
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthContextProvider }