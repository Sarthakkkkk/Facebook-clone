import React, {useState}from 'react'
import "./Messagesender.css"
import { Avatar } from '@material-ui/core';
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';



const MessageSender = () => {
const[input,setInput]=useState("");
const [image,setImage]=useState(null);

    const handleChange=(e)=>{
        if(e.target.files[0]){
            setImage(e.target.files[0])
        }
    }

    const handleSubmit=(e)=>{
        e.preventDefault();

        setInput("");
        
    };
    return (
        <div className="messageSender">
        <div className="messageSender__top">
        <Avatar/>
        <form>
            <input 
            value={input}
            onChange={(e)=>setInput(e.target.value)}
            classname="messageSender__input" style={{flex:1}} placeholder={`whats on your mind?`}/>
            <input
            type="file"
            className="messageSender__fileSelector"
            onChange={handleChange} />
            <button onClick={handleSubmit} type="submit">handel submit</button>

            
        </form>
        </div>

        <div className="messageSender__bottom">
        <div className="messageSender__option">
        <VideocamIcon style={{color:"red"}}/>
        <h3>Live Video</h3>
        </div>

        <div className="messageSender__option">
        <PhotoLibraryIcon style={{color:"green"}}/>
        <h3>photo/Video</h3>
        </div>

        <div className="messageSender__option">
        <InsertEmoticonIcon style={{color:"orange"}}/>
        <h3>Photo/Video</h3>
        </div>
            
        </div>
            
        </div>
    )
}

export default MessageSender
