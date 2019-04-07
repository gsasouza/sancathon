/**
 * @flow
 * @relayHash 58159c61df53a42c515614a83d049402
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type OwnerProductList_query$ref = any;
export type OwnerProductListQueryVariables = {||};
export type OwnerProductListQueryResponse = {|
  +$fragmentRefs: OwnerProductList_query$ref
|};
export type OwnerProductListQuery = {|
  variables: OwnerProductListQueryVariables,
  response: OwnerProductListQueryResponse,
|};
*/


/*
query OwnerProductListQuery {
  ...OwnerProductList_query
}

fragment OwnerProductList_query on Query {
  products {
    edges {
      node {
        id
        name
        price
        quantity
      }
    }
  }
}
*/

const node/*: ConcreteRequest*/ = {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "OwnerProductListQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "OwnerProductList_query",
        "args": null
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "OwnerProductListQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "products",
        "storageKey": null,
        "args": null,
        "concreteType": "ProductConnection",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "edges",
            "storageKey": null,
            "args": null,
            "concreteType": "ProductEdge",
            "plural": true,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "node",
                "storageKey": null,
                "args": null,
                "concreteType": "Product",
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
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "price",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "quantity",
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
    "name": "OwnerProductListQuery",
    "id": null,
    "text": "query OwnerProductListQuery {\n  ...OwnerProductList_query\n}\n\nfragment OwnerProductList_query on Query {\n  products {\n    edges {\n      node {\n        id\n        name\n        price\n        quantity\n      }\n    }\n  }\n}\n",
    "metadata": {}
  }
};
// prettier-ignore
(node/*: any*/).hash = 'c457104fa9337d857ff5f6b6d8c388af';
module.exports = node;
