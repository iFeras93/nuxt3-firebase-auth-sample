<template>
    <header
      id="page-header"
      class="z-1 flex flex-none items-center bg-white shadow-sm dark:bg-gray-800"
    >
      <div class="container mx-auto px-4 lg:px-8 xl:max-w-7xl">
        <div class="flex justify-between py-4">
          <!-- Left Section -->
          <div class="flex items-center">
            <!-- Logo -->
            <a
              href="#"
              class="group inline-flex items-center gap-2 text-lg font-bold tracking-wide text-gray-900 hover:text-gray-600 dark:text-gray-100 dark:hover:text-gray-300"
            >
              <svg
                class="hi-mini hi-cube-transparent inline-block size-5 text-indigo-600 transition group-hover:scale-110 dark:text-indigo-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M9.638 1.093a.75.75 0 01.724 0l2 1.104a.75.75 0 11-.724 1.313L10 2.607l-1.638.903a.75.75 0 11-.724-1.313l2-1.104zM5.403 4.287a.75.75 0 01-.295 1.019l-.805.444.805.444a.75.75 0 01-.724 1.314L3.5 7.02v.73a.75.75 0 01-1.5 0v-2a.75.75 0 01.388-.657l1.996-1.1a.75.75 0 011.019.294zm9.194 0a.75.75 0 011.02-.295l1.995 1.101A.75.75 0 0118 5.75v2a.75.75 0 01-1.5 0v-.73l-.884.488a.75.75 0 11-.724-1.314l.806-.444-.806-.444a.75.75 0 01-.295-1.02zM7.343 8.284a.75.75 0 011.02-.294L10 8.893l1.638-.903a.75.75 0 11.724 1.313l-1.612.89v1.557a.75.75 0 01-1.5 0v-1.557l-1.612-.89a.75.75 0 01-.295-1.019zM2.75 11.5a.75.75 0 01.75.75v1.557l1.608.887a.75.75 0 01-.724 1.314l-1.996-1.101A.75.75 0 012 14.25v-2a.75.75 0 01.75-.75zm14.5 0a.75.75 0 01.75.75v2a.75.75 0 01-.388.657l-1.996 1.1a.75.75 0 11-.724-1.313l1.608-.887V12.25a.75.75 0 01.75-.75zm-7.25 4a.75.75 0 01.75.75v.73l.888-.49a.75.75 0 01.724 1.313l-2 1.104a.75.75 0 01-.724 0l-2-1.104a.75.75 0 11.724-1.313l.888.49v-.73a.75.75 0 01.75-.75z"
                  clip-rule="evenodd"
                />
              </svg>
              <span>Auth Sample</span>
            </a>
            <!-- END Logo -->
          </div>
          <!-- END Left Section -->

          <!-- Right Section -->
          <div class="flex items-center gap-2 lg:gap-5">
            <!-- Desktop Navigation -->
            <nav class="hidden items-center gap-2 lg:flex">
              <NuxtLink
                to="/"
                class="group flex items-center gap-2 rounded-lg border border-indigo-100 bg-indigo-50 px-3 py-2 text-sm font-medium text-indigo-600 dark:border-transparent dark:bg-gray-700 dark:text-white"
              >
                <svg
                  class="hi-mini hi-home inline-block size-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M9.293 2.293a1 1 0 011.414 0l7 7A1 1 0 0117 11h-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-6H3a1 1 0 01-.707-1.707l7-7z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span>Home</span>
              </NuxtLink>
              <NuxtLink
                to="/customers"
                class="group flex items-center gap-2 rounded-lg border border-transparent px-3 py-2 text-sm font-medium text-gray-800 hover:bg-indigo-50 hover:text-indigo-600 active:border-indigo-100 dark:text-gray-200 dark:hover:bg-gray-700 dark:hover:text-white dark:active:border-gray-600"
              >
                <svg
                  class="hi-mini hi-users inline-block size-5 opacity-25 group-hover:opacity-100"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    d="M7 8a3 3 0 100-6 3 3 0 000 6zM14.5 9a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM1.615 16.428a1.224 1.224 0 01-.569-1.175 6.002 6.002 0 0111.908 0c.058.467-.172.92-.57 1.174A9.953 9.953 0 017 18a9.953 9.953 0 01-5.385-1.572zM14.5 16h-.106c.07-.297.088-.611.048-.933a7.47 7.47 0 00-1.588-3.755 4.502 4.502 0 015.874 2.636.818.818 0 01-.36.98A7.465 7.465 0 0114.5 16z"
                  />
                </svg>
                <span>Customers List</span>
              </NuxtLink>
            </nav>
            <!-- END Desktop Navigation -->

            <!-- User Dropdown -->
             <UserNav />
            <!-- END User Dropdown -->

            <!-- Toggle Mobile Navigation -->
            <div class="lg:hidden">
              <button
                @click="mobileNavOpen = !mobileNavOpen"
                type="button"
                class="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-semibold leading-5 text-gray-800 hover:border-gray-300 hover:text-gray-900 hover:shadow-sm focus:ring focus:ring-gray-300/25 active:border-gray-200 active:shadow-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-gray-600 dark:hover:text-gray-200 dark:focus:ring-gray-600/40 dark:active:border-gray-700"
              >
                <svg
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  class="hi-solid hi-menu inline-block size-5"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <!-- END Toggle Mobile Navigation -->
          </div>
          <!-- END Right Section -->
        </div>

        <!-- Mobile Navigation -->
        <div
          class="lg:hidden"
          :class="{
            hidden: !mobileNavOpen,
          }"
        >
          <nav
            class="flex flex-col gap-2 border-t border-gray-200 py-4 dark:border-gray-700"
          >
            <NuxtLink
              to="/"
              class="group flex items-center gap-2 rounded-lg border border-indigo-50 bg-indigo-50 px-3 py-2 text-sm font-semibold text-indigo-600 dark:border-transparent dark:bg-gray-700/75 dark:text-white"
            >
              <svg
                class="hi-mini hi-home inline-block size-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M9.293 2.293a1 1 0 011.414 0l7 7A1 1 0 0117 11h-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-6H3a1 1 0 01-.707-1.707l7-7z"
                  clip-rule="evenodd"
                />
              </svg>
              <span>Home</span>
            </NuxtLink>
            <NuxtLink
              to="/customers"
              class="group flex items-center gap-2 rounded-lg border border-transparent px-3 py-2 text-sm font-medium text-gray-800 hover:bg-indigo-50 hover:text-indigo-600 active:border-indigo-100 dark:text-gray-200 dark:hover:bg-gray-700 dark:hover:text-white dark:active:border-gray-600"
            >
              <svg
                class="hi-mini hi-users inline-block size-5 opacity-25 group-hover:opacity-100"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  d="M7 8a3 3 0 100-6 3 3 0 000 6zM14.5 9a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM1.615 16.428a1.224 1.224 0 01-.569-1.175 6.002 6.002 0 0111.908 0c.058.467-.172.92-.57 1.174A9.953 9.953 0 017 18a9.953 9.953 0 01-5.385-1.572zM14.5 16h-.106c.07-.297.088-.611.048-.933a7.47 7.47 0 00-1.588-3.755 4.502 4.502 0 015.874 2.636.818.818 0 01-.36.98A7.465 7.465 0 0114.5 16z"
                />
              </svg>
              <span>Customers List</span>
            </NuxtLink>
          </nav>
        </div>
        <!-- END Mobile Navigation -->
      </div>
    </header>
</template>

<script lang="ts" setup>
// import { ref } from "vue";
// Headless UI 1.x for Vue.js, for more info and examples you can check out https://github.com/tailwindlabs/headlessui
// import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
const mobileNavOpen = ref(false);

</script>

<style>

</style>