<template>
  <div v-if="!item.hidden">
    <router-link :to="item.path" v-if="item.independent" :target="item.target?item.target:'_self'">
      <el-menu-item :class="{'parent-active-color': generateParentBackground(item)}" class="only-one-item">
        <img v-if="item.meta&&item.meta.icon" :src="generateIcon(item)" class="nav-icon" alt="">
        <template #title>
          <span v-if="item.meta" class="first-menu">{{ item.meta.title }}</span>
        </template>
      </el-menu-item>
    </router-link>
    <el-sub-menu v-else-if="onlyOneChild(item)>0" :index="item.path">
      <template #title>
        <div class="parent-item d-flex flex-row align-items-center">
          <img v-if="item.meta&&item.meta.icon" :src="generateIcon(item)" class="nav-icon" alt="">
          <span class="first-menu" :style="generateTitle(item)">{{ item.meta.title }}</span>
        </div>
      </template>
      <e-menu-item v-for="child in item.children" :key="child.path" :item="child" />
    </el-sub-menu>
    <el-menu-item v-else :index="item.path" :route="item" :class="{'parent-active-color': generateChildBackground(item)}">
      <img v-if="item.meta&&item.meta.icon" :src="generateIcon(item)" class="nav-icon" alt="">
      <template #title>
        <span class="second-menu">{{ item.meta?.title }}</span>
      </template>
    </el-menu-item>
  </div>
</template>

<script lang="ts" setup>
import { useRoute } from "vue-router"
import { getAssetsFile } from "@/utils/tools"
import { Position } from "@element-plus/icons-vue"

defineOptions({
  name: "EMenuItem"
})
defineProps<{
  item: any
}>()

const route = useRoute()
const generateIcon = (item: any) => {
  if (item.meta.icon.endsWith(".png")) {
    return getAssetsFile(item.meta.icon)
  }
  return ""
}
const generateTitle = (item: any) => {
  const path = route.path.split("/").filter(p => p.length)[0]
  if (item.path.replace("/", "") === path) {
    return {
      color: "#212121"
    }
  } else {
    return {
      color: "#212121"
    }
  }
}
const onlyOneChild = (item: any) => {
  if (!item.children) {
    return 0
  } else {
    let num = 0
    item.children.forEach((it: any) => {
      if (!it.hidden || (it.hidden === false)) {
        num += 1
      }
    })
    return num
  }
}
const generateParentBackground = (item: any) => {
  const path = route.path.split("/").filter(p => p.length)[0]
  return item.path.replace("/", "") === path || (item.redirect && item.redirect.replace("/", "") === path)
}
const generateChildBackground = (item: any) => {
  if (item.path === route.path) {
    return true
  } else {
    if (item.meta?.childrenPath) {
      return item.meta.childrenPath.indexOf(route.path) !== -1
    }
  }
  return false
}

</script>

<style lang="scss" scoped>
.first-menu {
  font-size: 16px;
}

.second-menu {
  font-size: 14px;
}

.only-one-item {
  background-color: transparent;
  color: #212121;
  height: 55px;
  line-height: 55px;
}

.parent-item {
  height: 55px;
  line-height: 55px;
}

.el-sub-menu__title {
  background-color: #242823;
}
:deep(.el-sub-menu__title) {
  height: 55px !important;
  line-height: 55px !important;
}
.parent-active-color {
  background: #fff;
  color: #212121 !important;
  overflow: hidden;
}

.nav-icon {
  width: 28px;
  object-fit: scale-down;
}
</style>
<style scoped>
/*隐藏文字*/
:deep(.el-menu--collapse .el-submenu__title span) {
  display: none;
}

/*隐藏 > */
:deep(.el-menu--collapse .el-submenu__title .el-submenu__icon-arrow) {
  display: none;
}
</style>
