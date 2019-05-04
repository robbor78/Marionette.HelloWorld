import _ from 'underscore';
import Marionette from 'backbone.marionette';
import tpl from './ContentView1.html';

export default Marionette.View.extend({
  template: _.template(tpl),
});
