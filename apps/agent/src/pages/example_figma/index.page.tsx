import { Button, Carousel, Input } from 'antd';
import type { CSSProperties } from 'react';
import { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { agentItems, carouselItems, type AgentItem } from './data';

const TAB_ALL = 'all';
const TAB_MINE = 'mine';

const tabs = [
  { key: TAB_ALL, label: '全部' },
  { key: TAB_MINE, label: '我的作品' },
];

const iconArrowLeft = 'https://www.figma.com/api/mcp/asset/1e651623-0fce-492c-af46-2be0f56e0817';
const iconArrowRight = 'https://www.figma.com/api/mcp/asset/da23f1ff-189c-407f-adce-001c388edb3f';
const iconShare = 'https://www.figma.com/api/mcp/asset/f3847001-fe4a-4bdf-901c-65fdea1f6de0';
const iconStar = 'https://www.figma.com/api/mcp/asset/69d2d646-bcd3-404e-b565-953c6deeb374';
const iconStarActive = 'https://www.figma.com/api/mcp/asset/dbfd5d01-8d64-437e-a6a3-9668a7eeaf11';
const iconStat1 = 'https://www.figma.com/api/mcp/asset/0c8071f6-ac99-4610-9ec3-03beffd0b0ce';
const iconStat2 = 'https://www.figma.com/api/mcp/asset/3d1bb89a-db08-42a6-87a6-ef174806d666';
const iconSearch = 'https://www.figma.com/api/mcp/asset/2da11ba5-5503-4e7f-9123-ff6e1e9af9b3';
const iconEmptyStar = 'https://www.figma.com/api/mcp/asset/606a7ac0-901b-4994-b8c2-3a0a45b39fa0';

type ArrowProps = {
  className?: string;
  style?: CSSProperties;
  onClick?: () => void;
  direction: 'left' | 'right';
};

const CarouselArrow = ({ className, style, onClick, direction }: ArrowProps) => {
  const icon = direction === 'left' ? iconArrowLeft : iconArrowRight;
  return (
    <button
      className={`${className ?? ''} !flex h-12 w-8 items-center justify-center bg-transparent text-slate-400 transition hover:text-slate-600`}
      style={style}
      onClick={onClick}
      type="button"
      aria-label={direction === 'left' ? '上一张' : '下一张'}
    >
      <img src={icon} alt="" className="h-10 w-3" />
    </button>
  );
};

const AgentEmpty = ({ title }: { title: string }) => {
  return (
    <div className="flex h-[122px] w-full items-center gap-6 rounded-[12px] border border-dashed border-[#d4d5d8] bg-white/60 px-6 text-[#6f6f6f]">
      <div className="flex h-[82px] w-[82px] items-center justify-center rounded-[12px] bg-[#f4f5fa]">
        <img src={iconEmptyStar} alt="" className="h-11 w-11" />
      </div>
      <div>
        <div className="text-[16px] font-semibold text-black">{title}</div>
        <div className="mt-2 text-[14px] text-[#6f6f6f]">浏览智能体并点击⭐️图标进行收藏</div>
      </div>
    </div>
  );
};

const AgentCard = ({
  item,
  onToggleStar,
  onShare,
}: {
  item: AgentItem;
  onToggleStar: (id: string) => void;
  onShare: (id: string) => void;
}) => {
  return (
    <div className="relative flex h-[148px] items-center gap-4 rounded-[12px] bg-white px-4 py-3 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
      <div
        className="flex h-[82px] w-[82px] items-center justify-center rounded-[12px]"
        style={{ background: item.imageBg }}
      >
        <img src={item.image} alt="" className="h-[63px] w-[80px] object-contain" />
      </div>
      <div className="flex min-w-0 flex-1 flex-col">
        <div className="truncate text-[16px] font-semibold text-black">{item.title}</div>
        <div className="mt-2 line-clamp-2 text-[14px] text-[#6f6f6f]">{item.description}</div>
        <div className="mt-auto flex items-center justify-between">
          <div className="flex items-center gap-4 text-[14px] text-[#909090]">
            <button
              type="button"
              className="flex items-center gap-1"
              onClick={() => onToggleStar(item.id)}
              aria-label={item.starred ? '取消收藏' : '收藏'}
            >
              <img src={item.starred ? iconStarActive : iconStar} alt="" className="h-5 w-5" />
              <span className={item.starred ? 'text-[#214ad4]' : 'text-[#909090]'}>
                {item.starCount}
              </span>
            </button>
            <div className="flex items-center gap-1">
              <img src={iconStat1} alt="" className="h-5 w-5" />
              <span>{item.viewCount}</span>
            </div>
            <div className="flex items-center gap-1">
              <img src={iconStat2} alt="" className="h-5 w-5" />
              <span>{item.useCount}</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-[4px] bg-[#f4f7ff] px-2 py-[2px] text-[12px] text-[#7f88a8]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
      <button
        type="button"
        className="absolute top-4 right-4 h-5 w-5"
        onClick={() => onShare(item.id)}
        aria-label="分享"
      >
        <img src={iconShare} alt="" className="h-5 w-5" />
      </button>
    </div>
  );
};

const AgentList = ({
  items,
  emptyTitle,
  onToggleStar,
  onShare,
}: {
  items: AgentItem[];
  emptyTitle: string;
  onToggleStar: (id: string) => void;
  onShare: (id: string) => void;
}) => {
  if (items.length === 0) {
    return <AgentEmpty title={emptyTitle} />;
  }

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {items.map((item) => (
        <AgentCard key={item.id} item={item} onToggleStar={onToggleStar} onShare={onShare} />
      ))}
    </div>
  );
};

function ExampleFigmaPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = searchParams.get('tab') ?? TAB_ALL;
  const [category, setCategory] = useState('所有分类');
  const [searchText, setSearchText] = useState('');
  const [agents, setAgents] = useState(agentItems);

  const categories = useMemo(() => {
    const unique = Array.from(new Set(agents.map((item) => item.category)));
    return ['所有分类', ...unique];
  }, [agents]);

  const starredAgents = useMemo(() => {
    return agents.filter((item) => item.starred);
  }, [agents]);

  const filteredAgents = useMemo(() => {
    const keyword = searchText.trim().toLowerCase();
    return agents.filter((item) => {
      if (activeTab === TAB_MINE && !item.isMine) {
        return false;
      }
      if (category !== '所有分类' && item.category !== category) {
        return false;
      }
      if (!keyword) {
        return true;
      }
      return (
        item.title.toLowerCase().includes(keyword) ||
        item.description.toLowerCase().includes(keyword)
      );
    });
  }, [agents, activeTab, category, searchText]);

  const handleTabChange = (key: string) => {
    const next = new URLSearchParams(searchParams);
    next.set('tab', key);
    setSearchParams(next);
  };

  const handleToggleStar = (id: string) => {
    setAgents((prev) =>
      prev.map((item) => (item.id === id ? { ...item, starred: !item.starred } : item)),
    );
  };

  const handleShare = (id: string) => {
    console.log('share agent', id);
  };

  const bannerSlides = useMemo(() => {
    const result: (typeof carouselItems)[] = [];
    for (let i = 0; i < carouselItems.length; i += 2) {
      result.push(carouselItems.slice(i, i + 2));
    }
    return result;
  }, []);

  return (
    <div className="h-full w-full overflow-y-auto bg-[#f7f8fb] text-[#1e1e1e]">
      <div className="sticky top-0 z-20 bg-white shadow-[0_4px_4px_rgba(0,0,0,0.04)]">
        <div className="mx-auto flex h-[66px] max-w-[1512px] items-center justify-between px-10">
          <div className="font-['Alimama_ShuHeiTi','PingFang_SC',sans-serif] text-[20px] font-semibold text-[#1e1e1e]">
            华润三九智能体广场
          </div>
          <Button
            type="primary"
            className="!h-10 !rounded-lg !border-none !bg-[#214ad4] !px-6 !text-[16px] !shadow-[0_4px_10px_rgba(12,34,109,0.3)]"
          >
            注册AI智能体创作者
          </Button>
        </div>
      </div>

      <div className="mx-auto flex max-w-[1512px] flex-col gap-8 px-10 pt-6 pb-12">
        <section>
          <Carousel
            dots={false}
            arrows
            prevArrow={<CarouselArrow direction="left" />}
            nextArrow={<CarouselArrow direction="right" />}
          >
            {bannerSlides.map((slide, index) => (
              <div key={`slide-${index}`}>
                <div className="grid gap-6 lg:grid-cols-2">
                  {slide.map((item) => (
                    <div
                      key={item.id}
                      className="overflow-hidden rounded-[12px] bg-white shadow-[0_2px_8px_rgba(0,0,0,0.04)]"
                    >
                      <div className="h-[154px] w-full overflow-hidden">
                        <img src={item.image} alt="" className="h-full w-full object-cover" />
                      </div>
                      <div className="h-[84px] px-5 py-3">
                        <div className="text-[16px] font-semibold text-black">{item.title}</div>
                        <div className="mt-1 text-[14px] text-[#6f6f6f]">{item.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </Carousel>
        </section>

        <section className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <div className="text-[18px] font-medium text-[#171717]">我收藏的智能体</div>
            {starredAgents.length > 2 && (
              <button type="button" className="text-[14px] text-[#214ad4]">
                查看更多
              </button>
            )}
          </div>
          <AgentList
            items={starredAgents.slice(0, 2)}
            emptyTitle="您还没有收藏任何智能体"
            onToggleStar={handleToggleStar}
            onShare={handleShare}
          />
        </section>

        <section className="flex flex-col gap-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-12">
              {tabs.map((item) => {
                const isActive = item.key === activeTab;
                return (
                  <button
                    key={item.key}
                    type="button"
                    className={`h-[60px] border-b-2 px-1 text-[18px] ${
                      isActive
                        ? 'border-[#214ad4] font-semibold text-[#214ad4]'
                        : 'border-transparent text-[#444]'
                    }`}
                    onClick={() => handleTabChange(item.key)}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>
            <Input
              placeholder="搜索智能体"
              prefix={<img src={iconSearch} alt="" className="h-4 w-4" />}
              value={searchText}
              onChange={(event) => setSearchText(event.target.value)}
              className="!h-10 !w-[252px] !rounded-lg !border-[#bec7db]"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((item) => {
              const isActive = item === category;
              return (
                <button
                  key={item}
                  type="button"
                  className={`rounded-full px-4 py-1.5 text-[14px] ${
                    isActive ? 'bg-[#e2e8fd] text-[#214ad4]' : 'bg-[#eef0f6] text-[#444]'
                  }`}
                  onClick={() => setCategory(item)}
                >
                  {item}
                </button>
              );
            })}
          </div>

          <AgentList
            items={filteredAgents}
            emptyTitle="暂无匹配的智能体"
            onToggleStar={handleToggleStar}
            onShare={handleShare}
          />
        </section>
      </div>
    </div>
  );
}

export default ExampleFigmaPage;
