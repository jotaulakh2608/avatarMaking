import {useState, useEffect} from 'react'
import '@progress/kendo-theme-default/dist/all.css';
import { Routes , Route} from 'react-router-dom'
import { EditCodeExampler } from './components/EditCodeExampler';
import './App.css';
import { Profile } from './components/ProfileCodeExampler';
import { MainCard } from './components/MainCard';
import Quiz from './Pages/Quiz';
import Firsttask from './components/Firsttask';
import { Filter } from './Pages/Filter';
import { Graph } from './Pages/Graph';
import { DarkProfile } from './Pages/DarkProfile';
import { YoutubeLink } from './Pages/YoutubeLink';
import { Chatbox } from './components/Chatbox';
import Sidebar from './components/Sidebar';

function App() {
  
  const [profile, setprofile] = useState("https://i.ibb.co/VHVbzMK/Screenshot-80-removebg-preview.png")
  const [mainImage, setmainImage] = useState('https://i.ibb.co/VHVbzMK/Screenshot-80-removebg-preview.png')
  
  useEffect(() => {
    setprofile(window.localStorage.getItem('profile'));

}, [])
useEffect(() => {
    window.localStorage.setItem('profile', profile)
  }, [profile])

  useEffect(() => {
    setmainImage(window.localStorage.getItem('mainImage'));

}, [])
useEffect(() => {
    window.localStorage.setItem('mainImage', mainImage)
  }, [mainImage])




  return (
    <Routes>
<Route path="/" element={<Profile profile={profile} />}/>
        <Route path="profileEdit" element={<EditCodeExampler setmainImage={setmainImage} setprofile={setprofile}/>}/>
        <Route path="quiz" element={<Quiz/>}/>
        <Route path="chat" element={<Chatbox/>}/>
        <Route path="filter" element={<Filter/>}/>
        <Route path="sideBar" element={<Sidebar/>}/>
        <Route path="profile" element={<DarkProfile/>}/>
        <Route path="graph" element={<Graph/>}/>
        <Route path="youtube" element={<YoutubeLink/>}/>
        <Route path="task" element={<Firsttask/>}/>
        {/* <Route path="youtube" element={<YoutubeFetch/>}/> */}
        <Route path="main" element={<MainCard  profile={profile} setmainImage={setmainImage}  mainImage={mainImage}/>}/>
        
    </Routes>
  
  );
}

export default App;
