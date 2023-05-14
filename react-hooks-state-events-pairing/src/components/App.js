import video from "../data/video.js";
import Video from "./Video.js";

function App() {
  console.log("Here's your data:", video);


  return (
    <div>
      <Video video={video}/>
      {video.u}
    </div>
  );
}

export default App;