/**
 * @generated SignedSource<<088cc3d55f8d3c6db8881e0f3f9f0823>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type TodoPageDeleteSelectedMutation$variables = {
  todoIds: ReadonlyArray<any>;
};
export type TodoPageDeleteSelectedMutation$data = {
  readonly deleteSelectedTodos: ReadonlyArray<{
    readonly description: string;
    readonly isDone: boolean;
    readonly name: string;
    readonly todoId: string;
  }> | null;
};
export type TodoPageDeleteSelectedMutation = {
  response: TodoPageDeleteSelectedMutation$data;
  variables: TodoPageDeleteSelectedMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "todoIds"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "todoIds",
        "variableName": "todoIds"
      }
    ],
    "concreteType": "Todo",
    "kind": "LinkedField",
    "name": "deleteSelectedTodos",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "description",
        "storageKey": null
      },
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "TodoPageDeleteSelectedMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "TodoPageDeleteSelectedMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "a1ad88db9d21afd54286ef8421903b1f",
    "id": null,
    "metadata": {},
    "name": "TodoPageDeleteSelectedMutation",
    "operationKind": "mutation",
    "text": "mutation TodoPageDeleteSelectedMutation(\n  $todoIds: [UUID!]!\n) {\n  deleteSelectedTodos(todoIds: $todoIds) {\n    description\n    isDone\n    name\n    todoId\n  }\n}\n"
  }
};
})();

(node as any).hash = "fa2a94cc4b92ae358e468b96851abe16";

export default node;
