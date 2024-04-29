/**
 * @generated SignedSource<<dbdc75d4a6a37157fd29fb6591e78ca6>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type TodoList_todos$data = {
  readonly count: number;
  readonly id: string;
  readonly items: ReadonlyArray<{
    readonly __id: string;
    readonly id: string;
    readonly " $fragmentSpreads": FragmentRefs<"TodoItem_item">;
  }>;
  readonly " $fragmentType": "TodoList_todos";
};
export type TodoList_todos$key = {
  readonly " $data"?: TodoList_todos$data;
  readonly " $fragmentSpreads": FragmentRefs<"TodoList_todos">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "TodoList_todos",
  "selections": [
    (v0/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "count",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Todo",
      "kind": "LinkedField",
      "name": "items",
      "plural": true,
      "selections": [
        (v0/*: any*/),
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "TodoItem_item"
        },
        {
          "kind": "ClientExtension",
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "__id",
              "storageKey": null
            }
          ]
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Todos",
  "abstractKey": null
};
})();

(node as any).hash = "822abe17f402f028add3c3cd9965d74f";

export default node;
