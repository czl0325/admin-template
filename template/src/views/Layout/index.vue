<template>
  <div class="app-wrapper">
    <Sidebar class="sidebar-container" />
    <div class="main-container" >
      <Navbar />
      <app-main class="app-main"/>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Sidebar from "@/views/Layout/src/Sidebar.vue"
import Navbar from "@/views/Layout/src/Navbar.vue"
import AppMain from "@/views/Layout/src/AppMain.vue"
defineOptions({
  name: "Layout"
})
</script>

<style lang="scss" scoped>
.app-wrapper {
  width: 100%;
  height: 100vh;
  overflow: auto;
  position: relative;
  background-color: #fbf5ef;
  .sidebar-container {
    transition: width 0.28s;
    height: 100%;
    overflow: auto;
    position: absolute;
    left: 0;
    top: 0;
    width: 260px !important;
    z-index: 100;
  }
  .main-container {
    transition: left 0.28s;
    background-color: #fff;
    overflow: auto;
    position: absolute;
    left: 260px;
    right: 0 ;
    top: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    box-shadow: -2px 0 2px 2px rgba(150, 150, 150, 0.1);
    .app-main {
      flex: 1;
    }
  }
}
</style>
