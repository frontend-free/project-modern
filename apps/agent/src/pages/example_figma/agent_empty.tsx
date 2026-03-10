import { StarOutlined } from '@fe-free/icons';

export function AgentEmpty() {
  return (
    <div className="border-01 bg-fill-secondary flex flex-col gap-2 rounded-xl border border-dashed p-6">
      <div className="flex items-start gap-4">
        <div className="bg-fill-tertiary flex h-[82px] w-[82px] shrink-0 items-center justify-center rounded-xl">
          <StarOutlined className="text-03 text-3xl" />
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-01 font-semibold">您还没有收藏任何智能体</p>
          <p className="text-03 mt-1 text-sm">浏览智能体并点击⭐️图标进行收藏</p>
        </div>
      </div>
    </div>
  );
}
