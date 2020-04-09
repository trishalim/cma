<template>
  <div class="recipe-detail">
    <div class="duration">
      <img src="../assets/clock.svg" v-if="showIcon" />
      {{ durationDisplay }}
    </div>
    <div v-if="!showIcon" class="dot">•</div>
    <div class="energy">
      <img src="../assets/flame.svg" v-if="showIcon" />
      {{ energyDisplay }}
    </div>
  </div>
</template>

<script>
import {
  getEnergyDisplayInCalories,
  getDurationDisplayInHrMin
} from "../utils/units.util";

export default {
  name: "RecipeDetail",
  props: {
    duration: Number,
    energy: Number,
    energyUnit: String,
    showIcon: Boolean
  },
  computed: {
    energyDisplay: function() {
      return getEnergyDisplayInCalories(this.energy, this.energyUnit);
    },
    durationDisplay: function() {
      return getDurationDisplayInHrMin(this.duration);
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
.energy img {
  margin-left: 16px;
}
.dot {
  margin: 0 5px;
}
</style>
