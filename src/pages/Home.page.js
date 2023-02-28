import { Button } from '@mui/material'
import { useContext } from 'react';
import { UserContext } from '../contexts/user.context';
import Typography from '@material-ui/core/Typography';
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';
import Cards from '../components/Cards';


 
export default function Home() {
 const { logOutUser } = useContext(UserContext);
 
 const logOut = async () => {
   try {
     const loggedOut = await logOutUser();
   
     if (loggedOut) {
       window.location.reload(true);
     }
   } catch (error) {
     alert(error)
   }
 }
 
 return (
   <>
     
     {/* <Typography 
     variant="h1"
     color='primary'
     align='center'
     >
        Welcome to Expengo

     </Typography>

     <Typography 
     variant='h1'
     align='center'
     >
     <Button variant="contained" onClick={logOut}>Logout</Button>

     </Typography> */}

<Typography 
     variant="h3"
     color='secondary'
     align='center'
     >
        Welcome to Expengo

     </Typography>

     <Typography 
     variant='h2'
     align='center'
     >
     <Button variant="contained" onClick={logOut}>Logout</Button>

     </Typography>

     
     <Box sx={{ justifyContent: 'center' }}>
      
      <Typography>Attention</Typography>
      <Slider 
        defaultValue={50}
        valueLabelDisplay="auto" 
        align='center'
        />
    </Box>
     <Box width={500}   >
      <Typography>Stress</Typography>
      <Slider 
        defaultValue={50}
        valueLabelDisplay="auto" 
        />
    </Box>
     <Box width={500}   >
      <Typography>Sleepiness</Typography>
      <Slider 
        defaultValue={50}
        valueLabelDisplay="auto" 
        />
    </Box>
     <Box width={500}   >
      <Typography>Happy</Typography>
      <Slider 
        defaultValue={50}
        valueLabelDisplay="auto" 
        />
    </Box>
    <Cards/>

   </>
 )
}
