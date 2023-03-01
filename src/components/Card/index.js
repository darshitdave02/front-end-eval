import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleCheck,
  faCircleXmark,
  faBookBookmark
} from '@fortawesome/free-solid-svg-icons';

import data from '../../mockData/data';
import './index.css';
import PropTypes from 'prop-types'

function Card(props) {
  return (
    <div className='card'>
      <img src={props.event.imgUrl} alt='event_img' />
      <div className='card-details'>
        <div className='card-title'>{props.event.name.toUpperCase()}</div>
        <div className='description'>{props.event.description}</div>
       
      </div>
      <div className='loctime'>
      <div className='venue'>VENUE: {props.event.venue}</div>
        <div className='date'>DATE: {props.event.datetime}</div>
      </div>
      <div className='meta'>
        <div className='register'>
          <FontAwesomeIcon icon={faCircleCheck} />
          <div>
            REGISTERED
          </div>
          
        </div>
        <div className='bookmark'>
          
          <FontAwesomeIcon icon={faBookBookmark} />
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
    description: PropTypes.string
  })
}
