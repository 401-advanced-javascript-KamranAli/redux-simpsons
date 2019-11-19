import React from 'react';
import PropTypes from 'prop-types';

const CharacterCard = ({ character }) => (
  <figure>
    <img src={character.photoUrl} />
    <p>{character.name}</p>
    <p>{character.profession}</p>
  </figure>
);

CharacterCard.propTypes = {
  character: PropTypes.shape({
    photoUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    profession: PropTypes.string.isRequired
  }).isRequired
};

export default CharacterCard;
