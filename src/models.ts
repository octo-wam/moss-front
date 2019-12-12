export interface Question {
  id: string;
  title: string;
  description: string;
  endingDate: string;
  answers: Answer[];
}

export interface QuestionCreate {
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
  name: string;
}

export interface Vote {
  answerId: string;
  user: { id: string };
}
