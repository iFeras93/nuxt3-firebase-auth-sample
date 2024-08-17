export default defineNuxtRouteMiddleware(async (to, from) => {
    const user= await getCurrentUser();
    console.log(user);
    
    // console.log(to);
    // console.log(from);
  // redirect the user to the login page
    if(!user){
        return navigateTo({
            path: '/login',
            query: {
              redirect: to.fullPath,
            },
          })      
        }
})
