import React, { useEffect, useState } from 'react';
import makeRequest from '../../utils/makeRequest';
import { GET_ALL_EVENTS } from '../../constants/apiEndPoints';
import Card from '../Card';
import './index.css'


function CardContainer() {
  const [allEvents, setAllEvents] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await makeRequest(GET_ALL_EVENTS, {});
        setAllEvents(data);

        
        
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, []);

  

  console.log(allEvents);

 

  if (error) return <div>{error.message}</div>;

  return allEvents ? (
    <div className='event-container'>
        {allEvents.map((item) => (
        <Card key={item.id} event={item} />
      ))}
      
    </div>
  ) : (
    <div>Loading is...</div>
  );
}

export default CardContainer;
