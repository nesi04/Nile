import { createSlice, asyncThunkCreator, createAsyncThunk } from "@reduxjs/toolkit";

export  const fetchProducts = createAsyncThunk('products/fetchProducts',async ()=>{
  const response = await fetch("https://fakestoreapi.com/products");  
  return response.json();
});

const productSlice = createSlice({
  name: "products",
  initialState: { items: [], status: "idle" },
  reducers: {},
  extraReducers: (builder) => {
   builder.addCase(fetchProducts.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchProducts.fulfilled,(state,action)=>{
      state.status="succeeded";
      state.items=action.payload;
    });
    builder.addCase(fetchProducts.rejected,(state)=>{
      state.status="failed"
    });
  },
});

export const { setProducts } = productSlice.actions;
export default productSlice.reducer;
