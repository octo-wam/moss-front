export interface Question {
  id: string;
  title: string;
  description: string;
  endingDate: string;
  answers: Answer[];
}

export interface Answer {
  id: string;
  title: string;
  description: string;
}

export interface Me {
  id: string;
  email: string;
}

export interface User {
  id: string;
  name: string;
}

export interface Vote {
  id: string;
  answerId: string;
  user: User;
}
