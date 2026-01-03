<script lang="ts">
  import "../app.css";
  import type { LayoutProps } from './$types';
  import { page } from '$app/state';

  import Header from "$lib/Header.svelte";
  import Footer from "$lib/Footer.svelte";

  let y = $state(0);

  function goTop() {
    document.body.scrollIntoView();
  }

  let { children }: LayoutProps = $props();
</script>

<div
  class="
    relative mx-auto
    flex flex-col
    min-h-screen
    w-full
    text-sm sm:text-base
  "
>

  <div
    class={
      "fixed bottom-0 z-10 flex w-full p-10 duration-200 " +
      (y > 0 ? "opacity-full pointer-events-auto" : "opacity-0 pointer-events-none")
    }
  >
    <button
      aria-label="Go to top"
      onclick={goTop}
      class="
        ml-auto
        cursor-pointer
        rounded-full
        text-violet
        px-4 sm:px-5
        bg-slate-900 hover:bg-slate-800
      "
    >
      <i class="fa-solid fa-arrow-up grid aspect-square place-items-center"></i>
    </button>
  </div>

  <Header {y} />

  <main class="flex flex-1 flex-col px-6">
    {@render children()}
  </main>

  <Footer
    prev={ page.data.prev }
    next={ page.data.next }
  />

</div>

<svelte:window bind:scrollY={y} />
