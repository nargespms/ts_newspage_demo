import expect from 'expect';

import { shallowMount } from '@vue/test-utils';
import logo from '../src/components/header/logo.vue';

describe('logo picture', () => {
  // check if the logo exist
  it('logo existance', () => {
    const wrapper = shallowMount(logo);
    expect(wrapper.find('.HeaderPicImg').exists()).toBe(true);
  });
});
