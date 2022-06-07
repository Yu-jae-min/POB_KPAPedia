export interface IPerformenceListType {
  dtguidance: string;
  fcltynm: string;
  genrenm: string;
  pcseguidance: string;
  poster: string;
  prfage: string;
  prfcast: string;
  prfnm: string;
  prfpdfrom: string;
  prfpdto: string;
  prfruntime: string;
  prfstate: string;
  mt20id: string;
}

export interface IFestivalListType {
  fcltynm: string;
  festival: string;
  genrenm: string;
  mt20id: string;
  poster: string;
  prfnm: string;
  prfpdfrom: string;
  prfpdto: string;
  prfstate: string;
}

export interface IAwardsListType {
  awards: string;
  fcltynm: string;
  genrenm: string;
  mt20id: string;
  poster: string;
  prfnm: string;
  prfpdfrom: string;
  prfpdto: string;
  prfstate: string;
}

export interface IBoxOfficeListType {
  area: string;
  cate: string;
  mt20id: string;
  poster: string;
  prfdtcnt: string;
  prfnm: string;
  prfpd: string;
  prfplcnm: string;
  rnum: string;
  seatcnt: string;
}

export interface IListApiParams {
  cpage: string;
  rows: string;
}

export interface IUserInfoType {
  id: string;
  pw: string;
}

export interface ILoginInputType {
  userInfo: IUserInfoType;
  validationId: RegExp;
  validationPw: RegExp;
  handleUserInfo: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleLoginCheck: (event: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLElement>) => void;
}
