import { javascript } from "@codemirror/lang-javascript";
export interface IUser {
  id: string;
  email: string;
  login: string;
  password: string;
  date_of_register: string;
  last_seen: string;
  subscribers_count: number;
  subscriptions_count: number;
  tasks_completed: number,
  about: string,
  is_admin: boolean,
  last_lang: string,
  rank: string
}

export interface IUserStats {
  level: number;
  learning_tasks: number;
  authors_tasks: number;
  comments: number;
  achievements: number;
}

export interface IUserLanguages {
  languages_number: number;
  languages_progress: string;
  languages_last: string;
}

export interface IUserLanguagesProgress {
  languages_python: number;
  languages_javascript: number;
  languages_c_plus_plus: number;
}

export interface IStats {
  userStats: IUserStats;
  userLanguages: IUserLanguages;
  languagesProgress: IUserLanguagesProgress;
}

export interface IUserState extends IUser {
  isAuthorize: boolean;
}

export interface IState {
  userInfo: IUserState;
  isLoading: boolean;
  errorMessage: string | undefined;
}

export interface IUserRegister {
  email: string;
  login: string;
  password: string;
}

export interface IUserLogin {
  login: string;
  password: string;
}

export interface IUploadAvatar {
  img: string;
  id: string;
}

export interface IUpUserLogin {
  login: string;
  id: string;
}

export interface IUpUserLevel {
  id: string;
  level: number;
}

export interface IUpUserMail {
  id: string;
  email: string;
}
export interface IUpUserPassword {
  id: string;
  password: string;
}

export interface MyKnownError {
  message: string;
}
