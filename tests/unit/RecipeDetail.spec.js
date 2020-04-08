import { shallowMount, createLocalVue } from '@vue/test-utils';
import RecipeDetail from '@/components/RecipeDetail.vue';

describe("RecipeDetail.vue", () => {
  const vue = createLocalVue();
  const wrapper = shallowMount(RecipeDetail, {
    propsData: {
      duration: 215,
      energy: 200,
      energyUnit: 'Kilojoules'
    }
  });

  it('Duration is displayed correctly in the format: x hr x min', () => {
    expect(wrapper.vm.durationDisplay.trim()).toBe("3 hr 35 min");
  });

  it('Minutes are not displayed if 0', () => {
    wrapper.setProps({ duration: 60});
    expect(wrapper.vm.durationDisplay.trim()).toBe("1 hr");
  });

  it('Hours are not displayed if 0', () => {
    wrapper.setProps({ duration: 15});
    expect(wrapper.vm.durationDisplay.trim()).toBe("15 min");
  });

  it('Kilojoules are converted to Calories', () => {
    expect(wrapper.find('.energy').text()).toContain('836 Kilojoules');
  });

  it('Calories are not converted', async () => {
    wrapper.setProps({ energyUnit: 'Calories' });
    await vue.nextTick();
    expect(wrapper.find('.energy').text()).toContain('200 Calories');
  })
})