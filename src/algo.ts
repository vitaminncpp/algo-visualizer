import {Sorting} from "./dsa/sorting";


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
}

export class Algorithm {
    state: State;
    sort: Sorting;

    constructor() {
        this.state = {
            algo: AlgoType.SORTING,
            subAlgo: SortAlgo.BUBBLE,
        };
        this.sort = new Sorting(50);

        //This bindings
        this.setAlgo = this.setAlgo.bind(this);
        this.setSubAlgo = this.setSubAlgo.bind(this);
        this.generateBars = this.generateBars.bind(this);
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
                this.sort.resize(this.sort.size);
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
}
