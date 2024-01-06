const StopBtn = ({ onStop }: { onStop: () => void }) => {
    return (
        <button className="stop-btn btn" onClick={onStop}>
            Stop
        </button>
    );
};

export default StopBtn;
