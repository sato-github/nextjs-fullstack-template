import { ComponentStory, ComponentMeta } from '@storybook/react';
import GoogleButton, { GoogleButtonProps } from './GoogleButton';
import { mockGoogleButtonProps } from './GoogleButton.mocks';

export default {
  title: 'atoms/button/GoogleButton',
  component: GoogleButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof GoogleButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof GoogleButton> = (args) => (
  <GoogleButton {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockGoogleButtonProps.base,
} as GoogleButtonProps;
