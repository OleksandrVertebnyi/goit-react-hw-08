import { createSlice, createSelector } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './contactsOps';
import { selectNameFilter } from './filtersSlice';

const initialState = {
    items: [],
    loading: false,
    error: null
};

const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            // fetch
            .addCase(fetchContacts.pending, state => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchContacts.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload;
            })
            .addCase(fetchContacts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || 'Failed to fetch';
            })

            // add
            .addCase(addContact.pending, state => {
                state.error = null;
            })
            .addCase(addContact.fulfilled, (state, action) => {
                state.items.push(action.payload);
            })
            .addCase(addContact.rejected, (state, action) => {
                state.error = action.payload || 'Failed to add';
            })

            // delete
            .addCase(deleteContact.fulfilled, (state, action) => {
                state.items = state.items.filter(c => c.id !== action.payload.id);
            })
            .addCase(deleteContact.rejected, (state, action) => {
                state.error = action.payload || 'Failed to delete';
            })
});

export default contactsSlice.reducer;


export const selectContacts = state => state.contacts.items;
export const selectLoading = state => state.contacts.loading;
export const selectError = state => state.contacts.error;


export const selectFilteredContacts = createSelector(
    [selectContacts, selectNameFilter],
    (items, filter) => {
        const q = filter.trim().toLowerCase();
        return q ? items.filter(i => i.name.toLowerCase().includes(q)) : items;
    }
);
