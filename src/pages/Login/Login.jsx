import './Login.css';

const Login = () => {
    function login(){
		let client_id = 'fae10458f53f4ffcb9f1bce00289ee6a'; // Your client id
        let redirect_uri = window.location.href + 'app/'; // Your redirect uri
        
		let scope = 'user-read-private user-read-email playlist-read-private playlist-read-collaborative';

		let url = `https://accounts.spotify.com/authorize?response_type=token&client_id=${client_id}&redirect_uri=${redirect_uri}&scope=${encodeURIComponent(scope)}`
		window.location = url;
	}
    return (
        <div className="login--wrapper">
            <div className="login-card">

                <h1 className="landing-page-title">
                    Listen & Swipe
                </h1>

                <p id="pitch">
                    Ever loved a song so much you wanted to swipe right on it? Here's an app for you! 
                    With [insert name here], you just need a spotify account and we'll recommend you songs,
                    based on your recent playlist history! Swipe the card right if you like the song, and left if you don't.
                    We'll compile the liked songs into a playlist for you on spotify if you'd like!
                    (Remeber to click on the album cover to get a link to the song).
                </p>
                
                <button onClick={login}>Login to Spotify</button>
                
            </div>
        </div>
    )
}

export default Login;