<template>
    <li class="column is-one-third">
        <div class="card">
            <div class="card-content">
                <p class="title">
                    <img :src="productItem.product.image_src" />
                </p>
            </div>
            <footer>
                <p>
                    <h3 class="title"> {{productItem.product.title}}</h3>
                    {{productItem.product.product_description}}
                </p>
            </footer>
        </div>
    </li>
</template>
<style scoped>
    .title  h3 {
        padding: .5em;
        margin-left: .3em;
    }
    footer {
        border-top: 1px solid #eee;
        padding: .5em;
    }
</style>
<script>
    export default {
        name: 'product',
        props: ['productItem']
    }
</script>