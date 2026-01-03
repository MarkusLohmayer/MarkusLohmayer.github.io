<script lang="ts">
  import type { PageProps } from './$types';
  let { data }: PageProps = $props();
  let { kind, title, authors, journal, year, doi, abstract } = $derived(data.item);
</script>

<div
  class="
    flex flex-col gap-6
    text-center
    mx-10
    my-5
  "
>
  <h2 class="text-2xl sm:text-3xl md:text-4xl">
    {kind}
  </h2>
  <h3 class="font-semibold text-1xl sm:text-3xl md:text-4xl">
    {title}
  </h3>
  <p>
    {authors}
  </p>
  <p>
    {#if journal}
      {journal},
    {/if}
    {year}
  </p>
  <a
    href="https://doi.org/{doi}"
    target="_blank"
    class="text-lime duration-200 hover:text-violet"
  >
    <i class="fa-solid fa-arrow-up-right-from-square"></i>
    doi.org/{doi}
  </a>
  <p class="text-justify">
    {@html abstract}
  </p>
</div>