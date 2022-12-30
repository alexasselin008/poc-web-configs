# poc-web-configs
Proof of concept of a repo containing Common configurations for building web apps at ShareGate

- [X] All 5 sg webconfig
- [X] All converted to typescript
- [] Build in esm and cjs (know how, but eslint doesnt support ESM yet, bit awkward)
- [X] Use lerna/nx for mono repo scripting
- [ ] Use lerna to add versionning
- [ ] Use github ci
- [ ] Use github action for release

Todos: 
- [ ] Add a readme for each package
- [ ] Add a readme for the mono repo
- [ ] Fix lint to not run on dist folder
- [X] Fix tests to support tsx files (ts-jest)
- [ ] Add nx caching to speed up build/test
