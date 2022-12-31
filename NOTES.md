- Could start transfering stylelint stylistic rules into stylelint-prettier rules 



Settings changed on the repo: 
- Added branch policy to enforce PR, and status checks(CI) before merging


Lerna vs changesets

LERNA
--no-git-tag-version sur le version?

publish avec le --yes
--no-verify-access ?


Dans la PR, git version, comme ça c'est source controlled + review

Après, quand ça merge

- Determiner si le changeset contient un release?
- Creer un tag avec la date de la journée
- listé les packages qui ont changés
- Creer un release sur le tag de la journée?




// pas de tag, le push devrait être a on? pas de private non plus
lerna version --no-private --no-git-tag-version --no-push

avantage de publish dnas un workflow
ensure que c'Est buildé avant


yarn new-version
yarn release
yarn push-release <yyyy-MM-dd>



        "force-new-version": "yarn new-version --force-publish",
        "release": "lerna publish from-package --exact --loglevel verbose",
        "push-release": "node scripts/push-release",

push-release

push
anotated tag
push tag


nécessite beaucoup de custom stock a faire avec lerna











npx changeset // équivalent à add
npx changeset version
npx changeset publish






