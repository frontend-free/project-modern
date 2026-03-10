---
name: copy-dot-cursor
description: 将当前项目的 .cursor 目录拷贝到指定目标目录。在用户要求「把 .cursor 拷到某目录」「复制 cursor 配置到某项目」或类似需求时使用。
---

# 拷贝 .cursor 到目标目录

当用户需要把当前仓库的 `.cursor`（rules、skills 等）拷贝到另一个项目或目录时，执行本 skill 提供的脚本。

## 执行方式

在仓库根目录执行（传入目标项目/目录路径，会在该路径下生成或覆盖 `.cursor`）：

```bash
node .cursor/skills/copy-dot-cursor/scripts/copy-dot-cursor.js <目标目录>
```

示例：

```bash
node .cursor/skills/copy-dot-cursor/scripts/copy-dot-cursor.js ../other-project
```

- **目标目录**：相对于当前工作目录的路径；脚本会在该目录下写入或覆盖 `.cursor`。
- 目标目录的父目录必须已存在；若目标处已有 `.cursor`，会被整体覆盖。
