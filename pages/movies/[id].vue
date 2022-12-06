<template>
  <div>
    <pre>
        {{ data }}
    </pre>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware(to, from) {
    console.log(to);
    console.log(from);
  },
});
const route = useRoute();
// this is the exact same as useAsyncData with the $fetch request
const { data, error } = await useFetch(
  `http://www.omdbapi.com/?apikey=1e7eaa8d&i=${route.params.id}`,
  {
    pick: ["Plot", "Title", "Poster", "Error"],
    key: `/movies/${route.params.id}`,
  }
);
if (error.value) {
  // handle error
}
if (data.value.Error === "Incorrect IMDb ID.") {
  showError({ statusCode: 404, statusMessage: "Page not found" });
}
useHead({
  title: data.value.Title,
  meta: [
    { name: "description", content: data.value.Plot },
    // open graph, data shared for social networking
    { property: "og:description", content: data.value.Plot },
    { property: "og:image", content: data.value.Poster },
    { name: "twitter:card", content: `summary_large_image` },
  ],
});
// the useAsyncData prevents the client from making a request as well
// the first paramter given to the useAsyncData func is a unique key that
// will tell useAsyncData how to store this request in cache
// const { data } = useAsyncData(
// `/movies/${route.params.id}`,
// () => {
// return $fetch(
//  `http://www.omdbapi.com/?apikey=1e7eaa8d&i=${route.params.id}`
// );
// },
// {
// limiting which keys you want to return
// pick: ["Plot", "Title"],
// accepts the data returned from the callback
// so you can 'manipulate' it
//  transform(data) {
// return {
// Plot: data.Plot,
// Title: data.Title,
//  };
// },
// }
// );
</script>
