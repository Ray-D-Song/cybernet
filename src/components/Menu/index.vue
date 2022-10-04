<template>
  <div class="page">
    <div class="tag">
    <img src="https://pic-base-1307984077.cos.ap-nanjing.myqcloud.com/202210041000177.png" alt="首页" class="home">
      <span>首页</span>
    </div>
    <!-- <hr/> -->
    <div class="tag">
    <img src="https://pic-base-1307984077.cos.ap-nanjing.myqcloud.com/202210041002820.png" alt="首页" class="home">
      <span>番剧</span>
    </div>
    <div class="tag">
    <img src="https://pic-base-1307984077.cos.ap-nanjing.myqcloud.com/202210041003069.png" alt="首页" class="home">
      <span>剧场版</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
};
</script>

<style scoped lang="scss">
.page {
  width: 18%;
  height: 100vh;
  background-color: #161F68;
  margin: 1em 2em 0em 0em;
  // border: #9a53d0 1px solid;
  color: #97e3fe;
  // padding: 3em 0em 0em 0em;
  text-shadow: #9a53d0 0.1em 0.1em 0.2em;
  display: flex;
  flex-direction: column;
}

.home {
  width: 2.5vw;
}

.tag {
  display: flex;
  align-items: center;
}

.tag:hover {
  background-color: #1E2B8F;
}

img {
  margin: 1em;
}
</style>
