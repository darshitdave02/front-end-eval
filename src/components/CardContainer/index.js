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
        const sortedEvents = data.sort(function(a, b) {
            var keyA = new Date(a.updated_at),
              keyB = new Date(b.updated_at);
            // Compare the 2 dates
            if (keyA < keyB) return -1;
            if (keyA > keyB) return 1;
            return 0;
          });
        
          setAllEvents(sortedEvents)

       
        
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
