import Ember from 'ember';

export default Ember.Component.extend({
  // channel:{
  //   title: null,
  //   url: null,
  //   city: null,
  //   state: null,
  // },

  auth: Ember.inject.service(),

  user: Ember.computed.alias('auth.credentials.email'),
  isAuthenticated: Ember.computed.alias('auth.isAuthenticated'),
  actions: {
    save () {
      // console.log('in listr-list/edit, in save()');
      console.log('in listr-edit/component this.get(channel)', this.get('channel'));
      // .then(islink(this.get('channel').url))
      this.sendAction('save', this.get('channel'));
    },
    cancel () {
      this.sendAction('cancel', this.get('channel'));
    }
  }
});
