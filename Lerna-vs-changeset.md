# Lerna vs Changeset

Our lerna setup : 

```bash
yarn new-version 
yarn release
yarn push-release <yyyy-MM-dd>
```

pros: 
Creates a single release for all packages. 

cons: 
- Multiple manual tasks (3 cmd + 1 github release), with no reviews
- Still have to create a github release manually
- Puts the burden of release notes on the "releaser" (me)

## Changeset

```bash

```