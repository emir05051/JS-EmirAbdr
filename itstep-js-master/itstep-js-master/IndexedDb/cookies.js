// window.document.cookie = "name=Anton";
// window.document.cookie = "name2=Anton2";


console.log(window.document.cookie);

const setCookie = (key, value, maxAge = null) => {
  key = window.encodeURIComponent(key);
  value = window.encodeURIComponent(value);

  let cookie = key + "=" + value;

  if (maxAge) {
    cookie += ";max-age=" + maxAge;
  }

  window.document.cookie = cookie;
}

const deleteCookie = (key) => {
  key = window.encodeURIComponent(key);
  window.document.cookie = key + "=;max-age=0";
}

const getCookies = () => {
  const cookies = window.document.cookie;

  return Object.fromEntries(
    cookies.split(";")
    .map(pair => pair.trimStart())
    .map(pair => {
      const i = pair.indexOf("=");

      let key = pair.slice(0, i);

      try {
        key = window.decodeURIComponent(key);
      } catch (e) {}

      let value = pair.slice(i + 1);
      
      try {
        value = window.decodeURIComponent(value);
      } catch (e) {}

      return [key, value];
    }));
}


console.log(window.document.cookie);

setCookie("new", "cookie!%Афыва");
setCookie("new2", "cookie!%Афыва", 20);
deleteCookie("na");

console.log(getCookies());