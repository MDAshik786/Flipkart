export type userDataType = {
    userData: singleUserDataType[];
}

export type singleUserDataType = {
    divClassName: string;
    labelClassName: string;
    labelContent: string;
    inputClassName: string;
    type: string;
    name: string;
    value: string;
    onChange: any; 
    autoComplete?: string;
    spanClassName: string;
    errorMessage: string;
}
