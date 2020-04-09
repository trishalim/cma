<script>
export default {
  name: "RecipeCard",
  props: {
    title: {
      type: String,
      default: ""
    },
    rating: {
      type: Number,
      default: 0
    },
    ratingCount: {
      type: Number,
      default: 0
    },
    duration: {
      type: Number,
      default: 0
    },
    energy: {
      type: Number,
      default: 0
    },
    energyUnit: {
      type: String,
      default: "Calories"
    },
    carbs: Number,
    protein: Number,
    fats: Number,
    isLiked: Boolean,
    imageFileName: {
      type: String,
      default: ""
    }
  },
  methods: {
    getImageUrl(imageFileName) {
      return require("../assets/" + imageFileName);
    }
  }
};
</script>
