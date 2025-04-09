import { createSelector } from '@reduxjs/toolkit';
import { selectNameFilter } from '../filters/selectors';

export const selectContactsItems = state => state.contacts.items;

export const selectFilteredContacts = createSelector(
  [selectContactsItems, selectNameFilter],
  (contacts, filter) => {
    if (!Array.isArray(contacts)) return [];
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);