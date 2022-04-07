import "./LoginModal.css"

const LoginModal = (props) => {

    return (
        <div className="Login-Modal" style={{display:props.displayLoginModal}}>
            <button className="Login-Button" onClick={props.onLogin}> Login with Spotify </button>
        </div>
    )
}

export default LoginModal;