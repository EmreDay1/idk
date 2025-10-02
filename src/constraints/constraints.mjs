class Coincident {
  constructor(pA, pB) {
    this.points = [pA, pB];
    this.name = "coincident";
    this.targets = [pA, pB];
  }
  getEqs(xA, yA, xB, yB) {
    return [
      `${xA} - ${xB}`,
      `${yA} - ${yB}`
    ];
  }
}

class Distance {
  constructor(pA, pB, d) {
    this.points = [pA, pB];
    this.dist = d;
    this.name = "distance";
    this.targets = [pA, pB];
  }
  getEqs(xA, yA, xB, yB) {
    const d2 = `${this.dist}*${this.dist}`;
    return [
      `((${xB}-${xA})**2 + (${yB}-${yA})**2) - (${d2})`
    ];
  }
}

class Horizontal {
  constructor(pA, pB) {
    this.points = [pA, pB];
    this.name = "horizontal";
    this.targets = [pA, pB];
  }
  getEqs(xA, yA, xB, yB) {
    return [ `${yB} - ${yA}` ];
  }
}

class Vertical {
  constructor(pA, pB) {
    this.points = [pA, pB];
    this.name = "vertical";
    this.targets = [pA, pB];
  }
  getEqs(xA, yA, xB, yB) {
    return [ `${xB} - ${xA}` ];
  }
}

// Additional constraints operating on two anchor-defined lines (A1-A2) and (B1-B2)
class Parallel {
  constructor(a1, a2, b1, b2) {
    this.points = [a1, a2, b1, b2];
    this.name = "parallel";
    this.targets = [a1, a2, b1, b2];
  }
  getEqs(xA1, yA1, xA2, yA2, xB1, yB1, xB2, yB2) {
    // Cross((A2-A1),(B2-B1)) = 0
    return [ `(${yA2}-${yA1})*(${xB2}-${xB1}) - (${xA2}-${xA1})*(${yB2}-${yB1})` ];
  }
}

class Perpendicular {
  constructor(a1, a2, b1, b2) {
    this.points = [a1, a2, b1, b2];
    this.name = "perpendicular";
    this.targets = [a1, a2, b1, b2];
  }
  getEqs(xA1, yA1, xA2, yA2, xB1, yB1, xB2, yB2) {
    // Dot((A2-A1),(B2-B1)) = 0
    return [ `(${xA2}-${xA1})*(${xB2}-${xB1}) + (${yA2}-${yA1})*(${yB2}-${yB1})` ];
  }
}

class Equal {
  constructor(a1, a2, b1, b2) {
    this.points = [a1, a2, b1, b2];
    this.name = "equal";
    this.targets = [a1, a2, b1, b2];
  }
  getEqs(xA1, yA1, xA2, yA2, xB1, yB1, xB2, yB2) {
    // |A2-A1|^2 - |B2-B1|^2 = 0
    const dA = `((${xA2}-${xA1})**2 + (${yA2}-${yA1})**2)`;
    const dB = `((${xB2}-${xB1})**2 + (${yB2}-${yB1})**2)`;
    return [ `${dA} - ${dB}` ];
  }
}

export { Coincident, Distance, Horizontal, Vertical, Parallel, Perpendicular, Equal };
