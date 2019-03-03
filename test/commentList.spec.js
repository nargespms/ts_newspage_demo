import expect from 'expect';

import { shallowMount } from '../node_modules/@vue/test-utils';
import commentsList from '../src/components/newsContent/commentsList.vue';

// NOTE: it should change when using axios for requesting
describe('commentslist', () => {
  // check if the data comes inside or not
  it('names existance', () => {
    const wrapper = shallowMount(commentsList);
    expect(wrapper.find('.cm_inner_wrapp').exists()).toBe(true);
  });
});
