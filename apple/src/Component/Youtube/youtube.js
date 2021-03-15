import React,{useState, useEffect } from "react";

import "../Youtube/YoutubeCss.css";

function Youtube() {

    const [youtubeVideos,addVideos]= useState([]);
    
    useEffect(()=>{
      fetch(
          "https://www.googleapis.com/youtube/v3/search?key=AIzaSyDhpYAExO_5YJR1hpxy1nAUneVxKTw-dTY&channelId=UCE_M8A5yxnLfW0KghEeajjw&part=snippet,id&order=date&maxResults=6"
      )

      .then((response) => response.json())
      .then((data)=>{
             const Abdu = data.items;
             addVideos(Abdu); 
          });

    },[youtubeVideos]);
    
    console.log(youtubeVideos);

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

             {youtubeVideos.map((singleVideo)=>{
               let vidId = singleVideo.id.videoId;
               let vidLink =`https://www.youtube.com/watch?v=${vidId}`;

               let videoWrapper = (
               <div key={vidId} className="col-sm-12 col-md-6 col-lg-4">
                 <div className="singleVideoWrapper">
                   <div className="videoThumbnail">
                     <a href={vidLink} target="_blank">
                       <img src={singleVideo.snippet.thumbnail.high.url}/>
                     </a>
                   </div>
                   <div className="videoInfoWrapper">
                     <div className="videoTitle">
                       <a href={vidLink} target="_blank">
                         {singleVideo.snippet.title}
                       </a>
                     </div>
                     <div className="videoDesc">
                       {singleVideo.snippet.description}

                     </div>

                   </div>
                 </div>
                   
               </div>
               );

               return videoWrapper;
             })}              
          </div>
        </div>
      </div>
    );
  }
export default Youtube
