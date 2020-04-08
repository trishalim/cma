<template>
  <div class="macros">
    <div class="macro" v-if="carbs >= 0">
      <img src="@/assets/dot-red.svg" />{{ carbs }}g
    </div>
    <div class="macro" v-if="protein >= 0">
      <img src="@/assets/dot-blue.svg" />{{ protein }}g
    </div>
    <div class="macro" v-if="fats >= 0">
      <img src="@/assets/dot-yellow.svg" />{{ fats }}g
    </div>
  </div>
</template>

<script>
export default {
  name: "Macros",
  props: {
    carbs: Number,
    protein: Number,
    fats: Number
  },
  methods: {
    getImageUrl(imageFileName) {
      return require("../assets/" + imageFileName);
    }
  }
};
</script>

<style scoped>
.macros {
  display: flex;
  align-items: center;
}
.macro {
  margin-left: 8px;
}
.macro img {
  margin-right: 4px;
}
</style>
