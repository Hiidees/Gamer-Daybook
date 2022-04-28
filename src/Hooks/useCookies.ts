import Cookies from "universal-cookie";

const cookie = new Cookies();

function setCookie(name: string, value: string) {
  cookie.set(name, value, {expires: new Date(9999, 1, 1)});
}

function getCookie(name: string) {
  return cookie.get(name);
}

function removeCookie(name: string) {
  cookie.remove(name);
}

export default { setCookie, getCookie, removeCookie };
