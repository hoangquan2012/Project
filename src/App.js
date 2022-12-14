import React, { useEffect, useState } from 'react';
import Header from "./component/Homepage/Header";
import NavDropdown from 'react-bootstrap/NavDropdown';
import Body from "./component/Homepage/Body";
import Info from "./component/Homepage/Info";
import Carlist from "./component/Homepage/Carlist";
import { NavLink, Outlet } from 'react-router-dom';
function App() {
  const carlines = [
    {
      "id": 1,
      "name": "Sedan",
    },
    {
      "id": 2,
      "name": "Suv",
    },
    {
      "id": 3,
      "name": "Couples",
    },
    {
      "id": 4,
      "name": "Maybach",
    },
    {
      "id": 5,
      "name": "Sport",
    },
    {
      "id": 6,
      "name": "Convetible",
    },
  ]
  const [sedan, setSedan] = useState([])

  useEffect(() => {
    try {
      fetch("/sedan")
        .then((res) => res.json())
        .then(setSedan);
    } catch (error) {
      console.log("eror")
    }
  }, [])
  const [suv, setSuv] = useState([])

  useEffect(() => {
    try {
      fetch("/suv")
        .then((res) => res.json())
        .then(setSuv);
    } catch (error) {
      console.log("eror")
    }
  }, [])
  
  const [couples, setCouples] = useState([])
  useEffect(() => {
    try {
      fetch("/couples")
        .then((res) => res.json())
        .then(setCouples);
    } catch (error) {
      console.log("eror")
    }
  }, [])
  const carlist = carlines.map(carline => (
    <NavDropdown.Item>{carline.name}</NavDropdown.Item>
  ))


  return (
    <div style={{ backgroundColor: 'black' }}>
      <Header carlist={carlist} />
      <Body />
      <div className='pb-5'>
        <Info />
      </div>
      <div className='bg-light'>
        <div className='pt-5 pb-5' style={
          {
            textAlign: 'center',
            fontSize: '34px',
            fontWeight: '500',
            textTransform: 'uppercase'
          }}>Các dòng xe Mercedes-Benz</div>
        <Carlist />
        <div>
          <Outlet context={{ sedan , suv , couples }} />
          
        </div>
      </div>
    </ div>

  );
}

export default App;
