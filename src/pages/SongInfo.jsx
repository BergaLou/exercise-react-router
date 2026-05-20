// TODO: Import necessary modules and data
import { useParams } from 'react-router-dom';
import data from '../data/songs.json';

// TODO: Destrcutrue props to receive information coming in from the parent comp
export const SongInfo = () => {
  const { songTitle } = useParams();

  const song = data.songs.find((s) => s.title === songTitle);
  // TODO: Fetch the song title from the URL and find the corresponding song data and add a conditional to display some simple html if there is no song :)
  if (!song) {
    return <h2>your song cannot be found</h2>
  }

  return (
    <>
      <div>
        <h2>{song.title}</h2>
        <p>Artist: {song.artist}</p>
        <p>Album: {song.album}</p>
        <p>Year: {song.year}</p>
      </div>
    </>
  );
}

export default SongInfo;
