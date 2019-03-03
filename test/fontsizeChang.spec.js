import Vue from 'vue';
import expect from 'expect';

import { shallowMount } from '../node_modules/@vue/test-utils';
import changeFont from '../src/components/newsContent/news.vue';


describe('news', () => {
  // for checking if the content increase its font size or not
  it('increase content when button is clicked', () => {
    const wrapper = shallowMount(changeFont);
    wrapper.find('.increase').trigger('click');
    expect(wrapper.find('div').text()).toMatch('15');
  });
  // for checking if the content decrease its font size or not
  it('decrease content when button is clicked', () => {
    const wrapper = shallowMount(changeFont);
    wrapper.find('.decrease').trigger('click');
    expect(wrapper.find('div').text()).toMatch('13');
  });
  it('will time out', (done) => {
    Vue.nextTick(() => {
      expect(true).toBe(true);
      done();
    });
  });
});
