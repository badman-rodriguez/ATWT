<template>
    <main>
        <search-field></search-field>
        <movie-item></movie-item>
        <div class="container">
            <ul class="row">
                <recipe-item v-for="(recipe, key) in recipes" :key="key" :recipe="recipe.recipe"></recipe-item>
            </ul>
        </div>
    </main>
</template>
<script>
    import RecipeItem from '../RecipeItem';
    import MovieItem from '../MovieItem';
    import SearchField from '../SeachField';
  
    import {bus} from '../../helpers/apiCalls.js';

    export default {
        name: 'home',
        data() {
            return {
                recipes: [],
                movie: {}
            }
        },
        components: {
            RecipeItem,
            MovieItem,
            SearchField
        },
        mounted() {
            bus.$on('updateList', (results) => {
                this.recipes = results.hits;
            });
        }
    }
</script>