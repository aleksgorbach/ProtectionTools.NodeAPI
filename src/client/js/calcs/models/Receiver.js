function Receiver(activePower, count, usingCoefficient, cos) {
    if (activePower === void 0) { activePower = 10; }
    if (count === void 0) { count = 1; }
    if (usingCoefficient === void 0) { usingCoefficient = 0.6; }
    if (cos === void 0) { cos = 0.8; }
    return {
        activePower: activePower,
        count: count,
        usingCoefficient: usingCoefficient,
        cos: cos
    }
}
