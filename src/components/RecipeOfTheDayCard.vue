<template>
  <div
    class="recipe"
    :style="{ 'background-image': `url(${getImageUrl(imageFileName)})` }"
  >
    <div class="recipe-image-overlay"></div>
    <div class="top">
      <h4>Recipe of the Day</h4>
      <h3 class="title">{{ title }}</h3>
      <Rating :rating="rating" />
      <RecipeDetail
        class="recipe-detail"
        :duration="duration"
        :energy="energy"
        :energyUnit="energyUnit"
      />
    </div>
    <div class="bottom">
      <Macros class="macros" :carbs="carbs" :protein="protein" :fats="fats" />
      <div class="learn-more">Learn More</div>
    </div>
  </div>
</template>

<script>
import RecipeCard from "./RecipeCard.vue";
import Rating from "../components/Rating.vue";
import RecipeDetail from "../components/RecipeDetail.vue";
import Macros from "../components/Macros.vue";

export default {
  name: "RecipeOfTheDayCard",
  components: {
    Rating,
    RecipeDetail,
    Macros
  },
  extends: RecipeCard
};
</script>

<style scoped>
.recipe {
  height: 158px;
  border-radius: 12px;
  background-color: gray;
  padding: 30px 25px;
  text-align: left;
  width: 343px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-position: center;
  background-size: cover;
  position: relative;
}
.recipe-image-overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border-radius: 12px;
  background: black;
  background-blend-mode: multiply;
  mix-blend-mode: normal;
  opacity: 0.45;
}
.top,
.bottom {
  z-index: 1;
}
.bottom {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}
.title {
  font-size: 24px;
  color: white;
  margin: 0;
  font-weight: 600;

  /* truncate to 2 lines */
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
h4 {
  font-weight: bold;
  font-size: 14px;
  color: #1bc98e;
  text-transform: uppercase;
  margin: 0;
}
.recipe-detail,
.macros {
  color: white;
  font-size: 14px;
}
.learn-more {
  padding: 8px 19px;
  font-size: 14px;
  color: white;
  font-weight: 700;
  background: #ffffff47;
  border-radius: 15px;
  cursor: pointer;
}
</style>
