import { css, LitElement } from 'lit'
import { property, state } from 'lit/decorators.js'
import { choose } from 'lit/directives/choose.js'

import { html } from '@sebgroup/green-core/scoping'
// import { registerTransitionalStyles } from '@sebgroup/green-core/transitional-styles'
import { gdsInitLocalization } from '@sebgroup/green-core/localization'

import '@sebgroup/green-core/components/content/text/index.js'
import '@sebgroup/green-core/components/context-menu/index.js'
import '@sebgroup/green-core/components/icon/icons/arrow-right.js'
import '@sebgroup/green-core/components/icon/icons/flag.js'
import '@sebgroup/green-core/components/icon/icons/growth.js'
import '@sebgroup/green-core/components/icon/icons/seb.js'
import '@sebgroup/green-core/components/icon/icons/bars-three.js'
import '@sebgroup/green-core/components/icon/icons/globus.js'
import '@sebgroup/green-core/components/input/index.js'
import '@sebgroup/green-core/components/theme/index.js'
import '@sebgroup/green-core/components/layout/card/index.js'
import '@sebgroup/green-core/components/layout/flex/index.js'
import '@sebgroup/green-core/components/layout/grid/index.js'
import '@sebgroup/green-core/components/media/img/index.js'
import '@sebgroup/green-core/components/media/video/index.js'
import '@sebgroup/green-core/components/menu-button/index.js'
import '@sebgroup/green-core/components/segmented-control/index.js'

import '../components/header'
import './chlorophyll.scss'
import './form-validation.element'
import './datepicker.element'
import './calendar.element'
import './login/login.element'

const { setLocale, getLocale } = gdsInitLocalization()

export class AppElement extends LitElement {
  static styles = css`
    :host {
      --gds-test-color: red;
    }
  `
  // No need for a shadow root here
  protected createRenderRoot() {
    return this
  }

  @property()
  accessor popoverOpen: boolean = false

  @state()
  accessor lang = 'sv'

  @state()
  accessor currentView = 'login'

  connectedCallback() {
    super.connectedCallback()
    this.addEventListener('view-change', this.handleViewChange as EventListener)
    this.setLang(getLocale())
  }

  setLang(lang: string) {
    this.lang = lang
    setLocale(lang)
  }

  disconnectedCallback() {
    this.removeEventListener('view-change', this.handleViewChange as EventListener)
    super.disconnectedCallback()
  }

  private handleViewChange(event: CustomEvent) {
    this.currentView = event.detail.view
  }

  render() {
    return html`
      <gds-theme color-scheme="light">
        <gds-header></gds-header>
        <gds-container padding="s{0} m{s} l{4xl}">
          ${choose(
            this.currentView,
            [
              ['login', () => html`<gds-login></gds-login>`],
              ['form-validation', () => html`<form-validation></form-validation>`],
              ['datepicker', () => html`<datepicker-example></datepicker-example>`],
              ['calendar', () => html`<calendar-example></calendar-example>`]
            ],
            () => html`No view selected`
          )}
        </gds-container>
      </gds-theme>
    `
  }
}
customElements.define('sebgroup-root', AppElement)
