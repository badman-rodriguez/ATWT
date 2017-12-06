var app = new Vue({
  el: '#list-app',
  data: {
    products: []
  },
  mounted() {
    this.fetchProducts();
  },
  methods: {
    fetchProducts: function () {
      let self = this;
      axios.get('/products')
      .then(function (response) {
        self.products = response.data;
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  }
});