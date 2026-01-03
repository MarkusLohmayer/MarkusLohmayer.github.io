<script lang="ts">
	let { name, icon, href, children } =
  $props<{
    name: string;
    icon: string;
    href: string;
    children: () => any;
  }>();
</script>

<a
	{href}
  target={href.startsWith('/') ? '_self' : '_blank'}
	class="
    flex flex-col gap-6
    text-center
    cursor-pointer
    border border-solid rounded-lg
    border-yellow hover:border-orange duration-100
    p-4 sm:p-6 md:p-8
    mt-5 sm:mt-6 md:mt-7 lg:mt-8
  "
>
	<div
		class="
      mx-auto
      grid place-items-center
      bg-neutral
      px-4
      text-4xl md:text-5xl
      -mt-10 sm:-mt-12 md:-mt-14 lg:-mt-16
    "
	>
		<i class={icon} aria-hidden="true"></i>
	</div>
	<h3
    class="
      font-medium
      text-xl sm:text-2xl md:text-3xl
    "
  >
		{name}
	</h3>
  <p>{@render children?.()}</p>
  <div class="flex justify-end">
    <i class="fa-solid fa-arrow-right" aria-hidden="true"></i>
  </div>
</a>
