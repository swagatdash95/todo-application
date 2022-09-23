/**
 * @generated SignedSource<<f9d5bb3eb550a17e85b2d808c9f4fbb3>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type TodoItemToggleMutation$variables = {
  todoId: any;
};
export type TodoItemToggleMutation$data = {
  readonly checkTodo: {
    readonly description: string;
    readonly isDone: boolean;
    readonly name: string;
    readonly todoId: string;
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
    "name": "todoId"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "todoId",
        "variableName": "todoId"
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
        "name": "todoId",
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
    "cacheID": "48003bb3d9c0ccb78c2ff462131c7a20",
    "id": null,
    "metadata": {},
    "name": "TodoItemToggleMutation",
    "operationKind": "mutation",
    "text": "mutation TodoItemToggleMutation(\n  $todoId: UUID!\n) {\n  checkTodo(todoId: $todoId) {\n    isDone\n    name\n    todoId\n    description\n  }\n}\n"
  }
};
})();

(node as any).hash = "ff92e7cd31c3c5dc24545448e575741b";

export default node;
