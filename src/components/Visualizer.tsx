import { FC } from 'react';

interface VisualizerProps {
    direction: string;
    handleStart: () => void;
    isRunning: boolean;
}

const Visualizer: FC<VisualizerProps> = ({
    direction,
    handleStart,
    isRunning,
}) => {
    return (
        <div
            className="visualizer"
            onClick={handleStart}
            role="button"
            tabIndex={0}
        >
            <div
                className={`visualizer-circle ${isRunning ? 'active' : ''}`}
                aria-live="polite"
            >
                {direction}
            </div>
        </div>
    );
};

export default Visualizer;
