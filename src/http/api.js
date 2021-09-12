import $http from "./index.js";

export const login = (loginData) => {
    return $http.get("/admin/login.do", loginData)
}