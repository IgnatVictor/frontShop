


function LogOut() {
   
   localStorage.removeItem("user");
   localStorage.removeItem("token");
   localStorage.removeItem("id");
   localStorage.removeItem("quantity");
   
   window.location.href = "https://webshopfront.herokuapp.com"
}

export default LogOut;
