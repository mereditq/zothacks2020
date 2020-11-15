import {useState, useEffect} from 'react';
import {useLocation, useHistory} from 'react-router-dom';
import {Stack, Direction} from 'swing';
import SongCard from './SongCard';
import Conclusion from './Conclusion';
import CheckMark from './images/green_check.png';
import XMark from './images/x_cross.png';
import './SwipingPage.css';

let SpotifyWebApi = require('spotify-web-api-js');
let spotifyApi = new SpotifyWebApi();

const SwipingPage = () => {
    let location = useLocation();
    const [artistInformation, setArtistInformation] = useState(null);
    const [songArray, setSongArray] = useState(null);
    const [likedSongs, setLikedSongs] = useState([]);
    let history = useHistory();
    // use the spotify api
    // const [numOfSeenCards, setNumOfSeenCards] = useState(0);
    const stack = Stack();

    stack.on('throwout', (event) => {
        let swipedDirection = (event.throwDirection == Direction.LEFT ? 'left' : 'right');
        // if statement if swipedDirection === 'right'
        if (swipedDirection === 'right'){
            setLikedSongs([...likedSongs, event.target.id]);
            
        }
        songArray.pop();
        setSongArray([...songArray]);
        
        // setNumOfSeenCards(numOfSeenCards + 1);
    });
    stack.on('throwin', (event) => {
        // console.log(event);
        // setNumOfSeenCards(numOfSeenCards - 1);
    });

    // useEffect(()=> {
    //     if(numOfSeenCards >= songArray.length) return;

    // }, [numOfSeenCards]);

    useEffect(() => {
        let firstHashItem = location.hash.split('&')[0];
        //extract access token from the hash (remember to do this)
        let access_token = firstHashItem.split('=')[1];
        console.log(access_token)

        spotifyApi.setAccessToken(access_token);

        spotifyApi.getUserPlaylists().then(
            function (playlistList) {
                
                if (playlistList.items.length === 0){
                    setSongArray('empty');
                    return;
                }
                
                // check playlist length
                // console.log('user playlist list', playlistList);
                // extract a random playlist id and set randomPlaylistID to it
                let possiblePlaylistIndeces = playlistList.items.length;

                let randomPlaylistId = null;
                for (let index = 0; index < possiblePlaylistIndeces; ++index)
                {
                    if (playlistList.items[index].tracks.total > 0)
                    {
                        randomPlaylistId = playlistList.items[index].id;
                        break;
                    }
                }
                
                // let randomPlaylistId;
                if (randomPlaylistId === null){
                // gets top songs
                    randomPlaylistId = "37i9dQZEVXbMDoHDwVN2tF";
                }
                /*else{
                    
                    let selectedIndex = Math.floor(Math.random() * possiblePlaylistIndeces);
                    do{
                        selectedIndex = Math.floor(Math.random() * possiblePlaylistIndeces);
                    } while (playlistList.items[selectedIndex].tracks.total = 0);
                }
                    randomPlaylistId = playlistList.items[selectedIndex].id;*/
                // git init .
                // git add .
                // git commit -m "initial commit"
                // git config --global user.name "ryan yang"
                // git config --global user.email "youremailyoulogginnedtogithubwith@gmail.com"

                spotifyApi.getPlaylist(randomPlaylistId)
                .then(function(playlistData) {
                    // console.log('User playlist', playlistData);
                    //extract random artists and put it into pool for seeding
                    let artistIDSet = new Set();
                    let trackIndex = 0;
                    while (artistIDSet.size <= 5 && trackIndex < playlistData.tracks.items.length){
                        for (let index = 0; index < playlistData.tracks.items[trackIndex].track.artists.length; ++index){
                            artistIDSet.add(playlistData.tracks.items[trackIndex].track.artists[index].id);
                        }
                        ++trackIndex;
                    }
                    // console.log(artistIDSet);

                    //convert set to array
                    let artistIDs = Array.from(artistIDSet);

                    // right here
                    spotifyApi.getRecommendations({
                        min_energy: 0.4,
                        seed_artists: artistIDs.slice(0,4),
                        min_popularity: 50
                    }).then(function(data) {
                        setArtistInformation(data);
                    }).catch(function(err){
                        console.log(err);
                    });
                }, function(err) {
                    console.error(err);
                });
            },
            function (err) {
                console.error(err);
                // print out the error message
                if (err.statusText === 'Unauthorized') {
                    history.push('/')
                }
                // redirect to home
            }
        );
    }, []);

    useEffect(function(){
        if(artistInformation === null || artistInformation === 'empty') return;
        console.log("ARTISTINFORMATION HAS CHANGED", artistInformation);
        setSongArray(artistInformation.tracks);
        // setSongArray([artistInformation.tracks[0]]);
    }, [artistInformation]);


    if(songArray === null) return (<div></div>);
    if(songArray === 'empty') return (<div >yo make a playlist bro</div>);
    return (
        <div className="swiping-page--wrapper">
            <img id = "check-mark" src={CheckMark} alt="green check mark"></img>
            <img id = "x-cross" src={XMark} alt="red x mark"></img>
            <div className="viewport">

				<ul className="stack">
					{songArray.map(function(songInfo){
						return (
                            <SongCard stack={stack} songInfo={songInfo} />
						)
					})}
				</ul>
			</div>
            {songArray?.length === 0 && <Conclusion likedSongs={likedSongs}/>}
        </div>
    )
}
// HOW TO DEPLOY TO GITHUBP AGES
// https://dev.to/yuribenjamin/how-to-deploy-react-app-in-github-pages-2a1f
export default SwipingPage;