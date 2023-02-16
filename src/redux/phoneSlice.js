import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, deleteContact, addContact } from 'redux/operations';

const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    filter: '',
    error: null,
    isLoading: false,
  },
  reducers: {
    filterContact(state, action) {
      state.filter = action.payload;
    },
  },
  extraReducers: {
    [fetchContacts.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [fetchContacts.fulfilled]: (state, action) => {
      state.contacts = action.payload;
      state.isLoading = false;
      state.error = null;
      state.filter = '';
    },
    [fetchContacts.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      state.contacts = [];
      state.filter = '';
    },
    [addContact.fulfilled]: (state, action) => {
      state.contacts.push(action.payload);
      state.error = null;
      state.isLoading = false;
    },
    [addContact.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      state.filter = '';
    },
    [addContact.pending]: state => {
      state.isLoading = true;
    },

    [deleteContact.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      state.contacts = [];
      state.filter = '';
    },
    [deleteContact.pending]: state => {
      state.isLoading = true;
    },
    [deleteContact.fulfilled]: (state, action) => {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload.id
      );
      state.filter = '';
      state.error = null;
      state.isLoading = false;
    },
  },
});

export const { filterContact } = contactSlice.actions;
export default contactSlice.reducer;
// export const contactsReducer = contactSlice.reducer;
