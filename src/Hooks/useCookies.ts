import Cookies from "universal-cookie";

const cookie = new Cookies();
const aYearFromNow = new Date();
const aDayFromNow = new Date();
aDayFromNow.setDate(aDayFromNow.getDate() +1);
aYearFromNow.setFullYear(aYearFromNow.getFullYear() + 1);

function setCookie(name: string, value: string) {
  cookie.set(name, value, { expires: aYearFromNow });
}

function setCookieEmail(name: string, value: number) {
  if(value > 1){
 cookie.set(name, value, { expires: aDayFromNow });
  }
  else{
    cookie.set(name, value);
  }
 
}

function getCookie(name: string) {
  return cookie.get(name);
}

function removeCookie(name: string) {
  cookie.remove(name);
}

export default { setCookie, getCookie, removeCookie,setCookieEmail };
