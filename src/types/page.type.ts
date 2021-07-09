import {IBlock} from './block.type';

export enum pageEnum {
    default = 'default',
    enter = 'enter',
    error = 'error',
    profile = 'profile',
    chat = 'chat',
}

export interface IPage extends IBlock {
    constructor(): IPage;
}
