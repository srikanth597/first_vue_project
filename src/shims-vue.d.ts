/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
declare module '*.json' {
  const value: { [key: string]: any }
  export default value
}
declare module '*.svg' {
  const content: Svg;
  export default content;
}
