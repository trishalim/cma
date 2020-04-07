<template>
  <div class="recipe-card">

    <div class="recipe-image" :style="{'background-image': `url(${getImageUrl(recipe.imageFileName)})`}">
      <div class="recipe-image-overlay"></div>
      <img class="heart" v-bind:src="getImageUrl('heart-outline.svg')" />
      <div class="premium-recipe">
        <img v-bind:src="getImageUrl('trophy.svg')" />
        Premium Recipe
      </div>
    </div>

    <div class="recipe-desc">

      <h3 class="recipe-title"> {{ recipe.title }} </h3>

      <div class="recipe-rating">
        <Rating v-bind:rating="recipe.rating" />
        <div class="rating-count">{{ recipe.ratingCount }} ratings</div>
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
            <img v-bind:src="getImageUrl('dot-red.svg')" />{{ recipe.carbs }}g
          </div>
          <div class="macro">
            <img v-bind:src="getImageUrl('dot-blue.svg')" />{{ recipe.protein }}g
          </div>
          <div class="macro">
            <img v-bind:src="getImageUrl('dot-yellow.svg')" />{{ recipe.fats }}g
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
  computed: {
    energyDisplay: function() {
      let energyValue = this.recipe.energy;

      if (this.recipe.energyUnit.toLowerCase() === 'kilojoules') {
        energyValue = Math.floor(energyValue * 4.184);
      }

      return `${energyValue} ${this.recipe.energyUnit}`;
    },
    durationDisplay: function() {
      const hours = Math.floor(this.recipe.duration / 60);
      const minutes = this.recipe.duration - (hours * 60);
      return `${hours} hr ${minutes} min`;
    }
  },
  data() {
    return {
      recipe: {
        title: 'Low Carb Thai Chicken Curry With Coconut Cauliflower Rice',
        rating: 3.5,
        ratingCount: 200,
        duration: 135,
        energy: 489,
        energyUnit: 'Kilojoules',
        carbs: 20,
        protein: 16,
        fats: 6,
        isLiked: true,
        imageFileName: 'thai-curry.png'
      }
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