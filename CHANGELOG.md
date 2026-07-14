# Changelog

## v1.0.0 — 完全重构 🎉

使用官方脚手架（TypeScript + esbuild）完全重写，弃用旧版手动编写方式。内置中英文双语切换，40+ 错误模式库，崩溃弹窗一键分析。

### ✨ 新增
- 内置中英文切换按钮（设置面板一键切换，无需安装不同语言版本）
- 崩溃弹窗"直接分析"按钮 → 自动获取游戏日志并分析
- 错误模式库扩充至 40+ 条（内存、模组、网络、渲染、JVM、崩溃、通用）
- 四种严重等级：致命 / 严重 / 警告 / 提示
- 首页卡片快捷查看最近分析结果
- 崩溃分析弹窗，每项问题可点击展开详情和修复建议

### 🔄 重写优化
- 从手动编写迁移至官方脚手架（TypeScript + esbuild），代码结构更清晰
- 分析引擎全面重写，错误识别更精确、修复建议更详细
- 图标从 1MB 压缩至 9KB，大幅减少内存占用

### 🐛 修复
- 修复 BOM 编码问题导致脚本无法运行
- 修复 registerExtension 未被调用的问题
- 修复 JSX 工厂错误导致渲染失败的问题
- 修复崩溃日志获取时使用了错误的响应字段（resp.contents 替代 resp.data）

### ⚠️ 注意
- 最低启动器版本提升至 1.2.0
- 旧版 0.1.0 不再兼容，请删除后重新导入
- 因使用脚手架重构，源码需通过 npm run build 构建

---

## v1.0.0 — Complete Rewrite 🎉

Complete rewrite using the official scaffold (TypeScript + esbuild), replacing the old manual approach. Built-in bilingual switching, 40+ error patterns, and one-click crash analysis from the crash dialog.

### ✨ New
- Built-in language toggle (switch between Chinese/English in settings panel)
- "Analyze Now" button in crash dialog → auto-fetches game log and analyzes
- Expanded error pattern library: 40+ patterns (Memory, Mod, Network, Render, JVM, Crash, General)
- Four severity levels: Critical / High / Medium / Low
- Home widget for quick access to latest analysis results
- Crash analysis modal with expandable issue details and fix suggestions

### 🔄 Rewritten & Optimized
- Migrated from manual setup to official scaffold (TypeScript + esbuild)
- Analysis engine fully rewritten for more accurate error identification
- Icon compressed from 1MB to 9KB

### 🐛 Fixed
- Fixed BOM encoding causing script execution failure
- Fixed registerExtension not being called
- Fixed JSX factory reference causing render failure
- Fixed crash log retrieval using incorrect response field (resp.contents instead of resp.data)

### ⚠️ Note
- Minimum launcher version: 1.2.0
- Old version 0.1.0 is no longer compatible. Please remove and re-import
- Source code now requires npm run build to compile
