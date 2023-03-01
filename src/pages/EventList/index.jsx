import React from 'react';
import Card from '../../components/Card';
import CardContainer from '../../components/CardContainer';
import Filter from '../../components/Filter';
import Header from '../../components/Header';
import Footer from '../../Footer';
import './index.css';
function EventDetails() {
  return (
    <div className='event-list'>
      <Filter />
      <CardContainer />


    </div>
  );
}

export default EventDetails;
