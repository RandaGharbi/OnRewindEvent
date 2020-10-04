import React, { useContext } from 'react';
import Link from 'next/link';
import './EventDetailsWrapper.scss';
import PropTypes from 'prop-types';
import { EventListContext } from 'shared/context';
import getSelectedEvent from 'helpers/events';
import {
  TEAM_PLACEHOLDER,
  POSTER_PLACEHOLDER,
  VIDEO_URL,
  GO_Back_BUTTON,
} from '../../static/images';

const challengersTeam = [
  {
    name: 'Team Name',
    pictureUrl: TEAM_PLACEHOLDER,
  },
  {
    name: 'Team Name',
    pictureUrl: TEAM_PLACEHOLDER,
  },
];
const Details = (props) => {
  const [eventList = []] = useContext(EventListContext);
  const selectedEvent = getSelectedEvent(eventList, props?.query?.id);
  const challengersData = selectedEvent?.Challengers?.length
    ? selectedEvent?.Challengers
    : challengersTeam;
  return (
    <div className="details_container">
      <div className="details">
      <Link href="/">
        <img src={GO_Back_BUTTON} alt="" className="go_back_home" />
      </Link>
      <div className="details_element">
        <img src={selectedEvent?.Video?.poster || POSTER_PLACEHOLDER} alt="" className="thumnail" />
        <div className="Challengers_details">
          <h3>{selectedEvent.name}</h3>
          <div className="challengers_list">
            {challengersData.map((challenger, i) => (
              <div className="team_details" key={i}>
                <img src={challenger?.pictureUrl} />
                <p>{challenger?.name}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="Tags">
          <ul className="tag_list">
            {selectedEvent?.Tags?.map((events, i) => (
              <li className="category_list" key={i}>
                <span>#{events.name || 'Default Tags'}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="Stream">
          {selectedEvent?.Streams?.map((video, i) => (
            <video controls key={i} className="Video_Stream">
              <source src={video.url || VIDEO_URL} type="video/mp4" />
            </video>
          ))}
          </div>
        </div>
      </div>
    </div>
  );
};
Details.propTypes = {
  event: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    Video: PropTypes.shape({
      poster: PropTypes.string,
    }),
    Challengers: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
      pictureUrl: PropTypes.string,
    })),
  }),
};
export default Details;
