import {Sorting} from "./dsa/sorting";
import {getJSON} from "jquery";


export enum AlgoType {
    NONE,
    SORTING,
    GRAPH
}

export enum SortAlgo {
    NONE,
    BUBBLE,
    SELECTION,
    QUICK,
    MERGE,
    INSERTION,
    BOGO,
}

export enum GraphAlgo {
    NONE,
    BFS,
    DFS,
}


export type State = {
    algo: AlgoType,
    subAlgo: GraphAlgo | SortAlgo,
    pause: boolean
}

export class Algorithm {
    state: State;
    sort: Sorting;

    constructor() {
        this.state = {
            pause: false,
            algo: AlgoType.SORTING,
            subAlgo: SortAlgo.BUBBLE,
        };
        this.sort = new Sorting(50);

        //This bindings
        this.setAlgo = this.setAlgo.bind(this);
        this.setSubAlgo = this.setSubAlgo.bind(this);
        this.generateBars = this.generateBars.bind(this);
        this.pause = this.pause.bind(this);
    }

    setAlgo(algo: AlgoType) {
        this.state.algo = algo;
    }

    setSubAlgo(subAlgo: SortAlgo | GraphAlgo) {
        this.state.subAlgo = subAlgo;
    }

    async start() {
        switch (this.state.algo) {
            case AlgoType.SORTING:
                switch (this.state.subAlgo) {
                    case SortAlgo.NONE:
                        break;
                    case SortAlgo.BUBBLE:
                        await this.sort.bubbleSort();
                        break;
                    case SortAlgo.QUICK:
                        await this.sort.quickSort();
                        break;
                    case SortAlgo.MERGE:
                        await this.sort.mergeSort();
                        break;
                    case SortAlgo.INSERTION:
                        break;
                    case SortAlgo.SELECTION:
                        break;
                    default:
                        break;
                }
                break;
            case AlgoType.GRAPH:
                switch (this.state.subAlgo) {
                    case GraphAlgo.NONE:
                        break;
                    case GraphAlgo.BFS:
                        break;
                    case GraphAlgo.DFS:
                        break;
                    default:
                        break;
                }
                break;
            case AlgoType.NONE:
                break;
            default:
                break;
        }
    }

    stop() {
        switch (this.state.algo) {
            case AlgoType.SORTING:
                switch (this.state.subAlgo) {
                    case SortAlgo.NONE:
                        break;
                    case SortAlgo.BUBBLE:
                        break;
                    case SortAlgo.QUICK:
                        break;
                    case SortAlgo.MERGE:
                        break;
                    case SortAlgo.INSERTION:
                        break;
                    case SortAlgo.SELECTION:
                        break;
                    default:
                        break;
                }
                break;
            case AlgoType.GRAPH:
                switch (this.state.subAlgo) {
                    case GraphAlgo.NONE:
                        break;
                    case GraphAlgo.BFS:
                        break;
                    case GraphAlgo.DFS:
                        break;
                    default:
                        break;
                }
                break;
            case AlgoType.NONE:
                break;
            default:
                break;
        }
    }

    reset() {
        switch (this.state.algo) {
            case AlgoType.SORTING:
                this.sort.shuffle();
                switch (this.state.subAlgo) {
                    case SortAlgo.NONE:
                        break;
                    case SortAlgo.BUBBLE:
                        break;
                    case SortAlgo.QUICK:
                        break;
                    case SortAlgo.MERGE:
                        break;
                    case SortAlgo.INSERTION:
                        break;
                    case SortAlgo.SELECTION:
                        break;
                    default:
                        break;
                }
                break;
            case AlgoType.GRAPH:
                switch (this.state.subAlgo) {
                    case GraphAlgo.NONE:
                        break;
                    case GraphAlgo.BFS:
                        break;
                    case GraphAlgo.DFS:
                        break;
                    default:
                        break;
                }
                break;
            case AlgoType.NONE:
                break;
            default:
                break;
        }
    }

    step() {
        switch (this.state.algo) {
            case AlgoType.SORTING:
                switch (this.state.subAlgo) {
                    case SortAlgo.NONE:
                        break;
                    case SortAlgo.BUBBLE:
                        break;
                    case SortAlgo.QUICK:
                        break;
                    case SortAlgo.MERGE:
                        break;
                    case SortAlgo.INSERTION:
                        break;
                    case SortAlgo.SELECTION:
                        break;
                    default:
                        break;
                }
                break;
            case AlgoType.GRAPH:
                switch (this.state.subAlgo) {
                    case GraphAlgo.NONE:
                        break;
                    case GraphAlgo.BFS:
                        break;
                    case GraphAlgo.DFS:
                        break;
                    default:
                        break;
                }
                break;
            case AlgoType.NONE:
                break;
            default:
                break;
        }
    }

    back() {
        switch (this.state.algo) {
            case AlgoType.SORTING:
                switch (this.state.subAlgo) {
                    case SortAlgo.NONE:
                        break;
                    case SortAlgo.BUBBLE:
                        break;
                    case SortAlgo.QUICK:
                        break;
                    case SortAlgo.MERGE:
                        break;
                    case SortAlgo.INSERTION:
                        break;
                    case SortAlgo.SELECTION:
                        break;
                    default:
                        break;
                }
                break;
            case AlgoType.GRAPH:
                switch (this.state.subAlgo) {
                    case GraphAlgo.NONE:
                        break;
                    case GraphAlgo.BFS:
                        break;
                    case GraphAlgo.DFS:
                        break;
                    default:
                        break;
                }
                break;
            case AlgoType.NONE:
                break;
            default:
                break;
        }
    }

    generateBars(size: string | number | string[] | undefined) {
        if (typeof size === "number") {
            this.sort.resize(size);
        }
    }

    pause() {
        if (this.state.pause) {
            this.state.pause = false;
            switch (this.state.algo) {
                case AlgoType.GRAPH:
                    break;
                case AlgoType.SORTING:
                    this.sort.delay = 50;
                    break;
                default:
                    break;
            }
        } else {
            this.state.pause = true;
            switch (this.state.algo) {
                case AlgoType.GRAPH:
                    break;
                case AlgoType.SORTING:
                    this.sort.delay = 999999999;
                    break;
                default:
                    break;
            }
        }

    }
}
