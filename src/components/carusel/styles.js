import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  root: {
    flexGrow: 1,
  },
  media: {
    height: 100,
    paddingTop: '100%', // 16:9
  },
  carousell: {
    boxShadow: "10px -5px 10px 10px rgba(1, 1, 1, 1)",
    background: "#f7f7f7",
    width: "97%" ,
    "@media (max-width: 600px)": {
      width: "93%",
      
    }
  },
  image: {
      
      border: "1px solid #ddd",
      borderRadius:" 40px",
      padding: "5px",
      width: "auto",
     
      maxWidth: "140px",
        height: "40%",
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
      
  }
}));