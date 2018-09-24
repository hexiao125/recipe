import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class RecipeService {
    recipesChanged = new Subject<Recipe[]>();

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

    constructor(private slService: ShoppingListService) {}

    setRecipes( recipes: Recipe[]) {
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice());
    }

    getRecipes() {
        return this.recipes.slice(); //return a copy of the recipe array
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }

    addIngredientsToSl(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
    }



} 