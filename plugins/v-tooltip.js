import Vue from 'vue'
import VTooltip from 'v-tooltip'

Vue.use(VTooltip)

VTooltip.options.defaultTemplate =
  `<div class="tooltip-wrapper" role="tooltip">
    <div class="tooltip-arrow"></div>
    <div class="tooltip-inner"></div>
  </div>`
