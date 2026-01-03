<script lang="ts">
  import { page } from '$app/state';
  import { base } from '$app/paths';

	let { y } = $props();

	let tabs = [
		{ name: 'CV', link: `${base}/` },
		{ name: 'Research', link: `${base}/research` },
	];

  function isActive(link:string) {
    return (
      link === '/' ?
      page.url.pathname === link :
      page.url.pathname.startsWith(link)
    );
  }
</script>

<header
	class={
    `
      sticky top-0 z-10
      flex items-center justify-between
      border border-solid
      px-6 py-4
      duration-300
    ` +
		(
      y > 0 ?
      'border-violet-950 bg-dark' :
      'border-transparent bg-transparent'
    )
  }
>
  <a
    href="{base}/"
    class="text-xl"
  >
    <p>Markus Lohmayer</p>
  </a>
	<nav class="items-center gap-6 flex">
    {#each tabs as tab}
      <a
        href={tab.link}
        class={
          'text-xl duration-200 hover:text-violet ' +
          (isActive(tab.link) ? 'text-lime' : '')
        }
      >
        <p>{tab.name}</p>
      </a>
    {/each}
  </nav>
</header>
