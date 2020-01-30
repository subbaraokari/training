import { Component, OnInit,EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes=[
    {name:'Pizzaa',description:'for testig purpose',imageUrl:'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'},
    {name:'Pastra',description:'Pastra testing',imageUrl:'https://images.unsplash.com/photo-1551183053-bf91a1d81141?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=803&q=80'}
  ]
  @Output() recipeWasSelected=new EventEmitter<{name:string,description:string,imageUrl:string}>();
  constructor() { }

  ngOnInit() {
  }
  onRecipeWasSelected(recipe){
      this.recipeWasSelected.emit(recipe);
  }

}
