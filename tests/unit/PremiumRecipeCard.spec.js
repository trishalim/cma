import { shallowMount, createLocalVue } from "@vue/test-utils";
import PremiumRecipeCard from "@/components/PremiumRecipeCard.vue";

describe("RecipeDetail.vue", () => {
  const vue = createLocalVue();
  const wrapper = shallowMount(PremiumRecipeCard, {
    propsData: {
      title: "Low Carb Thai Chicken Curry With Coconut Cauliflower Rice",
      rating: 3.5,
      ratingCount: 200,
      duration: 135,
      energy: 489,
      energyUnit: "Kilojoules",
      carbs: 20,
      protein: 16,
      fats: 6,
      isLiked: true,
      imageFileName: "thai-curry.png"
    }
  });

  it("Displays filled heart if liked", () => {
    expect(wrapper.find(".heart").classes()).toContain("heart-liked");
  });

  it("Displays empty heart if not liked", async () => {
    wrapper.setProps({ isLiked: false });
    await vue.nextTick();
    expect(wrapper.find(".heart").classes()).toContain("heart-not-liked");
  });
})