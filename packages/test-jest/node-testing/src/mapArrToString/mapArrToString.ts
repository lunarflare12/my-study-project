const mapArrToString = (arr: (number | string | null | undefined)[]): string[] => {
    return arr
        .filter((item): item is number => Number.isInteger(item))
        .map(String);
}

export default mapArrToString;
