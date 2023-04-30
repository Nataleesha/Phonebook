import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "components/Redux/contacts/contactsSlice.js";
import { filterReducer } from "components/Redux/filter/filterSlice.js";
import { authReducer } from "components/Redux/auth/authSlice";
// import storage from "redux-persist/lib/types";
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    contacts: contactsReducer,
    filter: filterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
