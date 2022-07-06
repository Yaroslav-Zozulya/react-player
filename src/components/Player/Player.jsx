import { Component } from 'react';
import { PlayerWrapper, StyledPlayer } from './Player.styled';

import PropTypes from 'prop-types';
import s from './Player.module.css';

class Player extends Component {
  render() {
    const { url } = this.props;

    return (
      <>
        {url && (
          <PlayerWrapper>
            <StyledPlayer url={url} controls />
          </PlayerWrapper>
        )}
      </>
    );
  }
}

export default Player;
