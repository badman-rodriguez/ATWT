// helper function that mounts and returns the rendered text
import Vue from 'vue';

export function addProps (Component, propsData) {
  const comp = Vue.extend(Component)
  const vm = new comp({ propsData: propsData }).$mount();
  return vm.$el;
}