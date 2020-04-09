import { withKnobs, number } from "@storybook/addon-knobs";

import Macros from "../src/components/Macros.vue";

export default {
  title: "Macros",
  component: Macros,
  decorators: [withKnobs]
};

export const Default = () => ({
  components: { Macros },
  props: {
    carbs: {
      default: number("Carbohydrates Amount (g)", 2)
    },
    protein: {
      default: number("Protein Amount (g)", 26)
    },
    fats: {
      default: number("Fats Amount (g)", 43)
    }
  },
  template:
  `
    <Macros
      :carbs="carbs"
      :protein="protein"
      :fats="fats"
    />
  `
});
