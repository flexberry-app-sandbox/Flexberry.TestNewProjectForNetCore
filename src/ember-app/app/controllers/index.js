import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.test-new-project-for-net-core.caption'),
          title: i18n.t('forms.application.sitemap.test-new-project-for-net-core.title'),
          children: [{
            link: 'i-i-s-test-new-project-for-net-core-c1-l',
            caption: i18n.t('forms.application.sitemap.test-new-project-for-net-core.i-i-s-test-new-project-for-net-core-c1-l.caption'),
            title: i18n.t('forms.application.sitemap.test-new-project-for-net-core.i-i-s-test-new-project-for-net-core-c1-l.title'),
            icon: 'book',
            children: null
          }, {
            link: 'i-i-s-test-new-project-for-net-core-c2-l',
            caption: i18n.t('forms.application.sitemap.test-new-project-for-net-core.i-i-s-test-new-project-for-net-core-c2-l.caption'),
            title: i18n.t('forms.application.sitemap.test-new-project-for-net-core.i-i-s-test-new-project-for-net-core-c2-l.title'),
            icon: 'folder',
            children: null
          }]
        }
      ]
    };
  }),
})