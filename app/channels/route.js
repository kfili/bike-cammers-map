import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    // return this.get('store').findAll('channel');
      return [
        {
          city: 'Boston, MA, United States',
          channels: [
            { channel: 'Boston bike cam' },
            { channel: 'Fatbike rider' },
          ],
        }, {
          city: 'London, England',
          channels: [
            { channel: 'CycleGaz' },
            { channel: 'Evo Lucas' },
          ],
        }, {
          city: 'New York, NY, United States',
          channels: [
            { channel: 'RidingWithJahv' },
            { channel: 'NY traffic guy' },
          ],
        },
      ];
  },
  actions: {
      editChannel (channel) {
      console.log('im in channels/route', channel);
      this.transitionTo('channel/edit', channel);
    },
    deleteChannel (channel) {
      channel.destroyRecord();
    }
  }
});
