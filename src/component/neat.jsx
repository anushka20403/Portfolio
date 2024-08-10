// NeatGradientComponent.js

import React, { useEffect, useRef } from 'react';
import { NeatConfig, NeatGradient } from '@firecms/neat';

export const config: NeatConfig = {
    colors: [
        { color: "#0A0A0A", enabled: true },
        { color: "#5D5C5E", enabled: true },
        { color: "#484848", enabled: true },
        { color: "#232222", enabled: true },
        { color: "#878586", enabled: false }
    ],
    speed: 4,
    horizontalPressure: 4,
    verticalPressure: 5,
    waveFrequencyX: 3,
    waveFrequencyY: 4,
    waveAmplitude: 3,
    shadows: 0,
    highlights: 2,
    colorBrightness: 1,
    colorSaturation: 7,
    wireframe: false,
    colorBlending: 6,
    backgroundColor: "#545454",
    backgroundAlpha: 1,
    resolution: 1
};

const NeatGradientComponent = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        if (canvasRef.current) {
            const neat = new NeatGradient({
                ref: canvasRef.current,
                ...config
            });

            neat.speed = 6;

            return () => {
                neat.destroy();
            };
        }
    }, []);

    return (
        <canvas
            id="gradient"
            ref={canvasRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: -1,
                pointerEvents: 'none' // Ensure it doesn't interfere with content interaction
            }}
        ></canvas>
    );
};

export default NeatGradientComponent;
