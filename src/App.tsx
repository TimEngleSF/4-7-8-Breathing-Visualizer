import { useState } from 'react';
import './App.css';
import Modal from './components/Modal';
import Counter from './components/Counter';
import Visualizer from './components/Visualizer';

function App() {
    const [count, setCount] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isRunning, setIsRunning] = useState(false);
    const [direction, setDirection] = useState('Click to start');

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
            <main style={isModalOpen ? { filter: 'blur(0.25rem)' } : {}}>
                <h1>4-7-8 Visualizer</h1>
                <button
                    className="open-modal-btn btn"
                    onClick={() => setIsModalOpen(true)}
                >
                    Learn the Technique
                </button>
                <Visualizer direction={direction} onStart={handleStart} />
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
