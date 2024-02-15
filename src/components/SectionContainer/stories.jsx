import { SectionContainer } from '.';

export default {
  title: 'SectionContainer',
  component: SectionContainer,
  args: {
    children: (
      <div>
        <h1>SectionContainer</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem error temporibus odio excepturi nihil.
          Asperiores velit quaerat voluptate voluptatibus doloremque atque. Quisquam praesentium debitis aliquam nobis
          quo? Repellendus, non aspernatur.
        </p>
      </div>
    ),
  },
  argTypes: {
    children: { type: '' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <SectionContainer {...args} />
    </div>
  );
};
