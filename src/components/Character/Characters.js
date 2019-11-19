import React from 'react';
import PropTypes from 'prop-types';
import CharacterCard from './CharacterCard';

const Characters = ({ characterCards }) => {
  const cardElements = characterCards.map(card => (
    <li key={card.name}>
      <CharacterCard {...card} />
    </li>
  ));

  return (
    <ul>
      {cardElements}
    </ul>
  );
};

Characters.propTypes = {
  characterCards: PropTypes.arrayOf(PropTypes.shape({
    photoUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    profession: PropTypes.string.isRequired
  })).isRequired
};

export default Characters;
