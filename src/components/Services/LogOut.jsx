


function LogOut() {
   
   localStorage.removeItem("user");
   localStorage.removeItem("token");
   localStorage.removeItem("id");
   localStorage.removeItem("quantity");
   
   window.location.href = "https://webshopelectro.herokuapp.com/api/products?page=0&limit=8"
}

export default LogOut;
