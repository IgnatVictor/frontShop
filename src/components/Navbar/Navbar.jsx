import React, { useState, useEffect } from "react";
import {  AppBar,  Toolbar,  IconButton,  Badge,  MenuItem,  Menu,Button,  Typography,  Input, ListItemSecondaryAction,} from "@material-ui/core";
import axios from "axios";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import {LoginIcon} from '@mui/icons-material/Login';
import { CallMissedSharp, ShoppingCart } from "@material-ui/icons";
import Modal from "@mui/material/Modal";
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import Alert from "@mui/material/Alert";
import logo from "../../assets/logo.png";
import useStyles from "./styles";
import verifyIfTokenIsExpired from "../Services/UserCheck"
import LogOut from "../Services/LogOut"
import {Link} from 'react-router-dom'
import {LogoutIcon} from '@mui/icons-material/Logout';
import { useHistory } from "react-router-dom"
import { atom, useAtom } from "jotai";
import { LOGGEDIN, MODALL } from "../atom/Atom";



function Navbar(props) {
  const [logged, setLogged] = useAtom(LOGGEDIN);
  const {onAdd,cartItems} = props;
  const classes = useStyles();
  const [open, setOpen] = useAtom(MODALL);
  const [openRegistrer, setOpenRegister] = useState(false);
  
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRetype, setPasswordRetype] =  useState("")
  const [alert, setAlert] = useState();
 
  
  const url = "http://localhost:8080/api/auth/signin";
  const urlRegister= "http://localhost:8080/api/auth/signup";
  let [count2, setCount2] =useState(0);
  const roles= ["ROLE_USER"];
  

  let count = () => {
    count2 =0
    cartItems?.forEach(element => {
      count2 = count2+ element.qty;
      
    })
  }

  useEffect(()=> {
    count();
    setCount2(count2)
  },[cartItems])


  
  const updateUsername = (e) => setUsername(e.target.value);
  const updatePassword = (e) => setPassword(e.target.value);
  const updateEMail= (e)=> setEmail(e.target.value);
  const updatePasswordRetype = (e) => setPasswordRetype(e.target.value);
  const handleCloseModal = () => setOpen(false);
  const handleOpenModal = () => setOpen(true);
  const handleCloseModalRegister = () => setOpenRegister(false);
  const handleOpenModalRegister = () => setOpenRegister(true);
  
  const register= ()=> {
    console.log(updatePassword)
    if(password === passwordRetype) {
      axios
        .post(urlRegister,{username,email,password,roles     })
        .then(()=> {
          handleCloseModalRegister();
          
        })
    } else {
      setAlert(true);
    }
  }

  const login = () => {
    axios
      .post(url, {
        username: username,
        password: password,
      })
      .then((response) => {
        localStorage.setItem("user", JSON.stringify(response.data.username));
        localStorage.setItem("token",JSON.stringify(response.data.accessToken));
        localStorage.setItem("id",JSON.stringify(response.data.id));
        setLogged(true);
        handleCloseModal();
        
        
      });

    if (localStorage.getItem("user") === "") {
      setAlert(true);
    }
  };

  const style = {
    position: "absolute",
    top: "30%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "80%",
    maxWidth: "400px",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography component={Link} to="/" variant="h6" className={classes.title}>
            <img
              src={logo}
              alt="Electronic.js"
              height="75px"
              className={classes.image}
            />
            Electric Gaming
          </Typography>
         
          <div className={classes.grow} />

          <div className={classes.button}>
            <IconButton  component={Link} to="/cart" aria-label="Show cart items" color="inherit">
              <Badge badgeContent={count2} color="secondary"></Badge>
              <ShoppingCart />
            </IconButton>
          </div>

          { !verifyIfTokenIsExpired() && <div onClick={handleOpenModalRegister} className={classes.loginButton}><AppRegistrationIcon /></div>
            
          }
          {!verifyIfTokenIsExpired() && <div onClick={handleOpenModal} className={classes.loginButton}> 
            <LoginIcon />
          </div> }
          { verifyIfTokenIsExpired() && <div className={classes.logoutButton}>
            <LogoutIcon onClick = {LogOut}/>
          </div> }
          <Modal
            open={openRegistrer}
            onClose={() => {handleCloseModalRegister(); setAlert(false)}}
            aria-labelledby="modal-modalLogIn"
            aria-describedby="modal-descriere"
          >
            <Box sx={style}>
              <Box
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                component="form"
                sx={{ "&.MuiTextField-root": { m: 1, width: "25ch" } }}
                noValidate
                autocomplete="off"
              >
                <Input
                  onChange={updateUsername}
                  required
                  value={username}
                  id="username"
                  placeholder="Enter your username"
                  size="small"
                />
                  <Input
                  onChange={updateEMail}
                  required
                  value={email}
                  id="username"
                  placeholder="Enter your email"
                  size="small"
                />
                <Input
                  onChange={updatePassword}
                  required
                  value={password}
                  id="password"
                  label="Password"
                  type="password"
                  placeholder="Enter your password"
                  size="small"
                />
                   <Input
                  onChange={updatePasswordRetype}
                  required
                  value={passwordRetype}
                  id="password"
                  label="Password"
                  type="password"
                  placeholder="Retype your password"
                  size="small"
                />
            
                {alert ? (
                  <Alert variant="filled" severity="error">
                    Passwords don't match! 
                  </Alert>
                ) : (
                  ""
                )}
              </Box>
              <Stack
                style={{
                  display: "flex",
                  alignItems: "center",
                  margin: "30px",
                  justifyContent: "center",
                }}
                spacing={2}
                direction="row"
              >
                <Button onClick={register} type="submit">
                  Register
                </Button>
                <Button onClick={()=>{handleCloseModalRegister();setAlert(false)}} variant="text" color="error">
                  Cancel
                </Button>
              </Stack>
            </Box>
          </Modal>

          <Modal
            open={open}
            onClose={() => {handleCloseModal(); setAlert(false)}}
            aria-labelledby="modal-modalLogIn"
            aria-describedby="modal-descriere"
          >
            <Box sx={style}>
              <Box
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                component="form"
                sx={{ "&.MuiTextField-root": { m: 1, width: "25ch" } }}
                noValidate
                autocomplete="off"
              >
                <Input
                  onChange={updateUsername}
                  required
                  value={username}
                  id="username"
                  placeholder="Enter your username"
                  size="small"
                />
                <Input
                  onChange={updatePassword}
                  required
                  value={password}
                  id="password"
                  label="Password"
                  type="password"
                  placeholder="Enter your password"
                  size="small"
                />
                {alert ? (
                  <Alert variant="filled" severity="error">
                    This is an error alert — check it out!
                  </Alert>
                ) : (
                  ""
                )}
              </Box>
              <Stack
                style={{
                  display: "flex",
                  alignItems: "center",
                  margin: "30px",
                  justifyContent: "center",
                }}
                spacing={2}
                direction="row"
              >
                <Button onClick={login} type="submit">
                  Log In
                </Button>
                <Button onClick={()=>{handleCloseModal();setAlert(false)}} variant="text" color="error">
                  Cancel
                </Button>
              </Stack>
            </Box>
          </Modal>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;
