import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return this.get('store').createRecord('channel', {});
  },
  actions: {
    willTransition () {
      let store = this.get('store');
      store.peekAll('channel').forEach(function (channel) {
        if (channel.get('isNew') && channel.get('hasDirtyAttributes')) {
          channel.rollbackAttributes();
        }
      });
      return true;
    },
    createChannel (channel) {
      channel.save()
      .then(this.transitionTo('index'))
      .catch(() => {
        channel.rollbackAttributes();
        this.get('flashMessages')
        .danger('Channel name already taken, or the channel link has already been posted.');
      });
    },
    cancelCreateChannel (channel) {
      channel.rollbackAttributes();
      this.transitionTo('index');
      console.log('inside channels/new/route cancel');
    },
  }
});
