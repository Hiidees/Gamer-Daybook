import Cookies from "universal-cookie";

const cookie = new Cookies();
const aYearFromNow = new Date();
aYearFromNow.setFullYear(aYearFromNow.getFullYear() + 1);

function setCookie(name: string, value: string) {
  cookie.set(name, value, { expires: aYearFromNow });
}

function getCookie(name: string) {
  return cookie.get(name);
}

function removeCookie(name: string) {
  cookie.remove(name);
}

export default { setCookie, getCookie, removeCookie };
