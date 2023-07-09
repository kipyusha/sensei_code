export interface ITasks {
  title: string;
  complexity: number;
  task_id: number;
  question: string;
  answer: string;
}

export interface ITheme {
    description: string;
    lang_id: number;
  
    tasks: ITasks[];
}
  
export interface IModule extends ITheme {
  id: number
  title: string;
}

export interface ICurrentLanguage {
  lang_name: string
  modules: IModule[]
}