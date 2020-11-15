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
                    Spotify Tinder
                </h1>

                <p>
                    Ever loved a song so much you wanted to swipe right on it? lmao. fluff description text hereee.
                </p>
                
                <button onClick={login}>Login to Spotify</button>
                
            </div>
        </div>
    )
}

export default Login;