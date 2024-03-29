import $ from "jquery";
import {sleep} from "../util/util";

export enum MessageType {
    SUCCESS,
    FAILURE,
    INFO
}

export const MessageMap = {
    SUCCESS: '#00ff00',
    FAILURE: '#ff0000',
    INFO: '#0000ff',
}
export const stats: { count: number } = {
    count: 0,
}

export const notify: (type: MessageType, message: string) => void = async (type: MessageType, message: string) => {
    let count: number = ++stats.count;
    let color: string = '';

    switch (type) {
        case MessageType.SUCCESS:
            color = MessageMap.SUCCESS;
            break;
        case MessageType.FAILURE:
            color = MessageMap.FAILURE;
            break;
        case MessageType.INFO:
            color = MessageMap.INFO;
            break;
        default:
            break;
    }
    let htmlString: string = getNotification({id: count, type: type, message: message});
    $('#notifications').append(htmlString);
    $(`#t-${stats.count} .progress`).before().css('background', '#fff');
    $(`#t-${stats.count} .progress`).css('background', color);
    $(`#t-${stats.count} .toast-content .check`).css('background', color);
    $(`#t-${stats.count}`).css('border-left', `6px solid ${color}`);
    await sleep(3000);
    $(`#t-${stats.count}`).addClass('fad');
    await sleep(2000);
    $(`#t-${stats.count}`).remove();
}


export const getNotification: (props: { id: number, type: MessageType, message: string }) => string = (props: { id: number, type: MessageType, message: string }) => {

    let type: string = '';
    switch (props.type) {
        case MessageType.SUCCESS:
            type = 'Success';
            break;
        case MessageType.FAILURE:
            type = 'Failure';
            break;
        case MessageType.INFO:
            type = 'Information';
            break;
        default:
            break;
    }

    let htmlString: string =
        `<div id="t-${props.id}" class="toast">
            <div class="toast-content">
                <i class="i fas fa solid fa-check check"></i>
                <div class="message">
                    <span class="text text-1">${type}</span>
                    <span class="text text-2">${props.message}</span>
                </div>
            </div>
            <i class="fa-solid fa-xmark close"></i>
            <div class="progress active"></div>
        </div>`;
    return htmlString;
}

