import { TextComponent } from '.';

export default {
  title: 'TextComponent',
  component: TextComponent,
  args: {
    children: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat voluptatibus, magni asperiores nisi quibusdam repellat. Odit cumque, sapiente rem consequuntur, repellendus quibusdam commodi, repudiandae optio dignissimos consequatur laudantium odio possimus.`,
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <TextComponent {...args} />
    </div>
  );
};
