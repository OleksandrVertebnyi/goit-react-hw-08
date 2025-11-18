import { createSlice, createSelector } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from './operations';
import { logOut } from '../auth/operations';
import { selectNameFilter } from '../filters/selectors';

const initialState = {
    items: [],
    loading: false,
    error: null,
};

const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
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
                state.error = action.payload;
            })
            .addCase(addContact.pending, state => {
                state.error = null;
            })
            .addCase(addContact.fulfilled, (state, action) => {
                state.items.push(action.payload);
            })
            .addCase(addContact.rejected, (state, action) => {
                state.error = action.payload;
            })
            .addCase(deleteContact.fulfilled, (state, action) => {
                state.items = state.items.filter(item => item.id !== action.payload);
            })
            .addCase(logOut.fulfilled, state => {
                state.items = [];
                state.loading = false;
                state.error = null;
            }),
});

export default contactsSlice.reducer;

export const selectContacts = state => state.contacts.items;
export const selectContactsLoading = state => state.contacts.loading;
export const selectContactsError = state => state.contacts.error;

export const selectFilteredContacts = createSelector(
    [selectContacts, selectNameFilter],
    (contacts, filter) => {
        const norm = filter.toLowerCase();
        return contacts.filter(
            c =>
                c.name.toLowerCase().includes(norm) ||
                c.number.toLowerCase().includes(norm)
        );
    }
);

