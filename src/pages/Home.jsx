import { Link } from 'react-router-dom';
import data from '../data/songs.json';

// TODO: Import necessary modules and data
const Home = () => {
  // TODO: Implement logic to display the list of songs
const songs = data.songs ;

  return (
    <>
      <div>
        <h1>Rolling Stones 500 Greatest Songs of all Time</h1>
        {/* TODO: Display the list of songs with links */}
        {songs.map((song) => (
        <div key={song.title}>
          <Link to={`/song/${song.title}`}>
          {song.title}
          </Link>
        </div>
        ))}
      </div>
    </>
  );
}

export default Home;
