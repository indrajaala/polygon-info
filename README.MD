# polygon-info

properties of regular polygons.


[![pipeline status](https://gitlab.com/indrajaala/polygon-info/badges/master/pipeline.svg)](https://gitlab.com/indrajaala/polygon-info/-/commits/master)
[![coverage report](https://gitlab.com/indrajaala/polygon-info/badges/master/coverage.svg)](https://gitlab.com/indrajaala/polygon-info/-/commits/master)


## Usage

Install with npm

```
npm i polygon-info
```
### modules

1.polygonInfo

2.nPolygonInfo

3.polygramTriangles

#### ( 1.polygonInfo )

takes a single argument - sides ,of type number and returns a promise

```javascript
import {polygonInfo} from "polygonInfo";

const polygonData = await polygonInfo(3);

console.log(polygonData); 

 //       [
 //        {
 //          sides: 3,
 //          interiorAngle: 60,
 //          exteriorAngle: 120,
 //          sumOfInteriorAngles: 180,
 //          sumOfExteriorAngles: 360,
 //          interiorAngleHalf: 30,
 //          exteriorAngleHalf: 60,
 //           diagonals: 0,
 //          angleData: [ 60, 120, 30, 60, 60 ]
 //         }
 //       ]

```
####  ( 2.nPolygonInfo )

takes a single argument - n ,of type number and returns a promise 
when resolved returns polygon data same as from module polygonInfo but for n no of polygons.

```javascript
import {nPolygonInfo} from "polygonInfo";

const nPolygonData = await nPolygonInfo(10);
```
#### ( 3.polygramTriangles )

takes a single argument - angleData , of type array and returns a promise
when resolved returns polygram triangles data , different types of triangles (NOT total triangles) present in a polygram,
including the one that is obtained by dividing the polygon from the center.
angleData is provided by either polygonInfo or nPolygonInfo module.

```javascript
import {polygonInfo, polygramTriangles} from "polygonInfo";

const [{angleData}] = await polygonInfo(7);
const polygramTrianglesData = await polygramTriangles(angleData);
console.log(polygramTrianglesData);

 // [
 //   [ 25.714285714285715, 25.714285714285715, 128.57142857142858 ]
 //   [ 25.714285714285715, 51.42857142857143, 102.85714285714286 ]
 //   [ 51.42857142857143, 51.42857142857143, 77.14285714285714 ]
 //   [ 51.42857142857143, 64.28571428571429, 64.28571428571429 ]
 //   [ 25.714285714285715, 77.14285714285714, 77.14285714285714 ]
 // ]
```

# to run tests
npm test



