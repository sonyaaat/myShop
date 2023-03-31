import { configureStore } from "@reduxjs/toolkit";
import { mainReducer } from "./mainSlice";

export const store = configureStore({
  reducer: {
    main:mainReducer
  },
});
// const middleware = [
//     ...getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
//   ];
//   const authPersistConfig = {
//     key: 'auth',
//     storage,
//     whitelist: ['token'],
//   };
//   export const store = configureStore({
//     reducer: {
//       auth: persistReducer(authPersistConfig, authReducer),
//       contacts: contactsReducer,
//       filter: filterReducer,
//     },
//     middleware,
//     devTools: process.env.NODE_ENV === 'development',
//   });
  
//   export const persistor = persistStore(store);