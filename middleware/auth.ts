export default defineNuxtRouteMiddleware((to, from) => {
    const userIsAuth = false;
    if (!userIsAuth) {
        return navigateTo({
            path: "/login"
        });
    }
})
