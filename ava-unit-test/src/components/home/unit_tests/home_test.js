import test from 'ava';
import Vue from 'vue';
import Component from '../HomePage.vue';

test('renders', t => {
	const vm = new Vue(Component).$mount();
	const tree = {
		$el: vm.$el.outerHTML
	};
	t.snapshot(tree);
});