import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../recipe';
@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html',
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('pancakes', 'fluffy goodness', 'http://www.seriouseats.com/images/2015/05/20150517-pancake-primary.jpg',[]),
    new Recipe('bacon', 'the best food in the world', 'http://sites.psu.edu/siowfa15/wp-content/uploads/sites/29639/2015/10/Bacon.jpg',[]),
  ];
  @Output() recipeSelected = new EventEmitter<Recipe>();
  // recipe=new Recipe('Dummy', 'Dummy', 'http://previewcf.turbosquid.com/Preview/2014/05/21__03_48_03/dummy_1.jpg73a34682-6a0e-42f8-bbeb-b21eaa495913Original.jpg');

  constructor() { }

  ngOnInit() {
  }

  onSelected(recipe: Recipe){
    this.recipeSelected.emit(recipe);
  }
}
