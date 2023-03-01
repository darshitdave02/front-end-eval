import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMagnifyingGlass,
  faFilter,
  faChevronUp,
  faCircleDot,
  faCircle,
  faBookmark,
} from '@fortawesome/free-solid-svg-icons';
import { faCircle as faHollowCircle } from '@fortawesome/free-regular-svg-icons';
import React, { useContext } from 'react';
import './index.css';
import { filterContext } from '../Contexts/filterContext';

function Filter() {
  const {
    all,
    setAll,
    registered,
    setRegistered,
    bookmarked,
    setBookmarked,
    seatAvailable,
    setSeatAvailable,
  } = useContext(filterContext);

  const handleAllFilter = () => {
    setAll(true);
    setBookmarked(false);
    setRegistered(false);
    setSeatAvailable(false);
  };

  const handleRegisterFilter = () => {
    setAll(false);
    setBookmarked(false);
    setRegistered(true);
    setSeatAvailable(false);
  };

  const handleBookmarkedFilter = () => {
    setAll(false);
    setBookmarked(true);
    setRegistered(false);
    setSeatAvailable(false);
  };

  const handleSeatsFilter = () => {
    setAll(false);
    setBookmarked(false);
    setRegistered(false);
    setSeatAvailable(true);
  };

  return (
    <div className='filter'>
      <div className='filter-top'>
        <div className='filter-icon'>
          <FontAwesomeIcon icon={faFilter} />
          <div>FILTER</div>
          <FontAwesomeIcon icon={faChevronUp} />
        </div>
        <div className='input'>
          <input className='filter-input' type='text' placeholder='EVENT NAME' />
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </div>
      </div>
      <div className='filter-down'>
        <div className='filter-left'>
          <div onClick={handleAllFilter} className='filter-all'>
            <FontAwesomeIcon icon={all ? faCircleDot : faHollowCircle} />
            <div>ALL</div>
          </div>
          <div onClick={handleRegisterFilter} className='filter-registered'>
            <FontAwesomeIcon icon={registered ? faCircleDot : faHollowCircle} />
            <div>REGISTERED</div>
          </div>
        </div>

        <div className='filter-right'>
          <div onClick={handleBookmarkedFilter} className='bookmarked'>
            BOOKMARKED
            <FontAwesomeIcon icon={bookmarked ? faCircleDot : faHollowCircle} />
          </div>

          <div className='seats' onClick={handleSeatsFilter}>
            SEATS AVAILABLE
            <FontAwesomeIcon icon={seatAvailable ? faCircleDot : faHollowCircle} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filter;
