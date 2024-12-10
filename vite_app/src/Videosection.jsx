import { useEffect, useState } from 'react';
import './App.css';

function Main() {
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchVideos = async () => {
            try {
                const response = await fetch('https://reactjs-js1212.onrender.com/videos');  
                if (!response.ok) {
                    throw new Error('Failed to fetch videos');
                }
                const data = await response.json();
                setVideos(data);  
                setLoading(false);
            } catch (err) {
                setError(err.message);  
                setLoading(false);
            }
        };

        fetchVideos();
    }, []);

    if (loading) {
        return <div>Loading videos...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="all">
           

            

            <div className="main-content">
                <div className="row">
                    {videos.map((video, index) => (
                        <div className="video" key={index}>
                            <div className="photo-container">
                                <img src={video.thumbnail} alt="Video Thumbnail" onError={(e) => e.target.src = 'https://via.placeholder.com/150'} />
                            </div>
                            <div className="cpy">
                                <div className="title">{video.title}</div>
                                <div className="channel">{video.channel}</div>
                                <div className="cpy3">
                                    <div className="views">{video.views}</div>
                                    <div className="date">{video.date}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Main;





// import { useEffect, useState } from 'react';
// import './App.css';

// function Main() {
//     const [videos, setVideos] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const fetchVideos = async () => {
//             const API_KEY = 'AIzaSyDT2Z7X9wZNdXiAm5GUGX_lwAIp06UEZcA'; // Replace with your API key
//             const searchQuery = 'travel vlog'; // Replace with your desired search query
//             const maxResults = 10;

//             try {
//                 const response = await fetch(
//                     `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(searchQuery)}&maxResults=${maxResults}&key=${API_KEY}`
//                 );

//                 if (!response.ok) {
//                     throw new Error('Failed to fetch videos');
//                 }

//                 const data = await response.json();

//                 // Transform API response to match your existing format
//                 const transformedVideos = data.items.map((item) => ({
//                     title: item.snippet.title,
//                     channel: item.snippet.channelTitle,
//                     views: 'N/A', // YouTube API v3 does not provide views in the search endpoint; fetch details via `videos.list` if needed
//                     date: new Date(item.snippet.publishedAt).toLocaleDateString(),
//                     thumbnail: item.snippet.thumbnails.medium.url,
//                 }));

//                 setVideos(transformedVideos);
//                 setLoading(false);
//             } catch (err) {
//                 setError(err.message);
//                 setLoading(false);
//             }
//         };

//         fetchVideos();
//     }, []);

//     if (loading) {
//         return <div>Loading videos...</div>;
//     }

//     if (error) {
//         return <div>Error: {error}</div>;
//     }

//     return (
//         <div className="all">
//             <div className="main-content">
//                 <div className="row">
//                     {videos.map((video, index) => (
//                         <div className="video" key={index}>
//                             <div className="photo-container">
//                                 <img 
//                                     src={video.thumbnail} 
//                                     alt="Video Thumbnail" 
//                                     onError={(e) => e.target.src = 'https://via.placeholder.com/150'} 
//                                 />
//                             </div>
//                             <div className="cpy">
//                                 <div className="title">{video.title}</div>
//                                 <div className="channel">{video.channel}</div>
//                                 <div className="cpy3">
//                                     <div className="views">{video.views}</div>
//                                     <div className="date">{video.date}</div>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Main;
