import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return this.get('store').createRecord('list', {});
  },
  actions: {
    createList (list) {
      console.log('inside lists/new/route createList');
      list.save();
    },
    cancelCreateList (list) {
      list.rollbackAttributes();
      console.log('inside lists/new/route cancel');
    },
  }
});
