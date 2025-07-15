// src/store/useProfileStore.js
import { create } from 'zustand';
import axios from 'axios';

export const useProfileStore = create((set, get) => ({
  user: null,
  urls: [],
  loading: false,

  filters: {
    dateFrom: '',
    dateTo: '',
    clickMin: '',
    clickMax: '',
  },


  setFilters: (newFilters) =>
    set((state) => ({
      filters: {
        ...state.filters,
        ...newFilters,
      },
    })),

  fetchProfileData: async () => {
    try {
      set({ loading: true });
      const token = localStorage.getItem('token');

      if (!token) return;

      const userRes = await axios.get(`${import.meta.env.VITE_API_URL}/profile/me`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      const urlRes = await axios.get(`${import.meta.env.VITE_API_URL}/profile/my/urls`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      set({
        user: userRes.data.user,
        urls: urlRes.data.urls,
        loading: false,
      });
    } catch (err) {
      console.error('Profile data fetch error:', err);
      set({ loading: false });
    }
  },
  deleteUrl: async (urlId) => {
    try {
      const token = localStorage.getItem('token');

      if (!token) return;

      await axios.delete(`${import.meta.env.VITE_API_URL}/profile/url/${urlId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      set((state) => ({
        urls: state.urls.filter((url) => url._id !== urlId),
      }));
    } catch (err) {
      console.error('Delete URL error:', err);
    }
  },
  getFilteredUrls: () => {
    const { urls, filters } = get();

    return urls.filter((url) => {
      const createdAt = new Date(url.createdAt);
      const clickCount = url.clickCount;

      const from = filters.dateFrom ? new Date(filters.dateFrom) : null;
      const to = filters.dateTo ? new Date(filters.dateTo) : null;
      const minClicks = filters.clickMin ? Number(filters.clickMin) : null;
      const maxClicks = filters.clickMax ? Number(filters.clickMax) : null;

      return (
        (!from || createdAt >= from) &&
        (!to || createdAt <= to) &&
        (!minClicks || clickCount >= minClicks) &&
        (!maxClicks || clickCount <= maxClicks)
      );
    });
  },
}));
