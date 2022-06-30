import Upvote from "./Upvote";
import Comments from "./Comments";

function App() {
 

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src="https://www.youtube.com/embed/dpw9EHDh2bM"
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <h1>React Today and Tomorrow and 90% Cleaner React With Hooks</h1>
      <p> <Upvote /> Uploaded Oct 26, 2018</p>
      <p><Comments /></p>
    </div>
  );
}

export default App;
