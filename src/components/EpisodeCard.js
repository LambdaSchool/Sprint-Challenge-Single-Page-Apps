import React from "react";
// import EpisodeList from './components/EpisodeList';
import { NavLink } from 'react-router-dom';

function EpisodeCard (props) {
     const {episode} =props;    
    
    return (
        <div className="episode-card">
            {/* <h2>Episodes</h2> */}
            <NavLink to='/episodes'> </NavLink>
        </div>
    )
}

export default EpisodeCard;

// ${episode.id + 1}`}>Next Episode