


function LogOut() {
   
   localStorage.removeItem("user");
   localStorage.removeItem("token");
   localStorage.removeItem("id");
   localStorage.removeItem("quantity");
   
   window.location.href = "http://localhost:3000/"
}

export default LogOut;
