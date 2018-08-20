let square = (x) => x * x;

var list = [1, 2, 3];

let fmap = (arr, func) => {
        return {
            next: () => {
                let nextItem = arr.shift();
                return nextItem ? func(nextItem) : undefined;
            }
        }
}  

var squareGen = fmap(list, square);

console.log(squareGen.next()); // 1
console.log(squareGen.next()); // 4
console.log(squareGen.next()); // 9
console.log(squareGen.next()); // undefined