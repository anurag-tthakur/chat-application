import Cookies from 'universal-cookie';

const cookies = new Cookies();


export default  {
    setDataInCookies,
    getDataFromCookies,
    removeDataFromCookies,
};

function setDataInCookies(data, key) {
    cookies.set(key, JSON.stringify(data), {path: '/'});
}

function getDataFromCookies(key) {
    return cookies.get(key)

}

function removeDataFromCookies(key) {

    cookies.remove(key, {path: '/'});

}