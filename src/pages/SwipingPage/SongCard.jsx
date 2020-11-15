import {useRef, useEffect} from 'react';
import './SongCard.css';

const SongCard = ({stack, songInfo}) => {
    const cardRef = useRef(null);

    
    let imgURL = songInfo.album.images[0].url;
    let artists = songInfo.artists[0].name;
    console.log(songInfo);

    useEffect(() => {
        if(cardRef === null) return;
        let card = stack.createCard(cardRef.current);
        return function(){
            card.destroy();
        }
    }, [cardRef, stack]);

    return (
        <li className="song-card--wrapper" ref={cardRef} id={songInfo.id}>
            <p id="id-name">{songInfo.name}</p>
            
            <a rel="noopener noreferrer" href={songInfo.external_urls.spotify} target="_blank"><img id="album-covers" src={imgURL} /> </a>
            <p class = "artists" id="artists-title"> artist(s) </p>
            <p class = "artists" id="artists">{artists}</p>
            <p class = "album" id="album-title">album</p> 
            <p class = "album" id="album-name"> {songInfo.album.name}</p>
            
            
 
        </li>
    )
}

/* 
<p>{songInfo.artists}</p> 
<p>{songInfo.external_urls}</p> 
*/

export default SongCard;