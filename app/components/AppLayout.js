import _ from 'underscore';
import Marionette from 'backbone.marionette';
import tpl from './AppLayout.html';
import ContentView1 from './ContentView1';
import ContentView2 from './ContentView2';
import ContentModel1 from './ContentModel1';


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

  contentView1: null,
  contentView2: null,

  initialize(options) {
    this.bindEvents(app$, this.appEvents);
  },

  showView1() {
    console.log('AppLayout showView1');
    if (!this.contentView1) {
      var model = new ContentModel1({ title: 'new title' });
      this.contentView1 = new ContentView1({ model: model })
    }

    // if {
    //   this.contentView2 = this.detachChildView('content');
    // }
    this.detachChildView('content');
    this.showChildView('content', this.contentView1);
  },

  showView2() {
    console.log('AppLayout showView2');
    if (!this.contentView2) {
      //var model = new ContentModel2({ title: 'new title' });
      this.contentView2 = new ContentView2();//{ model: model })
    }

    // else {
    //   this.contentView1 = this.detachChildView('content');
    // }

    if (this.contentView1) {
      this.contentView1.updateModel();
    }

    this.contentView1 = this.detachChildView('content');
    this.showChildView('content', this.contentView2);
  }

});
