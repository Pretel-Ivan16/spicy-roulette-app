import { QUESTIONS } from "../data/questions";
import type { Question } from "../types/question";

export function getQuestionsByCategory(categoryID: string): Question[]{
  return QUESTIONS.filter(q => q.categoryID === categoryID);
}

export function getRandomQuestion(questions: Question[]): Question {
  return questions[Math.floor(Math.random() * questions.length)];
}

export function getRandomQuestionByCategory(categoryID: string): Question | undefined {
  const questions = getQuestionsByCategory(categoryID);
  return questions.length > 0 ? getRandomQuestion(questions) : undefined;
}