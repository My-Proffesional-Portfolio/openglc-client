import { Component, OnInit } from '@angular/core';

interface newMealQuantity
{
  mealName: string;
  quantity: number;
}


@Component({
  selector: 'app-meal-event',
  templateUrl: './meal-event.component.html',
  styleUrls: ['./meal-event.component.css']
})
export class MealEventComponent implements OnInit {


  newMealslist : newMealQuantity[] = [];
  newMealItem : newMealQuantity = <newMealQuantity>{mealName : "", quantity: 1};

  eventDate: Date = new Date();


  constructor() { }

  ngOnInit(): void {
  }

  addToNewMealList(){

    debugger;
    if (this.newMealItem.mealName.trim() === "")
      return;

    var localNewMealItem = this.newMealItem;
    this.newMealslist.push(localNewMealItem);

    this.newMealItem = <newMealQuantity>{mealName : "", quantity: 1};

  }

  deleteNewMealItem(index: number){
    this.newMealslist.splice(index, 1);
  }

}
