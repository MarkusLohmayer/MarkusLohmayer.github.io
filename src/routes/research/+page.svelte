<script lang="ts">
  import { base } from "$app/paths";
  import Section from "$lib/Section.svelte";
  import HyperCard from "$lib/HyperCard.svelte";
  import { publications } from "./publications";
  import { software } from "./software";
</script>

<Section title="Publications">
  <div
    class="
      grid
      grid-cols-1 lg:grid-cols-2
      gap-10
    "
  >
    {#each publications as item}
      <HyperCard
        name={item.title}
        icon={item.icon}
        href={`${base}/research/${item.slug}`}
      >
        {item.summary}
      </HyperCard>
    {/each}
  </div>
</Section>

<Section title="Software">
  <div
    class="
      grid
      grid-cols-1 lg:grid-cols-2
      gap-10
    "
  >
    {#each software as item}
      <HyperCard name={item.name} icon={item.icon} href={item.href}>
        {item.summary}
      </HyperCard>
    {/each}
  </div>
</Section>

