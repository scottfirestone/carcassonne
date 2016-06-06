const tileTypes = {
  borderTypes: [ 'field', 'road', 'city' ],
  tileTypes: {
    A: { borders: [ 'field', 'field', 'road', 'field' ], pennant: false },
    B: { borders: [ 'field', 'field', 'field', 'field' ], pennant: false },
    C: { borders: [ 'city', 'city', 'city', 'city' ], pennant: true },
    D: { borders: [ 'city', 'road', 'field', 'road' ], pennant: false },
    E: { borders: [ 'city', 'field', 'field', 'field' ], pennant: false },
    F: { borders: [ 'field', 'city', 'field', 'city' ], pennant: true },
    G: { borders: [ 'field', 'city', 'field', 'city' ], pennant: false },
    H: { borders: [ 'city', 'field', 'city', 'field' ], pennant: false },
    I: { borders: [ 'city', 'field', 'field', 'city' ], pennant: false },
    J: { borders: [ 'city', 'road', 'road', 'field' ], pennant: false },
    K: { borders: [ 'city', 'field', 'road', 'road' ], pennant: false },
    L: { borders: [ 'city', 'road', 'road', 'road' ], pennant: false },
    M: { borders: [ 'city', 'field', 'field', 'city' ], pennant: true },
    N: { borders: [ 'city', 'field', 'field', 'city' ], pennant: false },
    O: { borders: [ 'city', 'road', 'road', 'city' ], pennant: true },
    P: { borders: [ 'city', 'road', 'road', 'city' ], pennant: false },
    Q: { borders: [ 'city', 'city', 'field', 'city' ], pennant: true },
    R: { borders: [ 'city', 'city', 'field', 'city' ], pennant: false },
    S: { borders: [ 'city', 'city', 'road', 'city' ], pennant: true },
    T: { borders: [ 'city', 'city', 'road', 'city' ], pennant: false },
    U: { borders: [ 'road', 'field', 'road', 'field' ], pennant: false },
    V: { borders: [ 'field', 'field', 'road', 'road' ], pennant: false },
    W: { borders: [ 'field', 'road', 'road', 'road' ], pennant: false },
    X: { borders: [ 'road', 'road', 'road', 'road' ], pennant: false }
  }
};

module.exports = {
  tileTypes: tileTypes;
}
