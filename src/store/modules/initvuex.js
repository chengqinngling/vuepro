/**
 * 初始化的modules模板
 */

// initial state
const state = {
    items: []
}

//getters 
const getters = {
    //默认getters模板
    defaultGetters(){

    }
};

//actions 
const actions = {
    //默认actions模板
    defaultActions({commit,state,rootState}){
        commit('defaultMutations', state.items);
    }
};
//mutations
const mutations = {
    //默认mutations模板
    defaultMutations(state,data){
        console.log(data);
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
  }
