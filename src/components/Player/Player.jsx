import { Component } from 'react';
import { PlayerWrapper, StyledPlayer } from './Player.styled';

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
