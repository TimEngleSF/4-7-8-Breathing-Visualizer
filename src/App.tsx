import { useState, useRef, useEffect } from 'react';
import './App.css';
import Modal from './components/Modal';
import Counter from './components/Counter';
import Visualizer from './components/Visualizer';

enum Directions {
    Inhale = 'Inhale',
    HoldBreath = 'Hold\nRelax',
    Exhale = 'Exhale',
    Start = 'Press to Start',
}

function App() {
    const [count, setCount] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isRunning, setIsRunning] = useState(false);
    const [direction, setDirection] = useState(Directions.Start);
    const [timer, setTimer] = useState(0);
    const timerFunc = useRef<number | null>(null);

    useEffect(() => {
        if (timer > 0 && timer < 5) {
            setDirection(Directions.Inhale);
        } else if (timer >= 5 && timer < 12) {
            setDirection(Directions.HoldBreath);
        } else if (timer >= 12 && timer < 20) {
            setDirection(Directions.Exhale);
        } else if (timer >= 20) {
            setTimer(1);
            setCount((prevCount) => prevCount + 1);
        }
    }, [timer]);

    const handleStart = () => {
        if (!isRunning) {
            setIsRunning(true);
            setTimer(1);
            setDirection(Directions.Inhale);
            timerFunc.current = window.setInterval(() => {
                setTimer((prevTimer) => prevTimer + 1);
            }, 1000) as unknown as number;
        }
    };

    const handleStop = () => {
        if (isRunning) {
            setIsRunning(false);
            setDirection(Directions.Start);
            setCount(0);
            if (timerFunc.current !== null) {
                clearInterval(timerFunc.current);
            }
        }
    };

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <>
            <Modal isOpen={isModalOpen} onClose={toggleModal} />
            <main style={isModalOpen ? { filter: 'blur(0.25rem)' } : {}}>
                <h1>4-7-8 Visualizer</h1>
                <button
                    className="open-modal-btn btn"
                    onClick={() => setIsModalOpen(true)}
                >
                    Learn the Technique
                </button>
                <Visualizer
                    direction={direction}
                    handleStart={handleStart}
                    isRunning={isRunning}
                />
                <div
                    className={`counter-button__container ${
                        isRunning ? '' : 'hidden'
                    }`}
                >
                    <Counter count={count} />
                    <button className={`stop-btn btn `} onClick={handleStop}>
                        Stop
                    </button>
                </div>
            </main>
        </>
    );
}

export default App;
