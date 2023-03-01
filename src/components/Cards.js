import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import catImage from '../images/catImage.jpg';
import dogImage from '../images/dogImage.jpg';
import horseImage from '../images/horseImage.jpeg';
import sheepImage from '../images/sheepImage.jpg';
import  Grid from '@material-ui/core/Grid';
import  Paper from '@material-ui/core/Paper';

export default function Cards() { 
  return (
    <div>


<Grid container
    direction="row"
 //   justifyContent="center"
  //  alignItem="center" 
    >
      
   
            <Grid item md ={3} sm={6} xs={12}>   
                        
            
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image= {catImage}
        components = "img"  
        title="Cat"
       />
      <CardContent >
        <Typography gutterBottom variant="h5"
         component="div"
         color="secondary"
         >
          Cat
        </Typography>
        <Typography variant="body2" color="text.secondary">
        The cat is a domestic species of small carnivorous mammal. It is the only domesticated species in the family Felidae and is commonly referred ...
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    

            </Grid>        
        
            <Grid item md ={3} sm={6} xs={12}>                
                   
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image= {dogImage}
        components = "img"  
        title="Dog"
       />
      <CardContent >
        <Typography gutterBottom variant="h5"
         component="div"
         color="secondary"
         >
          Dog
        </Typography>
        <Typography variant="body2" color="text.secondary">
        The dog is a domesticated descendant of the wolf. Also called the domestic dog, it is derived from the extinct Pleistocene wolf, and the modern wolf is the ...        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>

            </Grid>       
        
            <Grid item md ={3} sm={6} xs={12}>                
                  
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image= {horseImage}
        components = "img"  
        title="Horse"
       />
      <CardContent >
        <Typography gutterBottom variant="h5"
         component="div"
         color="secondary"
         >
          Horse
        </Typography>
        <Typography variant="body2" color="text.secondary">
        The horse is a domesticated, one-toed, hoofed mammal. It belongs to the taxonomic family Equidae and is one of two extant subspecies ...        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>


            </Grid>

            <Grid item md ={3} sm={6} xs={12}>                
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image= {sheepImage}
        components = "img"  
        title="Sheep"
       />
      <CardContent >
        <Typography gutterBottom variant="h5"
         component="div"
         color="secondary"
         >
          Sheep
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Sheep or domestic sheep are domesticated, ruminant mammals typically kept as livestock. Although the term sheep can apply to other species in ...</Typography>      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
                                   
            </Grid>       
             </Grid>
    
    </div>
  )
}
