interface CounterProps {
    count: number;
}

const Counter = ({ count }: CounterProps) => {
    return (
        <div className="counter" aria-live="polite" aria-atomic="true">
            Rounds Completed: <span aria-live="assertive">{count}</span>
        </div>
    );
};

export default Counter;
