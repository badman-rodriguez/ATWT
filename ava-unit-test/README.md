
#AVA and VueJS Basic unit test

===================

This repository is an extension of the meetup on Oct 4, 2017:  [https://www.meetup.com/All-Things-Web-Tech/events/242149694](https://www.meetup.com/All-Things-Web-Tech/events/242149694)

Frameworks Used:
- Vuejs - [https://vuejs.org/](https://vuejs.org/)
- Ava - [ https://github.com/avajs/ava]( https://github.com/avajs/ava)
- Bulma - [http://bulma.io/](http://bulma.io/)

----------


What was done:
-------------

A Simple Vue App
- Uses Mockable.io for a fake API service that returns 10 items on Load
- Contains ```product.vue productList.vue search.vue ```

### Product List Vue

```

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
```

### Product Vue
```
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
```
### Search Field
```
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
```
The unit test use the following functions from Ava's api:
- **t.is()**
-** t.plan()**
- **t.not**
- ** t.snapshot() **
Definitely checkout the rest of the Api [https://github.com/avajs/ava#api](https://github.com/avajs/ava#api)

In order to set Ava up properly and have it test and transpile VueJS components a few steps are needed to get it working.

### Step 1 - Ava Settings in Package json

```
"ava": {
    "babel": {
      "babelrc": true
    },
    "require": [
      "./testsHelpers/setup.js",
      "babel-register"
    ],
    "files": [
      "./src/components/**/unit_tests/*.js"
    ]
  },

```
### Step 2 - Vue Test Helper

```
// Setup browser environment
require('browser-env')();
const hooks = require('require-extension-hooks');
const Vue = require('vue');

// Setup Vue.js to remove production tip
Vue.config.productionTip = false;

// Setup vue files to be processed by `require-extension-hooks-vue`
hooks('vue').plugin('vue').push();
// Setup vue and js files to be processed by `require-extension-hooks-babel`
hooks(['vue', 'js']).plugin('babel').push();
```

### Step 3 - Setup Vue props to be usable

```
// helper function that mounts and returns the rendered text
import Vue from 'vue';

export function addProps (Component, propsData) {
  const comp = Vue.extend(Component)
  const vm = new comp({ propsData: propsData }).$mount();
  return vm.$el;
}
```	

And finally just run ```npm run test``` to  have ava run the test. To see the code coverage do ``` npm run test-nyc```

