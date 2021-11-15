export { default as About } from '../..\\components\\About.vue'
export { default as Datainputs } from '../..\\components\\Datainputs.vue'
export { default as Footer } from '../..\\components\\footer.vue'
export { default as Login } from '../..\\components\\Login.vue'
export { default as MainHeader } from '../..\\components\\MainHeader.vue'
export { default as NavHeader } from '../..\\components\\NavHeader.vue'
export { default as RegisterProject } from '../..\\components\\RegisterProject.vue'
export { default as Signin } from '../..\\components\\Signin.vue'
export { default as SiteHeader } from '../..\\components\\SiteHeader.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
