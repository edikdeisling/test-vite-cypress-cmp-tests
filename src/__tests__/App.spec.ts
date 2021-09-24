import { mount } from '@cypress/vue';
import App from '../App.vue';

describe('Main', () => {
  beforeEach(() => {
    mount(App);
  });

  it('Test', () => {
    cy.get('[data-test="app"]').contains('Hello world');
  });
});
