// src/presets/warpPresets.ts
import { type WarpParams } from '@paper-design/shaders-react';

export const warpPresets: Record<string, WarpParams> = {
    ultraDark: {
        colors: ['#000000', '#111111', '#1a1a1a'],
        speed: 0.4,
        swirl: 0.2,
        swirlIterations: 10,
        shape: 'edge',
        shapeScale: 0.08,
        rotation: 0.5,
    },
    cyberpunk: {
        colors: ['#0e0c17', '#2d006e', '#ff00cc'],
        speed: 0.7,
        swirl: 0.5,
        swirlIterations: 14,
        shape: 'edge',
        shapeScale: 0.2,
        rotation: 0.3,
    },
    matrix: {
        colors: ['#000000', '#003300', '#00ff00'],
        speed: 0.3,
        swirl: 0.25,
        swirlIterations: 8,
        shape: 'checks',
        shapeScale: 0.1,
        rotation: 0.4,
    },
    darkGray: {
        colors: ['#0b0b0c', '#2b2b2d', '#444'],
        speed: 0.5,
        swirl: 0.3,
        swirlIterations: 12,
        shape: 'stripes',
        shapeScale: 0.15,
        rotation: 0.4,
    },
    darkWithGrayAccent: {
        colors: ['#000000', '#2e2e2e', '#444444'], // negro + grises
        speed: 0.5,
        swirl: 0.3,
        swirlIterations: 10,
        shape: 'edge',
        shapeScale: 0.12,
        rotation: 0.4,
    },
    nicolaTesla: {
        colors: ['#ffffff', '#27272a', '#52525b'],
        speed: 0.6,
        swirl: 0.5,
        swirlIterations: 10,
        shape: 'stripes',
        shapeScale: 0.3,
        rotation: 0.5,
    },

};
