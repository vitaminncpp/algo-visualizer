import $ from 'jquery';
import {sleep} from "../util/util";
import {getBarElements, renderBars} from "../updateUI";

export class Sorting {
    size: number;
    array: Array<number>;
    elements: Array<JQuery>;
    isRunning: boolean;

    constructor(size: number) {
        this.size = size;
        this.array = [];
        this.elements = [];
        this.isRunning = false;

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
        this.generateArray();
        for (let i = 0; i < this.size; i++) {
            this.elements[i].css({height: `${this.array[i]}px`});
            this.elements[i].css({background: `#00ffff`});
        }
    }

    async bubbleSort() {
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

                    await sleep(50);
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

    mergeSort() {

    }

    merge() {

    }

    mergeSortHelper() {

    }

    quickSort() {

    }

    quickSortHelper() {

    }

    partition() {

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
        this.size = size;
        this.generateArray();
        this.render();
        this.fetchElements();

    }

    render() {
        renderBars(this.array);
    }

}
