import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  name: DS.attr('string'),
  c1: DS.belongsTo('i-i-s-test-new-project-for-net-core-c1', { inverse: null, async: false })
});

export let ValidationRules = {
  name: {
    descriptionKey: 'models.i-i-s-test-new-project-for-net-core-c2.validations.name.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  c1: {
    descriptionKey: 'models.i-i-s-test-new-project-for-net-core-c2.validations.c1.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('C2E', 'i-i-s-test-new-project-for-net-core-c2', {
    name: attr('Name', { index: 0 }),
    c1: belongsTo('i-i-s-test-new-project-for-net-core-c1', 'C1', {
      name: attr('Name', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'name' })
  });

  modelClass.defineProjection('C2L', 'i-i-s-test-new-project-for-net-core-c2', {
    name: attr('Name', { index: 0 }),
    c1: belongsTo('i-i-s-test-new-project-for-net-core-c1', 'Name', {
      name: attr('Name', { index: 1 })
    }, { index: -1, hidden: true })
  });
};
