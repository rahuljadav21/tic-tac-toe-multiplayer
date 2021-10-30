import React,{ useState, useEffect }  from 'react'
import axios from 'axios'
import GameContainer from './GameContainer'
import {useParams} from 'react-router'
import './styles/game.css'
import constant from '../constant.json'

function Game() {
 const baseUrl = constant.baseURL
 const [match,setMatch] = useState({})
 const [me,setMe]=useState('');
 const {id} = useParams();
 const [time, setTime] = useState(false)
 setTimeout(() => {     
    setTime(!time);
 }, 1000);

 useEffect(() => {
       
    const fetchMatch = async () => {
        await axios.get(baseUrl+`/game/${id}`, { withCredentials: false })
            .then((res) => {
                setMatch(res.data)
               // console.log(res.data);
            });

    }
   
    fetchMatch();
},[id,time,baseUrl]);

 function selectWRU(e){

    setMe(e.target.id)
    let wru = document.querySelector('.wru')
    wru.style.display='none'
 }
    return (
        <>
        <div className="wru" style={{background:'#25092526'}}>
        <p className="wru-para">{`Are you ${match.player1} Or ${match.player2} ?`}</p>
           <div className="pl"><span  onClick={selectWRU} id={`${match.player1}`} >{`${match.player1}`}</span></div>
           <div className="pl"><span  onClick={selectWRU} id={`${match.player2}`} >{`${match.player2}`}</span></div>
        </div>
        <div>
            <GameContainer me={me} match={match}/>
        </div>
        </>
    )
}

export default Game
