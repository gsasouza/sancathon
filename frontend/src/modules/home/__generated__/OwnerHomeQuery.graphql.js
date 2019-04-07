/**
 * @flow
 * @relayHash 5524dc0258b8eabc6b49d2be72062471
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type OwnerHome_query$ref = any;
export type OwnerHomeQueryVariables = {||};
export type OwnerHomeQueryResponse = {|
  +$fragmentRefs: OwnerHome_query$ref
|};
export type OwnerHomeQuery = {|
  variables: OwnerHomeQueryVariables,
  response: OwnerHomeQueryResponse,
|};
*/


/*
query OwnerHomeQuery {
  ...OwnerHome_query
}

fragment OwnerHome_query on Query {
  me {
    name
    id
  }
}
*/

const node/*: ConcreteRequest*/ = {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "OwnerHomeQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "OwnerHome_query",
        "args": null
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "OwnerHomeQuery",
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
            "name": "name",
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
    "name": "OwnerHomeQuery",
    "id": null,
    "text": "query OwnerHomeQuery {\n  ...OwnerHome_query\n}\n\nfragment OwnerHome_query on Query {\n  me {\n    name\n    id\n  }\n}\n",
    "metadata": {}
  }
};
// prettier-ignore
(node/*: any*/).hash = 'b036baeb2a828693a25a9230abd88e8d';
module.exports = node;
