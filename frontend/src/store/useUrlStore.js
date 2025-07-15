import { create } from 'zustand';
import axios from 'axios';

export const useUrlStore = create((set, get) => ({
  url: '',
  shortUrl: '',
  loading: false,

  setUrl: (val) => set({ url: val }),

  handleSubmit: async () => {
    const token = localStorage.getItem('token');
    const url = get().url;

    if (!token) {
      alert("Please log in to shorten URLs.");
      window.location.href = '/login'; //  use window.location
      return;
    }

    if (!url) {
      alert("Please enter a URL.");
      return;
    }

    try {
      set({ loading: true });

      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/shorten`,
        { originalUrl: url },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const shortUrl = res.data.shortUrl;
      set({ shortUrl });

      alert(`Short URL created: ${shortUrl}`);
    } catch (error) {
      console.error(' Error creating short URL:', error);
      alert(error.response?.data?.message || 'Something went wrong');
    } finally {
      set({ loading: false });
    }
  },
}));
