import { useState } from 'react';
import './App.css';
import Modal from './components/Modal';
import Counter from './components/Counter';
import Visualizer from './components/Visualizer';

function App() {
    const [count, setCount] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isRunning, setIsRunning] = useState(false);
    const [direction, setDirection] = useState('Start');

    const handleStart = () => {
        if (!isRunning) {
            setIsRunning(true);
        }
    };

    const handleStop = () => {
        if (isRunning) {
            setIsRunning(false);
        }
    };

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <>
            <Modal isOpen={isModalOpen} onClose={toggleModal} />
            <button
                className="open-modal-btn btn"
                onClick={() => setIsModalOpen(true)}
            >
                Learn 4-7-8 Technique
            </button>
            <Visualizer direction={direction} onStart={handleStart} />
            {isRunning && <Counter count={count} />}
            {isRunning && (
                <button className="stop-btn btn" onClick={handleStop}>
                    Stop
                </button>
            )}
        </>
    );
}

export default App;
