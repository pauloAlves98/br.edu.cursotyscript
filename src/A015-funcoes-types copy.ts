type MapStringCallBack = (item: string) => string;

export function mapString(
    array: string[],
    callbackfn: MapStringCallBack,
): string[] {
    const newArray: string[] = [];
    for (let i = 0; i < array.length; i++) {
        const item = array[i];
        newArray.push(callbackfn(item));
    }
    return newArray;
}

const abc = ['a', 'b', 'c'];
const abcMapped = mapString(abc, (item) => item.toLocaleUpperCase());
console.log(abcMapped);
console.log(abc);
