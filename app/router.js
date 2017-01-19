import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
});

Router.map(function () {
  // Auth
  this.route('sign-up');
  this.route('sign-in');
  this.route('change-password');
  this.route('users');

  // Channels
  this.route('channels');
  this.route('channels/new');
  this.route('channel', { path: 'channels/:id' });
  this.route('channel/edit', { path: 'channels/:id/edit' });
});

export default Router;

// this.route('channels', function() {
//   this.route('new');
// });
