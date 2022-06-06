import React, { Component } from 'react'
import video from '../Videos/Tom & Jerry _ Tom & Jerry in Full Screen _ Classic Cartoon Compilation _ WB Kids.mp4'
import videos from '../assets/JsonData/videoList.json'

class Video extends Component {
  render() {
    return (
      <div className="App">
      <video width="750" height="500" controls >
      <source src={video} type="video/mp4"/>
     </video>
     <p>Tom & Jerry | Tom & Jerry in Full Screen | Classic Cartoon Compilation | WB Kids</p>
      </div>
    );
  }   
}
export default Video;