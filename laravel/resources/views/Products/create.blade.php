@extends('layouts.app')

@section('header')
<h1 class="title">
  Create a Product
</h1>
@endsection
@section('content')

<section>
  <form class="form" role="form">
    <div class="field">
      <label class="label" for="name">Product Name</label>
      <div class="control">
        <input type="text" class="input" value="" id="name" name="name" placeholder="Enter Product Name">
      </div>

      <label class="label" for="price">Price</label>
      <div class="control">
        <input type="text" class="input" value="" id="price" name="price" placeholder="Enter Product Name">
      </div>

      <label class="label" for="options">Options</label>
      <div class="control">
        <input type="text" class="input" value="" id="options" name="option" placeholder="Enter Product Name">
      </div>
      
    </div>

    <a type="submit" class="button is-primary" onClick="saveProduct()">Save</a>
  </form>
</section>

<script>
function saveProduct() {
  var product_name = document.getElementById('name').value,
      product_price = document.getElementById('price').value,
      product_options = document.getElementById('options').value;

      sendPost({
        name: product_name,
        price: product_price,
        options: product_options
      });
}

function sendPost (data) {
  axios.post('{{ url('api/products') }}',data)
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
}

</script>
@endsection
