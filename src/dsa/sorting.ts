import $ from 'jquery';
import {sleep} from "../util/util";

enum SortAlgo {
    MergeSort,
    QuickSort,
    BubbleSort,
    HeapSort,
    SelectionSort,
    InsertionSort,
    BogoSort
};

type State = {
    sortAlgo: SortAlgo,
    mergSort: {},
    quickSort: {},

}

type SortType =
    {
        array: Array<number>,
        randomize: () => void,
    };

export const Sort: SortType =
    {
        array: [],
        randomize: () => {

        }
    };

export const start: () => void = () => {

};

export const stop: () => void = () => {

};

export const play: () => void = () => {

};


export const renderBars: (barCount: number) => void = (barCount: number) => {
    let htmlString: string = '';
    for (let i: number = 0; i < barCount; i++) {
        htmlString += `<div  id="${i}" class="bar"></div>`;
    }
    $('#canvas .array').html(htmlString);
};

class Sorting {
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
    }

    generateArray() {

    }

    fetchElements() {

    }

    shuffle() {

    }

    bubbleSort() {

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

    }
}