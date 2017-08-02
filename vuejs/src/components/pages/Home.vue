<template>
    <main>
        <search-field></search-field>
        <movie-item></movie-item>
        <div class="container">
            <ul class="row">
                <recipe-item v-for="(recipe, key) in recipess" :key="key" :recipe="recipe.recipe"></recipe-item>
            </ul>
        </div>
    </main>
</template>
<script>
    import RecipeItem from '../RecipeItem';
    import MovieItem from '../MovieItem';
    import SearchField from '../SeachField';
  
    import {bus} from '../../helpers/apiCalls.js';

    import { mapGetters, mapActions } from 'vuex'

    export default {
        name: 'home',
        data() {
            return {
                recipess: []
            }
        },
          computed: {
        // mix the getters into computed with object spread operator
        ...mapGetters([
            'recipes'        
            ])
        },
        components: {
            RecipeItem,
            MovieItem,
            SearchField
        },
        mounted() {
            bus.$on('updateList', (results) => {
                this.recipess = results.hits;
            });
        },
        methods: {
            ...mapActions([
                'getRecipes'
            ])
        }
    }
</script>