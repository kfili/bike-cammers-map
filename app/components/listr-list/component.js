import Ember from 'ember';

export default Ember.Component.extend({
  // newItem: {
  //   content: null,
  //   done: false
  // },
  classNames: ['listr'],
  classNameBindings: ['listDetailHidden'],
  listDetailHidden: true,
  actions: {
    toggleListDetail () {
      return this.toggleProperty('listDetailHidden');
    },
    toggleItemDone (item){
      console.log('youre in toggleDone listr-list Component');
      this.sendAction('toggleItemDone', item);
    },
    deleteItem (item) {
      this.sendAction('deleteItem', item);
    },
    // createItem (){
    //   console.log('inside createitem, item is ', this.get('item'));
    //   console.log('inside createitem this.get(newItem) is ', this.get('newItem') );
    //   // console.log('inside createitem ', );
    //   let data = this.get('newItem');
    //   data.list = this.get('list');
    //   // this.get('newItem').set('list', this.get('list'));
    //   this.sendAction('createItem', this.get('newItem'));
    // }
  },
});
