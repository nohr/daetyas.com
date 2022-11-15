import { proxy } from 'valtio'

export const state = proxy({
    music: [],
    photos: [],
    words: [],
    info: [],
    content: [],
});