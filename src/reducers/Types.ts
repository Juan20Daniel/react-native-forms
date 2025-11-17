export type FormTypes = 
    { type: 'CHANGE_VALUE', field:string, value:string } |
    { type: 'CLEAR_INPUT', field:string } |
    { type: 'PUT_FOCUS', field:string, value:boolean } |
    { type: 'CLEAR_ALL_FOCUS' } |
    { type: 'RESET' }