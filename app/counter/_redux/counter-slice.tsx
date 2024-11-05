import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CounterState } from './counter-state'

const initialState: CounterState = {
  count: 0,
  firstName: 'mhel',
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,

  // actions
  reducers: {
    plusButtonPressed(state: CounterState) {
      return {
        ...state,
        count: state.count + 1,
      }
    },
    minusButtonPressed(state: CounterState) {
      return {
        ...state,
        count: state.count - 1,
      }
    },
    firstNameChanged(state: CounterState, action: PayloadAction<string>) {
      return {
        ...state,
        firstName: action.payload,
      }
    },
  },
})

export const counterActions = counterSlice.actions

export default counterSlice.reducer
