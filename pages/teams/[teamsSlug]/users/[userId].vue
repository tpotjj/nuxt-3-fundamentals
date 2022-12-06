<template>
<p>
    {{message}}
</p>
</template>

<script setup lang="ts">
const route = useRoute();
const message = computed(() => `I'm on team ${route.params.teamsSlug}
        and my user id is ${route.params.userId}`)
</script>
