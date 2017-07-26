<template>
<div>
  <page-header></page-header>
  <form>
    <input type='text' />
    <button> Search </button>
  </form>
  <div>
    <h2>
      Movie Item
    </h2>
  </div>
  <div>
    <ul>
      <li>
        recipe item
      </li>
      <li>
        recipe item
      </li>
      <li>
        recipe item
      </li>
    </ul>
  </div>
</div>
</template>
<script>
  import SearchField from './SeachField.vue';

  import PageHeader from './Header.vue';
  import PageFooter from './Footer.vue';

  export default {
    name: 'home',
    components: {
      SearchField,
      PageHeader
    },
    data() {
      return {

      }
    },
    methods: {}
  }
</script>
