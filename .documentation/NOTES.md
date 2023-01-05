# Notes

## Notes about this repo: 
- Added branch policy to enforce PR, and status checks(CI) before merging
- Added npm secrets to github secrets

## Notes about Stylelint:
- Stylelint recommends moving stylistic rules to prettier, and use stylelint-prettier to run prettier as a stylelint rule.

## Notes about Changesets: 
I've tried to remove the individual changelogs using --no-changelog or even adding changelog.md to the git ignore, but this breaks the changeset github action. 
