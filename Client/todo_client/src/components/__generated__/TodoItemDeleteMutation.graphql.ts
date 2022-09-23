/**
 * @generated SignedSource<<768afa6b3997046d9bac5cd782b2f42c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type TodoItemDeleteMutation$variables = {
  todoId: any;
};
export type TodoItemDeleteMutation$data = {
  readonly deleteTodo: {
    readonly description: string;
    readonly isDone: boolean;
    readonly name: string;
    readonly todoId: string;
  } | null;
};
export type TodoItemDeleteMutation = {
  response: TodoItemDeleteMutation$data;
  variables: TodoItemDeleteMutation$variables;
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
    "name": "deleteTodo",
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
    "name": "TodoItemDeleteMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "TodoItemDeleteMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "823d0686444b3e4ad497b82a4b559ca6",
    "id": null,
    "metadata": {},
    "name": "TodoItemDeleteMutation",
    "operationKind": "mutation",
    "text": "mutation TodoItemDeleteMutation(\n  $todoId: UUID!\n) {\n  deleteTodo(todoId: $todoId) {\n    isDone\n    name\n    todoId\n    description\n  }\n}\n"
  }
};
})();

(node as any).hash = "d1700756ff7efd1af5e0d4d9d5485ff7";

export default node;
