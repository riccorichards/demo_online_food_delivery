import { createSlice } from "@reduxjs/toolkit";
import {
  ListOfVendorsType,
  TopVendorsType,
  Vendor,
  createVendor,
  getTopVendors,
  getVendorById,
  getVendors,
} from "../ApiCall";

type VendorState = {
  vendor: Vendor | null;
  vendors: ListOfVendorsType[] | null;
  topVentors: TopVendorsType[] | null;
  vendorById: Vendor | null;
  loading: boolean;
  error: string | null;
};

const initialState: VendorState = {
  vendor: null,
  vendors: null,
  topVentors: null,
  vendorById: null,
  loading: false,
  error: null,
};

const VendorSlice = createSlice({
  name: "vendor",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createVendor.pending, (state) => {
        state.loading = true;
      })
      .addCase(createVendor.fulfilled, (state, action) => {
        state.loading = false;
        state.vendor = action.payload;
      })
      .addCase(getVendors.pending, (state) => {
        state.loading = true;
      })
      .addCase(getVendors.fulfilled, (state, action) => {
        state.loading = false;
        state.vendors = action.payload;
      })
      .addCase(getTopVendors.pending, (state) => {
        state.loading = true;
      })
      .addCase(getTopVendors.fulfilled, (state, action) => {
        state.loading = false;
        state.topVentors = action.payload;
      })
      .addCase(getVendorById.pending, (state) => {
        state.loading = true;
      })
      .addCase(getVendorById.fulfilled, (state, action) => {
        state.loading = false;
        state.vendorById = action.payload;
      });
  },
});

export default VendorSlice.reducer;
