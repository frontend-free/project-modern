import { Button, Carousel, Input, Tabs, Tag, message } from 'antd';
import type { ReactNode } from 'react';
import { useMemo, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSearchParams } from 'react-router-dom';

import agent01 from '@/assets/example_figma/agent_01.png';
import agent02 from '@/assets/example_figma/agent_02.png';
import agent03 from '@/assets/example_figma/agent_03.png';
import agent04 from '@/assets/example_figma/agent_04.png';
import agent05 from '@/assets/example_figma/agent_05.png';
import agent06 from '@/assets/example_figma/agent_06.png';
import bannerMarketing from '@/assets/example_figma/banner_marketing.png';
import bannerMedical from '@/assets/example_figma/banner_medical.png';

interface AgentItem {
  id: string;
  title: string;
  description: string;
  image: string;
  stars: number;
  likes: number;
  comments: number;
  categories: string[];
  starred?: boolean;
}

interface BannerItem {
  id: string;
  title: string;
  description: string;
  image: string;
}

function ArrowIcon({ direction }: { direction: 'left' | 'right' }) {
  return (
    <svg className="text-04 h-5 w-5" viewBox="0 0 20 20" fill="none" aria-hidden>
      <path
        d={direction === 'left' ? 'M12 4L8 10L12 16' : 'M8 4L12 10L8 16'}
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg className="text-04 h-4 w-4" viewBox="0 0 20 20" fill="none" aria-hidden>
      <circle cx="9" cy="9" r="6" stroke="currentColor" strokeWidth="1.5" />
      <path d="M14 14L18 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function ShareIcon() {
  return (
    <svg className="text-04 h-4 w-4" viewBox="0 0 20 20" fill="none" aria-hidden>
      <path
        d="M12 3H17V8M17 3L10 10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17 11V15C17 16.1 16.1 17 15 17H5C3.9 17 3 16.1 3 15V5C3 3.9 3.9 3 5 3H9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

const bannerList: BannerItem[] = [
  {
    id: 'banner_1',
    title: '医药研发智能体',
    description: '基于丰富的医药研发经验，提供药物研发、临床试验分析等智能辅助，加速新药研发进程。',
    image: bannerMedical,
  },
  {
    id: 'banner_2',
    title: '营销智能体',
    description: '结合营销经验，提供市场分析、品牌推广、产品定位等智能建议，助力医药产品营销。',
    image: bannerMarketing,
  },
  {
    id: 'banner_3',
    title: '医药研发智能体',
    description: '聚焦药品立项到验证全流程，快速输出临床与研发洞察，帮助团队提升研发效率。',
    image: bannerMedical,
  },
  {
    id: 'banner_4',
    title: '营销智能体',
    description: '针对医药营销场景，提供内容策略与人群洞察建议，提升活动转化与品牌传播效率。',
    image: bannerMarketing,
  },
];

const initialAgentList: AgentItem[] = [
  {
    id: 'agent_1',
    title: 'DMS ChatBI数据助手',
    description:
      '专业的取数和分析助手，通过DMS MCP来提供取数、n2sql核心能力，帮助用户快速获取和分析数据。',
    image: agent01,
    stars: 321,
    likes: 2305,
    comments: 2305,
    categories: ['工作助手', '文本创作'],
    starred: true,
  },
  {
    id: 'agent_2',
    title: '基础法律问答助手',
    description:
      '基础法律知识的智能问答助手，基于现行法律法规、司法解释及权威案例，为用户提供专业的法律建议。',
    image: agent02,
    stars: 321,
    likes: 2305,
    comments: 2305,
    categories: ['工作助手', '文本创作'],
  },
  {
    id: 'agent_3',
    title: '合同信息抽取',
    description:
      '本应用能够从合同文本中精准提取关联信息，包括基本信息、双方信息、权利义务等关键内容。',
    image: agent03,
    stars: 2233,
    likes: 2305,
    comments: 2305,
    categories: ['商业助手'],
  },
  {
    id: 'agent_4',
    title: 'PPT自动生成',
    description:
      '本模板适用于需要快速制作结构清晰、内容专业的演示文稿的用户，广泛应用于商务汇报、学术演讲等场景。',
    image: agent04,
    stars: 221,
    likes: 2305,
    comments: 2305,
    categories: ['文本创作', '工作助手'],
  },
  {
    id: 'agent_5',
    title: '行业策略分析',
    description:
      '本工作流专注文本转换行业深度分析，集成4P分析法、波特五力模型等多种分析工具，为用户提供全面的行业策略建议。',
    image: agent05,
    stars: 2233,
    likes: 2305,
    comments: 2305,
    categories: ['商业助手'],
  },
  {
    id: 'agent_6',
    title: '市场调研分析',
    description:
      '本工作流专注市场调研全流程支持，提供三大核心功能：1.主题梳理；2.数据收集；3.分析报告生成。',
    image: agent06,
    stars: 221,
    likes: 2305,
    comments: 2305,
    categories: ['文本创作', '工作助手'],
  },
];

function chunkBanners(list: BannerItem[]) {
  const result: BannerItem[][] = [];

  for (let i = 0; i < list.length; i += 2) {
    result.push(list.slice(i, i + 2));
  }

  return result;
}

function ExampleFigmaPage() {
  const { t } = useTranslation();
  const [searchParams, setSearchParams] = useSearchParams();
  const [agentList, setAgentList] = useState(initialAgentList);
  const [selectedCategory, setSelectedCategory] = useState('所有分类');
  const [keyword, setKeyword] = useState('');
  const carouselRef = useRef<any>(null);

  const activeTab = searchParams.get('tab') === 'mine' ? 'mine' : 'all';

  const favoriteList = useMemo(() => {
    return agentList.filter((item) => item.starred);
  }, [agentList]);

  const categoryList = useMemo(() => {
    const dynamicCategories = new Set(agentList.flatMap((item) => item.categories));
    return ['所有分类', ...dynamicCategories];
  }, [agentList]);

  const filteredAgentList = useMemo(() => {
    const tabFilteredList =
      activeTab === 'mine' ? agentList.filter((item) => item.starred) : agentList;
    const categoryFilteredList =
      selectedCategory === '所有分类'
        ? tabFilteredList
        : tabFilteredList.filter((item) => item.categories.includes(selectedCategory));
    const lowerKeyword = keyword.trim().toLowerCase();

    if (!lowerKeyword) {
      return categoryFilteredList;
    }

    return categoryFilteredList.filter((item) => {
      return (
        item.title.toLowerCase().includes(lowerKeyword) ||
        item.description.toLowerCase().includes(lowerKeyword)
      );
    });
  }, [activeTab, agentList, keyword, selectedCategory]);

  const bannerSlides = useMemo(() => chunkBanners(bannerList), []);

  const handleTabChange = (nextTab: string) => {
    const nextParams = new URLSearchParams(searchParams);
    if (nextTab === 'mine') {
      nextParams.set('tab', 'mine');
    } else {
      nextParams.delete('tab');
    }
    setSearchParams(nextParams);
  };

  const handleToggleStar = (agentId: string) => {
    setAgentList((prev) => {
      return prev.map((item) => {
        if (item.id === agentId) {
          return { ...item, starred: !item.starred };
        }
        return item;
      });
    });
  };

  const handleShare = (title: string) => {
    message.success(t('agent.exampleFigma.shareSuccess', '已触发分享：{{title}}', { title }));
  };

  const renderAgentCard = (item: AgentItem): ReactNode => {
    return (
      <div key={item.id} className="bg-fill-elevated border-01 rounded-xl border p-4">
        <div className="mb-3 flex items-start justify-between">
          <div className="flex min-w-0 items-start gap-3">
            <div className="bg-fill-tertiary h-20 w-20 shrink-0 overflow-hidden rounded-xl">
              <img className="h-full w-full object-cover" src={item.image} alt={item.title} />
            </div>
            <div className="min-w-0">
              <div className="text-01 truncate text-base font-semibold">{item.title}</div>
              <p className="text-03 mt-2 line-clamp-2 text-sm leading-6">{item.description}</p>
            </div>
          </div>
          <Button
            size="small"
            type="text"
            icon={<ShareIcon />}
            onClick={() => handleShare(item.title)}
          />
        </div>

        <div className="mt-3 flex items-center justify-between gap-3">
          <div className="text-04 flex items-center gap-4 text-sm">
            <button
              type="button"
              className="flex cursor-pointer items-center gap-1 border-none bg-transparent p-0"
              onClick={() => handleToggleStar(item.id)}
            >
              <span className={item.starred ? 'text-primary' : 'text-04'}>★</span>
              <span>{item.stars}</span>
            </button>
            <span className="flex items-center gap-1">
              <span className="text-04 text-xs">U</span>
              {item.likes}
            </span>
            <span className="flex items-center gap-1">
              <span className="text-04 text-xs">C</span>
              {item.comments}
            </span>
          </div>
          <div className="flex items-center gap-1">
            {item.categories.map((category) => (
              <Tag key={`${item.id}_${category}`} className="m-0">
                {category}
              </Tag>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-fill-page min-h-full">
      <header className="bg-01 fixed inset-x-0 top-0 z-20 h-[66px] shadow-[0_4px_4px_rgba(0,0,0,0.04)]">
        <div className="mx-auto flex h-full max-w-[1600px] items-center justify-between px-10">
          <h1 className="text-01 text-xl font-bold">
            {t('agent.exampleFigma.pageTitle', '华润三九智能体广场')}
          </h1>
          <Button type="primary" size="large" className="px-10">
            {t('agent.exampleFigma.registerCreator', '注册AI智能体创作者')}
          </Button>
        </div>
      </header>

      <main className="mx-auto max-w-[1600px] px-10 pt-[90px] pb-8">
        <section className="mb-8">
          <div className="flex items-center gap-3">
            <Button
              type="text"
              icon={<ArrowIcon direction="left" />}
              onClick={() => carouselRef.current?.prev()}
            />
            <div className="min-w-0 flex-1">
              <Carousel ref={carouselRef} dots={false}>
                {bannerSlides.map((slide, index) => (
                  <div key={`banner_slide_${index}`}>
                    <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
                      {slide.map((item) => (
                        <div key={item.id} className="bg-fill-elevated overflow-hidden rounded-xl">
                          <img
                            className="h-[154px] w-full object-cover"
                            src={item.image}
                            alt={item.title}
                          />
                          <div className="p-3">
                            <div className="text-01 truncate text-base font-semibold">
                              {item.title}
                            </div>
                            <p className="text-03 mt-2 line-clamp-2 text-sm">{item.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </Carousel>
            </div>
            <Button
              type="text"
              icon={<ArrowIcon direction="right" />}
              onClick={() => carouselRef.current?.next()}
            />
          </div>
        </section>

        <section className="mb-4">
          <div className="mb-3 flex items-center justify-between">
            <h2 className="text-01 text-2xl font-semibold">
              {t('agent.exampleFigma.favoriteTitle', '我收藏的智能体')}
            </h2>
            {favoriteList.length > 2 ? (
              <Button type="link" onClick={() => handleTabChange('mine')}>
                {t('agent.exampleFigma.viewMore', '查看更多')}
              </Button>
            ) : null}
          </div>

          {favoriteList.length > 0 ? (
            <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
              {favoriteList.slice(0, 2).map(renderAgentCard)}
            </div>
          ) : (
            <div className="bg-fill-elevated border-01 rounded-xl border border-dashed p-4">
              <div className="bg-fill-tertiary mb-3 flex h-14 w-14 items-center justify-center rounded-xl">
                <span className="text-04 text-xl">*</span>
              </div>
              <div className="text-01 text-base font-semibold">
                {t('agent.exampleFigma.favoriteEmptyTitle', '您还没有收藏任何智能体')}
              </div>
              <div className="text-03 mt-1 text-sm">
                {t('agent.exampleFigma.favoriteEmptyDesc', '浏览智能体并点击星标图标进行收藏')}
              </div>
            </div>
          )}
        </section>

        <section className="mb-4">
          <div className="flex items-end justify-between">
            <Tabs
              activeKey={activeTab}
              items={[
                { key: 'all', label: t('agent.exampleFigma.tabAll', '全部') },
                { key: 'mine', label: t('agent.exampleFigma.tabMine', '我的作品') },
              ]}
              onChange={handleTabChange}
            />
            <Input
              allowClear
              size="large"
              value={keyword}
              className="max-w-[260px]"
              onChange={(event) => setKeyword(event.target.value)}
              prefix={<SearchIcon />}
              placeholder={t('agent.exampleFigma.searchPlaceholder', '搜索智能体')}
            />
          </div>
        </section>

        <section className="mb-6 flex flex-wrap gap-2">
          {categoryList.map((category) => (
            <Tag
              key={category}
              className="cursor-pointer rounded-full px-4 py-1"
              color={selectedCategory === category ? 'primary' : 'default'}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Tag>
          ))}
        </section>

        <section className="grid grid-cols-1 gap-4 xl:grid-cols-2">
          {filteredAgentList.length > 0 ? (
            filteredAgentList.map(renderAgentCard)
          ) : (
            <div className="text-03 col-span-full py-16 text-center text-sm">
              {t('agent.exampleFigma.noData', '暂无符合条件的智能体')}
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default ExampleFigmaPage;
