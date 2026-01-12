import { FC, ReactNode } from 'react';
import cls from './Text.module.scss';
import { classNames } from '../../lib/classNames';

type AsType = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
type Fz = 24 | 26 | 28 | 30 | 32 | 36 | 40 | 52 | 54 | 80;
type Fw = 400 | 500 | 600 | 700;

interface TextProps {
    children: ReactNode;
    as?: AsType;
    fz?: Fz;
    fw?: Fw;
    className?: string;
};

const fzClasses: Record<Fz, string> = {
    24: cls.fz24,
    26: cls.fz26,
    28: cls.fz28,
    30: cls.fz30,
    32: cls.fz32,
    36: cls.fz36,
    40: cls.fz40,
    52: cls.fz52,
    54: cls.fz54,
    80: cls.fz80
};

const fwClasses: Record<Fw, string> = {
    400: cls.fw400,
    500: cls.fw500,
    600: cls.fw600,
    700: cls.fw700
};

export const Text: FC<TextProps> = (props) => {
    const { children, className = '', as = 'h6', fz = '24', fw = '400' } = props;

    const classes = [
        fz && fzClasses[fz],
        fw && fwClasses[fw],
        className
    ];

    const getAs = {
        h1: <h1 className={classNames("", {}, classes)}>{children}</h1>,
        h2: <h2 className={classNames("", {}, classes)}>{children}</h2>,
        h3: <h3 className={classNames("", {}, classes)}>{children}</h3>,
        h4: <h4 className={classNames("", {}, classes)}>{children}</h4>,
        h5: <h5 className={classNames("", {}, classes)}>{children}</h5>,
        h6: <h6 className={classNames("", {}, classes)}>{children}</h6>,
    };

    return getAs[as];
};