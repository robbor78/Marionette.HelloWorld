import _ from 'underscore';
import Marionette from 'backbone.marionette';
import tpl from './apptemplate.html';
import TodoModel from './TodoModel';

export default Marionette.View.extend({

  template: _.template(tpl),//'#item-template',//
  el: '#app', //view is displayed in the DOM el(ement)

  // serializeModel() {
  //   //this.model.title = 'always blah';

  //   return new TodoModel({ title: 'always blah' });
  // }

  templateContext() {
    return {
      title: this.model.get('title').toUpperCase()
    };
  }
});
