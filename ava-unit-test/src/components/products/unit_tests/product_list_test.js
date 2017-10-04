import ProductList from '../productList.vue';
import Vue from 'vue';
import test from 'ava';
import {addProps} from '../../../../testsHelpers/utils.js';

test('ProductList.vue mounted', t => {
  t.plan(1);
  const vm = new Vue(ProductList);

  t.is(typeof vm.$mount, 'function');
});

test('ProductList.vue renders', t => {
  t.plan(1);
  const vm = new Vue(ProductList).$mount();
  const tree = {
		$el: vm.$el.outerHTML
	};
  t.snapshot(tree);
});

test('ProductList.vue list render', t => {
    t.plan(3);
    let vueElementText = addProps(ProductList,  {
      test: [{
        product: {
          product_description: 'test-description',
          title: 'title-test',
          image_src: 'image_url'
        }
      }]
    }).textContent;
    let value = vueElementText.includes('test-description');

    t.is(value, true);

    value = vueElementText.includes('title-test');
    t.is(value, true);
    
    t.pass();
});