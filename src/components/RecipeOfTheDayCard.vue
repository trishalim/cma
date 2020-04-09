<template>
  <div class="recipe">
    <div class="top">
      <h4>Recipe of the Day</h4>
      <h3>{{ title }}</h3>
      <Rating :rating="rating" />
      <RecipeDetail
        class="recipe-detail"
        :duration="duration"
        :energy="energy"
        :energyUnit="energyUnit"
      />
    </div>
    <div class="bottom">
      <Macros class="macros"
        :carbs="carbs"
        :protein="protein"
        :fats="fats"
      />
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
}
.bottom {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}
h3 {
  font-size: 24px;
  color: white;
  margin: 0;
  font-weight: 600;
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
