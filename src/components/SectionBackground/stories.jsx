import { SectionBackground } from '.';

export default {
  title: 'SectionBackground',
  component: SectionBackground,
  args: {
    children: (
      <div>
        <h1>SectionBackground</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem error temporibus odio excepturi nihil.
          Asperiores velit quaerat voluptate voluptatibus doloremque atque. Quisquam praesentium debitis aliquam nobis
          quo? Repellendus, non aspernatur.
        </p>
      </div>
    ),
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <SectionBackground {...args} />
    </div>
  );
};
