<template>
  <div class="navbar">
    <div class="top-view">
      <fold-btn class="me-2" :is-active="!isFold" :toggle-click="onFoldMenu" />
      <span class="navbar_title_style">标准后台管理系统</span>
    </div>
    <tab-pane />
  </div>
</template>

<script lang="ts" setup>
import { ref, unref } from 'vue'
import { useRouter } from "vue-router"
import { ElMessage, ElMessageBox } from "element-plus"
import FoldBtn from "./FoldBtn.vue"
import TabPane from './TabPane.vue'
import { DialogElement } from "ehl-ui"

defineOptions({
  name: 'Navbar'
})

const props = withDefaults(defineProps<{
  isFold?: boolean
}>(), {
  isFold: false
})

const emits = defineEmits(["onFold"])
const onFoldMenu = () => {
  emits("onFold")
}
</script>

<style lang="scss" scoped>
.navbar {
  height: 100px;
  width: 100%;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .12), 0 0 3px 0 rgba(0, 0, 0, .04);
  background-color: #212121;
  background-size: 100% 100%;
  opacity: 0.9;
  display: flex;
  padding: 0;
  flex-direction: column !important;
  overflow: hidden;

  .top-view {
    height: 60px;
    width: 100%;
    padding: 0 15px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    color: white;

    .navbar_title_style {
      flex: 1;
      color: white;
      font-size: 20px;
      font-weight: bolder;
      text-align: left;
    }

    .avatar-wrapper {
      display: inline-flex;
      align-items: center;
      cursor: pointer;
      margin-left: 30px;

      img {
        width: 20px;
        height: 20px;
      }

      span {
        font-size: 16px;
        font-weight: normal;
        color: #FFFFFF;
        margin-left: 10px;
      }

      .el-icon-caret-bottom {
        color: white;
        margin-left: 5px;
      }

      .loginUser_image {
        width: 30px;
        height: 30px;
        background: #FFFFFF;
        border-radius: 50%;
      }

      .loginUser_name {
        font-size: 16px;
        color: #FFFFFF;
      }

      .user-dropdown {
        width: 200px;
        height: auto;
      }
    }
  }
}

.popup-user {
  display: flex;
  flex-direction: column;
  width: 100%;

  .top-view {
    display: flex;
    width: 100%;
    border-bottom: 1px solid #E6E6E6;
    align-items: center;
    padding: 20px 15px;
    box-sizing: border-box;

    .avatar {
      width: 40px;
      height: 40px;
      background: #DEDEDE;
      border-radius: 50%;
    }

    .tmv {
      margin-left: 10px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 40px;

      .tmtv {
        display: flex;
        align-items: center;

        .role {
          height: 16px;
          line-height: 16px;
          background: linear-gradient(0deg, #1890FF 0%, #3AA2FF 100%);
          border-radius: 8px 2px 8px 2px;
          margin-left: 6px;
          color: white;
          display: inline-block;
          padding: 0 8px;
          box-sizing: border-box;
          font-size: 10px;
        }
      }

      .department {
        font-size: 12px;
        color: #999;
      }
    }
  }

  .item {
    display: flex;
    align-items: center;
    padding: 0 15px;
    box-sizing: border-box;
    height: 64px;
    border-bottom: 1px solid #e6e6e6;
    cursor: default;

    span {
      margin-left: 10px;
    }

    &:last-child {
      border-bottom: none;
    }
  }

  .item2 {
    display: flex;
    height: 64px;
    flex-direction: column;
    justify-content: center;
    border-bottom: 1px solid #e6e6e6;
    cursor: default;
  }
}
</style>
