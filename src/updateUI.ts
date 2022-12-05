import {algo} from "./index";
import $ from 'jquery';
import {AlgoType, GraphAlgo, SortAlgo} from "./algo";
import ClickEvent = JQuery.ClickEvent;

export const updateUI: () => void = () => {
    updateCommonControls();
    updateAlgoControls();
    updateSortControls();
    updateGraphControls();
    applyCSS();
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
        $('.header .algo-list button').removeClass('button-active');
        $('.header .algo-list button').addClass('button-inactive');
        $('#sorting').removeClass('button-inactive');
        $('#sorting').addClass('button-active');
        $('.graph-controls').css('display', 'none');
        $('.sorting-controls').css('display', 'block');
    });
    $('#graph').on('click', (event: ClickEvent) => {
        algo.setAlgo(AlgoType.GRAPH);
        $('.header .algo-list button').removeClass('button-active');
        $('.header .algo-list button').addClass('button-inactive');
        $('#graph').removeClass('button-inactive');
        $('#graph').addClass('button-active');

        $('.sorting-controls').css('display', 'none');
        $('.graph-controls').css('display', 'block');
    });
}

//Sorting controls
export const updateSortControls: () => void = () => {

    $('#bubble-sort').on('click', (event: ClickEvent) => {
        algo.setSubAlgo(SortAlgo.BUBBLE);
        $('.header .algo-controls button').removeClass('button-active');
        $('.header .algo-controls button').addClass('button-inactive');
        $('#bubble-sort').removeClass('button-inactive');
        $('#bubble-sort').addClass('button-active');
    });

    $('#quick-sort').on('click', (event: ClickEvent) => {
        algo.setSubAlgo(SortAlgo.QUICK);
        $('.header .algo-controls button').removeClass('button-active');
        $('.header .algo-controls button').addClass('button-inactive');
        $('#quick-sort').removeClass('button-inactive');
        $('#quick-sort').addClass('button-active');
    });
    $('#merge-sort').on('click', (event: ClickEvent) => {
        algo.setSubAlgo(SortAlgo.MERGE);
        $('.header .algo-controls button').removeClass('button-active');
        $('.header .algo-controls button').addClass('button-inactive');
        $('#merge-sort').removeClass('button-inactive');
        $('#merge-sort').addClass('button-active');
    });
    $('#selection-sort').on('click', (event: ClickEvent) => {
        algo.setSubAlgo(SortAlgo.SELECTION);
        $('.header .algo-controls button').removeClass('button-active');
        $('.header .algo-controls button').addClass('button-inactive');
        $('#selection-sort').removeClass('button-inactive');
        $('#selection-sort').addClass('button-active');
    });
    $('#insertion-sort').on('click', (event: ClickEvent) => {
        algo.setSubAlgo(SortAlgo.INSERTION);
        $('.header .algo-controls button').removeClass('button-active');
        $('.header .algo-controls button').addClass('button-inactive');
        $('#insertion-sort').removeClass('button-inactive');
        $('#insertion-sort').addClass('button-active');
    });
    $('#bogo-sort').on('click', (event: ClickEvent) => {
        algo.setSubAlgo(SortAlgo.BOGO);
        $('.header .algo-controls button').removeClass('button-active');
        $('.header .algo-controls button').addClass('button-inactive');
        $('#bogo-sort').removeClass('button-inactive');
        $('#bogo-sort').addClass('button-active');
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

export const applyCSS: () => void = () => {
    $('.header button').addClass('button-inactive');
    $('.sorting-controls').css('display', 'none');
    $('.graph-controls').css('display', 'none');
}