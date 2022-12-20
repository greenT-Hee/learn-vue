import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";


export const useAuthContext = () => {
    const context = useContext(AuthContext);

    return context; //state, dispatch 함수가 포함됨
}

