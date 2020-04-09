<template>
  <div class="macros">
    <div class="macro" v-if="carbs >= 0">
      <span class="dot dot-red"></span>{{ carbs }}g
    </div>
    <div class="macro" v-if="protein >= 0">
      <span class="dot dot-blue"></span>{{ protein }}g
    </div>
    <div class="macro" v-if="fats >= 0">
      <span class="dot dot-orange"></span>{{ fats }}g
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
.macros .macro:not(:first-child) {
  margin-left: 8px;
}
.macro img {
  margin-right: 4px;
}
.dot {
  display: inline-block;
  width: 12px;
  height: 10px;
}
.dot::after {
  content: '•';
  position: absolute;
  font-size: 24px;
  line-height: 10px;
}
.dot-red {
  color: #f94642;
}
.dot-blue {
  color: #3177bb; 
}
.dot-orange {
  color: #fda120;
}
</style>
