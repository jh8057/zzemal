<template>
  <nav>
    <ul class="menu">
      <!-- <li><a v-for="jh in menus" :key="jh" href="#">{{jh}}</a></li> -->
      <a v-for="(jh,i) in menus" :key="i" href="#">#{{i}} {{jh}}</a>
    </ul>
  </nav>
  <h1 :style="bluestyle">찍방</h1> 
  <div v-for="(jh,i) in products" :key="i">
    <h4>{{jh}}</h4>
    <p>{{price[i]}} 만원 </p>
    <button @click="Bcountfunc(i)">허위매물신고버튼</button><span> 신고수 : {{Bcount[i]}}</span>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      Location1 : "강서구",
      Location2 : "목동",
      price : [80,100,60],
      bluestyle : "color:blue",
      products : ['역삼동원룸', '천호동원룸', '강서구원룸'],
      menus : ['Home','Shop', 'About','Blog'],
      Bcount : [0,0,0],
    }
  },
  methods : {
    Bcountfunc(i){
      this.Bcount[i] += 1;
    }
  },
  components: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}

.menu{
  background: rgb(205, 183, 226);
  padding: 15px;
  border-radius: 5px;
}
.menu li{
  display: inline-block;
  text-align: center;
  justify-content: center;
}
.menu a{
  padding : 10px;
  text-decoration: none;
  color: white;
}
</style>
