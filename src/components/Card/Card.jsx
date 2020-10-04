import React from 'react';
import PropTypes from 'prop-types';
// import './cardWrapper.scss';
import { TEAM_PLACEHOLDER, POSTER_PLACEHOLDER } from '../../static/images';
import Link from 'next/link';

const Card = ({
  event: {
    id = '',
    name: ItemName = 'Default Name',
    Video = {},
    Challengers: [
      teamOne = { pictureUrl: TEAM_PLACEHOLDER, name: 'N/A' },
      teamTwo = { pictureUrl: TEAM_PLACEHOLDER, name: 'N/A' },
    ],
    Tags = [],
  } = {},
}) => {
  const posterUrl = Video?.poster && Video?.poster.length ? Video?.poster : POSTER_PLACEHOLDER;
  return (
    <Link
      href={{
        pathname: '/details',
        query: {
          id,
        },
      }}
    >
      <article className="cards_container">
        <div className="cards_element">
          <img src={posterUrl} alt="poster" className="poster_url_image" />
          <h1>{ItemName}</h1>
          <div className="Challengers">
            <div className="team">
              <img src={teamOne?.pictureUrl} alt="challengerOne" className="logoChallengers" />
              <p>{teamOne?.name}</p>
            </div>
            <p id="circle">-</p>
            <div className="team">
              <img src={teamTwo?.pictureUrl} alt="challengerTwo" className="logoChallengers" />
              <p>{teamTwo?.name}</p>
            </div>
          </div>
          <ul className="tags">
            {Tags.map(({ name = 'Default Name Tag' }, i) => (
              <li className="category_list" key={i}>
                <span>
                  #{name}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </article>
    </Link>
  );
};
Card.propTypes = {
  onClick: PropTypes.func,
  event: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    Video: PropTypes.shape({
      poster: PropTypes.string,
    }),
    Challengers: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        pictureUrl: PropTypes.string,
      }),
    ),
  }),
};

export default Card;
