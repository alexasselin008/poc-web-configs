# poc-web-configs
Proof of concept of a repo containing Common configurations for building web apps at ShareGate

[![CI](https://github.com/alexasselin008/poc-web-configs/actions/workflows/ci.yml/badge.svg)](https://github.com/alexasselin008/poc-web-configs/actions/workflows/ci.yml)

- [X] All 5 ShareGate web configs
- [X] All converted to typescript
- [X] Use lerna for mono repo scripting
- [ ] Use changesets to add versioning
- [X] Use github ci
- [X] Use github ci on pull request
- [ ] Use github action for release
- [ ] Replace lerna with pnpm?

Todos: 
- [ ] Add a readme for each package
- [ ] Add a readme for the mono repo
- [X] Fix tests to support tsx files (ts-jest)
- [X] JS doc comments for each eslint rules pointing to the rule documentation

Excluded from POC: 
- Build in esm and cjs:
  - Fairly easy to do with `tsup`, but eslint doesn't support esm yet, so doesn't seem worth it.
- Add nx caching to speed up build/test
  - Not sure if it's worth it, since the build is pretty fast. But it might be a good idea to have it in the future.
