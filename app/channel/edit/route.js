import Ember from 'ember';

export default Ember.Route.extend({
  model (params) {
      console.log(params);
      return this.get('store').findRecord('channel', params._id);
    },
  actions: {
    saveList (channel) {
      console.log('in channel/edit route. channel is', channel);
      channel.save();
    },
    cancel () {
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
