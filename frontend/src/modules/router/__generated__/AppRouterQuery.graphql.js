/**
 * @flow
 * @relayHash 49a359b764ee0e130b14197ad6bee404
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type AppRouter_query$ref = any;
export type AppRouterQueryVariables = {||};
export type AppRouterQueryResponse = {|
  +$fragmentRefs: AppRouter_query$ref
|};
export type AppRouterQuery = {|
  variables: AppRouterQueryVariables,
  response: AppRouterQueryResponse,
|};
*/


/*
query AppRouterQuery {
  ...AppRouter_query
}

fragment AppRouter_query on Query {
  me {
    isOwner
    id
  }
}
*/

const node/*: ConcreteRequest*/ = {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "AppRouterQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "AppRouter_query",
        "args": null
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "AppRouterQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "me",
        "storageKey": null,
        "args": null,
        "concreteType": "User",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "isOwner",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "AppRouterQuery",
    "id": null,
    "text": "query AppRouterQuery {\n  ...AppRouter_query\n}\n\nfragment AppRouter_query on Query {\n  me {\n    isOwner\n    id\n  }\n}\n",
    "metadata": {}
  }
};
// prettier-ignore
(node/*: any*/).hash = '50332f27ce528c3f2c16a361209b74b2';
module.exports = node;
