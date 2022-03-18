const setCookie = (name, value, exp = 5) => {
  console.log(name, value);
  document.cookie = `${name}=${value};`;
};

export { setCookie };
