import { startDevServer } from '@cypress/vite-dev-server';
import Cypress from 'cypress';

function getPlugins(on: Cypress.PluginEvents, config: Cypress.PluginConfigOptions) {
  on('dev-server:start', (options) => {
    return startDevServer({ options });
  });

  return config;
}

export default getPlugins;
