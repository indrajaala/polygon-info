import {polygramTriangles} from "./polygramTriangles.js"

const interiorAngle = (n) => {
    return ((n - 2) * 180) / n;
};

const exteriorAngle = (n) => {
    return 360 / n;
};

const exteriorAngleHalf = (n) => {
    return exteriorAngle(n) / 2;
};

const interiorAngleHalf = (n) => {
    return interiorAngle(n) / 2;
};

const sumOfInteriorAngles = (n) => {
    return 180 * (n - 2);
};

const sumOfExteriorAngles = () => {
    return 360;
};

const diagonals = (n) => {
    return (n * (n - 3)) / 2;
};

const characteristicTriangle = (n) => {
    return [interiorAngle(n) / 2, interiorAngle(n) / 2, exteriorAngle(n)]
};

const angleData = (sides) => {
    const minTriangles = sides - 2;
    const leastAngle = interiorAngle(sides) / minTriangles;
    let possibleAngles = [
        interiorAngle(sides),
        exteriorAngle(sides),
        interiorAngleHalf(sides),
        exteriorAngleHalf(sides)
    ];
    for (let i = 1; i <= minTriangles; i++) {
        possibleAngles.push(leastAngle * i);
    }
    return possibleAngles;
};

const polygonData = async (sides) => {
    return {
        sides,
        interiorAngle: interiorAngle(sides),
        exteriorAngle: exteriorAngle(sides),
        sumOfInteriorAngles: sumOfInteriorAngles(sides),
        sumOfExteriorAngles: sumOfExteriorAngles(sides),
        interiorAngleHalf: interiorAngleHalf(sides),
        exteriorAngleHalf: exteriorAngleHalf(sides),
        diagonals: diagonals(sides),
        characteristicTriangle: characteristicTriangle(sides),
        angleData: angleData(sides),
    }
};

const polygonInfo = async (sides) => {
    return await polygonData(sides);
};

const nPolygonInfo = async (n) => {
    let data = [];
    for (let i = 0; i <= n; i++) {
        data.push(await polygonData(i));
    }
    return data;
};

export {polygonInfo, nPolygonInfo, polygramTriangles};
