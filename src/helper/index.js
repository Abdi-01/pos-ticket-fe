export const checkEmail = (email) => {
    let domain = /\.(com|id|co.id|org|gov|ac.id|my.id|xyz|tv)/;
    if (email.includes('@') && email.match(domain)) {
        return true;
    } else {
        return false;
    }
};

export const API_URL = ""; // API kita


//biar ga panjang di yang register