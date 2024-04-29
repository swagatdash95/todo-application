/**
 * @generated SignedSource<<63940bc96343446a474a1a14c9ad7aae>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type TodoList$data = {
  readonly items: ReadonlyArray<{
    readonly " $fragmentSpreads": FragmentRefs<"TodoItem_item">;
  }>;
  readonly " $fragmentType": "TodoList";
};
export type TodoList$key = {
  readonly " $data"?: TodoList$data;
  readonly " $fragmentSpreads": FragmentRefs<"TodoList">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "TodoList",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "Todo",
      "kind": "LinkedField",
      "name": "items",
      "plural": true,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "TodoItem_item"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Todos",
  "abstractKey": null
};

(node as any).hash = "b5ec189835869df7d701be47131f78fa";

export default node;
