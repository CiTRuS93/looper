import Grid from "@material-ui/core/Grid";
import AudioButton from "./AudioButton";
const randomColor = require('randomcolor');
/**
 * Manage all the sounds and loops
 * @param {prop.paths:array of audio} prop 
 * @returns 
 */
export default function SoundGrid(prop){
    
    let playing = false
    let soundDict = {}
    let index= 0
    let playableSound = []
    function pauseAll(){
        
        playableSound.forEach((sound=> {sound.audio.pause()
        sound.audio.currentTime = 0
        }))

    }
    /**
     * Start playing all the active buttons
     */
    function playAll(){
        
        


            playableSound.forEach((sound)=> {
                if(sound.audio.paused) {
                    sound.audio.currentTime = 0
                    sound.audio.play()
                }
            })

            playing = playableSound.length>0

    }
    
    for (const path of prop.paths) {
        let name = path.split("/")
        name = name[name.length - 1].split(".")[0]
        soundDict[index] = {audio:new Audio(path),name:name}
        soundDict[index].audio.addEventListener('ended', playAll, false)

        index++

    }   
    async function checkPlays(){

        playing = playableSound.length > 0
    }
    /**
     * Activate or disable audio
     * @param {*} v id of the audio
     */
    function onSoundClick(v){
        
        console.log(prop.paths)
        const found = playableSound.find(sound => sound.id === v)
        if(found){
            soundDict[v].audio.pause()
            soundDict[v].audio.currentTime=0
            playableSound = playableSound.filter(sound => sound.id !== v)
            checkPlays()
        }else{
            playableSound.push({id:v,audio:soundDict[v].audio})
            if(!playing){

                soundDict[v].audio.play()
                playing = true
            }
        }
    }

    return (
        <div className = "content">
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Grid container justifyContent="center" spacing={1}>
                    {[0, 1, 2].map((value) => (
                        <Grid key={value} item>
                            <AudioButton text={soundDict[value].name} color = {randomColor()} value={value} onClick={onSoundClick}>value</AudioButton>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Grid container justifyContent="center" spacing={1}>
                    {[3, 4, 5].map((value) => (
                        <Grid key={value} item>
                            <AudioButton  text={soundDict[value].name} color = {randomColor()} value={value} onClick={onSoundClick}>value</AudioButton>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Grid container justifyContent="center" spacing={1}>
                    {[6, 7, 8].map((value) => (
                        <Grid key={value} item>
                            <AudioButton text={soundDict[value].name} color = {randomColor()} value={value} onClick={onSoundClick}>value</AudioButton>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </Grid>
        
        <button className="Stop" onClick={pauseAll}>pause</button>
        
        
        <button className="Play" onClick={playAll}>play</button>
        
        </div>
    )


}