import { withKnobs, number } from "@storybook/addon-knobs";

import Rating from "../src/components/Rating.vue";

export default {
  title: "Rating",
  component: Rating,
  decorators: [withKnobs]
};

export const Default = () => ({
  components: { Rating },
  props: {
    rating: {
      default: number("Rating", 5)
    }
  },
  template:
  `
    <Rating
      :rating="rating"
    />
  `
});
