//https://www.c-sharpcorner.com/article/how-to-deploy-react-application-on-github-pages/
//https://mui.com/material-ui/material-icons/
import './App.css';
import React, { Routes, Route, useNavigate, Button } from "react";
import background from './assets/desktop_small.mp4'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import AppleIcon from '@mui/icons-material/Apple';
import SignalCellularAlt2BarIcon from '@mui/icons-material/SignalCellularAlt2Bar';
import Battery80Icon from '@mui/icons-material/Battery80';
import WifiIcon from '@mui/icons-material/Wifi';
import PdfImage from './assets/pdf.png'
import SysImage from './assets/sysinfo.png'
import FolderImage from './assets/folder.png'
import TextImage from './assets/text.png'
import GameImage from './assets/game.png'
import aboutme from './assets/aboutme.png'
import sysinfo from './assets/sysinfo_sc.png'
import GalleryImage from './assets/gallery.png'
import WebImage from './assets/weblog.png'
import HazelImage from './assets/hazel.png'
import Draggable from 'react-draggable';

import PopUp from "./components/PopUp";

// import Fileicon from './components/Fileicon.tsx';

const date = new Date().toLocaleDateString();
const time = new Date().toLocaleTimeString();


function DesktopItem(props) {
  return (
    <Draggable>
      <div className="card" onClick={props.onClick}>
        <a href={props.onClick} target="_blank">
          <div className="UserInfo">
            <img className="iconimage"
              src={props.url}
              alt="Loading..."
            />
          </div>
        </a>
        <div className="icontext" >
          {props.text}
        </div>
      </div >
    </Draggable>
  );
}

export default class App extends React.Component {
  state = {
    sysinfo: false,
    aboutme: false
  };
  toggleAbout = () => {
    this.setState({
      aboutme: !this.state.aboutme,
    });
  };
  toggleSys = () => {
    this.setState({
      sysinfo: !this.state.sysinfo,
    });
  };



  render() {

    return (
      <div className="App">
        <header className="header">
          <video autoPlay loop muted className="video">
            <source src={background} type="video/mp4" />
          </video>
          <div className="navbar">
            <div className="navcontent-left"> <AppleIcon style={{ 'font-size': "11px" }} /></div>
            <div className="navcontent-left"> Sinai's Portfolio</div>
            <div className="navcontent-left"> Help</div>
            <div className="navcontent-right"> {date} {time}</div>
            <div className="navcontent-right"> <GitHubIcon style={{ 'font-size': "12px" }} /></div>
            <div className="navcontent-right"> <LinkedInIcon style={{ 'font-size': "12px" }} /></div>
          </div>
          <div className="navbar_mobile">
            <div className="navcontent-left"> {time}</div>
            <div className="navcontent-left"> <AppleIcon style={{ 'font-size': "11px", 'margin-left': "70px" }} /></div>
            <div className="navcontent-right"> <SignalCellularAlt2BarIcon style={{ 'font-size': "12px" }} /></div>
            <div className="navcontent-right"> <WifiIcon style={{ 'font-size': "12px" }} /></div>
            <div className="navcontent-right"> <Battery80Icon style={{ 'font-size': "12px" }} /></div>
          </div>
        </header>
        <body>
          <div className="desktop">
            <DesktopItem onClick={
              ("https://drive.google.com/file/d/1dZVJmpK0pghVMQEmBOibyKQHY69Q5qsl/view?usp=sharing")} url={PdfImage} info="Resume" text="Resume.pdf" />
            <DesktopItem onClick={this.toggleSys} url={SysImage} text="Sys Info" />
            <DesktopItem url={FolderImage} text="project(Private)" />
            <DesktopItem onClick={('https://chatapp-893b6.web.app/')} url={WebImage} text="chatapp" />
            <DesktopItem url={WebImage} onClick={'https://github.com/sinai228'} text="Github" />
            <DesktopItem onClick={'https://github.com/calvin-cs262-fall2020-Freespace'} url={WebImage} text="FreeSpace Github" />
            <DesktopItem onClick={'https://gethazelapp.com/'}
              url={HazelImage} text="Hazel App" />
            <DesktopItem onClick={this.toggleAbout} url={TextImage} text="About Me.txt" />
            <DesktopItem onClick={'https://linkedin.com/in/sinai-park'} url={WebImage} info="Resume" text="LinkedIn" />
            <DesktopItem onClick={'https://vsco.co/sinai0228/gallery'} url={GalleryImage} text="Gallery" />
            <DesktopItem onClick={'https://wis.calvin.edu/'} url={WebImage} info="Resume" text="Women In Stem" />
            <DesktopItem onClick={'https://replit.com/@SinaiPark/Memory-game#main.py'} url={GameImage} info="Resume" text="minigame" />
            <DesktopItem onClick={'https://www.youtube.com/watch?v=mXtHobKvMLs'} url={WebImage} text="FreeSpace Mobile" />
            <DesktopItem url={WebImage} text="project" />

            {this.state.sysinfo ? <PopUp toggle={this.toggleSys} url={sysinfo} /> : null}
            {this.state.aboutme ? <PopUp toggle={this.toggleAbout} url={aboutme} /> : null}

          </div>

        </body>

      </div >
    );
  }
}

// export default App;