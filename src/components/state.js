import { proxy } from 'valtio'

export const state = proxy({
    music: [],
    photos: [],
    info: [],
    content: [],
});