export type CarouselItem = {
  id: string;
  title: string;
  description: string;
  image: string;
};

export type AgentItem = {
  id: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  image: string;
  imageBg: string;
  starCount: number;
  viewCount: number;
  useCount: number;
  starred: boolean;
  isMine: boolean;
};

export const carouselItems: CarouselItem[] = [
  {
    id: 'banner-1',
    title: '医药研发智能体',
    description: '基于丰富的医药研发经验，提供药物研发、临床试验分析等智能辅助，加速新药研发进程。',
    image: 'https://www.figma.com/api/mcp/asset/87e2e5ed-871a-4a2c-b353-0fd71e6c3dbb',
  },
  {
    id: 'banner-2',
    title: '营销智能体',
    description: '结合营销经验，提供市场分析、品牌推广、产品定位等智能建议，助力医药产品营销。',
    image: 'https://www.figma.com/api/mcp/asset/2ae4a20d-9d61-40d8-80a9-dda99f3de1dd',
  },
  {
    id: 'banner-3',
    title: '医药研发智能体',
    description: '面向研发团队的方案生成与知识总结，帮助快速完成研究回顾与实验记录。',
    image: 'https://www.figma.com/api/mcp/asset/87e2e5ed-871a-4a2c-b353-0fd71e6c3dbb',
  },
  {
    id: 'banner-4',
    title: '营销智能体',
    description: '围绕营销策略与投放效果评估，提供可执行的多维洞察与优化建议。',
    image: 'https://www.figma.com/api/mcp/asset/2ae4a20d-9d61-40d8-80a9-dda99f3de1dd',
  },
];

export const agentItems: AgentItem[] = [
  {
    id: 'agent-1',
    title: 'DMS ChatBI数据助手',
    description:
      '专业的取数和分析助手，通过DMS MCP来提供取数、n2sql核心能力，帮助用户快速获取和分析数据。',
    category: '工作助手',
    tags: ['工作助手', '文本创作'],
    image: 'https://www.figma.com/api/mcp/asset/fea37daf-e0d2-4f58-98f7-b2bb50f8f6d1',
    imageBg: '#e2f3ff',
    starCount: 321,
    viewCount: 2305,
    useCount: 2305,
    starred: false,
    isMine: false,
  },
  {
    id: 'agent-2',
    title: '基础法律问答助手',
    description:
      '基础法律知识的智能问答助手，基于现行法律法规、司法解释及权威案例，为用户提供专业的法律建议。',
    category: '文本创作',
    tags: ['工作助手', '文本创作'],
    image: 'https://www.figma.com/api/mcp/asset/cec10fdf-1966-4306-ab3b-b08e2e136164',
    imageBg: '#e2f3ff',
    starCount: 321,
    viewCount: 2305,
    useCount: 2305,
    starred: true,
    isMine: false,
  },
  {
    id: 'agent-3',
    title: '合同信息抽取',
    description:
      '本应用能够从合同文本中精准提取关联信息，包括基本信息、双方信息、权利义务等关键内容。',
    category: '商业助手',
    tags: ['商业助手'],
    image: 'https://www.figma.com/api/mcp/asset/4101aa19-c277-438d-a245-10e04daa7428',
    imageBg: '#e2f3ff',
    starCount: 2233,
    viewCount: 2305,
    useCount: 2305,
    starred: false,
    isMine: true,
  },
  {
    id: 'agent-4',
    title: 'PPT自动生成',
    description:
      '本模板适用于需要快速制作结构清晰、内容专业的演示文稿的用户，广泛应用于商务汇报、学术演讲等场景。',
    category: '文本创作',
    tags: ['文本创作', '工作助手'],
    image: 'https://www.figma.com/api/mcp/asset/5db5f8b0-7b2c-4a2b-9189-e941b5def1f2',
    imageBg: '#e2f3ff',
    starCount: 221,
    viewCount: 2305,
    useCount: 2305,
    starred: false,
    isMine: false,
  },
  {
    id: 'agent-5',
    title: '行业策略分析',
    description:
      '本工作流专注文本转换行业深度分析，集成4P分析法、波特五力模型等多种分析工具，为用户提供全面的行业策略建议。',
    category: '商业助手',
    tags: ['商业助手'],
    image: 'https://www.figma.com/api/mcp/asset/28c9d2db-bb15-43ef-b8a8-6171a4bed932',
    imageBg: '#e2f3ff',
    starCount: 2233,
    viewCount: 2305,
    useCount: 2305,
    starred: false,
    isMine: false,
  },
  {
    id: 'agent-6',
    title: '市场调研分析',
    description:
      '本工作流专注市场调研全流程支持，提供三大核心功能：1.主题梳理；2.数据收集；3.分析报告生成。',
    category: '文本创作',
    tags: ['文本创作', '工作助手'],
    image: 'https://www.figma.com/api/mcp/asset/0901a738-d25a-4ce9-8588-feefc044489e',
    imageBg: '#f0fcf0',
    starCount: 221,
    viewCount: 2305,
    useCount: 2305,
    starred: false,
    isMine: false,
  },
];
