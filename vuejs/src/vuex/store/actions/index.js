import * as types from '../mutation-types'

export const getRecipes = ({commit}, recipes) => {
    commit(types.GET_RECIPES, {
        recipes: recipes
    });
}

export const clearRecipe = ({commit}) => {
    commit(types.CLEAR_SEARCH, {
        recipes: []
    });
}