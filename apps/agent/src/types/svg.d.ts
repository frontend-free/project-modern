declare module '*.svg?react' {
  import type { IconComponentProps } from '@fe-free/icons';
  const content: IconComponentProps['component'];
  export default content;
}
