
:::: Check if you have all the dependency for your app before deploy:

    rm -rf node_modules
    npm install --production
    heroku local web

  If a dependency is missing from your package.json file,
  you should see an error that says which module cannot be found



:::: Specify the verions of node

  "engines": {
      "node": "4.1.1"
  },

  [NOTE]
  In the Node.js versioning scheme, even versions are stable. The
  stable branch takes bug fixes.



:::: Prevent build artifacts from going into revision control

  file: .gitignore

    /node_modules
    npm-debug.log
    .DS_Store
    /*.env

  */[NOTE]
  Since "*.env" is where you usually kept your authentication "secret",
  it should not check into repo.



::::  After commiting changes to git, you can deploy your app to Heroku:

  $ git add .
  $ git commit -m "commit message"
  $ heroku login
  $ heroku create [{app-name}]
  $ git push heroku master
  $ heroku open



:::: Specifying a start script

  Heroku first looks for a Procfile. If no Procfile exists for a
  a default web process is start via the start script in package.json.


:::: Port binding

  The port to bind to is assigned by Heroku as the PORT environment variable.
  Your node server will read this port via:

    var PORT = process.env.PORT || 9090;


https://scotch.io/tutorials/how-to-deploy-a-node-js-app-to-heroku
https://devcenter.heroku.com/articles/deploying-nodejs
https://devcenter.heroku.com/articles/runtime-principles
