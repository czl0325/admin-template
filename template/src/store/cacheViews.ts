import { defineStore } from "pinia"

const noCacheViews: string[] = []

export const useCacheViewsStore = defineStore({
  id: "cacheViews",
  state: () => ({
    cachedViews: [] as string[],
  }),
  actions: {
    addCachedView(view: string) {
      if (this.cachedViews.includes(view)) return
      if (noCacheViews.includes(view)) return
      this.cachedViews.push(view)
    },
    removeCachedView(view: string) {
      const index = this.cachedViews.indexOf(view)
      index > -1 && this.cachedViews.splice(index, 1)
    },
    removeAll() {
      this.cachedViews = []
    }
  }
})
