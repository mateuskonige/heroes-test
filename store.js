import axios from 'axios';
import { create } from 'zustand';

const useStore = create((set) => ({
    data: [],
    search: '',
    modal: false,
    selectedHeros: [],

    fetchData: async () => {
        try {
            const response = await axios.get('http://homologacao3.azapfy.com.br/api/ps/metahumans');
            set({ data: response.data });
        } catch (error) {
        }
    },

    filteredData: () => {
        const { data, search } = useStore.getState();
        return data.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()));
    },

    setSearch: (search) => set({ search }),

    setModal: (modal) => set({ modal }),

    addHero: (hero) => set((state) => ({ selectedHeros: [...state.selectedHeros, hero] })),

    clearSelectedHeroes: () => set({ selectedHeros: [] }),
}));

export default useStore;