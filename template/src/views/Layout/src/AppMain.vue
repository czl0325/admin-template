<template>
  <section class="app-main">
    <router-view v-slot="{ Component }">
      <keep-alive :include="cachedViews">
        <component :is="Component"/>
      </keep-alive>
    </router-view>
  </section>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useCacheViewsStore } from "@/store/cacheViews"

defineOptions({
  name: 'AppMain'
})
const cacheStore = useCacheViewsStore()
const cachedViews = computed(() => cacheStore.cachedViews)
</script>

<style lang="scss" scoped>
.app-main {
  height: calc(100vh - 100px);
  width: 100%;
  overflow-x: hidden !important;
  overflow-y: auto !important;
}
</style>
