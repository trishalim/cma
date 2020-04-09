import { withKnobs, text, number, boolean } from "@storybook/addon-knobs";

import RecipeDetail from "../src/components/RecipeDetail.vue";

export default {
  title: "RecipeDetail",
  component: RecipeDetail,
  decorators: [withKnobs]
};

export const Default = () => ({
  components: { RecipeDetail },
  props: {
    duration: {
      default: number("Duration (minutes)", 150)
    },
    energy: {
      default: number("Energy", 300)
    },
    energyUnit: {
      default: text("Energy Unit", "kcal")
    },
    showIcon: {
      default: boolean("Show Icons", true)
    },
  },
  template:
  `
    <RecipeDetail
      :duration="duration"
      :energy="energy"
      :energyUnit="energyUnit"
      :showIcon="showIcon"
    />
  `
});
