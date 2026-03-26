import { useState, useEffect } from 'react';

const bootMessages = [
    'Initializing Kernel.........................[ OK ]',
    'Loading core modules........................[ OK ]',
    'Mounting virtual file systems...............[ OK ]',
    'Checking hardware configuration.............[ OK ]',
    'Starting system logger......................[ OK ]',
    'Loading user profile data...................[ OK ]',
    'Initiating graphical interface..............[ OK ]',
];

interface BootSequenceProps {
    onComplete: () => void;
}

export default function BootSequence({ onComplete }: BootSequenceProps) {
    const [messages, setMessages] = useState<string[]>([]);
    const [isDone, setIsDone] = useState(false);

    useEffect(() => {
        let currentLine = 0;

        // Function to add the next message with a random delay
        const addNextMessage = () => {
            if (currentLine < bootMessages.length) {
                setMessages((prev) => [...prev, bootMessages[currentLine]]);
                currentLine++;

                // Random delay between lines to simulate loading
                const delay = Math.random() * 200 + 100;
                setTimeout(addNextMessage, delay);
            } else {
                // Pause briefly after all lines are shown
                setTimeout(() => {
                    setIsDone(true);
                }, 500);
            }
        };

        // Start with a small initial delay
        const initialTimer = setTimeout(addNextMessage, 300);
        return () => clearTimeout(initialTimer);
    }, []);

    useEffect(() => {
        if (isDone) {
            // Small pause before informing parent we're done
            const flashTimer = setTimeout(() => {
                onComplete();
            }, 500);
            return () => clearTimeout(flashTimer);
        }
    }, [isDone, onComplete]);

    return (
        <div className="flex flex-col flex-1 p-4 md:p-8 h-screen overflow-hidden">
            <div>
                <div className="mb-4">System Bootstrap v2.4.19</div>
                <div className="mb-8">Memory Check: 640K OK</div>

                <div className="flex flex-col gap-1">
                    {messages.map((msg, idx) => (
                        <div key={idx}>{msg}</div>
                    ))}
                </div>

                {!isDone && (
                    <div className="mt-1 flex">
                        <span>_</span>
                        <span className="blinking-cursor">█</span>
                    </div>
                )}

                {isDone && <div className="mt-4">Welcome. Starting session...</div>}
            </div>
        </div>
    );
}
