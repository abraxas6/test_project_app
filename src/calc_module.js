let calc = {
    sum(...numbers) {
        return numbers.reduce((s, n) => s+n, 0);
    },

    multiply(...numbers) {
        return numbers.reduce((p,n) => p*n, 1);
    }
};

// module.exports = {
//     calc
// };

export {calc};
