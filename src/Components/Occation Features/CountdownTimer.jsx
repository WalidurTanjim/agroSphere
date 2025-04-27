import React, { useState, useEffect } from "react";

const CountdownTimer = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    const [visible, setVisible] = useState(true); // নতুন state

    useEffect(() => {
        // 5 সেকেন্ড পরে hide করে দেবে
        const timeout = setTimeout(() => {
            setVisible(false);
        }, 5000);

        return () => clearTimeout(timeout); // Cleanup
    }, []);

    useEffect(() => {
        const targetDate = new Date("2025-04-14T00:00:00"); // Eid date
        const interval = setInterval(() => {
            const now = new Date();
            const difference = targetDate - now;

            if (difference <= 0) {
                clearInterval(interval);
            } else {
                const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((difference % (1000 * 60)) / 1000);

                setTimeLeft({ days, hours, minutes, seconds });
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    if (!visible) return null; // visible না থাকলে কিছুই রেন্ডার হবে না

    return (
        <div className="flex flex-col items-center text-green-700 bg-cover bg-center bg-no-repeat p-8 rounded-lg" style={{
            backgroundImage: "url('https://i.pinimg.com/originals/70/c5/fa/70c5fa675be4dee824bc5afdc71491c9.gif')",
        }}>
            <div className="bg-black bg-opacity-60 p-8 rounded-2xl shadow-xl text-center">
                <h2 className="text-3xl font-semibold mb-4">Bengali New Year Countdown</h2>
                <div className="flex justify-center space-x-6 text-xl font-medium">
                    <div className="text-center">
                        <div className="text-5xl font-bold">{timeLeft.days}</div>
                        <div>Days</div>
                    </div>
                    <div className="text-center">
                        <div className="text-5xl font-bold">{timeLeft.hours}</div>
                        <div>Hours</div>
                    </div>
                    <div className="text-center">
                        <div className="text-5xl font-bold">{timeLeft.minutes}</div>
                        <div>Minutes</div>
                    </div>
                    <div className="text-center">
                        <div className="text-5xl font-bold">{timeLeft.seconds}</div>
                        <div>Seconds</div>
                    </div>
                </div>
                <p className="mt-6 text-lg italic">Until Bengali New Year</p>
            </div>
        </div>
    );
};

export default CountdownTimer;
