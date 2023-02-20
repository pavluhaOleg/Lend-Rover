import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type headerSlice = {
  blockHeader: boolean
}

const initialState: headerSlice = {
  blockHeader: false
}

const BlockHeaderSlice = createSlice({
  name: "header",
  initialState,
  reducers: {
    showHeader(state, action: PayloadAction<boolean>) {
      state.blockHeader = true
    }
  }
})

export const { showHeader } = BlockHeaderSlice.actions;

export default BlockHeaderSlice.reducer