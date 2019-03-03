import expect from 'expect';

import { shallowMount } from '../node_modules/@vue/test-utils';
import wrappertab from '../src/components/elements/wrappertab.vue';
import tabhotest from '../src/components/elements/tabhotest.vue';
import tabmostcoments from '../src/components/elements/tabmostcoments.vue';
import tabmostview from '../src/components/elements/tabmostview.vue';


// NOTE: it should change when using axios for requesting
describe('tab works correctly', () => {
  // check if the data comes inside or not
  it('names existance', () => {
    const wrapper = shallowMount(tabhotest);
    expect(wrapper.find('.hot').exists()).toBe(true);
  });
  // check if the data comes inside or not
  it('names existance', () => {
    const wrapper = shallowMount(tabmostcoments);
    expect(wrapper.find('.mostcomments').exists()).toBe(true);
  });
  // check if the data comes inside or not
  it('names existance', () => {
    const wrapper = shallowMount(tabmostview);
    expect(wrapper.find('.mostview').exists()).toBe(true);
  });
  // performance of tab
  it('performance of tab', () => {
    const wrapper = shallowMount(wrappertab);
    wrapper.find('.tab_component_but').trigger('click');
    expect(wrapper.vm.currentTab).toBe('hotest');
  });
});
