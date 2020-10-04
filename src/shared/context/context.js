import React from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

export const EventListContext = React.createContext();

function EventListProvider(props) {
  const [eventList, setEventList] = React.useState([]);
  const [storedEventList, setStoredEventList] = useLocalStorage('eventList', '');
  React.useEffect(() => {
    console.log('mount')
    if (storedEventList.length) {
      const parsedEventList = JSON.parse(storedEventList)
      setEventList(parsedEventList);
    }
  }, [])
  
  React.useEffect(() => {
    console.log('eventList changed')
    setStoredEventList(JSON.stringify(eventList))
  }, [eventList])

  const value = React.useMemo(() => [eventList, setEventList], [eventList]);

  return <EventListContext.Provider value={value} {...props} />;
}

export default EventListProvider;
