const delay = <T>(callback: () => T, ms: number): Promise<T> => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(callback()), ms);
    })
}

export default delay;
