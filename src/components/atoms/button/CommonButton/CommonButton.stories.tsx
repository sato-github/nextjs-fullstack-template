import { ComponentStory, ComponentMeta } from '@storybook/react';
import CommonButton, { CommonButtonProps } from './CommonButton';
import { mockGoogleButtonProps } from '../GoogleButton/GoogleButton.mocks';

export default {
  title: 'atoms/button/CommonButton',
  component: CommonButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof CommonButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CommonButton> = (args) => (
  <CommonButton {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockGoogleButtonProps.base,
} as CommonButtonProps;
