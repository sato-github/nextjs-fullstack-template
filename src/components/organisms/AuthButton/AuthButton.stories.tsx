import { ComponentStory, ComponentMeta } from '@storybook/react';
import AuthButton, { IAuthButton } from './AuthButton';
import { mockAuthButtonProps } from './AuthButton.mocks';

export default {
  title: 'organisms/AuthButton',
  component: AuthButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof AuthButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof AuthButton> = (args) => (
  <AuthButton {...args} />
);

export const Base = Template.bind({});
Base.args;
