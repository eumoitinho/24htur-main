import type { MDXComponents } from 'mdx/types';
import { VideoPlaceholder } from './components/docs/VideoPlaceholder';
import { FieldReference } from './components/docs/FieldReference';
import { StepByStep } from './components/docs/StepByStep';
import { ImageExample } from './components/docs/ImageExample';
import { Callout } from './components/docs/Callout';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    VideoPlaceholder,
    FieldReference,
    StepByStep,
    ImageExample,
    Callout,
    ...components,
  };
}
