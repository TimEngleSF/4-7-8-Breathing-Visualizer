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

    const circleClass = `visualizer-circle ${direction.toLowerCase()}`;

    return (
        <div
            className="visualizer"
            onClick={handleStart}
            role="button"
            tabIndex={0}
        >
            <div
                className={`${circleClass} ${isRunning ? 'active' : ''}`}
                aria-live="polite"
            >
                <div className="visualizer-text">
                    {renderDirection(direction)}
                </div>
            </div>
        </div>
    );
};

export default Visualizer;
