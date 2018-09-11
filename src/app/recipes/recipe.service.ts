import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            'Tasty meatballs',
            'Homemade Italian meatballs',
            'https://images.media-allrecipes.com/userphotos/720x405/4531471.jpg',
            [
                new Ingredient('Beef', 1),
                new Ingredient('Onion', 5)
            ]),
        new Recipe(
            'Good old fashioned pancakes',
            'From my Grandma\'s recipe book',
            'https://images.media-allrecipes.com/userphotos/720x405/4948036.jpg',
            [
                new Ingredient('Flour', 1),
                new Ingredient('Sugar', 2)
            ])
    ];

    constructor(private slService: ShoppingListService){}

    getRecipes() {
        return this.recipes.slice(); //return a copy of the recipe array
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }

    addIngredientsToSl(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }
} 