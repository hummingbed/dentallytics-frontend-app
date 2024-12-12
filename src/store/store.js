import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { exampleApi } from '../features/example/example';
import { chartDataService } from '../features/chartData/chartDataService';

export const store = configureStore({
  reducer: {
    // Register the API slices
    [exampleApi.reducerPath]: exampleApi.reducer,
    [chartDataService.reducerPath]: chartDataService.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(exampleApi.middleware, chartDataService.middleware),
});

// Optional: Enables cache invalidation, polling, and refetching
setupListeners(store.dispatch);
