import React from 'react';
import EventDetails from 'screens/EventDetails';

const Details = (props) => <EventDetails {...props} />;
Details.getInitialProps = ({ query = {} }) => ({ query });
export default Details;
