/**
 * @generated SignedSource<<0b9d71e22a894ec1883903176d7cc07a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type TodoQuery$variables = {};
export type TodoQuery$data = {
  readonly todos: ReadonlyArray<{
    readonly isDone: boolean;
    readonly name: string;
    readonly todoId: string;
  }>;
};
export type TodoQuery = {
  response: TodoQuery$data;
  variables: TodoQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "Todo",
    "kind": "LinkedField",
    "name": "todos",
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
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "todoId",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "TodoQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "TodoQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "11b1d5131429eae81246bdf248c6812f",
    "id": null,
    "metadata": {},
    "name": "TodoQuery",
    "operationKind": "query",
    "text": "query TodoQuery {\n  todos {\n    isDone\n    name\n    todoId\n  }\n}\n"
  }
};
})();

(node as any).hash = "9e20bc64ade6239ed392816a7121c853";

export default node;
