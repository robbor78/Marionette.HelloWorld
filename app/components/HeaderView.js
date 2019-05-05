import _ from 'underscore';
import Marionette from 'backbone.marionette';
import tpl from './HeaderView.html';

const app$ = Backbone.Radio.channel('app');

export default Marionette.View.extend({

  template: _.template(tpl),//'#item-template',//
  // el: '#topview', //view is displayed in the DOM el(ement)

  ui: {
    view1selected: '#button-view1',
    view2selected: '#button-view2'
  },

  events: {
    'click @ui.view1selected': 'onShowView1',
    'click @ui.view2selected': 'onShowView2'
  },

  onShowView1() {
    console.log('show view 1');
    app$.trigger('button1');
  },

  onShowView2() {
    console.log('show view 2');
    app$.trigger('button2');
  }

});
