<template>
    <section>
        <search-field></search-field>
        <product-list :test="listOfProducts"></product-list>
    </section>
</template>
<script>
    import ProductList from  './ProductList.vue';
    import SearchField from './searchField.vue';
    import apiService from '../../apiService.js';
    import {EventBus} from '../globals/EventBus.js';

    export default {
        name: 'product-page',
        data() {
            return {
                listOfProducts: []
            }
        },
        components: {
            ProductList,
            SearchField
        },
        mounted() {
            EventBus.$on('search:query', (query) => {
                apiService.searchProducts(query).then((response) => {
                    this.listOfProducts = response.data;
                }).catch((e) => {
                    console.log('error happened');
                });
            })

            apiService.getProducts().then((response) => {
                this.listOfProducts = response.data;
            });
        }
    }
</script>