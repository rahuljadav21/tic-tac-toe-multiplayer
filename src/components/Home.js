import React,{useState} from 'react'
import '../components/styles/home.css'
import gifimg from './imgs/Tic-tac-toe-animated.gif'
import axios from 'axios';
import constant from '../constant.json'
import { Link } from 'react-router-dom';
function Home() {
    const baseUrl = constant.baseURL
    const [p1,setP1]=useState('');
    const [p2,setP2]=useState('');
    const [gameLink,setGameLink]=useState({});

    function invite(e){
        let data ={
            player1:p1,
            player2:p2
        }
        axios.post(baseUrl+"/game/new",data
      )
      .then((response) => {
       setGameLink(`/game/${response.data._id}`)
       let gmlink = document.querySelector('#myInput')
       gmlink.value='https://tic-tac-toe-multiplayer.netlify.app'+`/game/${response.data._id}`
      });
        e.preventDefault()
      let link = document.querySelector('.gameLink');
      link.style.display='block';
       
    }


    function myFunction() {
        var copyText = document.getElementById("myInput");
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(copyText.value);
      }
    return (
        <div className="home">
           
            <div className="info">
            <h2>Tic Tac Toe </h2>
           
            <img className="gif" src={gifimg} alt="tic-tac-toe"/>
            </div>
            <div className="form-container">
                <form className="invite-form" onSubmit={invite}>
                    <h3>Invite Your Friend.</h3>
                    <div className="player">
                    <label htmlFor="player1" >You : </label>
                    <input id="player1" placeholder="your name" type="text" onChange={(e) => setP1(e.target.value)}required/>
                    </div>
                    
                    <div className="player">
                    <label htmlFor="player2">Friend : </label>
                    <input id="player1" type="text" placeholder="your friend's name" onChange={(e) => setP2(e.target.value)} required />
                    </div>
                    <button className="invite-btn" type="submit">Invite</button>
                   
                </form>
                <div className="gameLink" style={{margin: "3vh 0vh",display:"none"}}>
                    <input type="text" onChange={(e)=>{}} value="Hello World" id="myInput"/>
                    <button className="copy-link" onClick={myFunction}>Copy Link</button>
                    <p>Share this Link to your Friend.</p>
                    <Link className="play-btn" to={gameLink}>Play</Link>
                </div>

                
            </div>
        </div>
     
    )
}

export default Home
