import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return this.get('store').createRecord('channel', {});
  },
  actions: {
    createChannel (channel) {
      let _this = this;
      channel.save().then(
      _this.transitionTo('channels'));
    },
    cancelCreateChannel (channel) {
      channel.rollbackAttributes();
      this.transitionTo('channels');
      console.log('inside channels/new/route cancel');
    },
  }
});
