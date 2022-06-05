export interface IUserInfoType {
  id: string;
  pw: string;
}

export interface ILoginInputType {
  userInfo: IUserInfoType;
  validationId: RegExp;
  validationPw: RegExp;
  handleUserInfo: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
