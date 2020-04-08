<template>
  <div class="recipe-detail">
    <div class="duration">
      <img :src="getImageUrl('clock.svg')" />
      {{ durationDisplay }}
    </div>
    <div class="energy">
      <img :src="getImageUrl('flame.svg')" />
      {{ energyDisplay }}
    </div>
  </div>
</template>

<script>
export default {
  name: "RecipeDetail",
  props: {
    duration: Number,
    energy: Number,
    energyUnit: String
  },
  computed: {
    energyDisplay: function() {
      let energyValue = this.energy;

      if (this.energyUnit.toLowerCase() === "kilojoules") {
        energyValue = Math.floor(energyValue * 4.184);
      }

      return `${energyValue} ${this.energyUnit}`;
    },
    durationDisplay: function() {
      const hours = Math.floor(this.duration / 60);
      const minutes = this.duration - hours * 60;

      let durationDisplay = "";
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
.recipe-detail,
.duration,
.energy {
  display: flex;
  align-items: center;
}
.duration img,
.energy img {
  margin-right: 8px;
}
.energy {
  margin-left: 16px;
}
</style>
