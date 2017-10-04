import SearchField from '../SearchField.vue';
import Vue from 'vue';
import test from 'ava';

test('SearchField.vue mounted', t => {
  t.plan(1);
  const vm = new Vue(SearchField);

  t.is(typeof vm.$mount, 'function');
});

test('Searchfield.vue renders', t => {
  t.plan(1);
  const vm = new Vue(SearchField).$mount();
  const tree = {
		$el: vm.$el.outerHTML
	};
  t.snapshot(tree);
});

test('SearchField.vue data: searchText is blank', t => {
  t.plan(2);
  const vm = new Vue(SearchField).$mount();

  let defaultSearchText = vm.searchText; 

  t.is(typeof defaultSearchText, 'string');
  t.is(defaultSearchText, '');
})