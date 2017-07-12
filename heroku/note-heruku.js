
$ heroku login  // login

$ git clone https://github.com/heroku/node-js-getting-started.git

$ heroku create           // create a repo remotely to mirror the local repo

$ git push heroku master  // deploy your code,

$ heroku ps:scale web=1   //spin up one instance of dyno

$ heroku open {path}      // open app in a browser

$ heroku logs --tails     // view logs

$ heroku ps               // listing dyno

$ heroku ps:scale web=0   // shut down dyno

$ heroku local web        // run app locally at port 5000

$ heroku addons:create {ad-ons-name}  // provision and add-on

$ heroku addons          // list provisioned add-on

$ heroku addons: open {ad-ons-name}  // open add on in browser

$ heroku run node        // run node one-off dyno

$ heroku run bash        // run bash one-off dyno

$ heroku config:set {VARIABLE-NAME}=2    // set a variable on heroku

$ heroku config          // print out configuration variable






