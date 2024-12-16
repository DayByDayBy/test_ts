function heapify_ts(arr: number[], n: number, i: number): void {
    let largest = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;

    if (left < n && arr[left] > arr[largest]) largest = left;
    if (right < n && arr[right] > arr[largest]) largest = right;

    if (largest !== i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]];
        heapify_ts(arr, n, largest);
    }
}

function heapSort_ts(array: number[]): void {
    let n = array.length;

    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) heapify_ts(array, n, i);

    for (let i = n - 1; i > 0; i--) {
        [array[0], array[i]] = [array[i], array[0]];
        heapify_ts(array, i, 0);
    }
}

let numbers: number[] = [4, 10, 3, 5, 1];
heapSort_ts(numbers);
console.log(numbers);
