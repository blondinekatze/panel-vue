import apiProduct from '@/api/products';

const state = {
    products: [],
    filter: null,
    isLoading: true
};

const getters = {


    minPrice: (state) => {
        return Math.min(...state.products.map(item => {
            return Math.min(...item.offers.map(offer => offer.price));
        }));
    },

    maxPrice: (state) => {
        return Math.max(...state.products.map(item => {
            return Math.max(...item.offers.map(offer => offer.price));
        }));
    },

    minSize: (state) => {
        return Math.min(...state.products.map(item => {
            return Math.min(...item.offers.map(offer => offer.size));
        }));
    },

    maxSize: (state) => {
        return Math.max(...state.products.map(item => {
            return Math.max(...item.offers.map(offer => offer.size));
        }));
    },

    filteredItems: (state) => {
        if (state.filter === null) {
            return state.products;
        }
        return state.products
            .filter(item => {
                return item.offers.find(offer => {
                    return offer.price >= state.filter.price[0] && offer.price <= state.filter.price[1];
                }) !== undefined;
            })
            .filter(item => {
                return item.offers.find(offer => {
                    return offer.size >= state.filter.size[0] && offer.size <= state.filter.size[1];
                }) !== undefined;
            });
    },
    getProduct: state => id => {
        return state.products.find(item => {
            return item.id === id;
        })
    }
};

const mutations = {
    SET_FILTER: (state, payload) => {
        state.filter = payload;
    },
    SET_FILTER_SIZE: (state, payload) => {
        state.filter.size = payload;
    },
    SET_FILTER_PRICE: (state, payload) => {
        state.filter.price = payload;
    },
    SET_LOADING: (state, value) => {
        state.isLoading = value;
    }
};

const actions = {
    RESET_FILTER({commit, getters}) {
        commit('SET_FILTER', {
            price: [getters.minPrice, getters.maxPrice],
            size: [getters.minSize, getters.maxSize]
        });
    },

    async getProductList({commit}) {
        try {
            commit('SET_LOADING', true);
            const res = await apiProduct.getAll();
            state.products = res.data;
            commit('SET_LOADING', false);

        } catch(e) {
            console.error(e)
        }
    },
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}