import { CommonModule } from '@angular/common'
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { NgvI18nModule } from '../../i18n/i18n.module'
import { NggCoreWrapperModule } from '../../../lib/shared'
import { Meta, moduleMetadata, StoryFn } from '@storybook/angular'
import { NgvFoldOutComponent } from './fold-out.component'
import { NgvFoldOutOptionDirective } from './fold-out.directive'
import { exampleAlt, examplePrimary } from './fold-out.examples'

export default {
  title: 'V-Angular/Fold Out',
  component: NgvFoldOutComponent,
  decorators: [
    moduleMetadata({
      declarations: [NgvFoldOutOptionDirective],
      imports: [CommonModule, NgvI18nModule, NggCoreWrapperModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
  ],
  argTypes: {
    alignOptions: {
      control: {
        type: 'inline-radio',
        options: ['left', 'right']
      }
    }
  }
} as Meta

const Template: StoryFn<NgvFoldOutComponent> = (args: NgvFoldOutComponent) => ({
  template: /* html */ `
  <div class="story-wrapper">
    <ngv-fold-out [alignOptions]="alignOptions">
      <div ngvOption>View details</div>
      <div ngvOption>Sign payment</div>
      <div ngvOption>Delete</div>
    </ngv-fold-out>
  </div>`,
  styleUrls: ['./fold-out.stories.scss'],
  props: args
})

const TemplateAlt: StoryFn<NgvFoldOutComponent> = (args: NgvFoldOutComponent) => ({
  template: /* html */ `
    <div class="story-wrapper--right-align">
      <ngv-fold-out [alignOptions]="alignOptions">
        <div ngvOption>View details</div>
        <div ngvOption>Sign payment</div>
        <div ngvOption>Delete</div>
      </ngv-fold-out>
    </div>`,
  styleUrls: ['./fold-out.stories.scss'],
  props: args
})

export const Primary = Template.bind({})
Primary.args = {
  alignOptions: 'left'
}
Primary.parameters = {
  docs: { source: { code: examplePrimary } }
}

export const Alternative = TemplateAlt.bind({})
Alternative.args = {
  alignOptions: 'right'
}
Alternative.parameters = {
  docs: { source: { code: exampleAlt } }
}
