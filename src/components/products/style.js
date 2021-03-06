import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  root: {
    width: '100%',
    "@media (max-width: 600px)": {
      width: "100%",
      
    }
    
  },
  item: {
    overflow: "hidden",
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp:"2",
    
    
  },

  linkProduct : {
    textDecoration: "none",
  },
  

  item2: {
    overflow: "hidden",
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp:"1",
    
  },
  media: {
    height: 100,
    paddingTop: '100%', // 16:9
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  cardContent: {
    
    display: 'flex',
    justifyContent: 'space-between',
    
  },
}));