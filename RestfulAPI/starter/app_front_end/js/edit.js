var app = new Vue({
  el: '#edit-product',
  data: {
    product_form: {
      product_name: '',
      product_description: '',
      status: '',
      created_date: '',
      update_date:''
    }
  },
  mounted () {
    this.getProduct();
  },
  methods: {
    getProduct: function () {
      let self = this;
      
      axios.get('/product/' + window.location.search.slice(1))
      .then(function (response) {
        self.product_form = response.data;
      })
      .catch(function (error) {
        console.log(error);
      });
    },
    saveProduct: function () {
      let successElement = document.getElementById('success-overlay');
      
      axios.put('/product/'+ window.location.search.slice(1), this.product_form)
      .then(function (response) {
        successElement.classList.add('fadeIn');
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  }
});