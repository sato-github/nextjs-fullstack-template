import { ComponentStory, ComponentMeta } from '@storybook/react';
import SearchForm from './SearchForm';

export default {
  title: 'organisms/SearchForm',
  component: SearchForm,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof SearchForm>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SearchForm> = () => <SearchForm />;

export const Base = Template.bind({});
Base.args;
