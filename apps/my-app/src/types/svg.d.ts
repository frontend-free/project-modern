declare module '*.svg?react' {
  import type { IconComponentProps } from '@ant-design/icons';
  const content: IconComponentProps['component'];
  export default content;
}
