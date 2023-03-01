import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Card from '../../components/Card';
import Filter from '../../components/Filter';
import { GET_ONE_EVENT } from '../../constants/apiEndPoints';
import makeRequest from '../../utils/makeRequest';
import './index.css';
function EventDetails() {
  const [oneCard, setOneCard] = useState();
  const [error, setError] = useState(null);

  const params = useParams();
  console.log(params);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await makeRequest(GET_ONE_EVENT(params.id), {});
        setOneCard(data);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, []);

  if (error) return <div>{error.message}</div>;

  return oneCard ? (
    <div className='event-details'>
      <Filter />

      <Card className='one-card' key={oneCard.id} event={oneCard} />
    </div>
  ) : (
    <div>Loading is...</div>
  );
}

export default EventDetails;
