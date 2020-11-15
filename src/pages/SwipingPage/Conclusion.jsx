import React, {useEffect} from 'react';
import './Conclusion.css';

const Conclusion = ({likedSongs}) => {

    useEffect(() => {
        console.log(likedSongs);
    }, [likedSongs]);

    return (
        <div style={{position: 'fixed', width: '100vw', height: '100vh', top: '0', left: '0', backgroundColor: 'beige'}}>
            <br />
            <br />
            <br />
            <br />
            <br />
            {likedSongs.map((songid) => {
                return (<div>{songid}</div>)
            })}
        </div>
    )

    // position fixed
    //width 100vw


}

export default Conclusion;
