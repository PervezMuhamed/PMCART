 import React, { useState, useEffect, useContext } from 'react'
// import { FaUser } from 'react-icons/fa';
import { authContext } from '../../App';
import { clearAuthError, register } from '../../actions/authactions';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import {LockOpenOutlined} from '@mui/icons-material';
import { Avatar, Container, Button, Box, Typography, TextField } from '@mui/material';

const Register:React.FC = () => {
    
    const {state, dispatch}:any = useContext(authContext);
    console.log(state);
    const {loading, isAuthenticated, error} = state;
    const navigate = useNavigate();
    const [input, setInput] = useState({
        userName:"", email:"", password:""
    });
    const handleInput=(e:any)=>{
        const {name, value} = e.target;
        setInput({...input, [name]:value})
    }
    const handleSubmit = (e:any)=>{ 
        e.preventDefault();
        const {userName, email, password} = input;
        register(dispatch, {userName, email, password});
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
          <Avatar sx={{ m:1, bgcolor: 'secondary.main' }}><LockOpenOutlined/></Avatar>
          <Typography component="h1" variant="h4">Register</Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{mt:1}}>
            <TextField type='text' margin="normal" label="userName" name='userName' onChange = {handleInput} 
              value={input.userName} variant="outlined" fullWidth required autoComplete='userName'
            />
            <TextField type='email' margin="normal" label="email" name='email' onChange = {handleInput} 
              value={input.email} variant="outlined" fullWidth required autoComplete='email'
            />
            <TextField type='password' margin="normal" label="password" name="password" onChange = {handleInput} 
              value={input.password} variant="outlined" fullWidth required autoComplete='password'
            />
            <Button type="submit" variant='contained' sx={{mt:3, mb:3}}
             disabled={loading} fullWidth>SignUp</Button>
          </Box>
        </Box>
      </Container>
    </>
  )
}

export default Register;
