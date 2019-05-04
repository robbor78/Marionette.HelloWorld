import _ from 'underscore';
import Marionette from 'backbone.marionette';
import tpl from './AppLayout.html';
import ContentView1 from './ContentView1';
import ContentView2 from './ContentView2';

const app$ = Backbone.Radio.channel('app');

export default Marionette.View.extend({
  template: _.template(tpl),
  el: '#app-layout', //view is displayed in the DOM el(ement)
  regions: {
    header: '#header',
    content: '#content'
  },

  appEvents: {
    'button1': 'showView1',
    'button2': 'showView2'
  },

  initialize(options) {
    this.bindEvents(app$, this.appEvents);
  },

  showView1() {
    console.log('AppLayout showView1');
    this.showChildView('content', new ContentView1());
  },

  showView2() {
    console.log('AppLayout showView2');
    this.showChildView('content', new ContentView2());
  }

});
