<!-- eslint-disable vue/require-v-for-key -->
<template>
  <div class="page">
    <img class="logo" src="https://pic-base-1307984077.cos.ap-nanjing.myqcloud.com/202210022058148.png" alt="logo"/>
    <input placeholder="输入番名" @input="search" list="animeList" v-model="keywords"/>
    <datalist id="animeList">
      <option v-for="res in result">{{res}}</option>
    </datalist>
  </div>
</template>

<script>
// import axios from 'axios';

export default {
  data() {
    return {
      keywords: '',
      result: [],
    };
  },
  methods: {
    search() {

    },
  },
};
</script>

<style scoped lang="scss">
  .logo {
    width: 17vw;
    margin: 0.5em;
  }

  .page {
    display: flex;
    justify-content: space-between;
  }

  input {
    width: 22vw;
    height: 5vh;
    background-color: #818de0;
    border-radius: 0.4em;
    color: #97e3fe;
    text-shadow: #9a53d0 0.2em 0.2em 0.3em;
    font-size: 93%;
    padding: 0em 0em 0em 1.5em;
    border: #9a53d0 1.5px solid;
    align-self: flex-end;
    margin: 0em 2em 0.2em 0em;
  }

  input::placeholder {
    color: #97e3fe;
    text-shadow: #9a53d0 0.2em 0.2em 0.3em;
    font-size: 100%;
  }
</style>
