# polygon-info

[![npm][npm-img]][npm-url]
[![pipeline status][pipeline-status-img]][repo-url]
[![coverage report][coverage-report-img]][repo-url]

properties of regular polygons.

## Usage

Install with npm

```
npm i polygon-info
```
### modules

1.polygonInfo

2.nPolygonInfo

3.polygramTriangles

####  1.polygonInfo

takes a single argument - sides ,of type number and returns a promise

```javascript
import {polygonInfo} from "polygon-info";

const triangle = await polygonInfo(3);

// triangle; 
//
// {
//  sides: 3,
//  interiorAngle: 60,
//  exteriorAngle: 120,
//  sumOfInteriorAngles: 180,
//  sumOfExteriorAngles: 360,
//  interiorAngleHalf: 30,
//  exteriorAngleHalf: 60,
//  diagonals: 0,
//  characteristicTriangle: [ 30, 30, 120 ],
//  angleData: [ 60, 120, 30, 60, 60 ]
// }



```

####  2.nPolygonInfo

takes a single argument - n ,of type number and returns a promise, 
when resolved returns polygon data same as from module polygonInfo but for n no of polygons.

```javascript
import {nPolygonInfo} from "polygon-info";

const nPolygonData = await nPolygonInfo(10);
```
####  3.polygramTriangles

takes a single argument - angleData , of type array and returns a promise, 
when resolved returns polygram triangles data , different types of triangles (NOT total triangles) present in a polygram,
including the one that is obtained by dividing the polygon from the center.
angleData is provided by either polygonInfo or nPolygonInfo module.

```javascript
import {polygonInfo, polygramTriangles} from "polygon-info";

const {angleData} = await polygonInfo(7);
const polygramTriangles = await polygramTriangles(angleData);
 
 // polygramTriangles;
 //
 // [
 //   [ 25.714285714285715, 25.714285714285715, 128.57142857142858 ]
 //   [ 25.714285714285715, 51.42857142857143, 102.85714285714286 ]
 //   [ 51.42857142857143, 51.42857142857143, 77.14285714285714 ]
 //   [ 51.42857142857143, 64.28571428571429, 64.28571428571429 ]
 //   [ 25.714285714285715, 77.14285714285714, 77.14285714285714 ]
 // ]
```

##  test

```
npm test
```
## License

MIT

[npm-img]: https://img.shields.io/npm/v/polygon-info.svg
[npm-url]: https://npmjs.com/package/polygon-info
[pipeline-status-img]: https://gitlab.com/indrajaala/polygon-info/badges/master/pipeline.svg
[coverage-report-img]: https://gitlab.com/indrajaala/polygon-info/badges/master/coverage.svg
[repo-url]: https://gitlab.com/indrajaala/polygon-info/commits/master

