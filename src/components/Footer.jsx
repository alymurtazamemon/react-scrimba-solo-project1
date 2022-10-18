import facbookLogo from "../assets/facebook.png";
import twitterLogo from "../assets/twitter.png";
import githubLogo from "../assets/github.png";
import instaLogo from "../assets/insta.png";

function Footer() {
  return (
    <footer>
      <img src={twitterLogo}></img>
      <img src={facbookLogo}></img>
      <img src={githubLogo}></img>
      <img src={instaLogo}></img>
    </footer>
  );
}

export default Footer;
