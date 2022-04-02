let accessToken;
const clientId = "3d2818344f364241b403d74f2d9e1c05";
const redirectUri = "http://localhost:3000/";

const Spotify = {
  getAccessToken() {
    if (accessToken) return accessToken;
    const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
    const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);

    if (accessTokenMatch && expiresInMatch) {
      accessToken = accessTokenMatch[1];
      const expiresIn = Number(expiresInMatch[1]);
      window.setTimeout(() => (accessToken = ""), expiresIn * 1000);
      window.history.pushState("Access Token", null, "/");
      return accessToken;
    } else {
      const accessUrl = `https://accounts.spotify.com/authorize?
      client_id=${clientId}&response_type=token&scope=playlist-modify-public&
      redirect_uri=${redirectUri}`;
      window.location = accessUrl;
    }
  },
};

export default Spotify;
