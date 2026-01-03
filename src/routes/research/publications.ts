export interface Publication {
    slug: string;
    icon: string;
    kind?: string;
    title: string;
    authors: string;
    journal?: string;
    year: string;
    doi: string;
    summary: string;
    abstract: string;
  }


  export const publications: Publication[] = [
    {
      slug: 'ephs-language',
      icon: 'fa-solid fa-file',
      kind: 'Research article',
      title: 'Exergetic Port-Hamiltonian Systems Modeling Language',
      authors: 'Markus Lohmayer, Owen Lynch, Sigrid Leyendecker',
      year: '2026',
      doi: '10.1016/j.heliyon.2025.e44191',
      summary: `
        Our goal is to make complex energy-based models easier to build, understand, reuse, and refactor without sacrificing mathematical rigor.
        We introduce a graphical, compositional modeling language in which models are expressed as energy-flow diagrams.
        Crucially, the graphical syntax and the port-Hamiltonian semantics compose in compatible ways, enabling seamless hierarchical (de)composition of systems.
        Additional structural properties guarantee not just passivity, but thermodynamic consistency (1st & 2nd law).
      `,
      abstract: `
        Mathematical modeling of real-world physical systems
        requires the consistent combination of
        a multitude of
        physical laws
        and
        phenomenological models.
        This challenging task can be greatly simplified by
        hierarchically decomposing systems
        into ultimately simple components.
        Moreover, the use of diagrams
        for expressing the decomposition
        helps make the process more intuitive
        and facilitates communication, even with non-experts.
        As an important requirement,
        models have to respect fundamental physical laws
        such as the first and the second law of thermodynamics.
        While some existing modeling frameworks
        make such guarantees
        based on structural properties of their models,
        they lack a formal graphical syntax.
        We present
        a compositional and thermodynamically consistent modeling language
        with a graphical syntax.
        In terms of its semantics,
        we essentially endow port-Hamiltonian systems
        with additional structural properties
        and a fixed physical interpretation,
        ensuring thermodynamic consistency
        in a manner closely related to the metriplectic or GENERIC formalism.
        While port-Hamiltonian systems are inspired by
        graphical modeling with bond graphs,
        neither the link between the two,
        nor bond graphs themselves,
        can be easily formalized.
        In contrast,
        our syntax is based on a specialization of
        the well-studied operad of undirected wiring diagrams.
        By combining
        a compositional, graphical syntax
        with
        an energy-based, thermodynamic approach,
        the presented modeling language
        simplifies
        the understanding, reuse, and modification
        of complex physical models.
      `,
    },
    {
      slug: 'ephs-multibody',
      icon: 'fa-solid fa-file',
      kind: 'Research article',
      title: 'Exergetic Port-Hamiltonian Systems for Multibody Dynamics',
      authors: 'Markus Lohmayer, Giuseppe Capobianco, Sigrid Leyendecker',
      journal: 'Multibody System Dynamics',
      year: '2024',
      doi: '10.1007/s11044-024-10038-w',
      summary: `
        The article applies the EPHS modeling language to
        the domain of multibody dynamics.
        While the language provides a simple abstraction
        to define assemblies of rigid bodies connected by joints,
        the underlying mathematical description is based on
        the Lie group of Euclidean isometries.
      `,
      abstract: `
        Multibody dynamics simulation plays an important role
        in various fields, including
        mechanical engineering, robotics, and biomechanics.
        Setting up computational models
        however becomes increasingly challenging
        as systems grow in size and complexity.
        Especially
        the consistent combination of models
        across different physical domains
        still requires significant effort.
        This motivates
        the study of
        formal languages that enable
        a compositional approach to
        modeling multiphysical systems
        with basic guarantees.
        The article shows how
        multibody systems,
        or more precisely
        assemblies of rigid bodies connected by lower kinematic pairs,
        can be described as
        Exergetic Port-Hamiltonian Systems (EPHS).
        The EPHS modeling language features
        a straightforward graphical syntax
        for expressing
        the energy-based interconnection of hierarchically nested subsystems.
        This reduces cognitive load and
        facilitates clearer communication among experts, non-experts and computational tools.
        Hierarchical nesting of systems
        enables abstraction of lower-level details
        and it promotes the reuse of models at different levels of complexity.
        At the lowest level,
        there are three basic kinds of systems,
        representing energy storage and reversible/irreversible energy exchange.
        The structured approach guarantees
        fundamental properties of
        macroscopic systems, such as
        conservation of energy and
        non-negative entropy production.
        In combination with the compositional syntax,
        this makes building and modifying models simpler and less error-prone.
      `,
    },
    {
      slug: 'ephs-plasma',
      icon: 'fa-solid fa-file',
      kind: 'Research article',
      title: 'Energy-based, geometric, and compositional formulation of fluid and plasma models',
      authors: 'Markus Lohmayer, Michael Kraus, Sigrid Leyendecker',
      year: '2026',
      doi: '10.1016/j.cnsns.2025.109384',
      summary: `
        The article applies the EPHS language to
        the domain of fluid and plasma dynamics.
        Specifically, two plasma models are constructed
        that directly reuse as subsystems
        a Navier-Stokes-Fourier (NSF) fluid model
        and a Maxwell electromagnetism model.
        Besides an ideal compressible fluid model,
        the NSF model includes subsystems that model
        fluid visosity and thermal conduction.
        While the EPHS language provides a clear, energy-based abstraction,
        the underlying mathematical description
        is based on the differential-geometric framework of exterior calculus.
      `,
      abstract: `
        Fluid dynamics plays a crucial role
        in various multiphysics applications,
        including
        energy systems, electronics cooling, and biomedical engineering.
        Developing models
        for complex coupled systems
        can be challenging and time-consuming.
        In particular,
        ensuring the consistent integration of models
        from diverse physical domains
        requires meticulous attention.
        Considering the example of
        (electro-)magneto hydrodynamics
        (on a fixed spatial domain
        and
        with linear polarization and magnetization),
        this article
        demonstrates how
        relatively complex models
        can be composed from
        simpler parts
        by means of
        a formal language
        for multiphysics modeling.
        The Exergetic Port-Hamiltonian Systems (EPHS) modeling language features
        a simple graphical syntax
        for expressing
        the energy-based interconnection of subsystems.
        This reduces cognitive load
        and
        facilitates communication,
        especially in multidisciplinary environments.
        As the example demonstrates,
        existing models can be easily integrated
        as subsystems of new models.
        Specifically,
        an ideal fluid model
        is used as a subsystem of
        a Navier-Stokes-Fourier fluid model,
        which in turn is reused as a subsystem of
        a magneto hydrodynamics model.
        The energy-based, compositional approach
        simplifies understanding complex models,
        and
        it makes it easy to
        encapsulate, reuse, and replace (parts of) models.
        Moreover,
        structural properties of EPHS
        guarantee fundamental properties of
        thermodynamic systems, such as
        conservation of energy,
        non-negative entropy production,
        and Onsager reciprocal relations.
      `,
    },
    {
      slug: 'dissertation',
      icon: 'fa-solid fa-book',
      kind: 'Dissertation',
      title: `
        Exergetic Port-Hamiltonian Systems:
        a compositional, energy-based language for
        modeling mechanical, electromagnetic, and thermodynamic systems
      `,
      authors: 'Markus Lohmayer',
      year: '2025',
      doi: 'TODO',
      summary: `
        The dissertation presents
        my work on the EPHS modeling language
        in a cohesive format.
      `,
      abstract: `
        This thesis introduces
        a novel, compositional, and thermodynamically consistent
        modeling language for multiphysical systems,
        encompassing those governed by the principles of
        classical mechanics, electromagnetism, and thermodynamics.
        At its core,
        the language builds on
        port-Hamiltonian systems theory.
        By interpreting the Hamiltonian
        as an exergy storage function,
        the inherent passivity of port-Hamiltonian systems
        is fully reconciled with
        nonequilibrium thermodynamics.
        Akin to metriplectic systems and the GENERIC formalism,
        additional structural properties
        ensure that
        both the first and second laws of thermodynamics
        are guaranteed.
        Inspired by bond graphs,
        the modeling language features
        a simple graphical syntax,
        which is built upon a specialization of
        the multicategory of undirected wiring diagrams.
        The compositional syntax not only enables
        the hierarchical decomposition of complex systems
        into simple reusable parts
        but also facilitates communication among
        human experts, non-experts, AI language models,
        and computational tools
        for simulation, optimization, and control.
        The structured, energy-based approach
        promotes
        systematic enhancement and reusability of models
        across diverse scientific and engineering domains.
        To demonstrate the utility of the framework,
        the thesis examines two advanced applications:
        First,
        it is shown that the modeling language
        can serve as a modular multibody framework.
        While the mathematical formulation
        of the primitive subsystems
        is based on the Lie group
        of Euclidean isometries,
        the compositional approach allows users to work
        with higher-level abstractions,
        starting with bodies and joints.
        Second,
        the thesis considers a series of
        fluid and plasma models.
        Specifically,
        an ideal fluid model
        is reused as a subsystem of
        a Navier-Stokes-Fourier model,
        which in turn is reused as a subsystem of
        two different plasma models.
        The hierarchical decomposition reveals
        how increasingly complex models
        are built from
        simpler and ultimately primitive subsystems
        that represent
        energy storage
        as well as reversible and irreversible dynamics.
        The graphical syntax
        naturally expresses the interconnection of subsystems
        through shared energy domains.
      `,
    },
    {
      slug: 'directories',
      icon: 'fa-solid fa-file',
      kind: 'Preprint',
      title: 'Directories: A Convenient and Well-Behaved Formalism for Hierarchical Organization in Categorical Systems Theory',
      authors: 'Owen Lynch, Markus Lohmayer',
      year: '2025',
      doi: '10.48550/arXiv.2504.19389',
      summary: `
        Primarily authored by Owen Lynch,
        the article investigates
        the directories formalism
        created as the foundation for
        the EPHS modeling language
        through the lens of applied category theory.
      `,
      abstract: `
        This paper introduces an inherently strict presentation of
        categories with products, coproducts, or symmetric monoidal products
        that is inspired by
        file systems and directories.
        Rather than using nested binary tuples
        to combine objects or morphisms,
        the presentation uses named tuples.
        Specifically, we develop 2-monads whose strict 2-algebras are
        product categories, coproduct categories, or symmetric monoidal categories,
        in a similar vein to the classical Fam construction,
        but where the elements of the indexing set are
        period-separated identifiers like 'cart.motor.momentum'.
        Our development of directories is also intended to serve
        the secondary purpose of expositing certain aspects of polynomial monads,
        and is accompanied by Haskell code
        that shows how the mathematical ideas can be implemented.
      `,
    },
    {
      slug: 'ephs-basics',
      icon: 'fa-solid fa-file',
      kind: 'Research article',
      title: 'Exergetic port-Hamiltonian systems: modelling basics',
      authors: 'Markus Lohmayer, Paul Kotyczka, Sigrid Leyendecker',
      journal: 'Mathematical and Computer Modelling of Dynamical Systems',
      year: '2021',
      doi: '10.1080/13873954.2021.1979592',
      summary: `
        The article studies
        how the framework of port-Hamiltonian systems (PHS)
        relates to thermodynamic modeling.
        In this context,
        the passivity property of PHS
        is correctly interpreted as non-negative exergy destruction.
      `,
      abstract: `
        Port-Hamiltonian systems theory provides
        a structured approach to
        modelling, optimization and control
        of multiphysical systems.
        Yet, its relationship to thermodynamics seems to be unclear.
        The Hamiltonian is traditionally thought of as energy,
        although its meaning is exergy.
        This insight yields benefits:
        1. Links to the GENERIC structure are identified,
        making it relatively easy to borrow ideas
        from a popular nonequilibrium thermodynamics framework.
        2. The port-Hamiltonian structure
        combined with a bond-graph syntax
        is expected to become a main ingredient in
        thermodynamic optimization methods
        akin to exergy analysis and beyond.
        The intuitive nature of exergy and diagrammatic language
        facilitates interdisciplinary communication
        that is necessary for implementing
        sustainable energy systems and processes.
        Port-Hamiltonian systems are cyclo-passive,
        meaning that a power-balance equation
        immediately follows from their definition.
        For exergetic port-Hamiltonian systems,
        cyclo-passivity is synonymous with degradation of energy
        and follows from
        the first and the second law of thermodynamics
        being encoded as structural properties.
      `,
    },
  ];
