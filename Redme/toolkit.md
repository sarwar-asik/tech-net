## Installation and setup Redux ToolKIt

#### install 
            npm install @reduxjs/toolkit react-redux



## for counter >>>>

###  src>redux>store.ts ::::

        import { configureStore } from "@reduxjs/toolkit";
        import counterReducer from "./features/counter/counterSlice";

        const store = configureStore({
        reducer: {
            counter: counterReducer,
        },
        });

        export type RootState = ReturnType<typeof store.getState>

        export type AppDispatch = typeof store.dispatch
        export default store;

        
### main.tsx ::::::
        <Provider store={store}>
            <RouterProvider router={routes} />
            </Provider>

###  src>redux>features>counter>counterSlice.ts ::::
            import { createSlice } from "@reduxjs/toolkit";

            const initialState = { count: 0 };

            const counterSlice = createSlice({
            name: "counter",
            initialState: initialState,
            reducers: {
                increment: (state) => {
                state.count = state.count + 1;
                },
                decrement: (state) => {
                state.count = state.count - 1;
                },
            },
            });

            export default counterSlice.reducer;
