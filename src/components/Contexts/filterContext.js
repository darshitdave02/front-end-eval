import React, { createContext, useState } from 'react';
import { PropTypes } from 'prop-types';

export const filterContext = createContext({});

export const FilterProvider = ({ children }) => {
  const [all, setAll] = useState(true);
  const [registered, setRegistered] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const [seatAvailable, setSeatAvailable] = useState(false);

  return (
    <filterContext.Provider
      value={{
        all,
        setAll,
        registered,
        setRegistered,
        bookmarked,
        setBookmarked,
        seatAvailable,
        setSeatAvailable,
      }}
    >
      {children}
    </filterContext.Provider>
  );
};

// check propTypes
FilterProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
