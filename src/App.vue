<template>
  <div id="app">
    <div class="cm-container">
      <div class="cm-logo-wrapper">
        <img alt="Carb Manager" src="@/assets/cm-logo.svg" class="cm-logo" />
      </div>
      <h2>Carb Manager Dev Assignment</h2>
      <p>See the README file for assignment requirements.</p>

      <div class="premium-recipe-wrapper">
        <PremiumRecipeCard
          class="recipe"
          v-for="(recipe, index) in recipes"
          :key="index"
          :title="recipe.title"
          :rating="recipe.rating"
          :ratingCount="recipe.ratingCount"
          :duration="recipe.duration"
          :energy="recipe.energy"
          :energyUnit="recipe.energyUnit"
          :carbs="recipe.carbs"
          :protein="recipe.protein"
          :fats="recipe.fats"
          :isLiked="recipe.isLiked"
          :imageFileName="recipe.imageFileName"
        />
      </div>
    </div>
  </div>
</template>

<script>
import PremiumRecipeCard from "@/components/PremiumRecipeCard.vue";

export default {
  name: "App",
  components: {
    PremiumRecipeCard
  },
  data() {
    return {
      recipes: [
        {
          title: "Low Carb Thai Chicken Curry With Coconut Cauliflower Rice",
          rating: 3.5,
          ratingCount: 200,
          duration: 135,
          energy: 489,
          energyUnit: "Kilojoules",
          carbs: 20,
          protein: 16,
          fats: 6,
          isLiked: true,
          imageFileName: "thai-curry.png"
        },
        {
          title: "Keto Bacon Wrapped Chicken Thighs With Cheddar Sauce and Chocolate Sprinkles and Ketchup and Mozzarella Cheese",
          rating: 3,
          ratingCount: 200,
          duration: 120,
          energy: 200,
          energyUnit: "Calories",
          carbs: 30,
          protein: 16,
          fats: 0,
          isLiked: false,
          imageFileName: "bacon-wrapped-chicken.jpeg"
        }
      ]
    };
  }
};
</script>

<style>
#app {
  font-family: "proxima-nova", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  color: #0c0c0a;
}
</style>

<style scoped>
.cm-logo-wrapper {
  margin-bottom: 30px;
}

.cm-logo {
  max-width: 150px;
  height: auto;
}

.cm-container {
  max-width: 960px;
  margin: auto;
}

/** Remove these styles when done */
.premium-recipe-wrapper {
  margin-top: 100px;
  border: 2px dashed red;
  padding: 16px;
  display: flex;
  justify-content: center;
}
.recipe {
  margin: 10px;
}
</style>
