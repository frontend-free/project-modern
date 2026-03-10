import { Col, Row } from 'antd';

import { AgentEmpty } from './agent_empty';
import { AgentItem } from './agent_item';
import type { AgentItem as AgentItemType } from './data';

export interface AgentListProps {
  list: AgentItemType[];
  onStar?: (id: string, starred: boolean) => void;
  onShare?: (id: string) => void;
}

export function AgentList({ list, onStar, onShare }: AgentListProps) {
  if (!list.length) {
    return <AgentEmpty />;
  }

  return (
    <Row gutter={[24, 24]}>
      {list.map((item) => (
        <Col key={item.id} xs={24} lg={12}>
          <AgentItem item={item} onStar={onStar} onShare={onShare} />
        </Col>
      ))}
    </Row>
  );
}
