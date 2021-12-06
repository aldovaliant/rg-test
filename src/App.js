import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Routes, Route } from "react-router-dom";
import InputForm from './components/Form/Form';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';

const appStyle = {
  height: '500px',
  display: 'flex'
};

function App() {

  return (
    <div className='App'>
      <Navbar />
      <div style={appStyle}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="form" element={<InputForm />} />
        </Routes>
      </div>

    </div>
  );
}

export default App;
