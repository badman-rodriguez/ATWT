var app = new Vue({
  el: '#create-product',
  data: {
    product_form: {
      product_name: '',
      product_description: '',
      status: '',
      created_date: Date.now(),
      update_date: Date.now()
    }
  },
  methods: {
    saveProduct: function () {
      let successElement = document.getElementById('success-overlay');
      axios.post('/products', this.product_form)
      .then(function (response) {
        successElement.classList.add('fadeIn'); 
        
        setTimeout(function() {
          successElement.classList.remove('fadeIn');         
        }, 3000);
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  }
});