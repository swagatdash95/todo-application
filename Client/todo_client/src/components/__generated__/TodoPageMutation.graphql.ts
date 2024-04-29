/**
 * @generated SignedSource<<fc5aface018ef6d23b50ff7e7897b59b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type AddTodoInput = {
  description?: string | null;
  id: string;
  name: string;
};
export type TodoPageMutation$variables = {
  input: AddTodoInput;
};
export type TodoPageMutation$data = {
  readonly addTodo: {
    readonly count: number;
    readonly id: string;
    readonly items: ReadonlyArray<{
      readonly description: string;
      readonly id: string;
      readonly isDone: boolean;
      readonly name: string;
    }>;
  } | null;
};
export type TodoPageMutation = {
  response: TodoPageMutation$data;
  variables: TodoPageMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "values",
        "variableName": "input"
      }
    ],
    "concreteType": "Todos",
    "kind": "LinkedField",
    "name": "addTodo",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "count",
        "storageKey": null
      },
      (v1/*: any*/),
      {
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
          (v1/*: any*/)
        ],
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
    "name": "TodoPageMutation",
    "selections": (v2/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "TodoPageMutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "d0cfe556d96cdd59c98d300a5d1e924c",
    "id": null,
    "metadata": {},
    "name": "TodoPageMutation",
    "operationKind": "mutation",
    "text": "mutation TodoPageMutation(\n  $input: AddTodoInput!\n) {\n  addTodo(values: $input) {\n    count\n    id\n    items {\n      description\n      isDone\n      name\n      id\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "0ed83b1cc49a382153da87094585d843";

export default node;
