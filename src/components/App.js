import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import youtubeAPI from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";


export default () => {
  const [Videos, setVideos] = useState([]);
  const [SelectedVideo, setSelectedVideo] = useState(null);

  const onTermSubmit = async (term) => {
    const response = await youtubeAPI.get("/search", {
      params: {
        q: term,
      },
    });
    setVideos(response.data.items);
    setSelectedVideo(response.data.items[0]);
  };

  useEffect(() => {
    onTermSubmit("tensorflow");
  }, []);

  return (
    <div className="ui container">
      <SearchBar onTermSubmit={onTermSubmit}/>
      <div className="ui grid" style={{marginTop:"30px"}}>
        <div className="row">
          <div className="eleven wide column">
            <VideoDetail video={SelectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList
              videos={Videos}
              onVideoSelect={setSelectedVideo}
            />
          </div>
        </div>
      </div>
    </div>
  );
}



