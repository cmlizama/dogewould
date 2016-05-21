var Firebase = require('firebase');
import {firebase_api_keys} from '../constants_env';

export class App {
  configureRouter(config, router) {
    config.title = 'Dogewould';
    config.map([
      { route: '/', name: 'welcome', moduleId: 'views/welcome', nav: true, title: 'Welcome' },
      { route: 'report-input', name: 'report input', moduleId: 'views/reportinput', nav: true, title: 'report card' },
      { route: 'reportlist', name: 'report list', moduleId: 'views/reportlist', nav: true, title: 'report feed' },
      { route: 'reportcard', name: 'reportcard', moduleId: 'views/reportcard', nav: true, title: 'reportcard' }
    ]);

    this.router = router;
  }

  activate(){
    var refz = Firebase.initializeApp(firebase_api_keys);
    refz.database().ref('/').once('value').then(function(snapshot) {
        console.log(snapshot.val());
    });
  }
}
