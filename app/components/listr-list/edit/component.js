import Ember from 'ember';

export default Ember.Component.extend({
  model(params) {
    return this.get('store').findRecord('channel', params._id);
  },
  actions: {
    save () {
      this.sendAction('save', this.get('channel'));
    },
    cancel () {
      this.sendAction('cancel', this.get('channel'));
    }
  }
});
