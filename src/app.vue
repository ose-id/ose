<script setup lang="ts">
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} · OSE` : 'OSE';
  },
  meta: [
    {
      name: 'msapplication-TileColor',
      content: '#323232',
    },
    {
      name: 'theme-color',
      content: '#ffffff',
    },
  ],
});

useSeoMeta({
  description: '⭐️ Official OSE website ',
  twitterCard: 'summary_large_image',
});
</script>

<template>
  <main id="top">
    <NuxtLoadingIndicator />
    <NuxtPage />
  </main>
</template>

<style lang="postcss">
* {
  @apply font-sans;
}
:root {
  scrollbar-width: thin;
  scrollbar-color: #d4d4d4 #ffffff;
}
html {
  @apply scroll-smooth;
}
html.dark {
  scrollbar-color: #1b1b1b #050505;
}
::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-thumb {
  background-color: #d4d4d4;
}
::-webkit-scrollbar-thumb:active {
  background-color: #ffffff;
}
html.dark ::-webkit-scrollbar-thumb {
  background-color: #1b1b1b;
}
html.dark ::-webkit-scrollbar-thumb:active {
  background-color: rgb(41, 41, 41);
}
html.dark ::-webkit-scrollbar {
  background-color: #050505;
}
body {
  @apply dark:bg-black m-0;
}
.dark {
  color-scheme: dark;
}
a {
  @apply !no-underline text-black dark:text-white;
}
</style>
