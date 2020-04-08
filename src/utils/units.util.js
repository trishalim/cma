module.exports = {
  getEnergyDisplayInCalories(energyValue, energyUnit) {
    if (["kilojoules", "kj"].includes(energyUnit.toLowerCase())) {
      energyValue = Math.floor(energyValue * 4.184);
    }

    if (energyValue) {
      return `${energyValue} ${energyUnit}`;
    }

    return "";
  },
  getDurationDisplayInHrMin(minutes) {
    const hours = Math.floor(minutes / 60);
    minutes = minutes - hours * 60;

    let durationDisplay = "";
    if (hours) durationDisplay += `${hours} hr `;
    if (minutes) durationDisplay += `${minutes} min`;
    return durationDisplay;
  }
};
