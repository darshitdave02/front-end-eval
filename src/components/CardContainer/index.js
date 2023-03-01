import React, { useContext, useEffect, useState } from 'react';
import makeRequest from '../../utils/makeRequest';
import { GET_ALL_EVENTS } from '../../constants/apiEndPoints';
import Card from '../Card';
import './index.css';
import { filterContext } from '../Contexts/filterContext';

function CardContainer() {
  const [allEvents, setAllEvents] = useState(null);
  const [error, setError] = useState(null);

  const {all, registered,  bookmarked, seatAvailable } = useContext(filterContext)

 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await makeRequest(GET_ALL_EVENTS, {});
        const sortedEvents = data.sort(function (a, b) {
          var keyA = new Date(a.updated_at),
            keyB = new Date(b.updated_at);
          // Compare the 2 dates
          if (keyA < keyB) return -1;
          if (keyA > keyB) return 1;
          return 0;
        });

        setAllEvents(sortedEvents);
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
      {all && allEvents.map((item) => <Card key={item.id} event={item} />)}

      {bookmarked && allEvents
        ?.filter((item) => item.isBookmarked === true)
        ?.map((item) => {
          return <Card key={item.id} event={item} />;
        })}

    {registered && allEvents
        ?.filter((item) => item.isRegistered === true)
        ?.map((item) => {
          return <Card key={item.id} event={item} />;
        })}

{seatAvailable && allEvents
        ?.filter((item) => item.areSeatsAvailable === true)
        ?.map((item) => {
          return <Card key={item.id} event={item} />;
        })}


    </div>
  ) : (
    <div>Loading is...</div>
  );
}

export default CardContainer;
