'use client'

import React, { createContext, useContext } from 'react';

const EventPageContext = createContext(null);

export const EventPageProvider = ({ data, children }) => (
  <EventPageContext.Provider value={data}>{children}</EventPageContext.Provider>
);

export const useEventPageContext = () => useContext(EventPageContext);
