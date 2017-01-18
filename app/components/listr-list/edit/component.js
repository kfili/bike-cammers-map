import Ember from 'ember';

export default Ember.Component.extend({
  model(params) {
    return this.get('store').findRecord('list', params.list_id);
  },
  actions: {
    save () {
      this.sendAction('save', this.get('list'));
    },
    cancel () {
      this.sendAction('cancel', this.get('list'));
    }
  }
});
