import {algo} from "./index";
import $ from 'jquery';
import ClickEvent = JQuery.ClickEvent;
import {AlgoType, GraphAlgo, SortAlgo} from "./algo";

export const updateUI: () => void = () => {
    updateCommonControls();
    updateAlgoControls();
    updateSortControls();
    updateGraphControls();
}


//common controls
export const updateCommonControls: () => void = () => {
    $('#start').on('click', (event: ClickEvent) => {
        algo.start().then(() => {
            console.log('done');
        });
    });
    $('#stop').on('click', (event: ClickEvent) => {
        algo.stop();
    });
    $('#step').on('click', (event: ClickEvent) => {
        algo.step();
    });
    $('#back').on('click', (event: ClickEvent) => {
        algo.back();
    });
    $('#reset').on('click', (event: ClickEvent) => {
        algo.reset();
    });
}

//algorithm controls
export const updateAlgoControls: () => void = () => {
    $('#sorting').on('click', (event: ClickEvent) => {
        algo.setAlgo(AlgoType.SORTING);
    });
    $('#graph').on('click', (event: ClickEvent) => {
        algo.setAlgo(AlgoType.GRAPH);
    });
}

//Sorting controls
export const updateSortControls: () => void = () => {

    $('#bubble-sort').on('click', (event: ClickEvent) => {
        algo.setSubAlgo(SortAlgo.BUBBLE);
    });

    $('#quick-sort').on('click', (event: ClickEvent) => {
        algo.setSubAlgo(SortAlgo.QUICK);
    });
    $('#merge-sort').on('click', (event: ClickEvent) => {
        algo.setSubAlgo(SortAlgo.MERGE);
    });
    $('#selection-sort').on('click', (event: ClickEvent) => {
        algo.setSubAlgo(SortAlgo.SELECTION);
    });
    $('#insertion-sort').on('click', (event: ClickEvent) => {
        algo.setSubAlgo(SortAlgo.INSERTION);
    });
    $('#bogo-sort').on('click', (event: ClickEvent) => {
        algo.setSubAlgo(SortAlgo.BOGO);
    });
    $('#generate-bars').on('click', (event: ClickEvent) => {
        algo.generateBars($('#bar-count').val());
    });

}

//graph controls
export const updateGraphControls: () => void = () => {
    $('#bfs').on('click', (event: ClickEvent) => {
        algo.setSubAlgo(GraphAlgo.BFS);
    });

    $('#dfs').on('click', (event: ClickEvent) => {
        algo.setSubAlgo(GraphAlgo.DFS);
    });
}

export const renderBars: (size: number) => void = (size: number) => {
    let htmlString = ``;
    for (let i = 0; i < size; i++) {
        htmlString += `<div id="bar-${i}" class="bar"></div>`;
    }
    $('#canvas .array').html(htmlString);
}

export const getBarElements: (size: number) => Array<JQuery> = (size: number) => {
    let elements: Array<JQuery> = [];
    for (let i = 0; i < size; i++) {
        elements.push($(`#bar-${i}`));
        elements[i].css({width: `${60 / size}vw`});
    }
    return elements;
}