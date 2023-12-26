import { inputDataType } from ".";

export type UserVerificationMutationType = {
    isNewUser: boolean;
    inputData: inputDataType;
    handleLoginVerification: (response: string) => void;
  };