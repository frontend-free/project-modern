import { LeftOutlined, RightOutlined, SearchOutlined } from '@fe-free/icons';
import { Button, Carousel, Input, Tag, Tabs } from 'antd';
import { useMemo, useState, useCallback } from 'react';

import { AgentEmpty } from './agent_empty';
import { AgentList } from './agent_list';
import { carouselData, CATEGORIES, mockAgentList, type AgentItem as AgentItemType } from './data';

type TabKey = 'all' | 'mine';

function ExampleFigmaPage() {
  const [activeTab, setActiveTab] = useState<TabKey>('all');
  const [category, setCategory] = useState<string>(CATEGORIES[0]);
  const [searchKeyword, setSearchKeyword] = useState('');
  const [agentList, setAgentList] = useState<AgentItemType[]>(mockAgentList);
  const [starredIds, setStarredIds] = useState<Set<string>>(() => {
    const set = new Set<string>();
    mockAgentList.forEach((a) => a.starred && set.add(a.id));
    return set;
  });

  const collectedList = useMemo(
    () => agentList.filter((a) => starredIds.has(a.id)),
    [agentList, starredIds],
  );

  const filteredList = useMemo(() => {
    let list = activeTab === 'mine' ? agentList.filter((a) => starredIds.has(a.id)) : agentList;
    if (category !== '所有分类') {
      list = list.filter((a) => a.categories.includes(category));
    }
    if (searchKeyword.trim()) {
      const kw = searchKeyword.trim().toLowerCase();
      list = list.filter(
        (a) => a.title.toLowerCase().includes(kw) || a.description.toLowerCase().includes(kw),
      );
    }
    return list;
  }, [activeTab, category, searchKeyword, agentList, starredIds]);

  const handleStar = (id: string, starred: boolean) => {
    setStarredIds((prev) => {
      const next = new Set(prev);
      if (starred) next.add(id);
      else next.delete(id);
      return next;
    });
    setAgentList((prev) => prev.map((a) => (a.id === id ? { ...a, starred } : a)));
  };

  const handleShare = useCallback((_id: string) => {
    // 按产品约定：复制链接或调起分享
  }, []);

  const tabItems = [
    { key: 'all', label: '全部' },
    { key: 'mine', label: '我的作品' },
  ] as const;

  return (
    <div className="bg-fill-page flex min-h-full flex-col">
      {/* 顶部导航 */}
      <header className="border-01 c-border-bottom bg-fill-elevated flex h-16 shrink-0 items-center justify-between px-10 shadow-sm">
        <h1 className="text-01 text-xl font-bold">华润三九智能体广场</h1>
        <Button type="primary" size="middle">
          注册AI智能体创作者
        </Button>
      </header>

      <div className="flex flex-1 flex-col px-10 pb-10">
        {/* 精选轮播 */}
        <section className="relative mt-6">
          <Carousel
            dots={false}
            arrows
            prevArrow={
              <button type="button" className="slick-arrow slick-prev" aria-label="上一张">
                <LeftOutlined />
              </button>
            }
            nextArrow={
              <button type="button" className="slick-arrow slick-next" aria-label="下一张">
                <RightOutlined />
              </button>
            }
            className="rounded-xl"
          >
            {carouselData.map((slide) => (
              <div key={slide.id} className="px-1">
                <div className="bg-fill-elevated border-01 flex overflow-hidden rounded-xl border">
                  <div className="bg-fill-tertiary h-[238px] w-1/2 shrink-0 rounded-l-xl" />
                  <div className="flex flex-1 flex-col justify-center p-6">
                    <h2 className="text-01 text-base font-semibold">{slide.title}</h2>
                    <p className="text-03 mt-2 line-clamp-2 text-sm leading-normal">
                      {slide.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </section>

        {/* 我收藏的智能体 */}
        <section className="mt-8">
          <h2 className="text-01 mb-4 text-lg font-medium">我收藏的智能体</h2>
          {collectedList.length === 0 ? (
            <AgentEmpty />
          ) : (
            <AgentList list={collectedList} onStar={handleStar} onShare={handleShare} />
          )}
        </section>

        {/* Tab + 筛选 + 搜索 */}
        <Tabs
          activeKey={activeTab}
          onChange={(k) => {
            if (k === 'mine') setActiveTab('mine');
            else setActiveTab('all');
          }}
          className="mt-8"
          items={tabItems.map((t) => ({ key: t.key, label: t.label }))}
        />

        <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <Tag
                key={cat}
                className="cursor-pointer rounded-full px-4 py-1"
                color={category === cat ? 'primary' : 'default'}
                onClick={() => setCategory(cat)}
              >
                {cat}
              </Tag>
            ))}
          </div>
          <Input
            placeholder="搜索智能体"
            prefix={<SearchOutlined className="text-03" />}
            className="border-01 w-64 rounded-lg"
            value={searchKeyword}
            onChange={(e) => setSearchKeyword(e.target.value)}
            allowClear
          />
        </div>

        {/* 智能体列表 */}
        <section className="mt-6">
          <AgentList list={filteredList} onStar={handleStar} onShare={handleShare} />
        </section>
      </div>
    </div>
  );
}

export default ExampleFigmaPage;
