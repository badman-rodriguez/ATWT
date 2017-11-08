@extends('layouts.app')

@section('header')
<h1 class="title">
  List of Products
</h1>
@endsection

@section('content')
  <section>
    <table class="table">
      <thead>
        <tr>
          <th> Name </th>
          <th> Price </th>
          <th> Options </th>
        </tr>
      </thead>
      <tbody>
           @foreach ($list_of_products as $product)
               <tr>
                 <td> <a href="{{ url('magic/products/'.$product->id)}}">{{ $product->name }}</a></td>
                 <td> <a href="{{ url('magic/products/'.$product->id)}}">{{ $product->price }}</a></td>
                 <td> <a href="{{ url('magic/products/'.$product->id)}}">{{ $product->options }}</a></td>
               </tr>
           @endforeach
      </tbody>
    </table>
  </section>
@endsection
