import {algo} from "../index";
import $ from 'jquery';
import {AlgoType, GraphAlgo, SortAlgo} from "../dsa/algo";
import {MessageType, notify} from "../notifications/notifications";
import ClickEvent = JQuery.ClickEvent;

export const updateUI: () => void = () => {
    updateCommonControls();
    updateAlgoControls();
    updateSortControls();
    updateGraphControls();
    applyCSS();
    misc();
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
    $('#pause').on('click', (event: ClickEvent) => {
        algo.pause();
        $('#pause').text((algo.state.pause ? 'Play' : 'Pause'));
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
    $('#sorting-button').on('click', (event: ClickEvent) => {
        algo.setAlgo(AlgoType.SORTING);
        $('.header .algo-list button').removeClass('button-active');
        $('.header .algo-list button').addClass('button-inactive');
        $('#sorting-button').removeClass('button-inactive');
        $('#sorting-button').addClass('button-active');
        $('.graph-controls').css('display', 'none');

        $('.sorting-controls').css('display', 'block');
        $('#array').css('display', 'flex');
        $('#graph').css('display', 'none');
    });
    $('#graph-button').on('click', (event: ClickEvent) => {
        algo.setAlgo(AlgoType.GRAPH);
        $('.header .algo-list button').removeClass('button-active');
        $('.header .algo-list button').addClass('button-inactive');
        $('#graph-button').removeClass('button-inactive');
        $('#graph-button').addClass('button-active');

        $('.sorting-controls').css('display', 'none');
        $('.graph-controls').css('display', 'flex');
        $('#array').css('display', 'none');
        $('#graph').css('display', 'flex');
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
    $('#stalin-sort').on('click', (event: ClickEvent) => {
        algo.setSubAlgo(SortAlgo.STALIN);
        $('.header .algo-controls button').removeClass('button-active');
        $('.header .algo-controls button').addClass('button-inactive');
        $('#stalin-sort').removeClass('button-inactive');
        $('#stalin-sort').addClass('button-active');
    });
    $('#oddeven-sort').on('click', (event: ClickEvent) => {
        algo.setSubAlgo(SortAlgo.ODDEVEN);
        $('.header .algo-controls button').removeClass('button-active');
        $('.header .algo-controls button').addClass('button-inactive');
        $('#oddeven-sort').removeClass('button-inactive');
        $('#oddeven-sort').addClass('button-active');
    });
    /*$('#generate-bars').on('click', (event: ClickEvent) => {
        algo.generateBars($('#bar-count').val());
    });*/
    $('#generate-bars').on('click', (event: ClickEvent) => {
        let barCount = $('#bar-count').val();
        // @ts-ignore
        let num = parseInt(barCount.toString());
        algo.sort.resize(num);
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
    $('#generate-graph').on('click', (event: ClickEvent) => {
        //TODO Generate Graph
        //@ts-ignore
        let rows = parseInt($('#graph-row').val().toString());
        //@ts-ignore
        let cols = parseInt($('#graph-column').val().toString());

        renderGraph(cols, rows);
    });
}

export const renderBars: (array: Array<number>) => void = (array: Array<number>) => {
    let htmlString = ``;
    let size: number = array.length;
    for (let i = 0; i < size; i++) {
        htmlString += `<div id="bar-${i}" class="bar"></div>`;
    }
    $('#canvas #array').html(htmlString);
    array.forEach((x, i) => {
        $(`#bar-${i}`).css('height', `${x}px`);
    })
}

export const renderGraph: (rows: number, cols: number) => void = (rows: number, cols: number) => {
    let htmlString: string = ``;
    htmlString += '<table>';
    for (let i = 0; i < rows; i++) {
        htmlString += '<tr>';
        for (let j = 0; j < cols; j++) {
            htmlString += `<td class ="node" id="node-${i}-${j}"></td>`;
        }
        htmlString += '</tr>'
    }
    htmlString += '</table>'
    $('#graph').html(htmlString);

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
    $('.graph-controls').css('display', 'none');
    $('.sorting-controls').css('display', 'none');
}

export const misc: () => void = () => {
    $('#test').on('click', (event: ClickEvent) => {
        notify(MessageType.FAILURE, "This is Test Message");
    })
}