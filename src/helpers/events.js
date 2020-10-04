const getSelectedEvent = (events, seletedEventId) => {
  const selectedEvent = events.reduce((acc, item) => {
    if (item?.id === seletedEventId) {
      acc = item;
    }
    return acc;
  }, {});
  return selectedEvent;
};

export default getSelectedEvent;
