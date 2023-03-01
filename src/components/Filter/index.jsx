import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMagnifyingGlass,
  faFilter,
  faChevronUp,
  faCircleDot,
  faCircle,
  faBookmark
  
} from '@fortawesome/free-solid-svg-icons';
import {
  
  faCircle as faHollowCircle,
  
} from '@fortawesome/free-regular-svg-icons';
import React from 'react';
import './index.css';

function Filter() {
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
          <div className='filter-all'>
            <FontAwesomeIcon icon={faCircleDot} />
            <div>ALL</div>
          </div>
          <div className='filter-registered'>
            <FontAwesomeIcon icon={faHollowCircle} />
            <div>REGISTERED</div>
          </div>
        </div>

        <div className='filter-right'>
          <div className='bookmarked'>
            BOOKMARKED
            <FontAwesomeIcon icon={faHollowCircle} />
          </div>
          <div className='seats'>
            SEATS AVAILABLE
            <FontAwesomeIcon icon={faHollowCircle} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filter;
