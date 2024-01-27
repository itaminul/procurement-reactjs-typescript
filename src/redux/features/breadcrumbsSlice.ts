import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface BreadcrumbsState {
  items: BreadcrumbItem[];
}

interface BreadcrumbItem {
  label: string;
  path: string;
}

const initialState: BreadcrumbsState = {
  items: [],
}

const breadcrumbsSlice = createSlice({
  name: 'breadcrumbs',
  initialState,
  reducers: {
    setBreadcrumbs: (state, action: PayloadAction<BreadcrumbItem[]>) => {
      state.items = action.payload;
    },
    clearBreadcrumbs: (state) => {
      state.items = []
    }
  }
})

export const { setBreadcrumbs, clearBreadcrumbs } = breadcrumbsSlice.actions;
export const selectBreadcrumbs = (state: { breadcrumbs: BreadcrumbsState}) => state.breadcrumbs;
export default breadcrumbsSlice.reducer;