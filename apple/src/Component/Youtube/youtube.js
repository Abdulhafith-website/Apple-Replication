import React,{UseEffect, UseState } from "react";

import "../Youtube/YoutubeCss.css";

function youtube() {

    const [YoutubeVideos,addVideos]= UseState([]);
    
    UseEffect(()=>{
      fetch(
          "https://www.googleapis.com/youtube/v3/search?key=AIzaSyDhpYAExO_5YJR1hpxy1nAUneVxKTw-dTY&channelId=UCE_M8A5yxnLfW0KghEeajjw&part=snippet,id&order=date&maxResults=6"
      )

      .then(
          (response)=> response.json()
          )
      .then((data)=>{
             const Abdu = data.items;
             addVideos(Abdu); 
          });

    },[YoutubeVideos]);
    
    console.log(YoutubeVideos);

    return (
        <div className="allVideosWrapper">
        <div className="container">
          <div className="row h-100 align-items-center justify-content-center text-center">
            <div className="col-12">
              <div className="title-wraper bold video-title-wrapper">
                Latest Videos <br/>
                <br></br>
              </div>
            </div>
              <div className="col-sm-12 col-md-6 col-lg-4">
                <div className="singleVideoWrapper">
                    <div className="videoThumbnail">
                        <a target="_blank">
                            <img/>
                        </a>
                    </div>
                    <div className="videoInfoWrapper">
                        <div className="videoTitle">
                            <a target="_blank">Abebe</a>
                        </div>
                        <div className="videoDesc">Some Description</div>

                    </div>

                </div>

              </div>               
          </div>
        </div>
      </div>
    );
  }
export default youtube
