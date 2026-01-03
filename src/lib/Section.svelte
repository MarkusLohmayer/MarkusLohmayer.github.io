<script lang="ts">
  let { title, children } = $props<{ title: string; children: () => any }>();
</script>

<section
  class="
    flex flex-col gap-8
    py-6 lg:py-10
  "
>
  <h2
    class="
      font-semibold
      text-2xl sm:text-3xl md:text-4xl
    "
  >
    {title}
  </h2>
	{@render children?.()}
</section>