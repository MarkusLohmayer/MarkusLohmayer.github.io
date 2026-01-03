<script lang="ts">
  import Section from '$lib/Section.svelte';
  import CVItem from '$lib/CVItem.svelte';
</script>


<h1
  class="
    text-center
    text-2xl sm:text-3xl md:text-4xl
    py-3
  "
>
  curriculum vitae
</h1>


<Section title="Professional Experience">
  <div class="flex flex-col gap-10">
    <CVItem
      icon="fa-solid fa-network-wired"
      title="IT Systems Administrator & Support Specialist"
      date="01/2020 – 09/2025"
      org="Friedrich-Alexander Universität (FAU), Erlangen, Germany"
    >
      <p>German job title: “IT-Systemtechniker”</p>
      <p class="mt-3"><strong>Main responsibilities in this role:</strong></p>
      <ul class="list-disc pl-5 space-y-2">
        <li>Independently managed IT infrastructure for a mid-sized research group</li>
        <li>Deployed and maintained Linux servers and multi-platform clients (Linux, macOS, Windows)</li>
        <li>Introduced Git and administered GitLab instance, including CI/CD pipelines</li>
        <li>Built internal tools and a web dashboard to streamline lab operations and automate workflows</li>
        <li>Managed network, user accounts and groups, and the institute’s website</li>
        <li>Provided IT and programming support to staff and students; created and maintained internal documentation</li>
      </ul>
      <p class="mt-4"><strong>Key technologies used in this role:</strong></p>
      <p>
        <strong>Linux</strong> (servers and workstations) with
        <strong>ZFS</strong> (reliable storage and backup),
        <strong>Docker</strong> (containerized service deployment),
        <strong>Nix</strong> (reproducible software installation and configuration on Linux and macOS),
        <strong>Active Directory</strong> and
        <strong>Samba</strong> (centralized user management and cross-platform file sharing),
        <strong>Python</strong> and
        <strong>Julia</strong> (internal tooling and programming support)
      </p>
    </CVItem>
  </div>
</Section>


<Section title="Research">
  <div class="flex flex-col gap-10">
    <CVItem
      icon="fa-solid fa-graduation-cap"
      title="Doctor of Engineering (Dr.-Ing.)"
      date="03/2020 – TODO"
      org="Friedrich-Alexander Universität (FAU), Erlangen, Germany"
    >
      <p class="mt-2">
        Pursued self-initiated doctoral research
        alongside full-time employment.
      </p>
    <a
        href="/research/publications/dissertation"
        class="duration-100 hover:text-violet"
      >
        Dissertation:
        “Exergetic Port-Hamiltonian Systems:
        a compositional, energy-based language for
        modeling mechanical, electromagnetic, and thermodynamic systems”
      </a>
      <p>
        Publications and software are listed on the 
        <a
          href="/research"
          class="duration-100 hover:text-violet"
        >
          Research page
        </a>.
      </p>
      <!-- <p>Grade: TODO</p> -->
    </CVItem>
  </div>
</Section>



<Section title="Teaching & Supervision">
  <div class="flex flex-col gap-10">
    <CVItem
      icon="fa-solid fa-chalkboard-user"
      title="Student Supervision"
      date="2021 – 2025"
      org="Friedrich-Alexander Universität (FAU), Erlangen, Germany"
    >
      <p>
        Supervised five graduate theses,
        including both master’s and project theses
        on topics related to
        port-Hamiltonian systems,
        data-driven modeling, and
        optimal control.
      </p>
    </CVItem>

    <CVItem
      icon="fa-solid fa-person-chalkboard"
      title="Teaching Assistant & Tutor"
      date="2014 – 2020"
      org="Friedrich-Alexander Universität (FAU), Erlangen, Germany"
    >
      <p>
        Supported various undergraduate and graduate courses
        in computer science and engineering, including
        “Foundations of Computer Science”,
        “Machine-oriented Programming in C”,
        “Dynamics of Rigid Bodies”,
        “Mechanical Vibrations”, and
        “Geometric Numerical Integration”.
      </p>
      <p class="mt-2">
        Commissioned to translate complete materials
        of a graduate-level course
        form German to English.
      </p>
      <p class="mt-2">
        Voluntarily completed a university certificate program
        for teaching assistants.
      </p>
    </CVItem>
    <CVItem
      icon="fa-solid fa-user-graduate"
      title="Private Tutor"
      date="2008 – 2009"
      org="Dorfen, Germany"
    >
      <p>
        Tutored high school students in
        mathematics,
        physics, and
        English.
      </p>
    </CVItem>
  </div>
</Section>


<Section title="Education">
  <div class="flex flex-col gap-10">
    <CVItem
      icon="fa-solid fa-building-columns"
      title="Master of Science in Computational Engineering"
      date="04/2017 – 12/2019"
      org="Friedrich-Alexander Universität (FAU), Erlangen, Germany"
    >
      <p>
        Final grade: 1.1 (German system)
      </p>
      <ul class="list-disc pl-5 space-y-2">
        <li>
          Member of the Bavarian Graduate School of Computational Engineering (BGCE),
          Elite Network of Bavaria
          (04/2018 – 03/2020)
        </li>
        <li>
          Recipient of
          merit-based national scholarship
          “Deutschlandstipendium”
          (10/2018 – 09/2019)
        </li>
        <li>
          Research visit to the Laboratoire d’Acoustique de l’Université du Mans (LAUM),
          Le Mans, France
          (10/2018 – 12/2018)
        </li>
        <li>
          Research visit to the Department of Applied Mechanics, IIT Delhi,
          Delhi, India
          (12/2017)
        </li>
      </ul>
    </CVItem>
    <CVItem
      icon="fa-solid fa-building-columns"
      title="Bachelor of Science in Mechatronics Engineering"
      date="10/2013 – 04/2017"
      org="Friedrich-Alexander Universität (FAU), Erlangen, Germany"
    >
      <p>
        Final grade: 1.5 (German system)
      </p>
      <ul class="list-disc pl-5 space-y-2">
        <li>
          Exchange semester at the Universitat Politècnica de Catalunya (UPC),
          Barcelona, Spain
          (09/2015 – 01/2016)
        </li>
        <li>
          Recipient of
          merit-based national scholarship
          “Deutschlandstipendium”
          (01/2015 – 12/2015)
        </li>
      </ul>
    </CVItem>
    <CVItem
      icon="fa-solid fa-hammer"
      title="Apprenticeship in Carpentry"
      date="10/2011 – 08/2013"
      org="Schreinerei Prinz, Gestratz (Allgäu), Germany"
    >
      <p>
        German vocational qualification in fine woodworking
      </p>
    </CVItem>
    <CVItem
      icon="fa-solid fa-school"
      title="General University Entrance Qualification (Abitur)"
      date="07/2000 – 06/2009"
      org="Gymnasium Dorfen, Dorfen, Germany"
    >
      <p>
        Final grade: 1.9 (German system)
      </p>
      <ul class="list-disc pl-5 space-y-2">
        <li>
          Exchange year abroad (not repeated at home),  
          Gillespie High School, Illinois, USA  
          (08/2006 – 07/2007)
          <br/>
          GPA: 3.9 (4.0 scale)  
        </li>
      </ul>
    </CVItem>
  </div>
</Section>
