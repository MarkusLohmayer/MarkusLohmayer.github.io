<script lang="ts">
	import HyperCard from '$lib/HyperCard.svelte';
</script>


<div
  class="
    flex flex-col gap-20
    py-6 lg:py-10
  "
>
  <h1
    class="
      text-center
      font-semibold
      text-3xl sm:text-4xl md:text-5xl
    "
  >
    Hi! I'm <span class="text-violet">Markus</span> Lohmayer
  </h1>
  <h2
    class="
      text-center
      font-semibold
      text-2xl sm:text-3xl md:text-4xl
    "
  >
    Curious how <span class="text-violet">I can help you</span> ?
  </h2>
  <div
    class="
      grid
      grid-cols-1 lg:grid-cols-3
      gap-10
    "
  >
    <HyperCard
      name="Systems Engineering"
      icon="fa-solid fa-diagram-project"
      href="/systems-engineering"
    >
      IT infrastructure and automation,
      mechatronic systems and control,
      energy systems,
      mathematical modeling and simulation,
      ...
    </HyperCard>
    <HyperCard
      name="Software Development"
      icon="fa-solid fa-code"
      href="/software-development"
    >
      Process automation,
      data analysis and visualization,
      custom tools and dashboards,
      modeling and simulation,
      web development,
      ...
    </HyperCard>
    <HyperCard
      name="Consulting"
      icon="fa-solid fa-chalkboard-user"
      href="/consulting"
    >
      Systems and software architecture,
      feasability studies and technology assessments,
      technical mentoring and training,
      knowledge transfer and documentation,
      ...
    </HyperCard>
  </div>
</div>