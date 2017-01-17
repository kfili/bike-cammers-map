import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    // return this.get('store').findAll('channel');
      return [
        {
          city: 'Boston, MA, United States',  //item:
          channels: [                         //title:
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
  actions:{
      createItem (){
        console.log('inside createitem, item is ', this.get('item'));
        console.log('inside createitem this.get(newItem) is ', this.get('newItem') );
        // console.log('inside createitem ', );
        let data = this.get('newItem');
        data.list = this.get('list');
        // this.get('newItem').set('list', this.get('list'));
        this.sendAction('createItem', this.get('newItem'));
      },
      // editChannel (channel) {
      //   console.log('im in channels/route', channel);
      //   this.transitionTo('channel/edit', channel);
      // },
      // deleteChannel (channel) {
      //   channel.destroyRecord();
      // }
  }
});
