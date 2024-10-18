import { useRef } from "react";
import { useState } from "react";

const TimerChallenge = ({title, targetTime}) =>{
    const timer = useRef();
    
    const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);
    const [formatedTimeRemaining, setFormatedTimeRemaining] = useState();
    const [userLost, setUserLost] = useState(false);

    const timerIsActive = (timeRemaining > 0) && (timeRemaining < targetTime * 1000);

    if(timeRemaining <= 0){
        clearInterval(timer.current);
        setUserLost(true);
        setTimeRemaining(targetTime*1000);

    }

    const handleStart = () => {
        timer.current = setInterval(() => {
            setTimeRemaining(prevTimeRemaining => prevTimeRemaining -10)
        }, 10)
    }

    const handleStop = () => {
        clearInterval(timer.current);
        setUserLost(timeRemaining <= 0)
        setFormatedTimeRemaining((timeRemaining / 1000).toFixed(2));
        setTimeRemaining(targetTime * 1000);
    }

    const endMessage = () => {
        if(userLost){
            return <p className="challenge-lost"> Perdeu! </p>
        }
        if(formatedTimeRemaining){
            return <p className="challenge-won"> Ganhou faltando <strong> {formatedTimeRemaining} segundos! </strong> </p> 
        }

    }

    return(
        <section className="challenge">
            <h2>{title}</h2>
            {endMessage()}
            <p className="challenge-time">
            {targetTime} segundo{targetTime > 1 ? 's' : ''}
            </p>

            <p>
                <button onClick={timerIsActive ? handleStop : handleStart} >
                    {timerIsActive ? "Tempo correndo..." : "Tempo parado!"}
                </button>


            </p>


        </section>
    )
}





export default TimerChallenge;