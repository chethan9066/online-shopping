import{ Ingredients } from '../../shared/ingredient.module';
import  * as ShoppingListActions from './shoppingList.actions';

const initialState = {
    ingredients: [
        new Ingredients('Apple',8),
        new Ingredients('Tamoats',6)
    ]
} 

export function ShoppingListReducer(state = initialState , action:ShoppingListActions.AddIngredients){
    switch ( action.type ){
        case ShoppingListActions.ADD_INGREDIENTS: 
        return { 
            ...state,
            ingredients: [ ...state.ingredients , action.payload]
        }

        default: 
            return state;
    }
}