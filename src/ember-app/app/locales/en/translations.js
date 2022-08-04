import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISTestNewProjectForNetCoreC1LForm from './forms/i-i-s-test-new-project-for-net-core-c1-l';
import IISTestNewProjectForNetCoreC2LForm from './forms/i-i-s-test-new-project-for-net-core-c2-l';
import IISTestNewProjectForNetCoreC1EForm from './forms/i-i-s-test-new-project-for-net-core-c1-e';
import IISTestNewProjectForNetCoreC2EForm from './forms/i-i-s-test-new-project-for-net-core-c2-e';
import IISTestNewProjectForNetCoreC1Model from './models/i-i-s-test-new-project-for-net-core-c1';
import IISTestNewProjectForNetCoreC2Model from './models/i-i-s-test-new-project-for-net-core-c2';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-test-new-project-for-net-core-c1': IISTestNewProjectForNetCoreC1Model,
    'i-i-s-test-new-project-for-net-core-c2': IISTestNewProjectForNetCoreC2Model
  },

  'application-name': 'Test new project for net core',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Test new project for net core',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Test new project for net core',
          title: 'Test new project for net core'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        'test-new-project-for-net-core': {
          caption: 'TestNewProjectForNetCore',
          title: 'TestNewProjectForNetCore',
          'i-i-s-test-new-project-for-net-core-c1-l': {
            caption: 'C1',
            title: ''
          },
          'i-i-s-test-new-project-for-net-core-c2-l': {
            caption: 'C2',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-test-new-project-for-net-core-c1-l': IISTestNewProjectForNetCoreC1LForm,
    'i-i-s-test-new-project-for-net-core-c2-l': IISTestNewProjectForNetCoreC2LForm,
    'i-i-s-test-new-project-for-net-core-c1-e': IISTestNewProjectForNetCoreC1EForm,
    'i-i-s-test-new-project-for-net-core-c2-e': IISTestNewProjectForNetCoreC2EForm
  },

});

export default translations;
