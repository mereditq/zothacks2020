import {useRef, useEffect} from 'react';

const SongCard = ({stack, songInfo}) => {
    const cardRef = useRef(null);

    console.log(songInfo);

    useEffect(() => {
        if(cardRef === null) return;
        let card = stack.createCard(cardRef.current);
        return function(){
            card.destroy();
        }
    }, [cardRef, stack]);

    return (
        <li className="song-card--wrapper" ref={cardRef}>
            <p>{songInfo.name}</p>
            <p>{songInfo.artists[0]}</p>
            <p>{songInfo.external_urls[0]}</p>
            
        </li>
    )
}

export default SongCard;