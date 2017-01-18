import Ember from 'ember';

export default Ember.Route.extend({
  model (params) {
      console.log(params);
      return this.get('store').findRecord('list', params.list_id);
    },
  actions: {
    saveList (list) {
      console.log('in list/edit route. list is', list);
      list.save();
    },
    cancel () {
      this.transitionTo('lists');
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
