import React, { useState, useEffect, useContext } from 'react';
// import { FaSignInAlt } from 'react-icons/fa';
import { authContext } from '../../App';
import { toast } from 'react-toastify';
import { clearAuthError, login } from '../../actions/authactions';
import { Link, useNavigate } from 'react-router-dom';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {Button, Box, Container, TextField, Typography, Avatar, Grid} from "@mui/material";

const Login =()=> {
  const {state, dispatch}:any = useContext(authContext);
  const navigate = useNavigate();
  const  {loading, error, isAuthenticated} = state;
  const [input, setInput] = useState({email:"", password:""});
  
  const handleInput=(e:any)=>{
    const {name, value} = e.target;
    setInput({...input, [name]:value});
  }

  const handleSubmit=(e:any)=>{
    e.preventDefault();
    const {email, password} = input;
    login(dispatch, {email, password});

    // axios.post("http://localhost:8000/api/login", {email,password})
    // .then((res)=>{
    //     console.log(res);
    // })
  }
   
  useEffect(() => { 
    if(isAuthenticated) {
      navigate('/');
      return
    }
    if(error) {      
        console.log(error);    
      toast(error,{
        position: toast.POSITION.BOTTOM_CENTER,
        type:error,
        onOpen:()=>{clearAuthError(dispatch)}
      })
      return
    }
  }, [error, dispatch, navigate, isAuthenticated]);

  return (
   <>
      <Container component="main" maxWidth="xs">
        <Box sx={{
          marginTop:8,
          display:'flex',
          flexDirection:"column",
          alignItems:"center",
          // bgcolor: "#ff0fff"
        }}>
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}><LockOutlinedIcon /></Avatar>
          <Typography component="h1" variant="h4">Login</Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{mt:1}}>
            <TextField type='email' margin="normal" label="email" name='email' onChange = {handleInput} 
              value={input.email} variant="outlined" fullWidth required autoComplete='email'
            />
            <TextField type='password' margin="normal" label="password" name="password" onChange = {handleInput} 
              value={input.password} variant="outlined" fullWidth required autoComplete='password'
            />
            <Button type="submit" variant='contained' sx={{mt:3, mb:3}}
            disabled={loading} fullWidth>Login</Button>
            <Grid container>
              <Grid item xs>
                <Link to="/forgotPassword" >forgotPassword?</Link>
              </Grid>
              <Grid item >
                <Link to="/register">{"Don't have an account? Sign Up"}</Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </>
  )
}

export default Login;