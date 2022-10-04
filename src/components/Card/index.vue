<template>
  <div class="page">
      <img :src=coverLink alt="封面">
    <span class="name">{{name}}</span>
    <br/>
    <span class="episode">更新至第{{episode}}集</span>
  </div>
</template>

<script>
export default {
  data() {
    return {

    };
  },
  props: ['name', 'coverLink', 'episode'],
};
</script>

<style scoped lang="scss">
  img {
    width: 10rem;
    border-radius: 0.3rem 0.3rem 0rem 0rem;
  }
  .page {
    margin: 1rem;
    border-radius: 0.3rem;
    width: 10rem;
    background-color: #131A57;
    height: 17rem;
    // color: #4A9DC5;
    color: #818de0;
    text-shadow: black 0.3em 0.3em 0.6em;
    box-shadow: 3px 3px 3px black;
    padding: 0px;
    line-height: 18px;
  }

  .page:hover {
    opacity: 0.9;
  }
  .episode {
    font-size: 1px;
  }
</style>
