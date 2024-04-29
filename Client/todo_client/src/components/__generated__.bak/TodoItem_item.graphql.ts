/**
 * @generated SignedSource<<2c44049943c86373eeabd9ba00c6d749>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type TodoItem_item$data = {
  readonly description: string;
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
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "description",
      "storageKey": null
    }
  ],
  "type": "Todo",
  "abstractKey": null
};

(node as any).hash = "8f7812343144dcba9c887acbdfa19810";

export default node;
