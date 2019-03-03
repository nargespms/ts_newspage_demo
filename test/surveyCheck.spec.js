
import expect from 'expect';

import { shallowMount } from '../node_modules/@vue/test-utils';
import survey from '../src/components/content/survey.vue';


describe('survey', () => {
  // **********************no effected in coverage**********************
  // for checking value of radio button One
  it('when choosing one', () => {
    const wrapper = shallowMount(survey);
    wrapper.find('#one').trigger('click');
    expect(wrapper.find('.choosed_item').text()).toMatch('you chosed : One');
  });
  // for checking value of radio button Two
  it('when choosing two', () => {
    const wrapper = shallowMount(survey);
    wrapper.find('#two').trigger('click');
    expect(wrapper.find('.choosed_item').text()).toMatch('you chosed : Two');
  });
  // // when choosing none
  // it('when choosing none', () => {
  //   const wrapper = shallowMount(survey);
  //   wrapper.find("[type='submit']").trigger('click');
  //   expect(wrapper.find('.survey_msg').exists()).toBe(true);
  // });
  // // when choosing none2
  // it('when choosing none choosing item', () => {
  //   const wrapper = shallowMount(survey);
  //   wrapper.find("[type='submit']").trigger('click');
  //   expect(wrapper.find('.choosed_item').text()).toMatch('you chosed :');
  // });
  // // when choosing none2
  // it('when choosing none number of people', () => {
  //   const wrapper = shallowMount(survey);
  //   wrapper.find("[type='submit']").trigger('click');
  //   expect(wrapper.find('.numpart').text()).toMatch('participated people : 0');
  // });
  // **********************no effected in coverage**********************

  // **********************no effected in coverage**********************
  // if choosing any counter shoud increase
  // it('should not increase number of people  ', () => {
  //   const wrapper = shallowMount(survey);
  //   console.log(wrapper.vm.choosed.length);
  //   expect(wrapper.vm.choosed.length).toBe(0);
  // });
  // **********************no effected in coverage**********************
  // _*_*_*_*_*_**_*_*_*_*_*_*___*_*_*_*_*_*_*_**__*__**_*_*_
  // if choosing any counter shoud increase (choosed item.length != 0)
  it('should increase number of people', () => {
    const wrapper = shallowMount(survey);
    wrapper.find("[type='radio']").trigger('click');
    wrapper.find('form').trigger('submit.prevent');
    expect(wrapper.vm.counter).toBe(1);
  });
  // choosed.length should be 0
  it('shows no option is selected', () => {
    const wrapper = shallowMount(survey);
    expect(wrapper.vm.choosed.length).toEqual(0);
  });
  // _*_*_*_*_*_**_*_*_*_*_*_*___*_*_*_*_*_*_*_**__*__**_*_*_
  it('show somthing is chosen', () => {
    const wrapper = shallowMount(survey);
    wrapper.setData({
      choosed: '',
    });
    wrapper.find('form').trigger('submit.prevent');
    console.log(wrapper.vm.choosed.length);
    console.log(wrapper.vm.showMe.length);
    expect(wrapper.vm.showMe).toBe('please choose one the above & try again!');
    expect(wrapper.vm.choosed.length).toBe(0);
  });
});
