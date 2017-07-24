<template>
<main>
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
</main>
</template>
<script>
  import SearchField from './SeachField.vue';

  export default {
    name: 'home',
    components: {
      SearchField
    },
    data() {
      return {

      }
    },
    methods: {}
  }
</script>
