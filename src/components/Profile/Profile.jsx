import React, { useState } from "react";
import "./profile.css";
import axios from "axios";
import { useEffect } from "react";

function Profile() {

  const [firstName, setFirstName] = useState("");
  const [sunName, setSunName] = useState("");
  const [phoneNumber, setPhonNumber] = useState("");
  const [adress1, setAdress1] = useState("");
  const [adress2, setAdress2] = useState("");
  const [postcode, setPostCode] = useState("");
  const [state, setState] = useState("");
  const [pictureLink, setPictureLink] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const urlModififyProfile =
    "https://webshopelectro.herokuapp.com/api/profile/changeProfile";
  const urlGetUserProfile =
    "https://webshopelectro.herokuapp.com/api/profile/getProfile";
  const urlOrders =
    "https://webshopelectro.herokuapp.com/api/order/getOrders";
  const [profile, setProfile] = useState([]);
  const id = localStorage.getItem("id");

  const updateFirstName = (e) => setFirstName(e.target.value);
  const updateSurName = (e) => setSunName(e.target.value);
  const updatePhoneNumber = (e) => setPhonNumber(e.target.value);
  const updateAdress1 = (e) => setAdress1(e.target.value);
  const updateAdress2 = (e) => setAdress2(e.target.value);
  const updatePostcode = (e) => setPostCode(e.target.value);
  const updateEmail = (e) => setEmail(e.target.value);
  const updateUserName = (e) => setUsername(e.target.value);
  const updateCountry = (e) => setCountry(e.target.value);
  const updateState = (e) => setState(e.target.value);
  const [orders, setOrders] = useState();

  var userId = localStorage.getItem("id");

 
  const getOrders =()=> {
  axios
    .post(urlOrders, {headers: { 'Content-Type': 'application/json'}}, { params: { userId: userId } })
    .then((response) => {
      
      setOrders(response.data);
    }); }

  console.log(orders);

  function changeProfile() {
    axios
      .post(urlModififyProfile, {
        userId: profile.userId,
        username: username,
        sunName: sunName,
        name: firstName,
        adress1: adress1,
        adress2: adress2,
        phoneNumber: phoneNumber,
        state: state,
        country: country,
        email: email,
        postcode: postcode,
        pictureLink: pictureLink,
      })
      .then(() => {
        window.location.href = "https://webshopfront.herokuapp.com/Profile";
      });
  }

  useEffect(() => {
    getUserProfile();
    getOrders();
  }, []);

  const getUserProfile = () => {
    var userId = localStorage.getItem("id");
    axios
      .post(urlGetUserProfile, null, { params: { userId: userId } })
      .then((response) => {
        setProfile(response.data);
      });
  };

  return (
    <div class="container rounded bg-white mt-5 mb-5">
      <div class="row">
        <div class="col-md-3 border-right">
          <div class="d-flex flex-column align-items-center text-center p-3 py-5">
            <img
              src={
                "https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
              }
              class="rounded-circle mt-5"
              width="150px"
            />
            <span class="font-weight-bold">
              {profile.username ? profile.username : "username...."}
            </span>
            <span class="font-weight-bold">
              {profile.email ? profile.email : "email...."}
            </span>
            <span> </span>
          </div>
        </div>
        <div class="col-md-5 border-right">
          <div class="p-3 py-5">
            <div class="d-flex justify-content-between align-items-center mb-3">
              <h4 class="text-right">Profile Settings</h4>
            </div>
            <div class="row mt-2">
              <div class="col-md-6">
                <label class="labels">
                  {profile.name ? profile.name : "FirstName"}
                </label>
                <input
                  onChange={updateFirstName}
                  type="text"
                  class="form-control"
                  placeholder="update first name..."
                  value={firstName}
                />
              </div>
              <div class="col-md-6">
                <label class="labels">
                  {profile.sunName ? profile.sunName : "SurName"}
                </label>
                <input
                  onChange={updateSurName}
                  type="text"
                  class="form-control"
                  placeholder="update surName..."
                  value={sunName}
                />
              </div>
            </div>
            <div class="row mt-3">
              <div class="col-md-12">
                <label class="labels">
                  {profile.phoneNumber ? profile.phoneNumber : "phoneNumber"}
                </label>
                <input
                  onChange={updatePhoneNumber}
                  type="text"
                  class="form-control"
                  placeholder="update phone number..."
                  value={phoneNumber}
                />
              </div>
              <div class="col-md-12">
                <label class="labels">
                  {profile.adress1 ? profile.adress1 : "Address Line 1"}
                </label>
                <input
                  onChange={updateAdress1}
                  type="text"
                  class="form-control"
                  placeholder="Update address line 1..."
                  value={adress1}
                />
              </div>
              <div class="col-md-12">
                <label class="labels">
                  {profile.adress2 ? profile.adress2 : "Address Line 2"}
                </label>
                <input
                  onChange={updateAdress2}
                  type="text"
                  class="form-control"
                  placeholder="Update address line 2..."
                  value={adress2}
                />
              </div>
              <div class="col-md-12">
                <label class="labels">
                  {profile.postcode ? profile.postcode : "Postcode"}
                </label>
                <input
                  onChange={updatePostcode}
                  type="text"
                  class="form-control"
                  placeholder="Update postcode..."
                  value={postcode}
                />
              </div>
              <div class="col-md-12">
                <label class="labels">
                  {profile.username ? profile.username : "Username"}
                </label>
                <input
                  onChange={updateUserName}
                  type="text"
                  class="form-control"
                  placeholder="Update username..."
                  value={username}
                />
              </div>
              <div class="col-md-12">
                <label class="labels">
                  {profile.email ? profile.email : "Email"}{" "}
                </label>
                <input
                  onChange={updateEmail}
                  type="text"
                  class="form-control"
                  placeholder="Update email... "
                  value={email}
                />
              </div>
            </div>
            <div class="row mt-3">
              <div class="col-md-6">
                <label class="labels">
                  {profile.country ? profile.country : "Country"}{" "}
                </label>
                <input
                  onChange={updateCountry}
                  type="text"
                  class="form-control"
                  placeholder="Update country..."
                  value={country}
                />
              </div>
              <div class="col-md-6">
                <label class="labels">
                  {profile.state ? profile.state : "State/Region"}
                </label>
                <input
                  onChange={updateState}
                  type="text"
                  class="form-control"
                  value={state}
                  placeholder="Update state..."
                />
              </div>
            </div>
            <div class="mt-5 text-center">
              <button
                onClick={changeProfile}
                class="btn btn-primary profile-button"
                type="button"
              >
                Save Profile
              </button>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="p-3 py-5">
            <div class="d-flex justify-content-between align-items-center experience">
              <span>My orders</span>
              <span class="border px-3 p-1 add-experience"></span>
            </div>
            <br />
            {orders.map((order) => (
                <div class="col-md-12">
                <label class="labels">Order ID: {order.order_id}</label> <br/>
             
              </div>
            ))}
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
