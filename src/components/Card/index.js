import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faCircleXmark, faBookmark } from '@fortawesome/free-solid-svg-icons';
import { faBookmark as faHollowBookmark } from '@fortawesome/free-regular-svg-icons';

import data from '../../mockData/data';
import './index.css';
import PropTypes from 'prop-types';
import { UPDATE_EVENT } from '../../constants/apiEndPoints';
import makeRequest from '../../utils/makeRequest';
import { useNavigate } from 'react-router-dom';

function Card(props) {
  const [isBookmark, setBooknmark] = useState(props.event.isBookmarked);
  const [isRegister, setIsRegister] = useState(props.event.isRegistered);

  const navigate = useNavigate();

  const handleBookMarkClick = async () => {
    try {
      await makeRequest(UPDATE_EVENT(props.event.id), {
        data: {
          isBookmarked: !isBookmark,
        },
      });

      setBooknmark(!isBookmark);
    } catch (e) {
      // Handle ToDo
    }
  };

  const handleRegisterClick = async () => {
    try {
      await makeRequest(UPDATE_EVENT(props.event.id), {
        data: {
          isRegistered: !isRegister,
        },
      });

      setIsRegister(!isRegister);
    } catch (e) {
      // Handle ToDo
    }
  };

  const navigateToCardDetails = () => {
    navigate(`/${props.event.id}`)
  }

  return (
    <div onClick={navigateToCardDetails} className='card'>
      <img src={props.event.imgUrl} alt='event_img' />
      <div className='card-details'>
        <div className='card-title'>{props.event.name.toUpperCase()}</div>
        <div className='description'>{props.event.description}</div>
      </div>
      <div className='loctime'>
        <div className='venue'>VENUE: {props.event.venue}</div>
        <div className='date'>DATE: {props.event.datetime}</div>
      </div>
      <div onClick={handleRegisterClick} className='meta'>
        <div className={isRegister ? 'filter-reg-col-red' : 'filter-reg-col-yellow'}>
          <FontAwesomeIcon icon={isRegister ? faCircleCheck : faCircleXmark} />
          <div>{isRegister ? 'REGISTERED' : 'NO SEATS AVAILABLE'}</div>
        </div>
        <div className='bookmark'>
          <FontAwesomeIcon
            onClick={handleBookMarkClick}
            icon={isBookmark ? faBookmark : faHollowBookmark}
          />
        </div>
      </div>
    </div>
  );
}

export default Card;

Card.propTypes = {
  event: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    venue: PropTypes.string,
    datetime: PropTypes.string,
    imgUrl: PropTypes.string,
    areSeatsAvailable: PropTypes.bool,
    isRegistered: PropTypes.bool,
    isBookmarked: PropTypes.bool,
    description: PropTypes.string,
  }),
};
