/**
 * @flow
 * @relayHash 094075217f6fce692dd0aa93ff95c1f0
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type OwnerList_query$ref = any;
export type OwnerListQueryVariables = {||};
export type OwnerListQueryResponse = {|
  +$fragmentRefs: OwnerList_query$ref
|};
export type OwnerListQuery = {|
  variables: OwnerListQueryVariables,
  response: OwnerListQueryResponse,
|};
*/


/*
query OwnerListQuery {
  ...OwnerList_query
}

fragment OwnerList_query on Query {
  users(first: 1000) {
    edges {
      node {
        id
        name
      }
    }
  }
}
*/

const node/*: ConcreteRequest*/ = {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "OwnerListQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "OwnerList_query",
        "args": null
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "OwnerListQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "users",
        "storageKey": "users(first:1000)",
        "args": [
          {
            "kind": "Literal",
            "name": "first",
            "value": 1000,
            "type": "Int"
          }
        ],
        "concreteType": "UserConnection",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "edges",
            "storageKey": null,
            "args": null,
            "concreteType": "UserEdge",
            "plural": true,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "node",
                "storageKey": null,
                "args": null,
                "concreteType": "User",
                "plural": false,
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "id",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "name",
                    "args": null,
                    "storageKey": null
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "OwnerListQuery",
    "id": null,
    "text": "query OwnerListQuery {\n  ...OwnerList_query\n}\n\nfragment OwnerList_query on Query {\n  users(first: 1000) {\n    edges {\n      node {\n        id\n        name\n      }\n    }\n  }\n}\n",
    "metadata": {}
  }
};
// prettier-ignore
(node/*: any*/).hash = '496c7fe0799776437e5eb82493b2bfda';
module.exports = node;
