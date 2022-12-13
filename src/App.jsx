import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import axios from 'axios';

function App() {
  const [videos, setVideos] = useState([]);
  const [match, setMatch] = useState(0);

  const getVideo = async () => {
    try {
      const res = await axios.get('https://www.scorebat.com/video-api/v3/feed/?token=NDE0NDhfMTY3MDg5MjQ0OF85YWQ1NGVlNjlkNjNkYTI0YTJjYjcwMjQ2YmUyMTFiNmQyZmI4ZmY1');
      setVideos(res.data.response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getVideo();
  }, []);

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <div dangerouslySetInnerHTML={{ __html: videos[0 + match]?.videos[0].embed }} />

      <button onClick={() => setMatch(match + 1)} className="btn">
        Change Match
      </button>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </div>
  );
}

export default App;
