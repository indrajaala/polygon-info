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

const combinations = (arr) => {
    return new Promise((async resolve => {
        const combinations = await k_combinations(arr, 3)
            .filter((data) => data.reduce((acc, val) => acc + val) === 180);
        resolve(combinations);
    }));
};

const repetitiveCombinations = (arr) => {
    return new Promise((resolve => {
        let repetitiveCombinations = [];
        for (let i = 0; i <= arr.length - 1; i++) {
            for (let j = 0; j <= arr.length - 1; j++) {
                if ((arr[i] + arr[j] + arr[j]) === 180) {
                    repetitiveCombinations.push([arr[i], arr[j], arr[j]]);
                }
            }
        }
        resolve(repetitiveCombinations);
    }));
};

const sortAndRemoveDupArrs = (arrOfArrs) => {
    const temp = {};
    return arrOfArrs.filter((arr) => {
        return !(temp[arr.sort((x, y) => (x - y))] = arr in temp);
    });
};

const polygramTriangles = async (angleData) => {
    return sortAndRemoveDupArrs(
        [
            ...await combinations(angleData),
            ...await repetitiveCombinations(angleData)
        ]
    );
};

export {polygramTriangles};