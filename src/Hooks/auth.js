function getAuth() {
  return JSON.parse(localStorage.getItem("current_user"));
}

function setAuth(user) {
  localStorage.setItem("current_user", JSON.stringify(user));
}
export {getAuth, setAuth};
