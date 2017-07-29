<template>
  <li class="col s3">
    <div>
      <img src="http://lorempixel.com/400/200/" />
      <a href="#0">Recipe Thing</a>
    </div>
  </li>
</template>
<script>
export default {
  name: 'recipe-item',
  data() {
    return {}
  },
  props:['recipe'],
  methods: {}
}
</script>
