// import the ember module's functions, objects, etc.
import Ember from 'ember';

// extending the ember route class, and exporting it from this file.
export default Ember.Route.extend({

  // create a 'flashMessages' property that looks up the relevant service.
  flashMessages: Ember.inject.service(),

  // the model hook handles information about the resource 'channels'.
  model (params) {
    return this.get('store').findRecord('channel', params._id);
  },

  // the actions helper handles and sends events (e.g. clicks) to the app.
  actions: {
    willTransition () {
      let store = this.get('store');
      store.peekAll('channel').forEach(function (channel) {
        if (channel.get('hasDirtyAttributes')) {
          channel.rollbackAttributes();
        }
      });
      return true;
    },
    save (channel) {
      // console log left in as an example of how I debug code.
      console.log('in channel/edit, in saveChannel, channel is', channel);
      channel.save()
      .then(this.transitionTo('channels'))
      .catch(() => {
        channel.rollbackAttributes();
        this.get('flashMessages')
        .danger('Channel name already taken, or the channel link has already been posted.');
      });
    },
    cancel (channel) {
      channel.rollbackAttributes();
      this.transitionTo('channels');
    },
    deleteChannel (channel) {
      channel.destroyRecord();
    },
  }
});
