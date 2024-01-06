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
    const renderDirection = (direction: string) =>
        direction.split('\n').map((dir, i) => <div key={i}>{dir}</div>);

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
                {renderDirection(direction)}
            </div>
        </div>
    );
};

export default Visualizer;
