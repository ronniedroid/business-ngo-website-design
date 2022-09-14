<template>
  <div class="btn nav-button-dark">
    <input
      aria-hidden="true"
      type="checkbox"
      @change="toggleTheme"
      id="toggle"
      class="toggle"
      tabindex="-1"
    />
    <label hidden for="toggle">toggle dark mode</label>
  </div>
</template>

<script setup lang="ts">
import {ref, onMounted} from 'vue'

const userTheme = ref("light");
const setTheme = (theme) => {
  localStorage.setItem("user-mode", theme);
  userTheme.value = theme;
  document.documentElement.setAttribute("color-scheme", userTheme.value);
};
const toggleTheme = () => {
  const activeTheme = localStorage.getItem("user-mode");
  if (activeTheme === "light") {
    setTheme("dark");
  } else {
    setTheme("light");
  }
};
const getMediaPreference = () => {
  const hasDarkPreference = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;
  if (hasDarkPreference) {
    return "dark";
  } else {
    return "light";
  }
};
const getTheme = () => {
  return localStorage.getItem("user-mode");
};
onMounted(() => {
  const initUserTheme = getTheme() || getMediaPreference();
  setTheme(initUserTheme);
});
</script>

<style scoped>
.toggle {
  --size: var(--font-size-4);
  appearance: none;
  outline: none;
  cursor: pointer;

  width: var(--size);
  height: var(--size);
  box-shadow: inset calc(var(--size) * 0.33) calc(var(--size) * -0.25) 0;
  border-radius: 999px;
  color: var(--text2);

  transition: all 500ms;
}
.toggle:hover {
  color: var(--text1);
}
.toggle:checked {
  --ray-size: calc(var(--size) * -0.4);
  --offset-orthogonal: calc(var(--size) * 0.65);
  --offset-diagonal: calc(var(--size) * 0.45);

  transform: scale(0.75);
  color: var(--text2);
  box-shadow: inset 0 0 0 var(--size),
    calc(var(--offset-orthogonal) * -1) 0 0 var(--ray-size),
    var(--offset-orthogonal) 0 0 var(--ray-size),
    0 calc(var(--offset-orthogonal) * -1) 0 var(--ray-size),
    0 var(--offset-orthogonal) 0 var(--ray-size),
    calc(var(--offset-diagonal) * -1) calc(var(--offset-diagonal) * -1) 0
      var(--ray-size),
    var(--offset-diagonal) var(--offset-diagonal) 0 var(--ray-size),
    calc(var(--offset-diagonal) * -1) var(--offset-diagonal) 0 var(--ray-size),
    var(--offset-diagonal) calc(var(--offset-diagonal) * -1) 0 var(--ray-size);
}
.toggle:hover:checked {
  color: var(--text1);
}
</style>
