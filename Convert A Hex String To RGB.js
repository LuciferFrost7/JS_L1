function hexStringToRGB($s) {
  return {
    r: parseInt($s.substr(1, 2), 16),
    g: parseInt($s.substr(3, 2), 16),
    b: parseInt($s.substr(5, 2), 16)
  };
}