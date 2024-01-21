import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://651fce42906e276284c3894f.mockapi.io/';

async function fetchAll(page = 1, limit = 12) {
  const { data } = await axios.get('/advert', {
    params: {
      page,
      limit,
    },
  });
  return data;
}

export const getAll = createAsyncThunk(
  'advert',
  async ({ page, limit }, { rejectWithValue }) => {
    try {
      const advert = await fetchAll(page, limit);
      return advert;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getFiltered = createAsyncThunk(
  'filter',
  async (filters, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/advert`, {
        params: { make: filters.make },
      });
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);