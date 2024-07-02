import { type Meta, StoryObj } from '@storybook/react';
import Component from '../src/components/RadioButton';
import { useState } from 'react';
import '../src/styles/theme.scss';

const meta: Meta<typeof Component> = {
  title: 'Example/RadioButton',
  component: Component,
};

export default meta;

type Story = StoryObj<typeof Component>;

const radioFormOptions = [
  {
    label: 'Spaceship',
    value: 'label_1',
    groupName: 'example',
    id: 'label_1',
  },
  {
    label: 'Galaxy',
    value: 'label_2',
    groupName: 'example',
    id: 'label_2',
  },
  {
    label: 'Planet',
    value: 'label_3',
    groupName: 'example',
    id: 'label_3',
  },
];

const Template = (props: any) => {
  const [value, setValue] = useState(radioFormOptions[0].value);
  const onChange = (e: any) => {
    setValue(e.target.value);
  };

  return (
    <form>
      <fieldset id="sb_radio" onChange={onChange} style={{ border: '0px' }}>
        {radioFormOptions.map((option) => {
          return (
            <Component
              {...props}
              groupValue={value}
              key={option.id}
              label={option.label}
              value={option.value}
              id={option.id}
              groupName={option.groupName}
            />
          );
        })}
      </fieldset>
    </form>
  );
};

export const Primary: Story = {
  render: (args) => <Template {...args} />,
  args: {
    label: 'Label',
    groupName: 'group',
    value: 'value',
  },
};
