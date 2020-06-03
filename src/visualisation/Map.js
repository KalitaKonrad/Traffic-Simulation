import { map, CONTROLLER } from '../index';
import { DISTANCES } from '../consts/intersections.const';

const sim = CONTROLLER.simulation;

export class Point {
  /**
   *
   * @param {Number} lat - geographical latitude of point.
   * @param {Number} lng - geographical longitude of point.
   * @param {String} name - point name.
   * @param {Number} id - point id.
   * @param {Boolean} isRoundabout - true if intersection is an roundabout.
   */
  constructor(lat, lng, name, id, isRoundabout = false) {
    this.lat = lat;
    this.lng = lng;
    this.name = name;
    this.id = id;
    this.isRoundabout = isRoundabout;
  }
}

/**
 * Draws edges on map between each consecutive pairs (p1, p2) where p1 and p2 are Point objects. Fills road
 *
 * @param {Array<Point>} intersectionPoints - Array of Point objects representing intersections on the map.
 * @param {Array} roads - Array which will be filled with polygons (roads) connecting each consecutive
 *                        Point pairs (p1, p2). For example for pairs of Points: (0, 1), (1, 2) - road between
 *                        0 -> 1 will have id: 0, road between 1 -> 2 will have id: 1 and so on..
 */

const generateEdges = (intersectionPoints, roads) => {
  for (let i = 0; i < intersectionPoints.length - 1; i++) {
    let firstPoint = intersectionPoints[i];
    let secondPoint = intersectionPoints[i + 1];

    const road = L.polygon(
      [
        [firstPoint.lat, firstPoint.lng],
        [secondPoint.lat, secondPoint.lng],
      ],
      { weight: 10 }
    ).addTo(map);

    // attach additional data to road
    road.id = i + 1;
    road.point_from = firstPoint;
    road.point_to = secondPoint;

    road.on('click', (e) => sim.setSelectedRoadId(e));
    road.on('click', (e) => onRoadClick(e));
    roads.push(road);
  }

  // manually adding connection between last point and first point (last road)
  let arrLength = intersectionPoints.length;

  const lastRoad = L.polygon(
    [
      [intersectionPoints[arrLength - 1].lat, intersectionPoints[arrLength - 1].lng],
      [intersectionPoints[0].lat, intersectionPoints[0].lng],
    ],
    { weight: 10 }
  ).addTo(map);
  lastRoad.id = intersectionPoints.length;
  lastRoad.point_from = intersectionPoints[arrLength - 1];
  lastRoad.point_to = intersectionPoints[0];
  lastRoad.on('click', (e) => sim.setSelectedRoadId(e));
  lastRoad.on('click', (e) => onRoadClick(e));
  roads.push(lastRoad);
};

/**
 * Fills array with Point objects. Attaches marker and popup to each Point.
 *
 * @param {Array} intersectionPoints - empty array.
 */
const generateIntersections = (intersectionPoints) => {
  intersectionPoints.push(new Point(50.0877, 20.0013, 'Mistrzejowice', 1));
  intersectionPoints.push(new Point(50.0742, 20.0035, 'Czyzyny', 2));
  intersectionPoints.push(new Point(50.067, 20.0043, 'Dywizjonu 308', 3, true));
  intersectionPoints.push(new Point(50.0571, 20.0017, 'Łęg', 4));
  intersectionPoints.push(new Point(50.0397, 20.0009, 'Płaszów', 5));
  intersectionPoints.push(new Point(50.0408, 19.9831, 'Bagry', 6));
  intersectionPoints.push(new Point(50.0171, 19.9771, 'Kabel', 7));
  intersectionPoints.push(new Point(50.0147, 19.9454, 'Łagiewniki', 8));
  intersectionPoints.push(new Point(50.0211, 19.9326, 'Solvay', 9));
  intersectionPoints.push(new Point(50.0299, 19.9129, 'Ruczaj', 10));
  intersectionPoints.push(new Point(50.0485, 19.8997, 'Przegorzały', 11));
  intersectionPoints.push(new Point(50.0726, 19.889, 'Zarzecze', 12));
  intersectionPoints.push(new Point(50.0874, 19.8916, 'Ofiar Katynia', 13, true));
  intersectionPoints.push(new Point(50.0918, 19.9354, 'Wolbromski', 14));
  intersectionPoints.push(new Point(50.0861, 19.9546, 'Imbramowski', 15));
  intersectionPoints.push(new Point(50.0851, 19.9708, 'Polsadu', 16));

  const intersectionIcon = L.icon({
    iconUrl: 'https://img.icons8.com/flat_round/64/000000/split.png',
    iconSize: [32, 32],
  });

  const roundaboutIcon = L.icon({
    iconUrl: 'https://img.icons8.com/doodle/48/000000/roundabout-.png',
    iconSize: [32, 32],
  });

  intersectionPoints.forEach((point) => {
    point['marker'] = L.marker([point.lat, point.lng], {
      icon: point.isRoundabout ? roundaboutIcon : intersectionIcon,
    }).addTo(map);
    point['marker'].on('mouseover', (e) => e.sourceTarget.togglePopup());
    point['marker'].bindPopup(`Name: ${point.name}`);
  });
};

const onRoadClick = (e) => {
  const roadId = e.sourceTarget.id;
  const destFwdL = document.getElementById('dest-forward-left');
  const destFwdR = document.getElementById('dest-forward-right');
  const destBwdL = document.getElementById('dest-backward-left');
  const destBwdR = document.getElementById('dest-backward-right');

  const srcIntHeader = document.getElementById('src-intersection-header');
  const destIntHeader = document.getElementById('dest-intersection-header');
  const distanceBetweenInts = document.getElementById('distance-between');

  const fwdIntersection = sim.intersections.filter((intersection) => intersection.id === roadId)[0];
  const bwdIntersection = sim.intersections.filter(
    (intersection) => intersection.id === (roadId + 1) % sim.intersections.length
  )[0];

  // road forward

  destFwdL.innerText = fwdIntersection.name;
  destFwdR.innerText = bwdIntersection.name;

  // road backward

  destBwdL.innerText = bwdIntersection.name;
  destBwdR.innerText = fwdIntersection.name;

  // roads stats header

  srcIntHeader.innerHTML = fwdIntersection.name;
  destIntHeader.innerHTML = bwdIntersection.name;
  distanceBetweenInts.innerHTML = DISTANCES[roadId];

  CONTROLLER.CURRENT_ROAD = roadId;
};

/**
 * Main function.
 */

export default () => {
  const intersectionPoints = [];
  const roads = [];

  generateIntersections(intersectionPoints);
  generateEdges(intersectionPoints, roads);
};
