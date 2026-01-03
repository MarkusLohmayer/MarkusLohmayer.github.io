<script lang="ts">
  import "../app.css";
  import type { LayoutProps } from "./$types";
  import { page } from "$app/state";

  import Header from "$lib/Header.svelte";
  import Footer from "$lib/Footer.svelte";

  let y = $state(0);

  let { children }: LayoutProps = $props();
</script>

<svelte:window bind:scrollY={y} />

<div
  class="
    relative
    flex flex-col
    min-h-screen w-full
    text-sm sm:text-base
  "
>
  <Header {y} />

  <main class="flex flex-1 flex-col px-6">
    {@render children()}
  </main>

  <Footer prev={page.data.prev} next={page.data.next} />
</div>
