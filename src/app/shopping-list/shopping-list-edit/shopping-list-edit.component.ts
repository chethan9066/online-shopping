import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter, Input, OnDestroy } from '@angular/core';
import { Ingredients } from '../../shared/ingredient.module';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit, OnDestroy {
  // @ViewChild('nameInput',{static:false}) nameRef:ElementRef;
  // @ViewChild('amountInput',{static:false}) amountRef:ElementRef;
  // @Output() ingredientAdded = new EventEmitter<Ingredients>();
  @ViewChild('SLF') shoppingListForm: NgForm;
  subscription: Subscription;
  editIndex:number;
  editIngredient:Ingredients;
  editing:boolean=false;

  constructor(private shoppingListService : ShoppingListService) { }

  ngOnInit(): void {
    this.subscription = this.shoppingListService.editMode.subscribe(
      (i:number) =>{
        this.editing = true;
        this.editIndex = i;
        this.editIngredient = this.shoppingListService.getEditIngredient(i);
        this.shoppingListForm.setValue({
          name: this.editIngredient.name,
          amount: this.editIngredient.amount
        });
      }
    )
  }

  onAddItem(){
    // console.log(this.shoppingListForm);
    // const ingName = this.nameRef.nativeElement.value;
    // const ingAmount = this.amountRef.nativeElement.value;
    // const newIngredient = new Ingredients(ingName,ingAmount);
    // // this.ingredientAdded.emit(newIngredient);
    const ingName = this.shoppingListForm.value.name;
    const ingAmount = this.shoppingListForm.value.amount;
    const newIngredient = new Ingredients(ingName,ingAmount);
    if(this.editing){
      this.shoppingListService.updateIngredient(newIngredient,this.editIndex);
    }else {
    this.shoppingListService.addIngredients(newIngredient);
    }
    this.onClear();

  }

  onClear(){
    this.editing = false;
    this.shoppingListForm.reset();

  }

  onRemove(){
    this.shoppingListService.removeIngredient(this.editIndex);
    this.onClear();
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
