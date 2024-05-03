export function extractPriceAndCurrency(str: string): number {
    const arr = str.split(" ");
    const numArr = arr.map((value) => {
        if (value.includes(".")) {
            const indx = value.indexOf(".");
            return value.substring(0, indx);
        } else if (value.includes(",")) {
            const indx = value.indexOf(",");
            return value.substring(0, indx);
        } else {
            return value;
        }
    });

    return parseInt(numArr.join(""));
  
}
