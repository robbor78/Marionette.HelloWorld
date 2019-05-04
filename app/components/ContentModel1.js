import Backbone from 'backbone';
export default Backbone.Model.extend({
  defaults: {
    title: "title",
    completed: false
  }
});