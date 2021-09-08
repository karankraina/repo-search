
/**
 * 
 * @param array Array to be sorted
 * @param propName Property to be sorted on
 * @param isRev Sort type - ASC or Desc - marked as boolean
 * @returns Sorted Array
 */
export const sortArray = (array: any[], propName: string, isRev: boolean): any[] => {
    if (isRev === true) {
        return array.sort((a, b) => {
            return `${a[propName]}`.toLowerCase() < `${b[propName]}`.toLowerCase() ? 1 : `${a[propName]}`.toLowerCase() > `${b[propName]}`.toLowerCase() ? -1 : 0
        })
    }
    else {
        return array.sort((a, b) => {
            return `${a[propName]}`.toLowerCase() > `${b[propName]}`.toLowerCase() ? 1 : `${a[propName]}`.toLowerCase() < `${b[propName]}`.toLowerCase() ? -1 : 0
        })
    }
}

/**
 * 
 * @param array Array to be filtered
 * @param propNames Properties to be filtered on
 * @param keyword Search keyword
 * @returns Filtered array
 */
export const filterArray = (array: any[], propNames: string[], keyword: string): any[] => {
    if (!keyword) return array;
    return array.filter((item: any) => {
        for (let propName of propNames) {
            console.log({ propName });

            if (`${item[propName]}`.toLowerCase().indexOf(keyword.toLowerCase()) > -1) {
                return true
            }
        }

    });
}