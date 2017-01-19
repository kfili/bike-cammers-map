import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return this.get('store').findAll('channel');
    // return this.get('store').findRecord('channel', params.list_id);
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
      editChannel (channel) {
        console.log('im in editChannel, in channels/route channel is', channel);
        this.transitionTo('channel/edit', channel);
      },
      deleteChannel (channel) {
        channel.destroyRecord();
      }
  }
});
