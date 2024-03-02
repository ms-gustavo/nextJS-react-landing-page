import { GridTwoColumn } from '.';

export default {
  title: 'GridTwoColumn',
  component: GridTwoColumn,
  args: {
    title: 'Grid Two Columns',
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio fugit repudiandae dignissimos sequi delectus accusamus blanditiis, quisquam dolores esse libero reprehenderit enim? Fugiat optio labore distinctio asperiores quisquam suscipit ipsam?`,
    srcImg: 'assets/images/javascript.svg',
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <GridTwoColumn {...args} />
    </div>
  );
};
