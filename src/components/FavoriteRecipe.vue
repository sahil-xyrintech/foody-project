<template>
  <div
    class="flex-1 border rounded-2xl p-4 space-y-3 h-fit lg:sticky top-[88px]"
  >
    <nav class="flex justify-between mt-1">
      <div class="flex items-center gap-2">
        <h2 class="text-xl font-semibold">Favorite</h2>
      </div>
    </nav>
    <div v-if="favoriteRecipe.length > 0" class="space-y-1">
      <div v-for="item in favoriteRecipe.slice(0, 7)" :key="item">
        <div class="flex gap-2 items-center">
          <img class="w-12 rounded-xl" v-lazy="item.image" alt="" />
          <p class="line-clamp-2">{{ item.label }}</p>
        </div>
      </div>
      <div v-if="favoriteRecipe.length > 0" class="flex justify-end">
        <router-link to="/favorite">
          <div class="flex items-center gap-2">
            <span>See All</span>
            <i class="fi fi-ss-arrow-right mt-1.5"></i>
          </div>
        </router-link>
      </div>
    </div>
    <div v-else class="m-auto text-center flex-1 space-y-3">
      <img class="w-1/2 m-auto" src="/src/images/fav.png" alt="" />
      <h1 class="text-xl font-bold">No Favorite Recipe</h1>
      <p class="w-5/6 m-auto">
        Looks like you haven't added any favorite recipe yet. Click the heart
        icon to add it to your favorites and easily access it later.
      </p>
    </div>
  </div>
</template>
<script setup>
import { ref, watch, computed } from "vue";
import { useStore } from "vuex";
const store = useStore();
const favoriteRecipe = computed(() => {
  return store.getters["FoodRecipeModule/favoriteRecipe"];
});
</script>
