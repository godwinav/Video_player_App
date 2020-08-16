import React from 'react';




const VideoDetail = ({video}) =>{
    // While the selected Video is still null
    if (!video){
        return(
            <div>Loading...</div>
        )
    }

    //Using iframe tag will display the video on the screen.
    // ES6 syntax to concatenate a javascript object.
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`
// To display a container to wrap around the vdeo info
    return(
        <div>
        
            <div className='ui embed'>
                <iframe title='Video Player' src={videoSrc}></iframe>
            </div>
            <div className='ui segment'>
              <h3 className='ui header'>{video.snippet.title}</h3> 
              <p>{video.snippet.description}</p>
            </div>
        </div>
 )
}


export default VideoDetail