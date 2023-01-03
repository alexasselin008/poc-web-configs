# Lerna vs Changeset
calculated using `Measure-Command { COMMAND }`

## install depedencies
### npm
`Measure-Command { npm i }`
- TotalSeconds      : 17.8491198s
TotalSeconds      : 14.5747801s
TotalSeconds      : 16.3120683s

avg: 16.2453227333s

### pnpm
`Measure-Command { pnpm i }`
TotalSeconds      : 21.7162447s
TotalSeconds      : 21.7898633
TotalSeconds      : 22.5592328

avg: 22.0217802667

## build

### Lerna/npm
`Measure-Command { npm run build }`
TotalSeconds      : 8.4885139s
TotalSeconds      : 4.7917343s
TotalSeconds      : 4.8038556s

avg: 6.0280346s
### pnpm

## tests
### Lerna/npm
TotalSeconds      : 16.3519494s
TotalSeconds      : 7.8890285s
TotalSeconds      : 8.0118398s

avg: 10.7509392333
### pnpm

## clean
### Lerna/npm
- TotalSeconds      : 14.0609523s
- TotalSeconds      : 12.2553726s
- TotalSeconds      : 14.6427664s

avg: 13.6530304333s
### pnpm