import Marionette from 'backbone.marionette';
import ItemView from './ItemView';
import TodoModel from './TodoModel';
import _ from 'underscore';
import AppLayout from './AppLayout';
import HeaderView from './HeaderView';

export default Marionette.Application.extend({
  region: '#app',

  initialize: function (options) {
    console.log('Initialize');
  },

  onBeforeStart: function (options) {
    console.dir(options);
    this.model = new TodoModel();
  },

  onStart() {
    // ItemView.setRenderer(function (template, data) {
    //   console.log(`template: ${template}`);
    //   console.log(`data: ${data}`);
    //   return _.template(template)(data);
    // });
    // var view = new ItemView({ model: this.model });
    // view.serializeModel = function () {
    //   //return new TodoModel();
    //   const data = _.clone(this.model.attributes);

    //   console.log('title1: ' + data.title);

    //   data.title = 'always blah';


    //   return data;
    // };
    // console.log(`el: ${view.el}`);
    // this.showView(view);

    var appLayout = new AppLayout();
    var headerView = new HeaderView();
    appLayout.showChildView('header', headerView, {});

    this.showView(appLayout);

  }
});
