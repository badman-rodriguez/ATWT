<template>
    <ul class="columns"  style="flex-wrap: wrap">
        <li is="ProductThing" v-for="(productItem, index) in test" :key="index" :productItem="productItem" > </li>
    </ul>
</template>
<style scoped>
    .columns {
        padding:.5em
    }
</style>
<script>
    import ProductThing from './Product.vue';
    export default {
        name: 'product-list',
        props: ['test'],
        components: {
            ProductThing
        },
   }
</script>