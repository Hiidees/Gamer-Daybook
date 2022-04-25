import Cookies from "universal-cookie";

const cookie = new Cookies();

export function setCookie(name: string, value: string) {
  cookie.set(name, value);
}

export function getCookie(name: string) {
  return cookie.get(name);
}

export function removeCookie(name: string) {
  cookie.remove(name);
}
