import { create } from "zustand";
import { learningApi } from "@/api/learningApi";

export const useLearningStore = create((set) => ({
  items: [],
  loading: false,

  fetchItems: async () => {
    set({ loading: true });
    try {
      const items = await learningApi.list();
      set({ items });
    } finally {
      set({ loading: false });
    }
  },

  addItem: async (payload) => {
    const item = await learningApi.create(payload);
    set((state) => ({ items: [item, ...state.items] }));
  },

  updateItem: async (id, payload) => {
    const item = await learningApi.update(id, payload);
    set((state) => ({
      items: state.items.map((it) => (it.id === id ? item : it)),
    }));
  },

  removeItem: async (id) => {
    await learningApi.remove(id);
    set((state) => ({ items: state.items.filter((it) => it.id !== id) }));
  },
}));
