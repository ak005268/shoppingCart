import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    tabStatus: true
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addCart: (state: any, action: any) => {
            const product = action.payload;
            const existingItem = state.items.find((item: any) => item.id === product.id);

            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.items.push({ ...product, quantity: 1 });
            }

            localStorage.setItem('cart', JSON.stringify(state.item))
        },
        changeQuantity: (state: any, action: any) => {
            const { id, quantity } = action.payload;
            console.log('quantity=>', quantity)

            const existingItem = state.items.find((item: any) => item.id === id);

            if (existingItem) {
                if (quantity <= 1) {
                    state.items = state.items.filter((item: any) => item.id !== id);
                } else {
                    existingItem.quantity -= 1;
                }
            }
            localStorage.setItem('cart', JSON.stringify(state.item))

        },
        changeTab: (state, _action) => {
            state.tabStatus = !state.tabStatus
        }
    }
})

export const { addCart, changeQuantity, changeTab } = cartSlice.actions;
export default cartSlice.reducer;