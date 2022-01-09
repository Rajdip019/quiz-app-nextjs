import React, {useState , useRef, useEffect} from 'react'

const Navbar = ({handleState}) => {

    const Ref = useRef(null);
  
    const [timer, setTimer] = useState('00:00:00');
  
  
    const getTimeRemaining = (e) => {
        const total = Date.parse(e) - Date.parse(new Date());
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor((total / 1000 / 60) % 60);
        const hours = Math.floor((total / 1000 * 60 * 60) % 24);
        return {
            total, hours, minutes, seconds
        };
    }
  
  
    const startTimer = (e) => {
        let { total, hours, minutes, seconds } 
                    = getTimeRemaining(e);
        if (total >= 0) {
            setTimer(
                (hours > 9 ? hours : '0' + hours) + ':' +
                (minutes > 9 ? minutes : '0' + minutes) + ':'
                + (seconds > 9 ? seconds : '0' + seconds)
            )
        }
    }
  
  
    const clearTimer = (e) => {
        setTimer('00:00:10');
        if (Ref.current) clearInterval(Ref.current);
        const id = setInterval(() => {
            startTimer(e);
        }, 1000)
        Ref.current = id;
    }
  
    const getDeadTime = () => {
        let deadline = new Date();
        deadline.setSeconds(deadline.getSeconds() + 10);
        return deadline;
    }
  
    const onClickReset = () => {
        clearTimer(getDeadTime());
    }
  
    return (
        <div className=' bg-skin-main py-5 px-7 flex items-center justify-between shadow-lg'>
        <div className='flex items-center'>
            <p className='text-left text-white font-light mr-3 cursor-pointer hover:text-gray-200 transition-all' onClick={() => {handleState("highscore")}}>View HighScores</p><i className="fas fa-hand-point-left fa-lg text-white"></i>
        </div>
            <p className='text-right text-white font-light' onClick={onClickReset}>Time: {timer}</p>
        </div>
    )
}

export default Navbar
