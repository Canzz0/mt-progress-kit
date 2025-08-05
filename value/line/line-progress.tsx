import React, { useEffect, useState } from 'react';
import './lineProgress.css';

interface LineProgressProps {
    size?: "small" | "medium" | "large";
    value: number;
    maxValue?: number;
    text?: string;
    variant?: "primary" | "secondary" | "success" | "warning" | "danger";
    textColor?: string;
}

export default function LineProgress({textColor,size = "small", value, maxValue = 100, text, variant = "primary" }: LineProgressProps) {
    const [animatedValue, setAnimatedValue] = useState<number>(0);
    const percentage = Math.min((value / maxValue) * 100, 100);

    useEffect(() => {
        const timer = setTimeout(() => {
            setAnimatedValue(percentage);
        }, 100);

        return () => clearTimeout(timer);
    }, [percentage]);

    return (
        <div className={`line-progress-${size}`}>
            <div className={`line-bar-overflow-${size}`}>
                <div 
                    className={`line-bar-${size} line-${variant}`} 
                    style={{ 
                        width: `${animatedValue}%` 
                    }}
                ></div>
            </div>
            <span style={{color:textColor}} className={`line-progress-text-${size}`}>{Math.round(animatedValue)}%</span>
        </div>
    );
}