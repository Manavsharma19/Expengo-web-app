import { Button } from '@mui/material'
import { useContext } from 'react';
import { UserContext } from '../contexts/user.context';
import Typography from '@material-ui/core/Typography';

 
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
     
     <Typography 
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

     </Typography>

   </>
 )
}
