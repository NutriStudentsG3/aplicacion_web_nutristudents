export interface Plan {
  id: string;
  name: string;
  description: string;
  category: string;
  weeks: Week[];
  saved: boolean; 
}

export interface Week {
  days: Day[];
}

export interface Day {
  meals: Meal[];
}

export interface Meal {
  name: string;
  ingredients: string[];
  calories: number;
}