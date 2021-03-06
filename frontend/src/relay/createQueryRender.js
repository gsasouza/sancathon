import * as React from 'react';
import { QueryRenderer } from 'react-relay';
import environment from './environment';

import Loading from '../modules/common/LoadingScreen';

export function createQueryRenderer(
  FragmentComponent,
  config
) {
  const { query, queriesParams } = config;

  class QueryRendererWrapper extends React.Component {

    render() {
      const variables = queriesParams ? queriesParams(this.props) : config.variables;

      return (
        <QueryRenderer
          environment={environment}
          query={query}
          variables={variables}
          render={({ error, props }) => {
            if (error) {
              console.error(error);
              return (
                <div>
                  Ocorreu um erro na requisição
                </div>
              );
            }

            if (props) {
              return <FragmentComponent {...this.props} query={props} />;
            }

            return (
              <Loading fullScreen="true" />
            );
          }}
        />
      );
    }
  }

  return QueryRendererWrapper;
}
