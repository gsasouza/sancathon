/**
 * @flow
 * @relayHash 51bf993ad186e4bb54346baf6674b688
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type UserHome_query$ref = any;
export type UserHomeQueryVariables = {||};
export type UserHomeQueryResponse = {|
  +$fragmentRefs: UserHome_query$ref
|};
export type UserHomeQuery = {|
  variables: UserHomeQueryVariables,
  response: UserHomeQueryResponse,
|};
*/


/*
query UserHomeQuery {
  ...UserHome_query
}

fragment UserHome_query on Query {
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
    "name": "UserHomeQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "UserHome_query",
        "args": null
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "UserHomeQuery",
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
    "name": "UserHomeQuery",
    "id": null,
    "text": "query UserHomeQuery {\n  ...UserHome_query\n}\n\nfragment UserHome_query on Query {\n  me {\n    name\n    id\n  }\n}\n",
    "metadata": {}
  }
};
// prettier-ignore
(node/*: any*/).hash = 'ed8fa5c07fc9ef9e520eb35f332adc30';
module.exports = node;
