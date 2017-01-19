import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return this.get('store').createRecord('channel', {});
  },
  actions: {
    createChannel (channel) {
      console.log('inside channels/new/route createChannel');
      channel.save();
    },
    cancelCreateChannel (channel) {
      channel.rollbackAttributes();
      this.transitionTo('channels');
      console.log('inside channels/new/route cancel');
    },
  }
});
