import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Test new project for net core',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Test new project for net core',
          title: 'Test new project for net core'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-test-new-project-for-net-core-c1-l': IISTestNewProjectForNetCoreC1LForm,
    'i-i-s-test-new-project-for-net-core-c2-l': IISTestNewProjectForNetCoreC2LForm,
    'i-i-s-test-new-project-for-net-core-c1-e': IISTestNewProjectForNetCoreC1EForm,
    'i-i-s-test-new-project-for-net-core-c2-e': IISTestNewProjectForNetCoreC2EForm
  },

});

export default translations;
