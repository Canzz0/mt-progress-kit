import React, { useEffect, useState } from 'react';
import './circularProgress.css';

interface CircularProgressProps {
    size?: "small" | "medium" | "large";
    value: number;
    maxValue?: number;
    text?: string;
    variant?: "primary" | "secondary" | "success" | "warning" | "danger";
    textColor?: string;
}

export default function CircularProgress({textColor="text-sm",size = "small", value, maxValue = 100, text, variant = "primary" }: CircularProgressProps) {
    const [animatedValue, setAnimatedValue] = useState<number>(0);
    const percentage = Math.min((value / maxValue) * 100, 100);

    useEffect(() => {
        const timer = setTimeout(() => {
            setAnimatedValue(percentage);
        }, 100);

        return () => clearTimeout(timer);
    }, [percentage]);

    return (
        <div className={`circular-progress-${size} `}  >
            <div className={`circular-bar-overflow-${size}`} >
                <div 

                    className={`circular-bar-${size} ${variant}`} 
                    style={{ 
                        transform: `rotate(${45 + (animatedValue * 1.8)}deg)` 
                    }}
                ></div>
            </div>
            <span style={{color:textColor}} className={`circular-progress-text-${size} `} >{Math.round(animatedValue)}%</span>
        </div>
    
    );
}