<template>
    <div class="">
        <home-header></home-header>
        <home-list></home-list>
    </div>
</template>

<script>
import HomeHeader from './components/HomeHeader'
import HomeList from './components/HomeList'
export default {
  name: 'Index',
  components: {
    HomeHeader,
    HomeList,
  }
}
</script>
<style lang="stylus" scoped>
</style>