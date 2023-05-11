function generateAsteroidLocation() {
  const x = Math.floor(Math.random() * 101);
  const y = Math.floor(Math.random() * 101);
  const z = Math.floor(Math.random() * 101);
  return { x, y, z };
}

function calculateDistance(probeCoords, asteroidCoords) {
  const dx = probeCoords.x - asteroidCoords.x;
  const dy = probeCoords.y - asteroidCoords.y;
  const dz = probeCoords.z - asteroidCoords.z;
  return Math.sqrt(dx * dx + dy * dy + dz * dz);
}

function findAsteroidLocation() {
  const asteroidCoords = generateAsteroidLocation();
  const probes = { count: 0, coordinates: [] };

  for (let x = 0; x <= 100; x++) {
    for (let y = 0; y <= 100; y++) {
      for (let z = 0; z <= 100; z++) {
        const probeCoords = { x, y, z };
        const distance = calculateDistance(probeCoords, asteroidCoords);
        probes.count++;
        probes.coordinates.push(probeCoords);

        if (distance <= 1) {
          return { result: { location: asteroidCoords, probes } };
        }
      }
    }
  }
}

const result = findAsteroidLocation();
console.log(result);
