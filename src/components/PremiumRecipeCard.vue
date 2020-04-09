<template>
  <div class="recipe-card" @click="$emit('click')">
    <div
      class="recipe-image"
      :style="{ 'background-image': `url(${getImageUrl(imageFileName)})` }"
    >
      <div class="recipe-image-overlay"></div>
      <img
        class="heart heart-not-liked"
        v-if="!isLiked"
        :src="getImageUrl('heart-outline.svg')"
      />

      <img
        class="heart heart-liked"
        v-if="isLiked"
        :src="getImageUrl('heart-filled.svg')"
      />

      <div class="premium-recipe">
        <img :src="getImageUrl('trophy.svg')" />
        Premium Recipe
      </div>
    </div>

    <div class="recipe-desc">
      <h3 class="recipe-title">{{ title }}</h3>

      <div class="recipe-rating">
        <Rating :rating="rating" />
        <div class="rating-count">{{ ratingCount }} ratings</div>
      </div>

      <div class="recipe-info">
        <RecipeDetail
          :showIcon="true"
          :duration="duration"
          :energy="energy"
          :energyUnit="energyUnit"
        />

        <Macros :carbs="carbs" :protein="protein" :fats="fats" />
      </div>
    </div>
  </div>
</template>

<script>
import RecipeCard from "./RecipeCard.vue";
import Rating from "../components/Rating.vue";
import RecipeDetail from "../components/RecipeDetail.vue";
import Macros from "../components/Macros.vue";

export default {
  name: "PremiumRecipeCard",
  components: {
    Rating,
    RecipeDetail,
    Macros
  },
  extends: RecipeCard
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
.recipe-image-overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 12px 12px 0 0;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.0001) 0%,
    rgba(22, 27, 35, 0.2) 70.94%,
    rgba(26, 29, 34, 0.79) 106.25%
  );
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
  color: #1ca677;
  font-size: 14px;
}

.recipe-info {
  font-size: 12px;
  color: #393c40;
  margin-top: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
