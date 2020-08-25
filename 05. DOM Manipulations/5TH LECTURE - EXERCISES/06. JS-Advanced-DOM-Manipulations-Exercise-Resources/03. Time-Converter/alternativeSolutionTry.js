if (metricOutside === 'days') {
    inputsTypeText[index].value = metrics[metric] * valueOfOutside;
} else if (metricOutside === "hours") {
    if (metric === "days") {
        inputsTypeText[index].value = valueOfOutside / metrics[metric];
    } else {
        inputsTypeText[index].value = metrics[metric] * valueOfOutside;
    }
} else if (metricOutside === "minutes") {
    if (metric === "days" || metric === "hours") {
        inputsTypeText[index].value = valueOfOutside / metrics[metric];
    } else {
        inputsTypeText[index].value = metrics[metric] * valueOfOutside;
    }
} else {
    inputsTypeText[index].value = valueOfOutside / metrics[metric];
}