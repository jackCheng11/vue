const state = {
    shop_list: [
        {
            id: 1,
            date: "2020-5-12",
            name: "鱼香肉丝",
            price: 12
        },
        {
            id: 2,
            date: "2020-5-13",
            name: "宫保鸡丁",
            price: 14
        },
        {
            id: 3,
            date: "2020-5-14",
            name: "土豆丝",
            price: 13
        },
        {
            id: 4,
            date: "2020-5-15",
            name: "米饭",
            price: 2
        }
    ],
    added: []
};

const getters = {
    shopList: state => {
        return state.shop_list;
    },
    cartProducts: state => {
        return state.added.map(({ id, num }) => {
            let product = state.shop_list.find(n => n.id == id);
            return {
                ...product,
                num
            }
        })
    },
    totalPrice: (state, getters) => {
        var total = 0;
        getters.cartProducts.forEach(n => {
            total += (n.price) * (n.num)
        })
        return total;
    },
    totalNum: (state, getters) => {
        var total = 0;
        getters.cartProducts.forEach(n => {
            total += n.num
        })
        return total
    }
};

const actions = {
    addToCart({ commit }, product) {
        commit("add", {
            id: product.id
        })
    },
    clearAll({ commit }) {
        commit("clear")
    },
    delProduct({ commit }, product) {
        commit("delete", {
            id: product.id
        })
    }
};

const mutations = {
    add(state, { id }) {
        let record = state.added.find(n => n.id == id);
        if (!record) {
            state.added.push({
                id,
                num: 1
            })
        } else {
            record.num++
        }
    },
    clear(state) {
        state.added = [];
    },
    delete(state, { id }) {
        state.added.forEach((n, i) => {
            if (n.id == id) {
                state.added.splice(i, 1)
            }
        }
        )
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}