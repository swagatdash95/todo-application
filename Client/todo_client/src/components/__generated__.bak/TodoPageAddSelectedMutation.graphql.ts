/**
 * @generated SignedSource<<40b91fe79d16e302a88ae3b9352b4354>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type TodoPageAddSelectedMutation$variables = {
  todoIds: ReadonlyArray<any>;
};
export type TodoPageAddSelectedMutation$data = {
  readonly checkSelectedTodos: ReadonlyArray<{
    readonly description: string;
    readonly isDone: boolean;
    readonly name: string;
    readonly todoId: string;
  }> | null;
};
export type TodoPageAddSelectedMutation = {
  response: TodoPageAddSelectedMutation$data;
  variables: TodoPageAddSelectedMutation$variables;
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
    "name": "checkSelectedTodos",
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
    "name": "TodoPageAddSelectedMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "TodoPageAddSelectedMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "93e5c46b2ef12695c510223638849dfd",
    "id": null,
    "metadata": {},
    "name": "TodoPageAddSelectedMutation",
    "operationKind": "mutation",
    "text": "mutation TodoPageAddSelectedMutation(\n  $todoIds: [UUID!]!\n) {\n  checkSelectedTodos(todoIds: $todoIds) {\n    description\n    isDone\n    name\n    todoId\n  }\n}\n"
  }
};
})();

(node as any).hash = "d6a2796352658b4beaddcf2c6676d102";

export default node;
