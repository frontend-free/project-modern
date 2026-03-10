import { Button, Card, Input, Space, Tabs, Tag } from 'antd';
import { useState } from 'react';

// Figma MCP 资源 URL（约 7 天内有效）
const ASSETS = {
  carousel1: 'https://www.figma.com/api/mcp/asset/c0a11df3-e6e1-4b29-805b-0786f07b47e3',
  carousel2: 'https://www.figma.com/api/mcp/asset/30ebdb37-3a79-4043-9b41-b35cc1e9a249',
  iconShare: 'https://www.figma.com/api/mcp/asset/2de07c44-b4e5-4bea-a660-8f94793601d4',
  iconStarStroke: 'https://www.figma.com/api/mcp/asset/1141c173-693b-479e-8aa8-a512ab1986c4',
  iconStarFill: 'https://www.figma.com/api/mcp/asset/3a04b2d0-c096-405d-a05a-41b5aa5391be',
  iconLike: 'https://www.figma.com/api/mcp/asset/fb12e1f3-412f-4c8b-a007-4032240d568b',
  iconComment: 'https://www.figma.com/api/mcp/asset/c3ac51ff-20af-4b30-bb47-7594e728d725',
  iconSearch: 'https://www.figma.com/api/mcp/asset/c65c9811-83a1-40ba-8b22-223f8de2868d',
  iconStarEmpty: 'https://www.figma.com/api/mcp/asset/17a70e98-0fed-45fe-9680-23a8a070eaaf',
  arrowLeft: 'https://www.figma.com/api/mcp/asset/23b9846b-7410-4337-bb8a-d7fd4fb28b06',
  arrowRight: 'https://www.figma.com/api/mcp/asset/7b2a0a9c-857b-4d0a-820e-5903c1107edf',
  cardIcons: [
    'https://www.figma.com/api/mcp/asset/f50a3443-a4a2-4888-ab16-b56b12ee33c6',
    'https://www.figma.com/api/mcp/asset/bd641907-7aa1-4a05-8a7e-092fc7c55b21',
    'https://www.figma.com/api/mcp/asset/b38f2a09-59df-43aa-a9dd-5635431b4540',
    'https://www.figma.com/api/mcp/asset/a95c07a8-5152-4ede-b13b-16f0d8fde678',
    'https://www.figma.com/api/mcp/asset/cdea5811-0a6a-47a8-982c-fbf8aadc8aaf',
    'https://www.figma.com/api/mcp/asset/014d33d6-e6a6-44da-a682-459a6f0b43bf',
  ] as const,
};

const CAROUSEL_ITEMS = [
  {
    cover: ASSETS.carousel1,
    title: '医药研发智能体',
    desc: '基于丰富的医药研发经验,提供药物研发、临床试验分析等智能辅助,加速新药研发进程。',
  },
  {
    cover: ASSETS.carousel2,
    title: '营销智能体',
    desc: '结合营销经验,提供市场分析、品牌推广、产品定位等智能建议,助力医药产品营销。',
  },
];

const CATEGORIES = [
  '所有分类',
  '工作助手',
  '文本创作',
  '商业助手',
  '制造业',
  '金融',
  '医疗健康',
  '科研',
  '教育',
];

const AGENT_LIST: Array<{
  icon: string;
  title: string;
  desc: string;
  star: number;
  like: number;
  comment: number;
  starred?: boolean;
  tags: string[];
}> = [
  {
    icon: ASSETS.cardIcons[0],
    title: 'DMS ChatBI数据助手',
    desc: '专业的取数和分析助手,通过DMS MCP来提供取数、n2sql核心能力,帮助用户快速获取和分析数据。',
    star: 321,
    like: 2305,
    comment: 2305,
    starred: true,
    tags: ['工作助手', '文本创作'],
  },
  {
    icon: ASSETS.cardIcons[1],
    title: '基础法律问答助手',
    desc: '基础法律知识的智能问答助手,基于现行法律法规、司法解释及权威案例,为用户提供专业的法律建议。',
    star: 321,
    like: 2305,
    comment: 2305,
    starred: true,
    tags: ['工作助手', '文本创作'],
  },
  {
    icon: ASSETS.cardIcons[2],
    title: '合同信息抽取',
    desc: '本应用能够从合同文本中精准提取关联信息,包括基本信息、双方信息、权利义务等关键内容。',
    star: 2233,
    like: 2305,
    comment: 2305,
    tags: ['商业助手'],
  },
  {
    icon: ASSETS.cardIcons[3],
    title: 'PPT自动生成',
    desc: '本模板适用于需要快速制作结构清晰、内容专业的演示文稿的用户,广泛应用于商务汇报、学术演讲等场景。',
    star: 221,
    like: 2305,
    comment: 2305,
    tags: ['文本创作', '工作助手'],
  },
  {
    icon: ASSETS.cardIcons[4],
    title: '行业策略分析',
    desc: '本工作流专注文本转换行业深度分析,集成4P分析法、波特五力模型等多种分析工具,为用户提供全面的行业策略建议。',
    star: 2233,
    like: 2305,
    comment: 2305,
    tags: ['商业助手'],
  },
  {
    icon: ASSETS.cardIcons[5],
    title: '市场调研分析',
    desc: '本工作流专注市场调研全流程支持,提供三大核心功能:1.主题梳理;2.数据收集;3.分析报告生成。',
    star: 221,
    like: 2305,
    comment: 2305,
    tags: ['文本创作', '工作助手'],
  },
];

function StatItem({ icon, value, active }: { icon: string; value: number; active?: boolean }) {
  return (
    <span className="text-03! flex items-center gap-1 text-sm">
      <img src={icon} alt="" className="h-5 w-5 shrink-0" />
      <span className={active ? 'text-[#214ad4]' : undefined}>{value}</span>
    </span>
  );
}

function AgentCard({ item }: { item: (typeof AGENT_LIST)[0] }) {
  return (
    <Card className="border-01 overflow-hidden rounded-xl" styles={{ body: { padding: 16 } }}>
      <div className="flex gap-4">
        <div className="h-[82px] w-[82px] shrink-0 overflow-hidden rounded-xl bg-[#e2f3ff]">
          <img src={item.icon} alt="" className="h-full w-full object-cover" />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-2">
            <h3 className="truncate text-base font-semibold text-[#1e1e1e]">{item.title}</h3>
            <img src={ASSETS.iconShare} alt="分享" className="h-5 w-5 shrink-0 cursor-pointer" />
          </div>
          <p className="mt-1 line-clamp-2 text-sm leading-normal text-[#6f6f6f]">{item.desc}</p>
          <div className="mt-3 flex items-center justify-between">
            <Space size={16}>
              <StatItem
                icon={item.starred ? ASSETS.iconStarFill : ASSETS.iconStarStroke}
                value={item.star}
                active={!!item.starred}
              />
              <StatItem icon={ASSETS.iconLike} value={item.like} />
              <StatItem icon={ASSETS.iconComment} value={item.comment} />
            </Space>
            <Space size={6} wrap>
              {item.tags.map((tag) => (
                <Tag
                  key={tag}
                  className="m-0! border-0! bg-[#f4f7ff]! px-1! py-0.5! text-xs! text-[#7f88a8]!"
                >
                  {tag}
                </Tag>
              ))}
            </Space>
          </div>
        </div>
      </div>
    </Card>
  );
}

function TestFigma() {
  const [activeCategory, setActiveCategory] = useState('所有分类');
  const [activeTab, setActiveTab] = useState('all');

  return (
    <div className="min-h-full bg-[#f7f8fb]">
      {/* 顶栏 */}
      <header className="flex h-16 items-center justify-between bg-white px-10 shadow-[0_4px_4px_rgba(0,0,0,0.04)]">
        <h1 className="text-xl leading-[22px] font-bold text-[#1e1e1e]">华润三九智能体广场</h1>
        <Button
          type="primary"
          className="h-10! rounded-lg! px-10! text-base! font-medium!"
          style={{
            background: '#214ad4',
            boxShadow: '0 4px 10px rgba(12,34,109,0.3)',
          }}
        >
          注册AI智能体创作者
        </Button>
      </header>

      <div className="mx-auto max-w-[1220px] px-10 pb-10">
        {/* 轮播区 */}
        <div className="relative mt-6 flex gap-4">
          <button
            type="button"
            className="text-04! absolute top-1/2 left-0 z-10 flex h-10 w-9 -translate-y-1/2 items-center justify-center"
            aria-label="上一张"
          >
            <img src={ASSETS.arrowLeft} alt="" className="h-full w-full" />
          </button>
          <div className="flex flex-1 gap-4">
            {CAROUSEL_ITEMS.map((item) => (
              <Card
                key={item.title}
                className="border-01 flex-1 overflow-hidden rounded-xl bg-white"
                styles={{ body: { padding: 0 } }}
              >
                <div className="h-[154px] w-full overflow-hidden rounded-t-xl">
                  <img src={item.cover} alt="" className="h-full w-full object-cover" />
                </div>
                <div className="p-4">
                  <h2 className="text-base font-semibold text-[#1e1e1e]">{item.title}</h2>
                  <p className="mt-2 line-clamp-2 text-sm leading-normal text-[#6f6f6f]">
                    {item.desc}
                  </p>
                </div>
              </Card>
            ))}
          </div>
          <button
            type="button"
            className="text-04! absolute top-1/2 right-0 z-10 flex h-10 w-9 -translate-y-1/2 items-center justify-center"
            aria-label="下一张"
          >
            <img src={ASSETS.arrowRight} alt="" className="h-full w-full scale-y-[-1] rotate-180" />
          </button>
        </div>

        {/* 我收藏的智能体 */}
        <h2 className="mt-8 text-lg font-medium text-[#171717]">我收藏的智能体</h2>
        <Card className="border-01! mt-2! gap-6! rounded-xl! border! border-dashed! bg-white!">
          <div className="flex flex-row gap-4">
            <div className="flex h-[82px] w-[82px] shrink-0 items-center justify-center rounded-xl bg-[#f4f5fa]">
              <img src={ASSETS.iconStarEmpty} alt="" className="h-11 w-11" />
            </div>
            <div>
              <p className="text-base font-semibold text-[#1e1e1e]">您还没有收藏任何智能体</p>
              <p className="mt-1 text-sm text-[#6f6f6f]">浏览智能体并点击⭐️图标进行收藏</p>
            </div>
          </div>
        </Card>

        {/* Tabs + 搜索 */}
        <div className="mt-8 flex items-center justify-between gap-4">
          <Tabs
            activeKey={activeTab}
            onChange={setActiveTab}
            className="mb-0! [&_.ant-tabs-ink-bar]:bg-[#214ad4]! [&_.ant-tabs-tab-active_.ant-tabs-tab-btn]:text-[#214ad4]!"
            items={[
              {
                key: 'all',
                label: <span className="text-lg font-semibold">全部</span>,
              },
              {
                key: 'mine',
                label: <span className="text-02 text-lg font-medium">我的作品</span>,
              },
            ]}
          />
          <Input
            placeholder="搜索智能体"
            prefix={<img src={ASSETS.iconSearch} alt="" className="text-04! h-5 w-5" />}
            className="h-10 w-[252px]! rounded-lg border-[#bec7db]"
            allowClear
          />
        </div>

        {/* 分类 */}
        <Space size={8} wrap className="mt-4">
          {CATEGORIES.map((cat) => (
            <Button
              key={cat}
              color={activeCategory === cat ? 'primary' : 'default'}
              variant="filled"
              shape="round"
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </Button>
          ))}
        </Space>

        {/* 智能体卡片列表 */}
        <div className="mt-6 grid grid-cols-2 gap-4">
          {AGENT_LIST.map((item) => (
            <AgentCard key={item.title} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export { TestFigma };
export default TestFigma;
