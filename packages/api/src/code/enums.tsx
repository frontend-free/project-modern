import type { TagProps } from 'antd';
import { Tag } from 'antd';

// --- Week

export enum EnumWeek {
  MONDAY = 'Monday',
  TUESDAY = 'Tuesday',
  WEDNESDAY = 'Wednesday',
  THURSDAY = 'Thursday',
  FRIDAY = 'Friday',
  SATURDAY = 'Saturday',
  SUNDAY = 'Sunday',
}

export const valueEnumWeek = {
  [EnumWeek.MONDAY]: {
    text: '周一',
    value: 'Monday',
  },
  [EnumWeek.TUESDAY]: {
    text: '周二',
    value: 'Tuesday',
  },
  [EnumWeek.WEDNESDAY]: {
    text: '周三',
    value: 'Wednesday',
  },
  [EnumWeek.THURSDAY]: {
    text: '周四',
    value: 'Thursday',
  },
  [EnumWeek.FRIDAY]: {
    text: '周五',
    value: 'Friday',
  },
  [EnumWeek.SATURDAY]: {
    text: '周六',
    value: 'Saturday',
  },
  [EnumWeek.SUNDAY]: {
    text: '周日',
    value: 'Sunday',
  },
};

export const listWeek = Object.keys(valueEnumWeek).map((key) => {
  const item = valueEnumWeek[key];

  return {
    value: item.value !== undefined ? item.value : key,
    label: item.text,
    originData: item.data,
  };
});

export function TagWeek(props: { value?: EnumWeek | string } & TagProps) {
  const item = props.value && valueEnumWeek[props.value];

  if (item) {
    return (
      <Tag color={item.color} {...props}>
        {item.text}
      </Tag>
    );
  }

  return null;
}
