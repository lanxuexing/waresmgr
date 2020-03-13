export interface Dialog {
    inputs: object;
    outputs: object;
    pos?: DialogPos;
}

export interface DialogPos {
    top: string;
    left: string;
    width: string;
    height: string;
}
