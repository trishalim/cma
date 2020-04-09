import { withKnobs, text, number } from "@storybook/addon-knobs";

import RecipeOfTheDayCard from "../src/components/RecipeOfTheDayCard.vue";

export default {
  title: "RecipeOfTheDayCard",
  component: RecipeOfTheDayCard,
  decorators: [withKnobs]
};

export const Default = () => ({
  components: { RecipeOfTheDayCard },
  props: {
    title: {
      default: text("Title", "Keto Italian Beef With Cabbage Noodles")
    },
    rating: {
      default: number("Rating", 5)
    },
    duration: {
      default: number("Duration (minutes)", 8)
    },
    energy: {
      default: number("Energy", 269)
    },
    energyUnit: {
      default: text("Energy Unit", "kcal")
    },
    carbs: {
      default: number("Carbohydrates Amount (g)", 2)
    },
    protein: {
      default: number("Protein Amount (g)", 26)
    },
    fats: {
      default: number("Fats Amount (g)", 43)
    },
    imageFileName: {
      default: text("Image File Name", "keto-italian-beef.png")
    },
  },
  template:
  `
    <RecipeOfTheDayCard
      :title="title"
      :rating="rating"
      :duration="duration"
      :energy="energy"
      :energyUnit="energyUnit"
      :carbs="carbs"
      :protein="protein"
      :fats="fats"
      :imageFileName="imageFileName"
    />
  `
});
