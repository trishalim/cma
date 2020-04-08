import { shallowMount, createLocalVue } from '@vue/test-utils';
import Rating from '@/components/Rating.vue';

describe("Rating.vue", () => {
  const vue = createLocalVue();
  const wrapper = shallowMount(Rating, {
    propsData: {
      rating: 4
    }
  });

  it('Displays star rating correctly if rating is whole number', () => {
    expect(wrapper.vm.starFileNames).toEqual([
      "star-full", "star-full", "star-full", "star-full", "star-empty"
    ]);

    expect(wrapper.findAll("img.star-full").length).toBe(4);
    expect(wrapper.findAll("img.star-empty").length).toBe(1);
  });

  it('Displays star rating correctly if rating is a decimal (has a half star)', async () => {
    wrapper.setProps({ rating: 2.5 });
    await vue.nextTick();

    expect(wrapper.vm.starFileNames).toEqual([
      "star-full", "star-full", "star-half", "star-empty", "star-empty"
    ]);

    expect(wrapper.findAll("img.star-full").length).toBe(2);
    expect(wrapper.findAll("img.star-half").length).toBe(1);
    expect(wrapper.findAll("img.star-empty").length).toBe(2);
  });
})