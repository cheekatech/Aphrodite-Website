import "./NewsLetter.css"
import newsLetterBackground from "../assets/pageImages/newsLetter-background.jpg";

function NewsLetter() {
  return (
    <div className="newsLetter" style={{backgroundImage: `url(${newsLetterBackground})`}}>
      <div>
        <h2>Sign in with your email:</h2>
        <p>Get updates on our latest arrivals and special offers!</p>
      </div>
      <div>
        <input type="email" placeholder="Enter your email address" />
      <button>Subscribe</button>
      </div>
    </div>
  )
}
export default NewsLetter