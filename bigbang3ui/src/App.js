import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import SignUp from './components/Signup';
import Login from './components/login';
import Homepage from './components/Homepage';


function App() {
  return (
    <div>
      {/* <Router>
        <SignUp />
        <Login></Login>
        
      </Router> */}
      <BrowserRouter>

      <Routes>
       
        <Route path='/homepage' element={<Homepage/>}/>
         <Route path="/" element={<SignUp />} />
         <Route path="/login" element={<Login/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;