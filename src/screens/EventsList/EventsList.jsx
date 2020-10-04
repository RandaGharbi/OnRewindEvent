import React, { useEffect, useContext } from 'react';
import Card from 'components/Card';
import { useQuery } from '@apollo/react-hooks';
import './EventListWrapper.scss';

import EVENTS_LIST_QUERY from 'graphql/query/getAllEvents';
import { EventListContext } from 'shared/context';

const EventsListScreen = () => {
  const { data } = useQuery(EVENTS_LIST_QUERY, {
    variables: { limit: 10, tags: 'vod' },
  });
  const [eventList, setEventList] = useContext(EventListContext);

  useEffect(() => {
    setEventList(data?.allEvents?.items || []);
  }, [data]);
  if (!eventList.length) return null;
  return (
    <section className="sectionClassName">
      {eventList?.map((event, index) => (
        <Card key={index} event={event} />
      ))}
    </section>
  );
};

export default EventsListScreen;
