import { seedItems } from "@/data/mockData";

const delay = (ms = 400) => new Promise((resolve) => setTimeout(resolve, ms));

let db = [...seedItems];

export const learningApi = {
  async list() {
    await delay();
    return [...db];
  },
  async create(payload) {
    await delay();
    const item = {
      ...payload,
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
    };
    db = [item, ...db];
    return item;
  },
  async update(id, payload) {
    await delay();
    db = db.map((it) => (it.id === id ? { ...it, ...payload } : it));
    return db.find((it) => it.id === id);
  },
  async remove(id) {
    await delay();
    db = db.filter((it) => it.id !== id);
    return id;
  },
};
