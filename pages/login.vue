<template>
  <form @submit.prevent="user.login">
    <h1>Login</h1>
    <label
      >Username
      <input type="text" />
    </label>
    <label
      >Password
      <input type="password" />
    </label>
    <button>Login</button>
  </form>
</template>

<script setup lang="ts">
import { useUser } from "~/stores/User"
/* const isLoggedIn = useState("isLoggedIn", () => false); */
/* const isLoggedIn = useIsLoggedIn(); */
const user = useUser();
definePageMeta({
  layout: "plain",
});

function login() {
  /* isLoggedIn.value = true; */
  user.isLoggedIn = true;
  useRouter().push("/");
}
</script>
