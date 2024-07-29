
import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  isLoading: false,
  error: null,
  productApiData: [],
  categoryApiData:[],
};

export const productApi = createAsyncThunk("productApi", async () => {
  const response = await fetch("http://localhost:8000/getProducts");
  const data = await response.json();
  return data.products; // Return products array directly
});
export const CategoryApi = createAsyncThunk("CategoryApi", async () => {
  const response = await fetch("http://localhost:8000/getCategories");
  const data = await response.json();
  return data.categories; // Return products array directly
});
const Slice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      console.log(action.payload, "hammad");

      const data = {
        Id: nanoid(),
        city: action.payload.city,
        date: action.payload.date,
        time: action.payload.time,
        method: action.payload.method,
        message: action.payload.message,
      };

      state.cart.push(data);
      console.log(state.cart[0], "updated cart");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(productApi.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(productApi.fulfilled, (state, action) => {
        state.isLoading = false;
        state.productApiData = action.payload; // Assign products array directly
      })
      .addCase(productApi.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(CategoryApi.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(CategoryApi.fulfilled, (state, action) => {
        state.isLoading = false;
        state.categoryApiData = action.payload; // Assign categories array directly
      })
      .addCase(CategoryApi.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  
  },
});

export const { addToCart } = Slice.actions;
export default Slice.reducer;
