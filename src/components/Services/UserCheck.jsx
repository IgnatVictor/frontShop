import jwtDecode from "jwt-decode";

export default function verifyIfTokenIsExpired() {
  const user = JSON.parse(localStorage.getItem("user"));
  const token = JSON.parse(localStorage.getItem("token"));
  
  return user && token && Date.now() >= jwtDecode(token).exp;
}
