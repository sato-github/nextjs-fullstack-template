import { ComponentStory, ComponentMeta } from '@storybook/react';
import SearchResult, { SearchResultProps } from './SearchResult';
import { mockSearchResultProps } from './SearchResult.mocks';

export default {
  title: 'organisms/SearchResult',
  component: SearchResult,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof SearchResult>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SearchResult> = (args) => (
  <SearchResult {...args} />
);

export const Base = Template.bind({});
Base.args = {
  ...mockSearchResultProps.base,
} as SearchResultProps;
