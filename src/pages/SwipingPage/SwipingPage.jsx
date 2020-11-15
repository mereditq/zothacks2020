import {useState, useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import {Stack} from 'swing';
import SongCard from './SongCard';
import './SwipingPage.css';

let SpotifyWebApi = require('spotify-web-api-js');
let spotifyApi = new SpotifyWebApi();

const SwipingPage = () => {
    let location = useLocation();
    const [artistInformation, setArtistInformation] = useState(null);
    const [songArray, setSongArray] = useState(null);
    // use the spotify api
    // const [numOfSeenCards, setNumOfSeenCards] = useState(0);
    const stack = Stack();

    stack.on('throwout', (event) => {
        // console.log(event);
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
        //extract access token frmo the hash (remember to do this)
        let access_token = firstHashItem.split('=')[1];

        spotifyApi.setAccessToken(access_token);

        spotifyApi.getUserPlaylists().then(
            function (playlistList) {
                //if (playlistList.items.length == 0){
                //  setSongArray('empty');
                //  return;
                //}
                // check playlist length
                // setSongArray('empty')
                // console.log('user playlist list', playlistList);
                // extract a random playlist id and set randomPlaylistID to it
                let possiblePlaylistIndeces = playlistList.items.length;

                let allPlaylistsEmpty = true;
                for (let i = 0; i < possiblePlaylistIndeces; i++)
                {
                    if (playlistList.items[i].tracks.total > 0)
                    {
                        allPlaylistsEmpty = false;
                        break;
                    }
                }
                
                let randomPlaylistId;
                if (allPlaylistsEmpty){
                // gets top songs
                    randomPlaylistId = "37i9dQZEVXbMDoHDwVN2tF";
                }
                else{
                    
                    let selectedIndex = Math.floor(Math.random() * possiblePlaylistIndeces);
                    do{
                        selectedIndex = Math.floor(Math.random() * possiblePlaylistIndeces);
                    } while (playlistList.items[selectedIndex].tracks.total = 0);
                }
                    randomPlaylistId = playlistList.items[selectedIndex].id;


                //-------------------------------------------
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
                        seed_artists: artistIDs,
                        min_popularity: 50
                    }).then(function(data) {
                        setArtistInformation(data);
                    });
                }, function(err) {
                    console.error(err);
                });
            },
            function (err) {
                console.error(err);
                // print out the error message
                // if (err === 'token-expired') // redirect to home
            }
        );
    }, []);

    useEffect(function(){
        if(artistInformation === null || artistInformation === 'empty') return;
        console.log("ARTISTINFORMATION HAS CHANGED", artistInformation);
        setSongArray(artistInformation.tracks);
    }, [artistInformation]);

    if(songArray === null) return (<div></div>);
    if(songArray === 'empty') return (<div>yo make a playlist bro</div>);
    return (
        <div className="swiping-page--wrapper">
            <img source="/images/green_check.png" alt="green check mark"></img>
            <img source="/images/x_cross.png" alt ="red x mark"></img>
            <div id="viewport">

				<ul className="stack">
					{songArray.map(function(songInfo){
						return (
                            <SongCard stack={stack} songInfo={songInfo} />
						)
					})}
				</ul>
			</div>
        </div>
    )
}

export default SwipingPage;