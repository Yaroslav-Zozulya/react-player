export const VideoList = ({ videos, onSelect }) => {
  return (
    <ul>
      {videos.map(video => (
        <li key={video.id}>
          <span onClick={() => onSelect(video.link)}>{video.link}</span>
        </li>
      ))}
    </ul>
  );
};
