export interface Form {
    values: Record<string, InputValue>;
    errors: Record<string, InputError>; 
}

export interface InputValue {
    value:string;
    focus:boolean;
}

export interface InputError {
    status: InputStatus;
    valid: boolean | null;
}

export type InputStatus = null|'empty'|'valid'|'invalid'