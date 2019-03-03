
import expect from 'expect';

import { shallowMount } from '../node_modules/@vue/test-utils';
import sendComment from '../src/components/newsContent/sendComment.vue';

const { log } = console;

describe('send Comments ', () => {
  // send comment succesfully variables shoud set to null
  it('send comment succesfully1', () => {
    const wrapper = shallowMount(sendComment);
    wrapper.setData({
      Name: 'sara',
      opinion: 'something',
      email: 'somethingElse',
      message: "'your message has succesfully sent'",
    });
    wrapper.find('form').trigger('submit.prevent');

    expect(wrapper.vm.opinion).toBe('');
    expect(wrapper.vm.Name).toBe('');
    expect(wrapper.vm.email).toBe('');
    expect(wrapper.vm.message).toBe("'your message has succesfully sent'");
    // log(wrapper.vm.message);
  });

  // send comment succesfully2 errors length shoud be 0
  it('send comment succesfully2', () => {
    const wrapper = shallowMount(sendComment);
    wrapper.setData({
      Name: 'sara',
      opinion: 'something',
      email: 'somethingElse',
    });
    wrapper.find('form').trigger('submit.prevent');
    // expect(wrapper.vm.errors).toBe([]);
    expect(wrapper.vm.errors.length).toBe(0);
  });

  // send comment unsuccesfully email not intered error has value empty email
  it('send comment unsuccesfully email error', () => {
    const wrapper = shallowMount(sendComment);
    wrapper.setData({
      Name: 'sara',
      opinion: 'something',
    });
    wrapper.find('form').trigger('submit.prevent');
    // expect(wrapper.vm.opinion).toBe(null);
    // log(wrapper.vm.errors);
    expect(wrapper.find('.error_wrap').exists()).toBe(true);
  });

  // send comment unsuccesfully email not intered opinion empty
  it('send comment unsuccesfully opinion error2', () => {
    const wrapper = shallowMount(sendComment);
    wrapper.setData({
      Name: 'sara',
      email: 'somethingElse',
    });
    wrapper.find('form').trigger('submit.prevent');
    // expect(wrapper.vm.opinion).toBe(null);
    // log(wrapper.setData());
    expect(wrapper.vm.opinion).toBe('');
  });
  //  send comments succesfully after fixing errors
  it('send comments succesfully after fixing errors', () => {
    const wrapper = shallowMount(sendComment);
    wrapper.setData({
      opinion: 'something',
      email: 'somethingElse',
      errors: ['sdszd'],
      // Secmessage: "'congrats! your message has succesfully sent'",
      // message: '',
    });
    wrapper.find('form').trigger('submit.prevent');
    expect(wrapper.vm.opinion).toBe('');
    expect(wrapper.vm.Name).toBe('');
    expect(wrapper.vm.email).toBe('');
    expect(wrapper.vm.Secmessage).toBe("'congrats! your message has succesfully sent'");
  });
});
