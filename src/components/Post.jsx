import { Button, Card, CardActionArea, CardContent, CardMedia, makeStyles, Typography} from "@material-ui/core";
const useStyles = makeStyles((theme) =>({
    media:{
        height: 250,
        [theme.breakpoints.down("sm")]:{
            height:150
        }
    },
    card:{
        marginBottom: theme.spacing(5)
    },
}))

 const Post = ({title, img}) => {
  const classes = useStyles();
  return (
        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia 
                    className={classes.media}
                    image= {img}
                    title= {title}
                />
            </CardActionArea>
            <CardContent>
                <Typography gutterBottom variant="h5">My First Post</Typography>
                <Typography variant="body2" align="justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo odit earum quod pariatur nostrum eaque commodi facere et aliquam aperiam alias,
                 tenetur doloremque! Itaque, beatae nostrum. Mollitia perspiciatis neque nihil!
                 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae magnam sint laborum, repellat dolorum aliquid voluptatem eius sapiente. Quod iure commodi repudiandae.
                  Dicta quos aliquam ullam recusandae quae in voluptatem?</Typography>
            </CardContent>
            <Button size="small" color= "primary">Share</Button>
            <Button size="small" color= "primary">Learn more</Button>

        </Card>
  )
}
export default Post;
