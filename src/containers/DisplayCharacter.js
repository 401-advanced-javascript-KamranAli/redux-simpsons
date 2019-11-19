import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Characters from '../components/Character/Characters';
import { fetchCharacter } from '../services/avatarApi';
import { setCharacter } from '../actions/actions';
import { getCharacter } from '../selectors/characterSelector';

export default function DisplayCharacter() {
  const character = useSelector(getCharacter);
  const dispatch = useDispatch();

  const fetchCharacters = () => fetchCharacter().then(character => dispatch(setCharacter(character)));

  useEffect(() => {
    fetchCharacters();
  }, []);

  return (
    <>
      <Characters character={character} />
    </>
  );
}

