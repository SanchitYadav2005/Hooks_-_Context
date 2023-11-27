import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';

const SongList = () => {
    const songsArray = [
        {title:"Likhe jo khat tujhe", id: uuidv4() },
        {title:"Teri yadon me", id: uuidv4() }
    ]
    const [songs , setSongs] = useState(songsArray);
    const addSongBtn = () => {
        setSongs([...songs, {title: "New song added", id: uuidv4()}])
    }
    return (  
        <div className="song-list">
            <ul>
                {songs.map(song=>(
                    <li>{song.title}</li>
                ))}
            </ul>
            <button onClick={addSongBtn}>Add song</button>
        </div>
    );
}
 
export default SongList;