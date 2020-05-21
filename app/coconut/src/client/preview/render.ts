import { document, Node } from 'global';
import { mount} from './vdom';
import dedent from 'ts-dedent';
import { RenderMainArgs } from './types';

const rootElement = document.getElementById('root');

export default function renderMain({
  storyFn,
  selectedKind,
  selectedStory,
  showMain,
  showError,
  forceRender,
}: RenderMainArgs) {
  const element = storyFn();

  showMain();
  mount(rootElement, element);
}
