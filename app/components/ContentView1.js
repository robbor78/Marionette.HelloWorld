import _ from 'underscore';
import Marionette from 'backbone.marionette';
import tpl from './ContentView1.html';
import ContentModel1 from './ContentModel1';

export default Marionette.View.extend({
  //model: ContentModel1,
  template: _.template(tpl),
  // el: '#content',
  initialize: function () {
    //this.model = new ContentModel1();
    //const tmp = this.template({ title: 'title' });
    //console.log(`init ${tmp} ${this.template}`);
  },

  ui: {
    inputTitle: '#input-title',
  },

  events: {
    'keypress @ui.inputTitle': 'logKeypressed',
  },

  logKeypressed: function (event, data) {
    console.log('key pressed');
    // let title = $('input#input-title').val();
    // this.model.set('title', title);
  },

  updateModel: function () {
    let title = $('input#input-title').val();
    this.model.set('title', title);
    $('input#input-title').empty();
  }

});
