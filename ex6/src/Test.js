import React, { useState, useRef, useEffect } from 'react';

export default function Test() {
    const AppDemo14 = () => {
        console.log('render');
        const [count, setCount] = useState(0);
        let prevCount;

        useEffect(() => {
            console.log('useEffect', prevCount);
        }, [count]);

        return (
            <div>
                <h1>
                    Now: {count}, before: {prevCount}
                </h1>
                <button
                    onClick={() => {
                        prevCount = count;
                        setCount(count + 1);
                    }}
                />
            </div>
        )

    }
    return (
        <div>
            <AppDemo14 />
        </div>
    )
}