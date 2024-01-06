import { FC } from 'react';

interface VisualizerProps {
    direction: string;
    onStart: () => void;
}

const Visualizer: FC<VisualizerProps> = ({ direction, onStart }) => {
    return (
        <div
            className="visualizer"
            onClick={onStart}
            role="button"
            tabIndex={0}
        >
            <div className="visualizer-circle" aria-live="polite">
                {direction}
            </div>
        </div>
    );
};

export default Visualizer;
