import { useState } from 'react'
import './App.css'

const videos = [
    {
        thumbnail: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-8.png?raw=true",
        playButton: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(1).png?raw=true",
        title: "Title of the Video",
        views: "12,000,000 views",
        channel: "Channel Name",
        date: "Date",
    },
    {
        thumbnail: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-9.png?raw=true",
        playButton: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(4).png?raw=true",
        title: "Title of the Video",
        views: "12,000,000 views",
        channel: "Channel Name",
        date: "Date",
    },
    {
        thumbnail: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-10.png?raw=true",
        playButton: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(3).png?raw=true",
        title: "Title of the Video",
        views: "12,000,000 views",
        channel: "Channel Name",
        date: "Date",
    },
    {
        thumbnail: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-11.png?raw=true",
        playButton: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(3).png?raw=true",
        title: "Title of the Video",
        views: "12,000,000 views",
        channel: "Channel Name",
        date: "Date",
    },
];


const videos1 = [
    {
        thumbnail: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-4.png?raw=true" ,
        playButton: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(1).png?raw=true",
        title: "Title of the Video",
        views: "12,000,000 views",
        channel: "Channel Name",
        date: "Date",
    },
    {
        thumbnail: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-5.png?raw=true",
        playButton: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(4).png?raw=true",
        title: "Title of the Video",
        views: "12,000,000 views",
        channel: "Channel Name",
        date: "Date",
    },
    {
        thumbnail: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-6.png?raw=true",
        playButton: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(3).png?raw=true",
        title: "Title of the Video",
        views: "12,000,000 views",
        channel: "Channel Name",
        date: "Date",
    },
    {
        thumbnail: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-7.png?raw=true",
        playButton: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(3).png?raw=true",
        title: "Title of the Video",
        views: "12,000,000 views",
        channel: "Channel Name",
        date: "Date",
    },

];


const videos2 = [
    {
        thumbnail: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail.png?raw=true",
        playButton: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(1).png?raw=true",
        title: "Title of the Video",
        views: "12,000,000 views",
        channel: "Channel Name",
        date: "Date",
    },
    {
        thumbnail: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-1.png?raw=true",
        playButton: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(4).png?raw=true",
        title: "Title of the Video",
        views: "12,000,000 views",
        channel: "Channel Name",
        date: "Date",
    },
    {
        thumbnail: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-2.png?raw=true",
        playButton: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(3).png?raw=true",
        title: "Title of the Video",
        views: "12,000,000 views",
        channel: "Channel Name",
        date: "Date",
    },
    {
        thumbnail: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-3.png?raw=true",
        playButton: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(3).png?raw=true",
        title: "Title of the Video",
        views: "12,000,000 views",
        channel: "Channel Name",
        date: "Date",
    },

];


function Videosection() {


    return (
        <>
            <div className="all">




                <div className="main-content">

                    <div className="row">
                        {videos.map((video, index) => (
                            <div className="video" key={index}>
                                <img style={{
                                    width:'370px',

                                }} src={video.thumbnail } alt="Video Thumbnail" />
                                <div className="cpy">
                                    <div className="play-btn">
                                        <img style={
                                            {
                                                width:'45px',
                                                height:'45px',
                                                marginTop:'.5vh'
                                            }
                                        } src={video.playButton} alt="Play Button" />
                                    </div>
                                    <div className="cpy2">
                                        <div className="title">{video.title}</div>
                                        <div className="channel">{video.channel}</div>
                                        {/* <div className="cpy1"> */}
                                            <div className="views">{video.views}</div>
                                            <div className="date">{video.date}</div>
                                        {/* </div> */}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <hr />

                    <div className="row">
                        {videos1.map((video, index) => (
                            <div className="video" key={index}>
                                <img  style={{
                                    width:'370px',
                                    
                                }} src={video.thumbnail} alt="Video Thumbnail" />
                                <div className="play-btn">
                                    <img style={
                                            {
                                                width:'45px',
                                                height:'45px',
                                                marginTop:'.5vh'
                                            }
                                        } src={video.playButton} alt="Play Button" />
                                </div>
                                <div className="title1">{video.title}</div>
                                <div className="channel">{video.channel}</div>
                                {/* <div className='cpy2'> */}
                                <div className="views">{video.views}</div>
                            
                                <div className="date">{video.date}</div>
                                {/* </div> */}
                            </div>
                        ))}
                    </div>

                    <hr />

                    <div className="row">
                        {videos2.map((video, index) => (
                            <div className="video" key={index}>
                                <img  style={{
                                    width:'370px',
                                    
                                }} src={video.thumbnail} alt="Video Thumbnail" />
                                <div className="play-btn">
                                    <img style={
                                            {
                                                width:'45px',
                                                height:'45px',
                                                marginTop:'.5vh'
                                            }
                                        } src={video.playButton} alt="Play Button" />
                                </div>
                                <div className="title2">{video.title}</div>
                                <div className="channel">{video.channel}</div>
                                {/* <div className='cpy3'> */}
                                <div className="views">{video.views}</div>
                              
                                <div className="date">{video.date}</div>
                                {/* </div> */}
                            </div>
                        ))}
                    </div>

                </div>









            </div >
        </>

    )

}

export default Videosection;