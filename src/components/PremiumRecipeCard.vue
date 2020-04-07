<template>
  <div class="recipe-card">

    <div class="recipe-image" :style="{'background-image': `url(${getImageUrl(imageFileName)})`}">
      <div class="recipe-image-overlay"></div>
      <img class="heart" v-if="!isLiked" v-bind:src="getImageUrl('heart-outline.svg')" />
      <img class="heart" v-if="isLiked" v-bind:src="getImageUrl('heart-filled.svg')" />
      <div class="premium-recipe">
        <img v-bind:src="getImageUrl('trophy.svg')" />
        Premium Recipe
      </div>
    </div>

    <div class="recipe-desc">

      <h3 class="recipe-title"> {{ title }} </h3>

      <div class="recipe-rating">
        <Rating v-bind:rating="rating" />
        <div class="rating-count">{{ ratingCount }} ratings</div>
      </div>

      <div class="recipe-detail">
        <div class="left">
          <div class="duration">
            <img v-bind:src="getImageUrl('clock.svg')" />
            {{ durationDisplay }}
          </div>
          <div class="energy">
            <img v-bind:src="getImageUrl('flame.svg')" />
            {{ energyDisplay }}
          </div>
        </div>

        <div class="right">
          <div class="macro">
            <img v-bind:src="getImageUrl('dot-red.svg')" />{{ carbs }}g
          </div>
          <div class="macro">
            <img v-bind:src="getImageUrl('dot-blue.svg')" />{{ protein }}g
          </div>
          <div class="macro">
            <img v-bind:src="getImageUrl('dot-yellow.svg')" />{{ fats }}g
          </div>
        </div>
      </div>

    </div>

  </div>

</template>

<script>
import Rating from "./Rating.vue";
export default {
  name: "PremiumRecipeCard",
  components: {
    Rating
  },
  props: {
    title: String,
    rating: Number,
    ratingCount: Number,
    duration: Number,
    energy: Number,
    energyUnit: String,
    carbs: Number,
    protein: Number,
    fats: Number,
    isLiked: Boolean,
    imageFileName: String
  },
  computed: {
    energyDisplay: function() {
      let energyValue = this.energy;

      if (this.energyUnit.toLowerCase() === 'kilojoules') {
        energyValue = Math.floor(energyValue * 4.184);
      }

      return `${energyValue} ${this.energyUnit}`;
    },
    durationDisplay: function() {
      const hours = Math.floor(this.duration / 60);
      const minutes = this.duration - (hours * 60);

      let durationDisplay = '';
      if (hours) durationDisplay += `${hours} hr `;
      if (minutes) durationDisplay += `${minutes} min `;
      return durationDisplay;
    }
  },
  methods: {
    getImageUrl(imageFileName) {
      return require("../assets/" + imageFileName);
    }
  }
};
</script>

<style scoped>

  .recipe-card {
    width: 343px;
    height: 318px;
    background: white;
    box-shadow: 0px 13px 35px rgba(0, 30, 47, 0.1);
    border-radius: 12px;
    text-align: left;
  }
  .recipe-image {
    height: 200px;
    border-radius: 12px 12px 0 0;
    background-position: center;
    position: relative;
    background-size: cover;
  }
  .recipe-image-overlay{
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.0001) 0%, rgba(22, 27, 35, 0.2) 70.94%, rgba(26, 29, 34, 0.79) 106.25%);
  }
  .recipe-image:hover .recipe-image-overlay {
    background: #b6b6b64a;
    transition: 0.1s;
  }
  .recipe-desc {
    padding: 8px 16px;
  }
  .recipe-title {
    font-size: 18px;
    line-height: 20px;
    margin: 0;
    margin-bottom: 12px;

    /* truncate to 2 lines */
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .heart {
    position: absolute;
    right: 16px;
    top: 16px;
    cursor: pointer;
  }
  .premium-recipe {
    position: absolute;
    left: 8px;
    bottom: 8px;
    padding: 4px 8px;
    display: flex;
    background: #ffffff47;
    border-radius: 10px;
    color: white;
    font-weight: 600;
    font-size: 12px;
    z-index: 1;
    letter-spacing: -0.2px;
  }
  .premium-recipe img {
    margin-right: 4px;
  }

  .recipe-rating {
    display: flex;
    align-items: center;
  }
  .stars {
    margin-right: 8px;
  }
  .rating-count {
    color: #1CA677;
    font-size: 14px;
  }

  .recipe-detail {
    font-size: 12px;
    color: #393C40;
    margin-top: 4px;
    justify-content: space-between;
  }
  .recipe-detail, .duration, .energy, .left, .right {
    display: flex;
    align-items: center;
  }
  .duration img, .energy img {
    margin-right: 8px;
  }
  .energy {
    margin-left: 16px;
  }
  .macro {
    margin-left: 8px;
  }
  .macro img {
    margin-right: 4px;
  }

</style>