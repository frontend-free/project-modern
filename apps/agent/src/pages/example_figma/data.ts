/** 智能体单项（列表卡片） */
export interface AgentItem {
  id: string;
  title: string;
  description: string;
  icon?: string;
  stars: number;
  likes: number;
  comments: number;
  categories: string[];
  starred?: boolean;
}

/** 精选轮播项 */
export interface CarouselItem {
  id: string;
  title: string;
  description: string;
  image?: string;
}

export const CATEGORIES = [
  '所有分类',
  '工作助手',
  '文本创作',
  '商业助手',
  '制造业',
  '金融',
  '医疗健康',
  '科研',
  '教育',
] as const;

export const carouselData: CarouselItem[] = [
  {
    id: '1',
    title: '医药研发智能体',
    description: '基于丰富的医药研发经验，提供药物研发、临床试验分析等智能辅助，加速新药研发进程。',
  },
  {
    id: '2',
    title: '营销智能体',
    description: '结合营销经验，提供市场分析、品牌推广、产品定位等智能建议，助力医药产品营销。',
  },
];

export const mockAgentList: AgentItem[] = [
  {
    id: '1',
    title: 'DMS ChatBI数据助手',
    description:
      '专业的取数和分析助手，通过DMS MCP来提供取数、n2sql核心能力，帮助用户快速获取和分析数据。',
    stars: 321,
    likes: 2305,
    comments: 2305,
    categories: ['工作助手', '文本创作'],
    starred: false,
  },
  {
    id: '2',
    title: '基础法律问答助手',
    description:
      '基础法律知识的智能问答助手，基于现行法律法规、司法解释及权威案例，为用户提供专业的法律建议。',
    stars: 321,
    likes: 2305,
    comments: 2305,
    categories: ['工作助手', '文本创作'],
    starred: true,
  },
  {
    id: '3',
    title: '合同信息抽取',
    description:
      '本应用能够从合同文本中精准提取关联信息，包括基本信息、双方信息、权利义务等关键内容。',
    stars: 2233,
    likes: 2305,
    comments: 2305,
    categories: ['商业助手'],
    starred: false,
  },
  {
    id: '4',
    title: 'PPT自动生成',
    description:
      '本模板适用于需要快速制作结构清晰、内容专业的演示文稿的用户，广泛应用于商务汇报、学术演讲等场景。',
    stars: 221,
    likes: 2305,
    comments: 2305,
    categories: ['文本创作', '工作助手'],
    starred: false,
  },
  {
    id: '5',
    title: '行业策略分析',
    description:
      '本工作流专注文本转换行业深度分析，集成4P分析法、波特五力模型等多种分析工具，为用户提供全面的行业策略建议。',
    stars: 2233,
    likes: 2305,
    comments: 2305,
    categories: ['商业助手'],
    starred: false,
  },
  {
    id: '6',
    title: '市场调研分析',
    description:
      '本工作流专注市场调研全流程支持，提供三大核心功能：1.主题梳理；2.数据收集；3.分析报告生成。',
    stars: 221,
    likes: 2305,
    comments: 2305,
    categories: ['文本创作', '工作助手'],
    starred: false,
  },
];
