import {renderBars, Sorting} from "./dsa/sorting";


export const init: () => void = async () => {
    renderBars(50);
    const sim = new Sorting(50);
    sim.fetchElements();
    sim.generateArray();
    let promise = sim.bubbleSort();
}
