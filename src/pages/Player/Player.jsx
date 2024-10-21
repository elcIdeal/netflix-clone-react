import React, { useEffect, useState } from 'react';
import './Player.css';
import bck_arrow_icon from '../../componnets/assets/cards/back_arrow_icon.png';  // Исправлено 'componnets' на 'components'
import { useNavigate, useParams } from 'react-router-dom';

const Player = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    typeof: ""
  });

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZGQ5NjBjMGE4OTNjMDcyMmYyMjU5NDZmNDQ1NTAyYSIsIm5iZiI6MTcyOTQ2ODc2MC45Mjg4ODIsInN1YiI6IjY3MTU5N2QzNmRjYTcxZTEwOWQ0YWY5YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XnlWfreZW-AemZ4jHEpSwpMQvgcQjJYXgTkbXsNww_o'
    }
  };

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
      .then(response => response.json())
      .then(response => setApiData(response.results[0]))
      .catch(err => console.error(err));
  }, []);  

  return (
    <div className='player'>
      <img src={bck_arrow_icon} alt="" onClick={()=>{navigate(-2)}}/> 
        <iframe 
        width="90%" 
        height="90%"
          src={`https://www.youtube.com/embed/${apiData.key}`} 
          title="trailer" 
          frameBorder='0' 
          allowFullScreen  >
        </iframe>
    
      <div className="player_info">
        <p>{apiData.published_at.slice(0, 10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  );
};

export default Player;
