#!/usr/bin/env node
/**
 * 将当前项目的 .cursor 目录同步到指定目标目录
 * 用法: node sync-dot-cursor.js <目标目录>
 * 从 .cursor/skills/sync-dot-cursor/scripts/ 运行时，自动解析仓库根目录
 */

const fs = require('fs');
const path = require('path');

const repoRoot = path.resolve(__dirname, '..');
const sourceDir = path.join(repoRoot, '.cursor');

function main() {
  const targetBase = process.argv[2];
  if (!targetBase) {
    console.error('用法: node sync-dot-cursor.js <目标目录>');
    console.error('示例: node sync-dot-cursor.js ../other-project');
    process.exit(1);
  }

  const targetDir = path.resolve(process.cwd(), targetBase, '.cursor');

  if (!fs.existsSync(sourceDir)) {
    console.error(`错误: 源目录不存在: ${sourceDir}`);
    process.exit(1);
  }

  const targetParent = path.dirname(targetDir);
  if (!fs.existsSync(targetParent)) {
    console.error(`错误: 目标父目录不存在: ${targetParent}`);
    process.exit(1);
  }

  try {
    fs.cpSync(sourceDir, targetDir, { recursive: true });
    console.log(`已同步 .cursor -> ${targetDir}`);
  } catch (err) {
    console.error('同步失败:', err.message);
    process.exit(1);
  }
}

main();
