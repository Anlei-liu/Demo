import { createSelector } from 'reselect'

const numState = () => state => state.addNum


const selectNum = () => createSelector(
    numState(),
    (state) => state.toJS()
)

export default selectNum

export {
    numState,
    selectNum,
}
