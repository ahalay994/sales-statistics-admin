export const formatDate = date => {
    date = new Date(date);
    return ("0" + date.getDate()).slice(-2) + "." + ("0" + (date.getMonth() + 1)).slice(-2) + "." + date.getFullYear();
};

export const formattedSearchParams = params => new URLSearchParams(params).toString();

export const getLocalStorage = key => !!localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : null;
export const setLocalStorage = (name, data) => localStorage.setItem(name, JSON.stringify(data));
