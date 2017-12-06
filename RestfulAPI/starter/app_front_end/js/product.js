var app = new Vue({
  el: '#product-app',
  data: {
    product: {
      product_name: '',
      product_description: ''
    }
  },
  mounted() {
    this.getProduct();
  },
  methods: {
    getProduct: function () {
      let self = this;
      axios.get('/product/' + window.location.search.slice(1))
      .then(function (response) {
        self.product = response.data;
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  }
});