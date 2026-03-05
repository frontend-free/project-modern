import type { TagProps } from 'antd';
import { Tag } from 'antd';
import { t } from 'i18next';
import React from 'react';

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
    text: t('enum.Week.MONDAY', '周一'),
    value: 'Monday',
  },
  [EnumWeek.TUESDAY]: {
    text: t('enum.Week.TUESDAY', '周二'),
    value: 'Tuesday',
  },
  [EnumWeek.WEDNESDAY]: {
    text: t('enum.Week.WEDNESDAY', '周三'),
    value: 'Wednesday',
  },
  [EnumWeek.THURSDAY]: {
    text: t('enum.Week.THURSDAY', '周四'),
    value: 'Thursday',
  },
  [EnumWeek.FRIDAY]: {
    text: t('enum.Week.FRIDAY', '周五'),
    value: 'Friday',
  },
  [EnumWeek.SATURDAY]: {
    text: t('enum.Week.SATURDAY', '周六'),
    value: 'Saturday',
  },
  [EnumWeek.SUNDAY]: {
    text: t('enum.Week.SUNDAY', '周日'),
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

export function TextWeek(props: { value?: EnumWeek | string } & TagProps) {
  const item = props.value && valueEnumWeek[props.value];

  return <>{item?.text ?? props.value}</>;
}
