// -180 - +180
export const generateRandomLong = () => {
  var num = parseFloat((Math.random() * 180).toFixed(3));
  var posorneg = Math.random();
  if (posorneg >= 0.5) {
    num = num * -1;
  }
  return num;
};

export const generateRandomLat = () => {
  var num = (Math.random() * 90).toFixed(3);
  var posorneg = Math.random();
  if (posorneg >= 0.5) {
    num = num * -1;
  }
  return num;
};
