<template>
    <form class="columns" style="margin: 1em">
        <input type="text" v-model="searchText"  class="column input is-primary  is-two-thirds" placeholder="Search for Product"  style="padding: 1em; margin-right: 1%"/>
        <a class="button is-primary column is-one-quarter" style="padding: 1em; display: block" @click.prevent="submitQuery">Search </a>
    </form>
</template>
<script>
    import {EventBus} from '../globals/EventBus.js';

    export default {
        name: 'search-field',
        data() {
            return {
                searchText: ''
            }
        },
        methods: {
            submitQuery () {
                EventBus.$emit('search:query', (this.searchText));
            }
        }
    }
</script>