<script lang="ts">
  let { icon, title, date, org, children } = $props<{
    icon?: string;
    title: string;
    date: string;
    org?: string;
    children?: () => any;
  }>();
</script>

<div
  class="
    flex flex-col gap-3
    border border-solid border-yellow rounded-lg
    p-4 sm:p-5 md:p-6
  "
>
  <div class="flex justify-between items-start">
    <div class="flex items-center gap-3">
      {#if icon}
        <div class="text-lg sm:text-xl md:text-2xl">
          <i class={icon} aria-hidden="true"></i>
        </div>
      {/if}
      <h3
        class="
          font-medium
          text-xl sm:text-2xl md:text-3xl
        "
      >{title}</h3>
    </div>
    {date}
  </div>
  {#if org}
    <p>{org}</p>
  {/if}
  {@render children?.()}
</div>
