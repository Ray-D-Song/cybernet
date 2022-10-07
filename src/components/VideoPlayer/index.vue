<!-- eslint-disable vue/require-v-for-key -->
<!-- eslint-disable vuejs-accessibility/media-has-caption -->
<template>
<div class="page">
    <video controls>
        <source src="video/a00501.mp4" type="video/mp4"/>
    </video>
    <div class="episode">
        <span>选集</span>
        <br>
        <button v-for="e in episodes">{{e}}</button>
    </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      episodes: 5,
    };
  },
};
</script>

<style scoped lang="scss">
.page {
    width: 60%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    flex-grow: 1;
    margin: 2rem 1rem 0 0;
}
video {
    width: 90%;
}
.episode {
    margin: 1rem 0 0 0rem;
}

button {
    width: 4.2rem;
    height: 1.6rem;
    margin: 0.3rem;
    color: #97e3fe;
    text-shadow: #9a53d0 0.2em 0.2em 0.3em;
    font-size: 100%;
    background-color: #818de0;
    border-radius: 0.4em;
    border: #9a53d0 1.5px solid;
}
span {
    color: #97e3fe;
    text-shadow: #9a53d0 0.1em 0.1em 0.15em;
}
</style>
