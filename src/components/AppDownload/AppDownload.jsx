import React from 'react';
import './AppDownload.css'
import { assets } from '../../assets/assets';

const AppDownload = () => {
  return (
    <div className="app-download" id='app-download'>
        <p>Deserunt ullamco deserunt magna. <br/> Tomato App</p>
        <div className="app-download-platform">
            <img src={assets.app_store} alt='app store'/>
            <img src={assets.play_store} alt='play store'/>
        </div>
    </div>
  );
}

export default AppDownload;
