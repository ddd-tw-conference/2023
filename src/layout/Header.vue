<script setup>
  import { ref } from 'vue';
  let showMenu = ref(false);
  const toggleNav = () => (showMenu.value = !showMenu.value);
</script>
<template>
  <header class="sticky top-0 z-20 bg-gray-950/70 border-b-2 border-b-blue-800/30 backdrop-blur text-white pt-3 pb-3">
    <div class="container mx-auto">
      <nav
        class="md:flex justify-between pl-5 md:pl-0"
      >
        <div class="flex justify-between">
          <router-link to="" class="text-xl font-bold">
            <h1 class="flex pt-2 pb-3">
              <img src="../../public/favicon.svg" alt="Logo of DDDesign TW 2023" />
              <span class="ml-2">DDDesign TW</span>
            </h1>
          </router-link>
          <div @click="toggleNav" class="mt-2 md:hidden">
            <button type="button" class="text-white focus:outline-none pr-5 md:pr-0">
              <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                <path
                  fill-rule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
        <ul
          :class="showMenu ? 'flex' : 'hidden'"
          class="flex-col md:flex md:flex-row justify-end
          "
        >
          <li class="pt-3 pb-3 mr-5">
            <div class="dropdown relative">
              <button class="font-me text-white text-slate-700 hover:text-blue-300">
                關於我們
              </button>
              <ul class="bg-indigo-950 sm:bg-gray-950/70 dropdown-menu absolute w-full sm:w-auto hidden p-3 -ml-3 -mr-5">
                <li class="pt-3">
                  <router-link to="/about" class="text-white text-slate-700 hover:text-blue-300">大會資訊</router-link>
                </li>
                <li class="pt-3">
                  <router-link to="/volunteer" class="text-white text-slate-700 hover:text-blue-300">加入志工</router-link>
                </li>
              </ul>
            </div>
          </li>
          <li class="pt-3 pb-3 mr-5">
            <router-link to="/speakers" class="font-me text-white text-slate-700 hover:text-blue-300">
              講者
            </router-link>
          </li>
          <li class="pt-3 pb-3 mr-5">
            <router-link to="/agenda" class="font-me text-white text-slate-700 hover:text-blue-300">
              議程
            </router-link>
          </li>
          <li class="pt-3 pb-3 mr-5">
            <a class="font-me pr-3 pl-3 pt-1 pb-1 text-slate-700 text-white rounded bg-sky-500 hover:bg-sky-600"
              href="https://dddtaiwan.kktix.cc/events/dddtwconf2023" target="_blank"
            >
              報名購票
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style>
  /* @import '../style.css'; */
</style>