import s from './VideoList.module.css';
import PropTypes from 'prop-types';

const VideoList = ({ videos, onSelect }) => {
  return (
    <ul>
      {videos.map(video => (
        <li key={video.id}>
          <a onClick={() => onSelect(video.link)} href="#">
            {video.link}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default VideoList;
