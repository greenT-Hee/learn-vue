import { useContext } from "react";
import AuthContext from "../context/AuthProvider";

// 커스텀 hook
const useAuth = () => {
    return useContext(AuthContext);
}

export default useAuth;