// Path: features\api\apiSlice.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_URL = 'http://192.168.121.63:3000/';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    // Fetch all stocks
    getStocks: builder.query({
      query: () => '/api/stocks',
    }),
    // Fetch a single stock by symbol
    getStockBySymbol: builder.query({
      query: (symbol) => `/api/stocks/${symbol}`,
    }),
    // Add a stock to the watchlist
    addToWatchlist: builder.mutation({
      query: (symbol) => ({
        url: '/api/watchlist',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: { symbol },
      }),
    }),
    // Remove a stock from the watchlist
    removeFromWatchlist: builder.mutation({
      query: (symbol) => ({
        url: `/api/watchlist/${symbol}`,
        method: 'DELETE',
      }),
    }),
    // Fetch the watchlist
    getWatchlist: builder.query({
      query: () => '/api/watchlist',
    }),
    // Fetch market summary
    getMarketSummary: builder.query({
      query: () => '/api/market/summary',
    }),
  }),
});

// Export hooks for usage in functional components
export const {
  useGetStocksQuery,
  useGetStockBySymbolQuery,
  useAddToWatchlistMutation,
  useRemoveFromWatchlistMutation,
  useGetWatchlistQuery,
  useGetMarketSummaryQuery,
} = apiSlice;