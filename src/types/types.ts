export interface BreakLabelInterface {
    breakLength: number;
    setBreakLength: React.Dispatch<React.SetStateAction<number>>;
}

export interface SessionLabelInterface {
    breakSession: number;
    setBreakSession: React.Dispatch<React.SetStateAction<number>>;
    setSeconds: React.Dispatch<React.SetStateAction<number>>;
}

export interface TimerLabelInterface {
    breakSession: number;
    breakLength: number;
    seconds: number;
    setSeconds: React.Dispatch<React.SetStateAction<number>>;
}