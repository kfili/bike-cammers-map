import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',
  classNameBindings: ['listItemCompleted'],
  listItemCompleted: Ember.computed.alias('item.done'),
  actions: {
    // toggleDone () {
    //   console.log('youre in toggleDone listr-list/item Component, and this.get(item) is ',
    //   this.get('item'));
    //   this.sendAction('toggleDone', this.get('item'));
    //   // return this.toggleProperty('listIte mCompleted');
    // },
    delete (){
      console.log('log inside delete and this.getItem is', this.get('item'));
      this.sendAction('delete', this.get('item'));
    }
  },
});
