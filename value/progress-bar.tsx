import React from 'react';
import HalfProgress from './half-circular/half-progress';
import CircularProgress from './circular/circular-progress';
import LineProgress from './line/line-progress';

interface ProgressBarProps {
    type?: 'half' | 'circular' | 'line';
    size?: "small" | "medium" | "large";
    value: number;
    maxValue?: number;
    text?: string;
    variant?: "primary" | "secondary" | "success" | "warning" | "danger";
}

export default function ProgressBar({type='half',size = "small", value, maxValue = 100, text, variant = "primary" }: ProgressBarProps) {
    return (
       type==='half' ? <HalfProgress size={size} value={value} maxValue={maxValue} text={text} variant={variant} /> : type==='circular' ? <CircularProgress size={size} value={value} maxValue={maxValue} text={text} variant={variant} /> : <LineProgress size={size} value={value} maxValue={maxValue} text={text} variant={variant} />
    )
}