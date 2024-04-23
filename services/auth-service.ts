'user client'
import { Login } from "@/lib/definitions";
import axios from "axios";
export const AuthService = () => {
    const login = async (username: string, password: string ) => {
        const body: Login = {
            username: username,
            password: password,
        };
        try {
            const res: any = await axios.post("api/auth", body);
            setOauth(res.data);
            return true;
        } catch (err) {
            return false;
        }
    };

    const setOauth = (token: string) => {
        if (typeof window !== "undefined") {
            localStorage.setItem("oauth", JSON.stringify(token));
        }
    };

    const getOauth = () => {
        if (typeof window === "undefined") {
            return null;
        }
        const oauth = localStorage.getItem("oauth");
        return oauth ? JSON.parse(oauth) : null;
    };
    const setLogout = () => {
        localStorage.removeItem("oauth");
    };
    return {
        login,
        getOauth,
        setLogout,
        setOauth,
    };
};
