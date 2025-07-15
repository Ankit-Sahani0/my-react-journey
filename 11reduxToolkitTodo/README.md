📌 Redux Toolkit Flow in React

1️⃣ Create Store (store.js)
- use `configureStore()`
- pass all slice reducers

2️⃣ Create Slice (todoSlice.js)
- `createSlice()` with:
   • name
   • initialState
   • reducers: logic functions (state, action)

3️⃣ Export from Slice
- export action creators (e.g., addTodo)
- export reducer

4️⃣ Use in Component
- `useSelector()` → read data from store
- `useDispatch()` → send actions to reducer

5️⃣ Wrap App with <Provider store={store}> 
