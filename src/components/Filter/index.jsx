import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMagnifyingGlass,
  faFilter,
  faChevronUp,
  faCircleDot,
  faCircle,
} from '@fortawesome/free-solid-svg-icons';
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
            <FontAwesomeIcon icon={faCircle} />
            <div>REGISTERED</div>
          </div>
        </div>

        <div className='filter-right'>
          <div className='bookmarked'>
            BOOKMARKED
            <FontAwesomeIcon icon={faCircle} />
          </div>
          <div className='seats'>
            SEATS AVAILABLE
            <FontAwesomeIcon icon={faCircle} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filter;
