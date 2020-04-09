<template>
  <div class="stars">
    <span v-for="(star, index) in starFileNames" :key="index">
      <img :class="star" :src="getImageUrl(`${star}.svg`)" />
    </span>
  </div>
</template>

<script>
export default {
  name: "Rating",
  props: {
    rating: {
      type: Number,
      default: 0
    }
  },
  computed: {
    // an array of star names based on rating
    starFileNames: function() {
      // set maximum to 5 stars
      const rating = this.rating > 5 ? 5 : this.rating;
      const stars = [
        "star-empty",
        "star-empty",
        "star-empty",
        "star-empty",
        "star-empty"
      ];

      // add a star for each full rating
      const fullStarsCount = Math.floor(rating);
      for (let index = 0; index < fullStarsCount; index++) {
        stars[index] = "star-full";
      }

      // if rating has a decimal point, add half a star
      if (!Number.isInteger(rating)) {
        stars[Math.floor(rating)] = "star-half";
      }

      return stars;
    }
  },
  methods: {
    getImageUrl(imageFileName) {
      return require("../assets/" + imageFileName);
    }
  }
};
</script>
