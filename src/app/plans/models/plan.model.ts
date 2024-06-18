export interface Plan {
  id: string,
  name: string,
  description: string,
  category: string,
  weeks: Week[],
  saved: boolean, 
  isPublic : boolean,
  createdDate : Date,
} 

export interface Week {
  days: Day[] ,
}

export interface Day {
  breakfast : PlanFood[],
  lunch : PlanFood[],
  snack: PlanFood[],
  dinner: PlanFood[],
}

export interface PlanFood {
  foodId : string,
  name : string
  grams : number,
  protein: number,
  sugar: number,
  fat: number,
  calories : number,
}