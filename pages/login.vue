<template>
  <div class="">
    <div>
      <!-- Button (small) -->
      <button
      @click="signinAction()"
        type="button"
        class="inline-flex items-center justify-center gap-2 rounded-lg border border-indigo-700 bg-indigo-700 px-3 py-2 text-sm font-semibold leading-5 text-white hover:border-indigo-600 hover:bg-indigo-600 hover:text-white focus:ring focus:ring-indigo-400/50 active:border-indigo-700 active:bg-indigo-700 dark:focus:ring-indigo-400/90"
      >
        Login Via Google
      </button>
      <!-- END Button (small) -->
    </div>
  </div>
</template>

<script lang="ts" setup>
import { signInWithPopup, GoogleAuthProvider} from 'firebase/auth'

const auth= useFirebaseAuth();
const router= useRouter()
const route= useRoute()

function signinAction(){
  //console.log(route);
  //return false

  signInWithPopup(auth, new GoogleAuthProvider())
  .then((res)=> {
    console.log(res.data);
    router.replace(route.query.redirect || '/')
  })
  .catch((err)=> console.log(err.message))
}
</script>

<style>

</style>