import { action } from "@storybook/addon-actions";
import { withKnobs, text, number, boolean } from "@storybook/addon-knobs";

import PremiumRecipeCard from "../src/components/PremiumRecipeCard.vue";

export default {
  title: "PremiumRecipeCard",
  component: PremiumRecipeCard,
  decorators: [withKnobs]
};

export const Default = () => ({
  components: { PremiumRecipeCard },
  props: {
    title: {
      default: text('Title', 'Low Carb Thai Chicken Curry With Coconut Cauliflower Rice')
    },
    rating: {
      default: number('Rating', 4.5)
    },
    ratingCount: {
      default: number('Number of Ratings', 200)
    },
    duration: {
      default: number('Duration (minutes)', 200)
    },
    energy: {
      default: number('Energy', 4.5)
    },
    energyUnit: {
      default: text('Energy Unit', 'Calories')
    },
    carbs: {
      default: number('Carbohydrates Amount (g)', 34)
    },
    protein: {
      default: number('Protein Amount (g)', 10)
    },
    fats: {
      default: number('Fats Amount (g)', 5)
    },
    isLiked: {
      default: boolean('Liked', false)
    },
    imageFileName: {
      default: text('Image File Name', 'thai-curry.png')
    },
  },
  template:
  `
    <PremiumRecipeCard @click="action"
      v-bind:title="title"
      v-bind:rating="rating"
      v-bind:ratingCount="ratingCount"
      v-bind:duration="duration"
      v-bind:energy="energy"
      v-bind:energyUnit="energyUnit"
      v-bind:carbs="carbs"
      v-bind:protein="protein"
      v-bind:fats="fats"
      v-bind:isLiked="isLiked"
      v-bind:imageFileName="imageFileName"
    />
  `,
  methods: { action: action("clicked") }
});
