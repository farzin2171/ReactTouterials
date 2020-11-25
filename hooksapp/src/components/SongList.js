import React,{useState} from 'react'
import uuid from 'react-uuid'
import NewSongForm from './NewSongForm';

function SongList()  {
    const[songs,setSongs]=useState([
        {title:'almost home',id:1},
        {title:'memory gosip',id:2}]);
    const addSong=(title)=>{
        setSongs([...songs,{title:title,id:uuid()}]);
    }
    return ( 
        <div className="song-list">
            <ul>
                {songs.map(song=>{
                    return( <li key={song.id}>{song.title}</li>)
                })}
            </ul>
            <NewSongForm addSong={addSong}></NewSongForm>
        </div>
     );
}
 
export default SongList;
