import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


const api = axios.create({
    baseURL: import.meta.env.VITE_API_BASE
});

// GET /contacts
export const fetchContacts = createAsyncThunk(
    'contacts/fetchAll',
    async (_, thunkAPI) => {
        try {
            const { data } = await api.get('/contacts');
            return data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);
// POST /contacts
export const addContact = createAsyncThunk(
    'contacts/addContact',
    async (contact, thunkAPI) => {
        try {
            const { data } = await api.post('/contacts', contact);
            return data; 
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

// DELETE /contacts/:id
export const deleteContact = createAsyncThunk(
    'contacts/deleteContact',
    async (id, thunkAPI) => {
        try {
            const { data } = await api.delete(`/contacts/${id}`);
            return data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);
