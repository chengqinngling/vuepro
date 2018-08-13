import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from '../logger/index';
import Home from './modules/home';
Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    Home
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
