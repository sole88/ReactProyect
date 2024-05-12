const API = "https://dragonball-api.com/api"


export const get = (path) => {

    return fetch(API + path).then((results) => results.json());
};

