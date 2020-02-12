# To Develop:

* Clone repo
* `yarn install`
* `yarn run blendid`
* Open `http://localhost:3000` to see a local version while you develop

# To Deploy Changes

* Changes merged into master will get automatically built for production and deployed via netlify, so only push a branch to the remote repo and open a PR
* Once the PR is opened, you can login to netlify to see a preview deploy to make sure everything is good before you merge into master
* Once merged, it should get built and deployed near instantly

# To Deploy on GH Pages (just in case you want to do this)

* `yarn run blendid -- gh-pages`
