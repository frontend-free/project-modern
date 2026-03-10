import {
  CommentOutlined,
  HeartOutlined,
  ShareAltOutlined,
  StarFilled,
  StarOutlined,
} from '@fe-free/icons';
import { Card, Space, Tag } from 'antd';

import type { AgentItem as AgentItemType } from './data';

export interface AgentItemProps {
  item: AgentItemType;
  onStar?: (id: string, starred: boolean) => void;
  onShare?: (id: string) => void;
}

export function AgentItem({ item, onStar, onShare }: AgentItemProps) {
  const handleStar = () => {
    onStar?.(item.id, !item.starred);
  };

  return (
    <Card className="border-01 rounded-xl" size="small">
      <div className="flex gap-4">
        <div className="bg-fill-tertiary h-[82px] w-[82px] shrink-0 rounded-xl" />
        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-2">
            <h3 className="text-01 truncate text-base font-semibold">{item.title}</h3>
            <button
              type="button"
              className="text-03 hover:text-01 shrink-0"
              aria-label="分享"
              onClick={() => onShare?.(item.id)}
            >
              <ShareAltOutlined className="text-lg" />
            </button>
          </div>
          <p className="text-03 mt-1 line-clamp-2 text-sm leading-normal">{item.description}</p>
          <div className="mt-3 flex items-center justify-between">
            <Space size={16} className="text-03 text-sm">
              <button
                type="button"
                className="flex items-center gap-1 hover:opacity-80"
                onClick={handleStar}
                aria-label={item.starred ? '取消收藏' : '收藏'}
              >
                {item.starred ? <StarFilled className="text-primary" /> : <StarOutlined />}
                <span>{item.stars}</span>
              </button>
              <span className="flex items-center gap-1">
                <HeartOutlined />
                <span>{item.likes}</span>
              </span>
              <span className="flex items-center gap-1">
                <CommentOutlined />
                <span>{item.comments}</span>
              </span>
            </Space>
            <Space size={6} wrap className="justify-end">
              {item.categories.map((cat) => (
                <Tag key={cat} className="border-0 text-xs">
                  {cat}
                </Tag>
              ))}
            </Space>
          </div>
        </div>
      </div>
    </Card>
  );
}
