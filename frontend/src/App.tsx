import React, { createContext, useEffect, useReducer } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { authReducer, intialState } from './reducer/authReducer';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Home from './components/Home';
// import Profile from './components/user/profile';
import Register from './components/user/Register';
import Login from './components/user/Login';
import Header from './components/layout/Header';
import { loadUser } from './actions/authactions';
 
export const authContext = createContext({});

const App:React.FC =()=> {

  const [state, dispatch] = useReducer(authReducer, intialState);
  
  useEffect(()=>{
    loadUser(dispatch);
  },[])
  
  return (
    <>
      <authContext.Provider value={{state, dispatch}}>    
        <Router>
          <div className="App">
            <Header/>  
            <div className='container'>
            <ToastContainer theme='dark'/>
              <Routes>
                <Route path='/' element={<Home/>}/>
                {/* <Route path='/profile' element={<Profile/>}/> */}
                <Route path='/register' element={<Register/>}/>
                <Route path='/login' element={<Login/>}/>
              </Routes>
            </div>  
          </div>
        </Router>
      </authContext.Provider>
    </>
  );
}

export default App;
