<template>
  <div class="recipe-detail">
    <div class="duration">
      <img src="@/assets/clock.svg" />
      {{ durationDisplay }}
    </div>
    <div class="energy">
      <img src="@/assets/flame.svg" />
      {{ energyDisplay }}
    </div>
  </div>
</template>

<script>
import {
  getEnergyDisplayInCalories,
  getDurationDisplayInHrMin
} from "@/utils/units.util";

export default {
  name: "RecipeDetail",
  props: {
    duration: Number,
    energy: Number,
    energyUnit: String
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
.energy {
  margin-left: 16px;
}
</style>
