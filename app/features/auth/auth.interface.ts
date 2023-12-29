export interface SocialProfile {
  linkedIn: string;
  github: string;
  website: string;
}

export interface ProfilePicture {
  public_id: string;
  url: string;
}

export interface IUser {
  socialProfile: SocialProfile;
  profilePicture: ProfilePicture;
  firstName: string;
  lastName: string;
  username: string;
  displayName: string;
  email: string;
  phoneNumber: string;
  occupation: string;
  role: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  id: string;
  token?: string;
}
interface ISession {
  data: IUser;
  status: string;
  update: any;
}

export interface IRegisterResponse {
  data: IUser;
  message: string;
}

export interface ILoginResponse {
  user: IUser;
  token: string;
}
