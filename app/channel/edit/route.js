import Ember from 'ember';

export default Ember.Route.extend({
  model (params) {
      console.log('in channel/edit/route, params are ', params);
      return this.get('store').findRecord('channel', params._id);
      // console.log(channel.get('city'))
    },
  actions: {
    save (channel) {
      console.log('in channel/edit, in saveChannel, channel is', channel);
      let _this = this;
      channel.save().then(
      _this.transitionTo('channels'));
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
