# README

This is a personal project that aims at recreating the famous [gapminder bubble chart](https://www.gapminder.org/tools/#$chart-type=bubbles&url=v1), using Svelte.

The project is an exercise on creating reusable components that talk to each other using a mix of the context API and stores, thus hiding complexity from the consumer.


## TODO
- [ ] business logic (dynamic filters)
  - [x] input slider
- [ ] scales
  - [ ] min and max values as props
- [ ] transitions?
- [ ] redundant code
  - [ ] scales
  - [ ] axes
- [ ] ...


## Problems

## Questions
- redundant scale components: indirection makes it hard to specify which variables should be imported and used in scale generation


## Ressources
- [Svelte readonly stores](https://svelte.dev/docs#run-time-svelte-store-readonly)
- [Use symbols as context keys](https://svelte.dev/tutorial/context-api)
