/**
 * @generated SignedSource<<0c2fb5666bd2df824e02f0fb5e8b1954>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type TodoItemToggleMutation$variables = {
  id: any;
};
export type TodoItemToggleMutation$data = {
  readonly checkTodo: {
    readonly description: string;
    readonly id: string;
    readonly isDone: boolean;
    readonly name: string;
  } | null;
};
export type TodoItemToggleMutation = {
  response: TodoItemToggleMutation$data;
  variables: TodoItemToggleMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      }
    ],
    "concreteType": "Todo",
    "kind": "LinkedField",
    "name": "checkTodo",
    "plural": false,
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
        "name": "id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "description",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "TodoItemToggleMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "TodoItemToggleMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "ad4b0836138cb0f275294fde50b16ac0",
    "id": null,
    "metadata": {},
    "name": "TodoItemToggleMutation",
    "operationKind": "mutation",
    "text": "mutation TodoItemToggleMutation(\n  $id: UUID!\n) {\n  checkTodo(id: $id) {\n    isDone\n    name\n    id\n    description\n  }\n}\n"
  }
};
})();

(node as any).hash = "298b0f2f7f9e8c21b00b0cd5140e66b8";

export default node;
