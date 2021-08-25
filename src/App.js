import logo from './logo.svg';
import './App.css';
// import AudioButton from "./AudioButton";
import Grid from "@material-ui/core/Grid";
import SoundGrid from "./soundGrid";
import audio1 from './audio/120_future_funk_beats_25.mp3'
import audio2 from './audio/120_stutter_breakbeats_16.mp3'
import audio3 from './audio/Bass Warwick heavy funk groove on E 120 BPM.mp3'
import audio4 from './audio/electric guitar coutry slide 120bpm - B.mp3'
import audio5 from './audio/FUD_120_StompySlosh.mp3'
import audio6 from './audio/GrooveB_120bpm_Tanggu.mp3'
import audio7 from './audio/MazePolitics_120_Perc.mp3'
import audio8 from './audio/PAS3GROOVE1.03B.mp3'
import audio9 from './audio/SilentStar_120_Em_OrganSynth.mp3'

const paths = 
    [
        audio1,
        audio2,
        audio3,
        audio4,
        audio5,
        audio6,
        audio7,
        audio8,
        audio9,
    ]


function App() {
    return (
        <div className="App">

            <SoundGrid paths={paths}/>
        </div>
    );
}

export default App;
