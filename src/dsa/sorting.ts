import $ from 'jquery';


export const createBars: (barCount: number) => void = (barCount: number) => {
    let htmlString: string = '';
    for (let i: number = 0; i < barCount; i++) {
        htmlString += `<div  id="${i}" class="bar"></div>`;
    }
    $('#canvas .array').html(htmlString);
}