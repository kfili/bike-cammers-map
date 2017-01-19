import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['listr'],
  // classNameBindings: ['listDetailHidden'],
  // listDetailHidden: true,
  actions: {
    toggleListDetail () {
      return this.toggleProperty('listDetailHidden');
    },
    toggleItemDone (item){
      console.log('youre in toggleDone listr-list Component');
      this.sendAction('toggleItemDone', item);
    },
    editChannel(){
      console.log('Youre inside listr-list/component in editList, this.get(channel) is ', this.get('channel'));
      this.sendAction('editChannel', this.get('channel'));
    },
    delete () {
      console.log('in listr-list/route in deleteChannel, channel is', this.get('channel'));
      this.sendAction('delete', this.get('channel'));
    },
  },
});
