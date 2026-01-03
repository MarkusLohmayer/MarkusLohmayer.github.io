<script lang="ts">
  let { prev, next } = $props<{
    prev?: { label: string; href: string };
    next?: { label: string; href: string };
  }>();
</script>

<footer
  class="
    bg-dark
    border-t border-solid border-violet-950
    grid grid-cols-[1fr_auto_1fr] items-center
    p-6 sm:p-12
    gap-10
  "
>
  <div class="justify-self-start max-w-full overflow-hidden">
    {#if prev}
      <a
        class="
          flex items-center gap-1
          text-indigo hover:text-violet
        "
        href={prev.href}
      >
        <span class="shrink-0">←&nbsp;</span>
        <span class="block truncate min-w-0">{prev.label}</span>
      </a>
    {/if}
  </div>
  
  <div class="justify-self-center">
    <a
      class="
        bg-white
        px-4 py-2
        font-medium text-slate-950
        rounded-sm
      "
      href="mailto:markus.lohmayer@gmail.com"
    >
      <i class="fa-regular fa-envelope"></i>
      Connect
    </a>
  </div>

  <div class="justify-self-end max-w-full overflow-hidden">
    {#if next}
      <a
        class="
          flex items-center gap-1
          text-indigo hover:text-violet
        "
        href={next.href}
      >
        <span class="block truncate min-w-0">{next.label}</span>
        <span class="shrink-0">&nbsp;→</span>
      </a>
    {/if}
  </div>
</footer>
