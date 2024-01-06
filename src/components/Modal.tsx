import { FC } from 'react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const Modal: FC<ModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) {
        return null;
    }
    return (
        <div className="modal" onClick={onClose}>
            <div className="modal-content">
                <h2>4-7-8 Breathing Technique</h2>
                <div>
                    <p>
                        The 4-7-8 breathing technique is a simple yet powerful
                        way to promote relaxation and improve sleep. Here's how
                        to do it:
                    </p>
                    <ol>
                        <li>
                            Position your tongue against the ridge behind your
                            upper front teeth.
                        </li>
                        <li>Exhale completely, making a whooshing sound.</li>
                        <li>Inhale quietly through your nose for 4 seconds.</li>
                        <li>Hold your breath for 7 seconds.</li>
                        <li>
                            Exhale forcefully through your mouth for 8 seconds,
                            making a whooshing sound.
                        </li>
                    </ol>
                    Beginners should not complete more than 2 rounds.
                </div>
                <p className="description">
                    This technique helps calm the mind, reduce stress and
                    anxiety, and can be particularly effective in preparing the
                    body for sleep. Regular practice can train your body to
                    respond more effectively to stress.
                </p>
                <button className="btn" onClick={onClose}>
                    Close
                </button>
            </div>
        </div>
    );
};

export default Modal;
