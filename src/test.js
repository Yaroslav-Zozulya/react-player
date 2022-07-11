import { useState } from 'react';
import { VideoList } from './VideoList';
import { Player } from './Player/Player';
import videos from './data/videos';

export const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <div style={{ padding: 24 }}>
      <h1>Selected video: {selectedVideo}</h1>
      <VideoList videos={videos} onSelect={setSelectedVideo} />
      <Player url={selectedVideo} />
    </div>
  );
};
