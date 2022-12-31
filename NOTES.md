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


yarn new-version // lerna version --exact --no-push // create tags, update package.json
yarn release // lerna publish from-package --exact --loglevel verbose // publish sur NPM
yarn push-release <yyyy-MM-dd> // git push, create annotation tag, push tag



        "force-new-version": "yarn new-version --force-publish",
        "release": "lerna publish from-package --exact --loglevel verbose",
        "push-release": "node scripts/push-release",

push-release

push
anotated tag
push tag


nécessite beaucoup de custom stock a faire avec lerna











npx changeset // équivalent à add. demande les versions à changé
npx changeset version // change les packages.json et les version des packages. doit commit avant de publish
npx changeset publish // publish sur NPM (dois pusher les tags quand même après)

yarn release devrait build et test et call publish





