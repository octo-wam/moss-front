export interface MeApi {
  id: string;
  email: string;
  name: string;
  photo: string | null;
}

export interface UserApi {
  id: string;
  name: string;
  photo: string | null;
}

export interface AnswerApi {
  id: string;
  title: string;
  description: string;
}

export interface QuestionApi {
  id: string;
  title: string;
  description: string;
  endingDate: string;
  user: UserApi;
  answers: AnswerApi[];
}
