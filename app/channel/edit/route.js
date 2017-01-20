import Ember from 'ember';

export default Ember.Route.extend({
  flashMessages: Ember.inject.service(),
  // auth: Ember.inject.service(),
  //
  // user: Ember.computed.alias('auth.credentials.email'),
  // isAuthenticated: Ember.computed.alias('auth.isAuthenticated'),

  model (params) {
      console.log('NOW in channel/edit/route, params are ', params);
      console.log('auth', this.get('auth.credentials.id'));

      //  this.get('store').findRecord('channel', params._id);
      return this.get('store').findRecord('channel', params._id);
    },
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
      console.log('in channel/edit, in saveChannel, channel is', channel);
      // let _this = this;
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
    // editChannel (channel) {
    //   console.log('im in channels/route', channel);
    //   this.transitionTo('channel/edit', channel);
    // },
    deleteChannel (channel) {
      channel.destroyRecord();
    }
  }
});
