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
npm run add-changeset
```

pros: 
- Creates a single PR for all packages. 
- Manual tasks are handled by github actions.
- Release notes are reviewed and written by contributors
- supposed to be creating a github release automatically

cons: 
- Multiple manual tasks (3 cmd + 1 github release), with no reviews
- Still have to create a github release manually
- Puts the burden of release notes on the "releaser" (me)

