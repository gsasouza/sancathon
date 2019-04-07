/**
 * @flow
 * @relayHash ef5da33170a7b7475ae4e3c6112b517a
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CreateProductInput = {|
  name: string,
  quantity: string,
  price: string,
  clientMutationId?: ?string,
|};
export type CreateProductMutationVariables = {|
  input: CreateProductInput
|};
export type CreateProductMutationResponse = {|
  +CreateProduct: ?{|
    +product: ?{|
      +name: ?string,
      +quantity: ?string,
      +price: ?string,
    |},
    +error: ?string,
  |}
|};
export type CreateProductMutation = {|
  variables: CreateProductMutationVariables,
  response: CreateProductMutationResponse,
|};
*/


/*
mutation CreateProductMutation(
  $input: CreateProductInput!
) {
  CreateProduct(input: $input) {
    product {
      name
      quantity
      price
      id
    }
    error
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "CreateProductInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input",
    "type": "CreateProductInput!"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "quantity",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "price",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "error",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "CreateProductMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "CreateProduct",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "CreateProductPayload",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "product",
            "storageKey": null,
            "args": null,
            "concreteType": "Product",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/),
              (v4/*: any*/)
            ]
          },
          (v5/*: any*/)
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "CreateProductMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "CreateProduct",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "CreateProductPayload",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "product",
            "storageKey": null,
            "args": null,
            "concreteType": "Product",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/),
              (v4/*: any*/),
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "id",
                "args": null,
                "storageKey": null
              }
            ]
          },
          (v5/*: any*/)
        ]
      }
    ]
  },
  "params": {
    "operationKind": "mutation",
    "name": "CreateProductMutation",
    "id": null,
    "text": "mutation CreateProductMutation(\n  $input: CreateProductInput!\n) {\n  CreateProduct(input: $input) {\n    product {\n      name\n      quantity\n      price\n      id\n    }\n    error\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '98b96d25f49fce803d4245780e145736';
module.exports = node;
