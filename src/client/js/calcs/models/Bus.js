function Bus(powerCoef, voltage, elements) {
    if (powerCoef === undefined) { powerCoef = 1.18; }
    if (voltage === undefined) { voltage = 0.38; }
    if (elements === undefined) { elements = []; }
    return {
        powerCoef: powerCoef,
        voltage: voltage,
        elements: elements
    }
}


