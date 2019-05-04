import _ from 'underscore';
import Marionette from 'backbone.marionette';
import tpl from './ContentView2.html';

export default Marionette.View.extend({
  template: _.template(tpl),
});
