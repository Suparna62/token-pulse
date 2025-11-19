import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type TokenState = {
  sortBy: { key: string; dir: 'asc' | 'desc' }
  pinned: string[]
}

const initialState: TokenState = { sortBy: { key: 'addedAt', dir: 'desc' }, pinned: [] }

const tokenSlice = createSlice({
  name: 'token',
  initialState,
  reducers: {
    setSort(state, action: PayloadAction<{ key: string; dir: 'asc' | 'desc' }>) {
      state.sortBy = action.payload
    },
    togglePin(state, action: PayloadAction<string>) {
      const idx = state.pinned.indexOf(action.payload)
      if (idx >= 0) state.pinned.splice(idx, 1)
      else state.pinned.push(action.payload)
    }
  }
})

export const { setSort, togglePin } = tokenSlice.actions
export default tokenSlice.reducer
