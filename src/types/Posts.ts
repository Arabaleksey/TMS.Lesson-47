export interface IPost {
    id: number;
    image: string;
    text: string;
    date: string;
    lesson_num: number;
    title: string;
    description: string;
    author: number;
  }

  export interface IPosts {
    results:IPost[]
  }