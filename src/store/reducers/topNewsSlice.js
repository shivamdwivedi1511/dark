import { createSlice } from "@reduxjs/toolkit";

const topNewsSlice = createSlice({
  name: "topNews",
  initialState: { news: [] },
  reducers: {
    addTopNews: (state, action) => {
      state.news = action.payload.articles;      ;
    },
  },
});

export default topNewsSlice.reducer;

export const { addTopNews } = topNewsSlice.actions;
