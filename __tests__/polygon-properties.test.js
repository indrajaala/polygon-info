import {polygonInfo, polygramTriangles, nPolygonInfo} from "../polygonInfo";

describe("polygonInfo", () => {

    test('triangle has 3 sides', async () => {
        const data = await polygonInfo(3);
        expect(data[0].sides).toEqual(3);
    });

    test("pentagon has 3 polygram triangles", async () => {
        const [{angleData}] = await polygonInfo(5);
        const polygramData = await polygramTriangles(angleData);
        expect(polygramData.length).toEqual(3);
    });
});

describe("polygramTriangles", () => {
    test("heptagon has 5 polygram triangles and has correct values", async () => {
        const [{angleData}] = await polygonInfo(7);
        const polygramData = await polygramTriangles(angleData);
        expect(polygramData.length).toEqual(5);
        const triangleData = [
            [51.42857142857143, 64.28571428571429, 64.28571428571429],
            [25.714285714285715, 77.14285714285714, 77.14285714285714],
            [51.42857142857143, 51.42857142857143, 77.14285714285714],
            [25.714285714285715, 51.42857142857143, 102.85714285714286],
            [25.714285714285715, 25.714285714285715, 128.57142857142858]
        ];
        expect(polygramData).toEqual(expect.arrayContaining(triangleData))
    });
});


describe("nPolygonInfo", () => {
    let data = [];

    nPolygonInfo(9).then((polygonData) => {
        data.push(...polygonData);
    });

    test("no of polygons in module nPolygonInfo matches with the input(n+1)", () => {
        expect(data.length).toEqual(10);
        expect(data[3])
    });

    test("octagon has valid sum of Exterior and Interior angles", () => {
        expect(data[8].sumOfExteriorAngles).toEqual(360);
        expect(data[8].sumOfInteriorAngles).toEqual(1080);
    });

    test("pentagon has valid interior and exterior angle", () => {
        expect(data[5].interiorAngle).toEqual(108);
        expect(data[5].exteriorAngle).toEqual(72);
    });
});