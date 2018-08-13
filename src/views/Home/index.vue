<template>
  <div class="home">
   
    <el-container>
      <el-header>
        頭部
      </el-header>
      <el-main>
        內容
         <img src="@/assets/logo.png">
      </el-main>
      <el-footer>
        <FooterBar focus="Home"/>
      </el-footer>
       
    </el-container>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
   
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';
import FooterBar from '@/components/FooterBar.vue';

export default {
	name: 'home',
	components: {
		FooterBar,
	},
};
</script>
