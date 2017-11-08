@extends('layouts.app')

@section('header')
<h1 class="title">
  {{ $product->name }}
</h1>
@endsection

@section('content')
<div class="content">
  <ul class="has-text-left">
    <li> <b>Product Title:</b> {{ $product->name }}</li>
    <li> <b>Price:</b> ${{ $product->price }}</li>
    <li>
      <label><b>Product Options</b></label>
      <select>
        @foreach($options as $option)
          <option value="{{ $option }}">{{ $option }}</option>
        @endforeach
      </select>
    </li>
  </ul>

  <p class="has-text-left">
    <!--description[0]->body  -->
  </p>
</div>

@endsection
