<template>
  <div class="stars">
    <span v-for="(star, index) in starFileNames" :key="index">
      <img :src="getImageUrl(`${star}.svg`)" />
    </span>
  </div>
</template>

<script>
export default {
  name: "Rating",
  props: {
    rating: Number
  },
  computed: {
    // an array of star names based on rating
    starFileNames: function() {
      const stars = [
        "star-empty",
        "star-empty",
        "star-empty",
        "star-empty",
        "star-empty"
      ];

      // add a star for each full rating
      const fullStarsCount = Math.floor(this.rating);
      for (let index = 0; index < fullStarsCount; index++) {
        stars[index] = "star";
      }

      // if rating has a decimal point, add half a star
      if (!Number.isInteger(this.rating)) {
        stars[Math.floor(this.rating)] = "star-half";
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
