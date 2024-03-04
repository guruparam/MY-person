import { Box, Typography } from "@mui/material";


const Footer = () => {

    return (
        <>
        <Box sx={{
            backgroundColor:'black',
            justifyContent:'center',
            textAlign:'center',
            padding: '10px 0',
        }}>
  
            <Typography sx={{color:'white',fontFamily: '"Anta", math'}} component='h6' variant="h6">
                2024@ Pushpalatha - AHO
            </Typography>
        </Box>
        </>
    )
}

export default Footer;