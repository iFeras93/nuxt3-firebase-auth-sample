<template>
            <HeadlessMenu v-if="user" as="div" class="relative inline-block">
              <!-- Dropdown Toggle Button -->
              <HeadlessMenuButton
                class="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-semibold leading-5 text-gray-800 hover:border-gray-300 hover:text-gray-900 hover:shadow-sm focus:ring focus:ring-gray-300/25 active:border-gray-200 active:shadow-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-gray-600 dark:hover:text-gray-200 dark:focus:ring-gray-600/40 dark:active:border-gray-700"
              >
                <span>{{ user.displayName || 'Demo User' }}</span>
                <!-- Extra Small -->
                <div class="relative inline-block">
                  <div
                    class="absolute right-0 top-0 size-3 rounded-full border-2 border-white bg-green-600"
                  ></div>
                  <img
                    :src="`${user.photoURL}`"
                    alt="User Avatar"
                    class="inline-block size-8 rounded-full"
                  />
                </div>
                <!-- END Extra Small -->
                <svg
                  class="hi-mini hi-chevron-down inline-block size-5 opacity-40"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clip-rule="evenodd"
                  />
                </svg>
              </HeadlessMenuButton>
              <!-- END Dropdown Toggle Button -->

              <!-- Dropdown -->
              <Transition
                enter-active-class="transition ease-out duration-100"
                enter-from-class="opacity-0 scale-90"
                enter-to-class="opacity-100 scale-100"
                leave-active-class="transition ease-in duration-75"
                leave-from-class="opacity-100 scale-100"
                leave-to-class="opacity-0 scale-90"
              >
                <HeadlessMenuItems
                  class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-lg shadow-xl focus:outline-none dark:shadow-gray-900"
                >
                  <div
                    class="divide-y divide-gray-100 rounded-lg bg-white ring-1 ring-black/5 dark:divide-gray-700 dark:bg-gray-800 dark:ring-gray-700"
                  >
                    <div class="space-y-1 p-2.5">
                      <HeadlessMenuItem v-slot="{ active }">
                        <a
                        @click.prevent="logout()"
                          href="#"
                          class="group flex items-center justify-between gap-2 rounded-lg border border-transparent px-2.5 py-2 text-sm font-medium"
                          :class="{
                            'bg-indigo-50 text-indigo-800 dark:border-transparent dark:bg-gray-700/75 dark:text-white':
                              active,
                            'text-gray-700 hover:bg-indigo-50 hover:text-indigo-800 active:border-indigo-100 dark:text-gray-200 dark:hover:bg-gray-700/75 dark:hover:text-white dark:active:border-gray-600':
                              !active,
                          }"
                        >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="hi-micro hi-power inline-block size-4">
  <path fill-rule="evenodd" d="M8 1a.75.75 0 0 1 .75.75v6.5a.75.75 0 0 1-1.5 0v-6.5A.75.75 0 0 1 8 1ZM4.11 3.05a.75.75 0 0 1 0 1.06 5.5 5.5 0 1 0 7.78 0 .75.75 0 0 1 1.06-1.06 7 7 0 1 1-9.9 0 .75.75 0 0 1 1.06 0Z" clip-rule="evenodd"/>
</svg>
                          <span class="grow">Logout</span>
                        </a>
                      </HeadlessMenuItem>
                    </div>
                  </div>
                </HeadlessMenuItems>
              </Transition>
              <!-- END Dropdown -->
            </HeadlessMenu>
</template>

<script lang="ts" setup>
import { signOut } from 'firebase/auth'
const user = useCurrentUser()
const auth= useFirebaseAuth();
function logout(){
  signOut(auth)
}
</script>

<style>

</style>