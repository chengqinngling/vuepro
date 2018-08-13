import Vue from 'vue'
import Vuex from 'vuex';
import Net from './utils/Net'
import {
  NetworkException,
} from './utils/Exception';

Vue.use(Vuex)
const state = {
  json: [],
};

const mutations = {
  setJson(state, db) {
    state.json = db;
  }
}

const actions = {
  // getJson(context) {
  getJson() {
    Net.getJson({
      "token": "",
      "pageIndex": 1, //当前分页起始记录序号(必填)
      "pageSize": 6, //每页记录数(必填)
      "orderBy": "", // 排序规则 (可选)
      "queryType": 1, //查询类型：0-全部 1-推荐（必填）"
    })
      .then(data => {
        console.log("data", data);

      })
      .catch(e => {
        // console.log("e",e);
        if (e instanceof NetworkException) {
          console.log("NetworkExceptionf");
        } else {
          console.log("e", e);
        }
      })
  }
};

export const store = new Vuex.Store({
  state: state,
  mutations: mutations,
  actions: actions,
})