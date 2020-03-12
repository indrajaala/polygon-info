const k_combinations = (set, k) => {
    if (k > set.length || k <= 0) {
        return []
    }
    if (k === set.length) {
        return [set]
    }
    if (k === 1) {
        return set.reduce((acc, cur) => [...acc, [cur]], [])
    }
    let combs = [], tail_combs = [];
    for (let i = 0; i <= set.length - k + 1; i++) {
        tail_combs = k_combinations(set.slice(i + 1), k - 1);
        for (let j = 0; j < tail_combs.length; j++) {
            combs.push([set[i], ...tail_combs[j]])
        }
    }
    return combs;
};

const combinations = async (arr) => {
    let combinations = [];
    k_combinations(arr, 3).forEach((data) => {
        let sum = data.reduce((acc, val) => {
            return acc + val;
        });
        if (sum.toFixed(0) === "180") {
            combinations.push(data.sort((x, y) => (x - y)));
        }
    });
    return combinations;
};

const repetitiveCombinations = (arr) => {
    return new Promise((resolve => {
        let repetitiveCombinations = [];
        for (let i = 0; i <= arr.length - 1; i++) {
            for (let j = 0; j <= arr.length - 1; j++) {
                if ((arr[i] + arr[j] + arr[j]).toFixed(0) === "180") {
                    repetitiveCombinations.push([arr[i], arr[j], arr[j]].sort((x, y) => (x - y)));
                }
            }
        }
        resolve(repetitiveCombinations);
    }));
};

const removeDuplicateArrays = (arrOfArrs) => {
    let t = {};
    return arrOfArrs.filter((arr) => {
        return !(t[arr] = arr in t)
    });
};

const polygramTriangles = async (angleData) => {
    return removeDuplicateArrays([...await combinations(angleData), ...await repetitiveCombinations(angleData)]);
};

export {polygramTriangles};