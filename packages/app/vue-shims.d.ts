declare module 'virtual:*' {
  import { Component } from 'vue'
  const src: Component
  export default src
}

declare module 'virtual:icons/*' {
  // eslint-disable-next-line no-duplicate-imports
  import { FunctionalComponent, SVGAttributes } from 'vue'
  const component: FunctionalComponent<SVGAttributes>
  export default component
}
declare module '~icons/*' {
  // eslint-disable-next-line no-duplicate-imports
  import { FunctionalComponent, SVGAttributes } from 'vue'
  const component: FunctionalComponent<SVGAttributes>
  export default component
}

declare module '*.vue' {
  import { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}