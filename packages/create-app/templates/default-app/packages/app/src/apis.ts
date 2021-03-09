import {
  createApiFactory,
  configApiRef,
} from '@backstage/core';
import {
  scmIntegrationsApiRef,
  ScmIntegrationsApi,
} from '@backstage/integration-react';

export const apis = [
  createApiFactory({
    api: scmIntegrationsApiRef,
    deps: { configApi: configApiRef },
    factory: ({ configApi }) => ScmIntegrationsApi.fromConfig(configApi),
  }),
];
