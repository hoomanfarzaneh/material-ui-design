import {Avatar, Button, Container, Divider, ImageList, ImageListItem, Link, makeStyles, Typography} from "@material-ui/core";
import { AvatarGroup } from "@material-ui/lab"; 
import {itemData} from './data'
const useStyles = makeStyles((theme) =>({
  container:{
    paddingTop: theme.spacing(10),
    position: "sticky",
    top:0
  },
  title:{
    fontsize:16,
    fontweight:500,
    color: "#555",
    
  }, 
  link:{
    marginRight: theme.spacing(2),
    color: "#555",
    fontsize:16

  },
  
}))

 const Rightbar = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
        <Typography className={classes.title} gutterBottom>Online Friends</Typography>
        <AvatarGroup max={4} style={{marginBottom:20}}>
          <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" />
          <Avatar alt="Travis Howard" src="https://mui.com/static/images/avatar/2.jpg" />
          <Avatar alt="Cindy Baker" src="https://mui.com/static/images/avatar/3.jpg" />
          <Avatar alt="Agnes Walker" src="https://mui.com/static/images/avatar/4.jpg" />
          <Avatar alt="Trevor Henderson" src="https://mui.com/static/images/avatar/5.jpg" />
      </AvatarGroup>
        <Typography className={classes.title} gutterBottom>Gallery</Typography>
        <ImageList style={{marginBottom:20}} sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
            {itemData.map((item) => (
               <ImageListItem key={item.img}>
                <img
                  src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                  srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                  loading="lazy"
                      />
              </ImageListItem>
            ))}
         </ImageList>
         
         <Typography className={classes.title} gutterBottom>Category</Typography>
         <Link href="#" className={classes.link} variant="body2">Movie</Link>
         <Link href="#" className={classes.link} variant="body2">Sport</Link>
         <Link href="#" className={classes.link} variant="body2">Food</Link>
         <Divider flexItem style={{marginBottom:5}}></Divider>
         <Link href="#" className={classes.link} variant="body2">Music</Link>
         <Link href="#" className={classes.link} variant="body2">Life</Link>
         <Link href="#" className={classes.link} variant="body2">Entertainment</Link>
         
    </Container>
  )
}

export default Rightbar;
