export interface BreakLabelInterface {
    power: boolean;
    breakLength: number;
    setBreakLength: React.Dispatch<React.SetStateAction<number>>;
}

export interface SessionLabelInterface {
    power: boolean;
    breakSession: number;
    setBreakSession: React.Dispatch<React.SetStateAction<number>>;
    setSeconds: React.Dispatch<React.SetStateAction<number>>;
}

export interface TimerLabelInterface {
    power: boolean;
    setPower: React.Dispatch<React.SetStateAction<boolean>>;
    setBreakLength: React.Dispatch<React.SetStateAction<number>>;
    setBreakSession: React.Dispatch<React.SetStateAction<number>>;
    breakSession: number;
    breakLength: number;
    seconds: number;
    setSeconds: React.Dispatch<React.SetStateAction<number>>;
}