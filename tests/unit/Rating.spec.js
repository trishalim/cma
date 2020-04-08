import { shallowMount } from '@vue/test-utils';
import Rating from '@/components/Rating.vue';

describe("Rating.vue", () => {
  const wrapper = shallowMount(Rating, {
    propsData: {
      rating: 4
    }
  });

  it('Displays star rating correctly if rating is whole number', () => {
    expect(wrapper.vm.starFileNames).toEqual([
      "star", "star", "star", "star", "star-empty"
    ]);
  });

  it('Displays star rating correctly if rating is a decimal (has a half star)', () => {
    wrapper.setProps({ rating: 2.5});
    expect(wrapper.vm.starFileNames).toEqual([
      "star", "star", "star-half", "star-empty", "star-empty"
    ]);
  });
})