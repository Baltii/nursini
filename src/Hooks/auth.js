function getAuth() {
  return JSON.parse(localStorage.getItem("current_user"));
}
export default getAuth;
