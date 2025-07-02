import { Warp, type WarpProps } from '@paper-design/shaders-react';
import { warpPresets } from '../presets/warpPresets';

type Props = WarpProps & {
    preset?: keyof typeof warpPresets;
};

export default function WarpBackground({ preset, style, ...rest }: Props) {
    const selectedPreset = preset ? warpPresets[preset] : {};
    const mergedProps: WarpProps = {
        ...selectedPreset,
        ...rest,
        style: {
            width: '100%',
            height: '100%',
            position: 'absolute',
            inset: 0,
            ...style,
        },
    };

    return <Warp {...mergedProps} />;
}
