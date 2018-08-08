<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button v-on:click.prevent="getdate">获取接口数据</button>
  </div>
</template>

<script>
import { store } from '../mystore';
export default {
	name: 'HelloWorld',
	props: {
		msg: String,
	},
	computed: {
		json() {
			return store.state.json;
		},
	},
	methods: {
		getdate() {
			store.dispatch('getJson');
		},
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
	margin: 40px 0 0;
}
ul {
	list-style-type: none;
	padding: 0;
}
li {
	display: inline-block;
	margin: 0 10px;
}
a {
	color: #42b983;
}
</style>
