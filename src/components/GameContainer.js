import React from 'react'
import axios from 'axios'
import constant from '../constant.json'
function GameContainer({match,me}) {
  const baseUrl = constant.baseURL
  // let [marker,setMarker]= useState('');
  //setMarker(match.firstTurn)  
  
  function mark(e){
    
      if(match.currentTurn===me){
        
       
        axios.put(baseUrl+`/game/${match._id}`,{move : e.target.id})
        // let box = document.getElementById(e.target.id);
        // box.innerText=match.turn
      }
           
  }
  
    return (
        <div className="gameContainer">
        <div className="container">
          <div className="line"></div>
        <div id="1" onClick={mark} className="box bt-0 bl-0"><span className="boxtext">{`${match.box1 ? match.box1 : ''}`}</span></div>
        <div id="2" onClick={mark} className="box bt-0"><span className="boxtext">{`${match.box2 ? match.box2 : ''}`}</span></div>
        <div id="3" onClick={mark} className="box bt-0 br-0"><span className="boxtext">{`${match.box3 ? match.box3 : ''}`}</span></div>
        <div id="4" onClick={mark} className="box bl-0"><span className="boxtext">{`${match.box4 ? match.box4 : ''}`}</span></div>
        <div id="5" onClick={mark} className="box"><span className="boxtext">{`${match.box5 ? match.box5 : ''}`}</span></div>
        <div id="6" onClick={mark} className="box br-0"><span className="boxtext">{`${match.box6 ? match.box6 : ''}`}</span></div>
        <div id="7" onClick={mark} className="box bl-0 bb-0"><span className="boxtext">{`${match.box7 ? match.box7 : ''}`}</span></div>
        <div id="8" onClick={mark} className="box bb-0"><span className="boxtext">{`${match.box8 ? match.box8 : ''}`}</span></div>
        <div id="9" onClick={mark} className="box bb-0 br-0"><span className="boxtext">{`${match.box9 ? match.box9 : ''}`}</span></div>
      </div>
      <div className="gameInfo">
       
        <div>
        <span className="info">{match.currentTurn}'s Turn for {`${match.turn ? match.turn : ''}`}</span>
        <p>{match.player1} Won : {match.w1}</p>
        <p>{match.player2} Won : {match.w2}</p>
        <p> Draw : {match.draw}</p>
        <p>{match.winner!==" " ? `${match.winner} Won  🥳🥳🥳`:``}</p>         
        </div>

      </div>
    </div>
    )
}

export default GameContainer
