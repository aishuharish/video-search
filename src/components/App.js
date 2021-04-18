import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import useVideo from "../hooks/useVideo";

const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, search] = useVideo("cartoon");

  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);

  return (
    <div className="ui container">
      <SearchBar onFormSubmit={search} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList onVideoSelected={setSelectedVideo} videos={videos} />
          </div>
        </div>
      </div>
    </div>
  );
};

// class App extends React.Component {
//   state = { videos: [], selectedVideo: null };

//   componentDidMount() {
//     this.onTermSubmit("cartoon");
//   }

//   onTermSubmit = async (term) => {
//     const response = await youtube.get("/search", { params: { q: term } });
//     this.setState({
//       videos: response.data.items,
//       selectedVideo: response.data.items[0],
//     });
//   };

//   onVideoSelected = (video) => {
//     this.setState({ selectedVideo: video });
//     //console.log("from the App", video, this.state.selectedVideo);
//   };

//   render() {
//     return (
//       <div className="ui container">
//         <SearchBar onFormSubmit={this.onTermSubmit} />
//         <div className="ui grid">
//           <div className="ui row">
//             <div className="eleven wide column">
//               <VideoDetail video={this.state.selectedVideo} />
//             </div>
//             <div className="five wide column">
//               <VideoList
//                 onVideoSelected={this.onVideoSelected}
//                 videos={this.state.videos}
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
export default App;
