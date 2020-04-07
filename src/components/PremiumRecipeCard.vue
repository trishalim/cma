<template>
  <div class="recipe-card">
    <div class="recipe-image" :style="{'background-image': `url(${getImageUrl(recipe.imageFileName)})`}">
    </div>
    <div class="recipe-desc">
      <h3 class="recipe-title"> {{ recipe.title }} </h3>
      <div class="recipe-rating">
        <div class="stars">
          <img v-bind:src="getImageUrl('star.svg')" />
          <img v-bind:src="getImageUrl('star.svg')" />
          <img v-bind:src="getImageUrl('star.svg')" />
          <img v-bind:src="getImageUrl('star-half.svg')" />
          <img v-bind:src="getImageUrl('star-empty.svg')" />
        </div>
        <div class="rating-count">{{ recipe.ratingCount }} ratings</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PremiumRecipeCard",
  data() {
    return {
      recipe: {
        title: 'Low Carb Thai Chicken Curry With Coconut Cauliflower Rice',
        rating: 3,
        ratingCount: 200,
        duration: 24,
        energy: 489,
        energyUnit: 'Calories',
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
}
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
  }
  .recipe-desc {
    padding: 8px 16px;
  }
  .recipe-title {
    font-size: 18px;
    line-height: 20px;
    margin: 0;
    margin-bottom: 16px;
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

</style>