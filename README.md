# README

This is a personal project that aims at recreating the famous [gapminder bubble chart](https://www.gapminder.org/tools/#$chart-type=bubbles&url=v1), using Svelte.

It's also an exercise on creating reusable components that talk to each other using a mix of the context API and stores, thus hiding complexity from the consumer.


## TODO
- [ ] business logic (dynamic filters)
- [ ] create circles instead of circle


## Problems
- circle spread doesn't encompass whole width
- can't put filters like range inputs into svg: will have to build common div container

## Questions
- How to pass data from child to parent?
  - `bind`: consumer has to engage
  - pass a writable store via `setContext()`
- redundant scale components: indirection makes it hard to specify which variables should be imported and used in scale generation


## Ressources
- [Svelte readonly stores](https://svelte.dev/docs#run-time-svelte-store-readonly)
- [Use symbols as context keys](https://svelte.dev/tutorial/context-api)
