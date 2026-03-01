import { CATEGORIES } from "../data/categories";
import type { Category } from "../types/category";

export function getRandomCategory(): Category{
  return CATEGORIES[Math.floor(Math.random() * CATEGORIES.length)];
}

export function getAllCategories(): Category[]{
  return CATEGORIES;
}

export function getCategoryById(id: string): Category | undefined{
  return CATEGORIES.find(cat => cat.id === id);
}