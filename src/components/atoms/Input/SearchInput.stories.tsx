import { ComponentStory, ComponentMeta } from '@storybook/react';
import SearchInput, { ISearchInput } from './SearchInput';
import { mockSearchProps } from './Search.mocks';

export default {
  title: 'atoms/input/SearchInput',
  component: SearchInput,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof SearchInput>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SearchInput> = (_args) => <SearchInput />;

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockSearchProps.base,
} as ISearchInput;
