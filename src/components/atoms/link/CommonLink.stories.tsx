import { ComponentStory, ComponentMeta } from '@storybook/react';
import CommonLink, { ICommonLink } from './CommonLink';

export default {
  title: 'atoms/link/CommonLink',
  component: CommonLink,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof CommonLink>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CommonLink> = (args) => (
  <CommonLink {...args} />
);

export const Base = Template.bind({});
Base.args = {
  href: '/',
  className: 'hidden sm:inline',
} as ICommonLink;
