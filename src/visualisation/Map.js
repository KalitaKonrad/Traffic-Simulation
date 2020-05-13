import { map } from '../index';

export class Point {
  /**
   *
   * @param {Number} lat - geographical latitude of point.
   * @param {Number} lng - geographical longitude of point.
   * @param {String} name - point name.
   * @param {Number} id - point id.
   */
  constructor(lat, lng, name, id) {
    this.lat = lat;
    this.lng = lng;
    this.name = name;
    this.id = id;
  }
}

/**
 * Draws edges on map between each pair (p1, p2) where p1 and p2 are Point objects.
 *
 * @param {Array<Point>} intersectionPoints - Array of Point objects representing intersections on the map.
 */

const generateEdges = (intersectionPoints) => {
  for (let i = 0; i < intersectionPoints.length - 1; i++) {
    let firstPoint = intersectionPoints[i];
    let secondPoint = intersectionPoints[i + 1];

    L.polygon([
      [firstPoint.lat, firstPoint.lng],
      [secondPoint.lat, secondPoint.lng],
    ]).addTo(map);
  }

  // manually adding connection between last point and first point
  let arrLength = intersectionPoints.length;

  L.polygon([
    [intersectionPoints[arrLength - 1].lat, intersectionPoints[arrLength - 1].lng],
    [intersectionPoints[0].lat, intersectionPoints[0].lng],
  ]).addTo(map);
};

/**
 * Fills array with Point objects. Attaches marker and popup to each Point.
 *
 * @param {Array} intersectionPoints - empty array.
 */
const generateIntersections = (intersectionPoints) => {
  intersectionPoints.push(new Point(50.0877, 20.0013, 'Mistrzejowice', 1));
  intersectionPoints.push(new Point(50.0742, 20.0035, 'Czyzyny', 2));
  intersectionPoints.push(new Point(50.067, 20.0043, 'Dywizjonu 308', 3));
  intersectionPoints.push(new Point(50.0571, 20.0017, 'Łęg', 4));
  intersectionPoints.push(new Point(50.0397, 20.0009, 'Płaszów', 5));
  intersectionPoints.push(new Point(50.0408, 19.9831, 'Bagry', 6));
  intersectionPoints.push(new Point(50.0171, 19.9771, 'Kabel', 7));
  intersectionPoints.push(new Point(50.0147, 19.9454, 'Łagiewniki', 8));
  intersectionPoints.push(new Point(50.0211, 19.9326, 'Solvay', 9));
  intersectionPoints.push(new Point(50.0299, 19.9129, 'Ruczaj', 10));
  intersectionPoints.push(new Point(50.0485, 19.8997, 'Przegorzały', 11));
  intersectionPoints.push(new Point(50.0726, 19.889, 'Zarzecze', 12));
  intersectionPoints.push(new Point(50.0874, 19.8916, 'Ofiar Katynia', 13));
  intersectionPoints.push(new Point(50.0918, 19.9354, 'Wolbromski', 14));
  intersectionPoints.push(new Point(50.0861, 19.9546, 'Imbramowski', 15));
  intersectionPoints.push(new Point(50.0851, 19.9708, 'Polsadu', 16));

  intersectionPoints.forEach((point) => {
    point['marker'] = L.marker([point.lat, point.lng]).addTo(map);
    point['marker'].bindPopup(`Name: ${point.name}\n id: ${point.id}`);
  });
};

/**
 * Main function.
 */

export default () => {
  const intersectionPoints = [];

  generateIntersections(intersectionPoints);
  generateEdges(intersectionPoints);
};
