import { Node } from '@ash.ts/core';
import { MockComponent1 } from './MockComponent1';
import { MockComponent2 } from './MockComponent2';

export class MockNode extends Node {
  public component1!:MockComponent1;

  public component2!:MockComponent2;

  public static propTypes = {
    component1: MockComponent1,
    component2: MockComponent2,
  };
}
