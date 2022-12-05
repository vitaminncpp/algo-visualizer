import $ from 'jquery';
import {sleep} from "../util/util";
import {getBarElements, renderBars} from "../updateUI";

export class Sorting {
    size: number;
    array: Array<number>;
    elements: Array<JQuery>;
    isRunning: boolean;
    delay: number;

    constructor(size: number) {
        this.size = size;
        this.array = [];
        this.elements = [];
        this.isRunning = false;
        this.delay = 50;

        //this bindings
        this.generateArray = this.generateArray.bind(this);
        this.fetchElements = this.fetchElements.bind(this);
        this.shuffle = this.shuffle.bind(this);
        this.bubbleSort = this.bubbleSort.bind(this);
        this.mergeSort = this.mergeSort.bind(this);
        this.merge = this.merge.bind(this);
        this.mergeSortHelper = this.mergeSortHelper.bind(this);
        this.quickSort = this.quickSort.bind(this);
        this.insertionSort = this.insertionSort.bind(this);
        this.quickSortHelper = this.quickSortHelper.bind(this);
        this.partition = this.partition.bind(this);
        this.selectionSort = this.selectionSort.bind(this);
        this.isSorted = this.isSorted.bind(this);

        this.resize = this.resize.bind(this);
        this.render = this.render.bind(this);

        this.generateArray();
        this.render();
        this.fetchElements();
    }

    generateArray() {
        this.array = [];
        for (let i = 0; i < this.size; i++) {
            this.array.push(Math.floor(Math.random() * 800) + 1);
        }
    }

    fetchElements() {
        this.elements = getBarElements(this.size);
    }

    shuffle() {
        if (this.isRunning) {
            return;
        }
        this.generateArray();
        for (let i = 0; i < this.size; i++) {
            this.elements[i].css({height: `${this.array[i]}px`});
            this.elements[i].css({background: `#00ffff`});
        }
    }

    async bubbleSort() {
        if (this.isRunning) {
            return;
        }
        this.isRunning = true;
        //bubble sort algorithm with await function
        for (let i = 0; i < this.size; i++) {
            for (let j = 0; j < this.size - i - 1; j++) {
                if (this.array[j] > this.array[j + 1]) {
                    let temp = this.array[j];
                    this.array[j] = this.array[j + 1];
                    this.array[j + 1] = temp;
                    this.elements[j].css({height: `${this.array[j]}px`});
                    this.elements[j + 1].css({height: `${this.array[j + 1]}px`});


                    //change colors of bars
                    this.elements[j].css({background: `#ff0000`});
                    this.elements[j + 1].css({background: `#ff0000`});

                    await sleep(this.delay);
                    //revert back colors
                    this.elements[j].css({background: `#00ffff`});
                    this.elements[j + 1].css({background: `#00ffff`});
                }
            }
            //change color for sorted part of an array
            for (let k = this.size - 1; k >= this.size - i - 1; k--) {
                this.elements[k].css({background: `#00ff00`});
            }
        }
        this.isRunning = false;
    }

    async mergeSort() {
        if (this.isRunning) {
            return;
        }
        this.isRunning = true;
        await this.mergeSortHelper(0, this.size - 1);
        this.isRunning = false;
    }

    async mergeSortHelper(left: number, right: number) {
        if (left < right) {
            let middle = Math.floor((left + right) / 2);
            await this.mergeSortHelper(left, middle);
            await this.mergeSortHelper(middle + 1, right);
            await this.merge(left, middle, right);
        }
    }

    async merge(left: number, middle: number, right: number) {
        let leftArr = this.array.slice(left, middle + 1);
        let rightArr = this.array.slice(middle + 1, right + 1);

        let i = 0;
        let j = 0;
        let k = left;

        while (i < leftArr.length && j < rightArr.length) {
            if (leftArr[i] < rightArr[j]) {
                this.array[k] = leftArr[i];
                i++;
            } else {
                this.array[k] = rightArr[j];
                j++;
            }
            this.elements[k].css('height', `${this.array[k]}px`);
            this.elements[k].css('background', '#00ff00');

            await sleep(10);
            this.elements[k].css('background', '#00ffff');
            k++;
        }

        while (i < leftArr.length) {
            this.array[k] = leftArr[i];
            this.elements[k].css('height', `${this.array[k]}px`);
            this.elements[k].css('background', '#00ff00');

            await sleep(100);
            this.elements[k].css('background', '#00ffff');
            i++;
            k++;
        }

        while (j < rightArr.length) {
            this.array[k] = rightArr[j];
            this.elements[k].css('height', `${this.array[k]}px`);
            this.elements[k].css('background', '#00ff00');

            await sleep(100);
            this.elements[k].css('background', '#00ffff');
            j++;
            k++;
        }
    }

    async quickSort() {
        if (this.isRunning) {
            return;
        }
        this.isRunning = true;
        await this.quickSortHelper(0, this.size - 1);
        this.isRunning = false;
    }

    async quickSortHelper(low: number, high: number) {
        if (low < high) {
            let pi = await this.partition(low, high);
            await this.quickSortHelper(low, pi - 1);
            await this.quickSortHelper(pi + 1, high);
        }
    }

    async partition(start: number, end: number) {
        const pivotValue = this.array[end];
        this.elements[end].css('background', '#ff0000');
        let pivotIndex = start;
        for (let i = start; i < end; i++) {
            if (this.array[i] < pivotValue) {
                [this.array[i], this.array[pivotIndex]] = [this.array[pivotIndex], this.array[i]];
                this.elements[i].css('height', `${this.array[i]}px`);
                this.elements[pivotIndex].css('height', `${this.array[pivotIndex]}px`);
                this.elements[i].css('background', '#00ff00');
                this.elements[pivotIndex].css('background', '#00ff00');
                await sleep(25);
                this.elements[i].css('background', '#00ffff');
                this.elements[pivotIndex].css('background', '#00ffff');
                pivotIndex++;
            }
        }

        [this.array[pivotIndex], this.array[end]] = [this.array[end], this.array[pivotIndex]]

        this.elements[end].css('height', `${this.array[end]}px`);
        this.elements[pivotIndex].css('height', `${this.array[pivotIndex]}px`);
        this.elements[end].css('background', '#00ff00');
        this.elements[pivotIndex].css('background', '#00ff00');
        this.elements[end].css('background', '#00ffff');
        this.elements[pivotIndex].css('background', '#00ffff');
        this.elements[end].css('background', '#00ffff');
        return pivotIndex;
    }

    insertionSort() {

    }

    selectionSort() {

    }

    isSorted() {
        for (let i = 0; i < this.array.length; i++) {
            if (this.array[i] > this.array[i + 1]) {
                return false;
            }
        }
        return true;
    }

    resize(size: number) {
        if (this.isRunning) {
            return;
        }
        this.size = size;
        this.generateArray();
        this.render();
        this.fetchElements();

    }

    render() {
        renderBars(this.array);
    }

}
