export const TOKEN_KEY = "@token";
export const ROLE = "@role";
export const USER_ID = "@user_id" 

export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;

export const getToken = () => localStorage.getItem(TOKEN_KEY);

export const getCurrentUserRole = () => {
    return JSON.parse(localStorage.getItem(ROLE));
};

export const getCurrentUserId = () => localStorage.getItem(USER_ID);

export const login = (token, role, id) => {
    localStorage.setItem(TOKEN_KEY, token);
    localStorage.setItem(ROLE, role);
    localStorage.setItem(USER_ID, id);
};

export const logout = () => {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(ROLE);
    localStorage.removeItem(USER_ID);
};
