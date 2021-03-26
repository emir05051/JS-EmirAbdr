const permutations = string => {

    if (string.length === 0) {
        return [];
    } else if (string.length === 1) {
        return [string]; // Один символ
    } else {
        const p = [];

        for (let index = 0; index < string.length; index++) {
            const char = string[index];
            const remaining = string.slice(0, index) + string.slice(index + 1);

            const subpermutations = permutations(remaining);

            p.push(...subpermutations.map(permutation => char + permutation));
        }

        return p;

        // return string.split("")
        //   .map((char, index) => 
        //     permutations(string.slice(0, index) + string.slice(index + 1))
        //       .map(p => char + p)
        //   )
        //   .flat(1);

    }
}

console.log(permutations(""));

console.log(permutations("a"));

console.log(permutations("bc"));

console.log(permutations("abc"));