import expect from 'expect';

import { shallowMount } from '@vue/test-utils';
import newsInfo from '../src/components/newsContent/newsInfo.vue';

describe('newsinfo', () => {
  it('should show news info', () => {
    const wrapper = shallowMount(newsInfo);
    expect(wrapper.find('.news_info').exists()).toBe(true);
  });
});
