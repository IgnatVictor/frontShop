import { Hidden } from '@material-ui/core';
import { makeStyles, fade } from '@material-ui/core/styles';

const drawerWidth = 0;

export default makeStyles((theme) => ({
  appBar: {
    boxShadow: 'none',
    position: "fixed",
    borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  title: {
    flexGrow: 1,
    alignItems: 'center',
    display: 'flex',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'none',
      color: "rgba(252,100,0,1)",
    },
    fontFamily: "Impact",
    fontSize:"40px",
    color: "rgba(252,100,0,1)",
    "@media (max-width: 600px)": {
      fontSize: "20px",
      
    }
  },
  



  modal1 : {
    borderRadius: "10%",
    border:"1px solid rgba(92,39,251,1)",
    opacity: "95%",
    "& input": {
        marginTop: "15px",
        "@media (max-width: 600px)": {
          marginTop: "10px",
          
        }
    },
  },

  image: {
    marginRight: '10px',
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  grow: {
    flexGrow: 1,
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  loginButton: {
    display: 'flex',
    alignItems: 'center',
    margin: '0 10px 0 10px',
    justifyContent: 'center',
    "&:hover": {
      color: 'red'
    }
  },
 


  logoutButton: {
    display: 'flex',
    alignItems: 'center',
    margin: '0 10px 0 10px',
    justifyContent: 'center',

    "&:hover": {
      color: 'red'
    }
  },
  modal: {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  p: 4,
  },
  container: {
    display: 'flex',
    flexDirection: 'column'
  },
  buttonCancel : {
    backgroundColor: "rgb(211,47,47)",
    color:"white",
  },
  buttonRegister : {
    backgroundColor: "rgb(25,118,210)",
    color:"white",
  },
  modalTitle : {
    textAlign: "center",
    fontSize:"30px",
    fontFamily:"impact"
  }
}));