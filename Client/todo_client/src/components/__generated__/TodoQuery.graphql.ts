/**
 * @generated SignedSource<<f735147e825e913f166a54add31e8485>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type TodoQuery$variables = {};
export type TodoQuery$data = {
  readonly todos: {
    readonly items: ReadonlyArray<{
      readonly id: string;
      readonly isDone: boolean;
      readonly name: string;
    }>;
  } | null;
};
export type TodoQuery = {
  response: TodoQuery$data;
  variables: TodoQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "concreteType": "Todo",
  "kind": "LinkedField",
  "name": "items",
  "plural": true,
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "isDone",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    },
    (v0/*: any*/)
  ],
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "TodoQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Todos",
        "kind": "LinkedField",
        "name": "todos",
        "plural": false,
        "selections": [
          (v1/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "TodoQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Todos",
        "kind": "LinkedField",
        "name": "todos",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          (v0/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "b10033b125e95ace07a9f7eac6f5f38d",
    "id": null,
    "metadata": {},
    "name": "TodoQuery",
    "operationKind": "query",
    "text": "query TodoQuery {\n  todos {\n    items {\n      isDone\n      name\n      id\n    }\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "03e64f183c02b71dc8aa6ecdd78a2b37";

export default node;
