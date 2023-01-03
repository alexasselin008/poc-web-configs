# Lerna vs Changeset
calculated using `Measure-Command { COMMAND }`


## Performance Summary

| | Lerna/npm | pnpm |
| --- | --- | --- |
| install | 35.8160493333s | 22.0217802667s |
| build | 6.0280346s | 2.53799573333s |
| tests | 10.7509392333 | 6.03546443333s |
| clean | 13.6530304333s | 7.02821166667s |

## Pros and cons

 pnpm forces better dependency management, which is a good thing. It also has a better performance than Lerna/npm. 
 
 pnpm forces to install devDependencies matching the peer dependencies of the packages if you are using it in the project. This is technically correct and better, but it can be annoying if you are using a package that has a lot of peer dependencies. 

pnpm also listed the peer dependencies that were missing from my project, which was very helpful. The eslint-config was assuming a peer dependency of typescript and typescript-eslint/parser, but were not listed in the package.json. pnpm listed them as missing dependencies. I've added them as optional peer dependencies.

lerna hoists the dependencies to the root of the project. pnpm keeps the dependencies at the package's level

## Detailed results:

### install dependencies
#### npm
`Measure-Command { npm i }`
TotalSeconds      : 61.5736666s
TotalSeconds      : 25.8590964s
TotalSeconds      : 20.015385s

avg: 35.8160493333s

*pnpm*
`Measure-Command { pnpm i }`
TotalSeconds      : 21.7162447s
TotalSeconds      : 21.7898633s
TotalSeconds      : 22.5592328s

avg: 22.0217802667s

### build
*lerna/npm*
`Measure-Command { npm run build }`
TotalSeconds      : 8.4885139s
TotalSeconds      : 4.7917343s
TotalSeconds      : 4.8038556s

avg: 6.0280346s
*pnpm*
`Measure-Command { pnpm build }`
TotalSeconds      : 2.5323683s
TotalSeconds      : 2.4500051s
TotalSeconds      : 2.6316138s

avg: 2.53799573333s

### tests
*lerna/npm*
`Measure-Command { npm run test }`
TotalSeconds      : 16.3519494s
TotalSeconds      : 7.8890285s
TotalSeconds      : 8.0118398s

avg: 10.7509392333s
*pnpm*
`Measure-Command { pnpm test }`
TotalSeconds      : 5.9844039s
TotalSeconds      : 6.0429763s
TotalSeconds      : 6.0790131s

avg: 6.03546443333s

### clean
*lerna/npm*
- TotalSeconds      : 14.0609523s
- TotalSeconds      : 12.2553726s
- TotalSeconds      : 14.6427664s

avg: 13.6530304333s
*pnpm*
TotalSeconds      : 6.9706268s
TotalSeconds      : 6.9554726s
TotalSeconds      : 7.1585356

avg: 7.02821166667s