<template>
  <div class="page">
    <PageHeader />
    <hr />
    <div class="content">
      <Menu />
      <!-- <Card name="水星的魔女" coverLink="https://pic-base-1307984077.cos.ap-nanjing.myqcloud.com/202210022222613.webp" episode="1"/> -->
      <VideoPlayer/>
    </div>
  </div>
</template>

<script>
import PageHeader from './components/PageHeader/index.vue';
import Menu from './components/Menu/index.vue';
import VideoPlayer from './components/VideoPlayer/index.vue';
// import Card from './components/Card/index.vue';

export default {
  components: {
    PageHeader,
    Menu,
    VideoPlayer,
  },
};
</script>

<style scoped lang="scss">
.content {
  display: flex;
  flex-direction: row;
  width: 100vw;
}

hr {
  border-color: #17216C;
  width: 90%;
}
</style>
