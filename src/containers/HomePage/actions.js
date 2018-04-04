export const ADD = 'ADD';

export function add(num) {
    return {
        type: ADD,
        num: num
    }
}
