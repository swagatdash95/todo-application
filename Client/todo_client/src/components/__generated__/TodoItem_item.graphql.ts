/**
 * @generated SignedSource<<b00d543fd65ad83f93d8ed5b9e3fbc77>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type TodoItem_item$data = {
  readonly isDone: boolean;
  readonly name: string;
  readonly todoId: string;
  readonly " $fragmentType": "TodoItem_item";
};
export type TodoItem_item$key = {
  readonly " $data"?: TodoItem_item$data;
  readonly " $fragmentSpreads": FragmentRefs<"TodoItem_item">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "TodoItem_item",
  "selections": [
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
      "name": "name",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "isDone",
      "storageKey": null
    }
  ],
  "type": "Todo",
  "abstractKey": null
};

(node as any).hash = "3d4906b26bc777ced76a33d42b9f53b4";

export default node;
