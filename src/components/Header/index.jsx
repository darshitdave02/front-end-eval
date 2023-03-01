import React from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';

function Header() {

  const navigate = useNavigate();

  const navigateToEventDetails = () => {
    navigate('/');
  }


  return (
    <div className='header'>
      <div onClick={navigateToEventDetails} className='title'>EVENTIFY</div>
    </div>
  );
}

export default Header;
