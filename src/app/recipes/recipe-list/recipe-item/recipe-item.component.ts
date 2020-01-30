import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe:{name:string,description:string,imageUrl:string};
  @Output() recipeSelected=new EventEmitter<void>();
  constructor() { }

  ngOnInit() {
  }
  onSelect()
  {
    this.recipeSelected.emit();
  }

}
