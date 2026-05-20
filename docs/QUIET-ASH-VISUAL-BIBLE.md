# Quiet Ash Visual Bible（品牌摄影圣经 · 最终版）

> **Superseded for taste and direction** by [QUIET-ASH-CONSTITUTION.md](./QUIET-ASH-CONSTITUTION.md) (v5.0). This file remains for craft-SKU mechanics and historical prompts only.

全站图片（首页、商品、Ritual、Journal、Banner、社媒）必须遵守本规范。  
AI / 摄影师 / 设计师 / 3D / 视频 **统一执行**。

**不要**把整份文档一次性贴进生成器。按 [image-generation.md](./image-generation.md) 拆成四层 prompt。

---

## 一、核心方向

**不是：** 东方禅意 AI 图 · 侘寂概念图 · 电影感静物  

**而是：** 真实存在的安静生活  

**English anchor:** `Quiet lived-in ritual photography`

---

## 二、固定品牌规则（每张图必加）

```
Quiet Ash visual system:
Editorial lifestyle photography.
Quiet lived-in interiors.
Natural daylight.
Warm beige, walnut brown, linen ivory, smoke black.
Authentic material textures.
Soft atmospheric realism.
Real-life proportions.
Objects feel naturally used, never staged.
A calm European-Japanese slow living atmosphere.
Not cinematic, not overly artistic, not luxury showroom.
```

代码常量：`data/visual-prompts.ts` → `QA_BRAND_BASE`

---

## 三、场景描述（每次更换）

描述：空间、器物、时间、刚刚被使用过的痕迹。  
Ritual 场景表：`data/ritual-image-prompts.ts`

---

## 四、摄影规则（决定「像不像摄影」）

```
Shot like real editorial photography.
Natural window lighting only.
50mm lens.
Subtle depth of field.
Soft shadow transitions.
No artificial symmetry.
No CGI look.
No hyper-detail.
Realistic scale and object proportions.
```

代码：`QA_PHOTO_RULES`

---

## 五、负面限制（必加）

```
No excessive minimalism.
No zen showroom.
No dramatic cinematic lighting.
No perfect symmetry.
No fantasy atmosphere.
No overly clean luxury interiors.
No obvious AI aesthetics.
No calligraphy floating in air.
No luxury hotel or mansion.
No product showroom staging.
No pure white or pure black backgrounds.
No saturated accent colors.
No blue or green color casts.
```

代码：`QA_NEGATIVE`

---

## 六、风格关键词簇

`editorial lifestyle photography` · `natural daylight` · `quiet living` · `lived-in interior` · `soft atmospheric realism` · `slow ritual` · `authentic materiality`

---

## 七、绝对禁止

1. **AI 侘寂感** — 极端阴影、孤独、暗黑、电影戏剧  
2. **完美摆拍** — 对称、每个角落都「设计过」  
3. **东方符号堆砌** — 毛笔字乱飞、香炉景区感、日式旅馆  
4. **过度高级感** — 豪宅、酒店大堂、奢侈品广告、showroom  

---

## 八、真实感规则

| 维度 | 要求 |
|------|------|
| 光线 | 单一主光源、阴影成立、有灰度空气；推荐 morning / late afternoon |
| 禁止棚拍 | 无硬轮廓、过亮高光、塑料反光 |
| 空气 | 微尘、柔烟、轻雾 — **不要仙气** |
| 构图 | 不居中、一侧更重、像被看见而非摆拍 |
| 使用痕迹 | 半开的书、皱 linen、茶未喝完、香在燃 |
| 比例 | 杯、炉、香插符合人手尺度 |
| 材质 | 磨损木、不均匀釉、折痕布、旧金属 |
| 书 | 有厚度与使用边，禁止空白道具书 |

---

## 九、颜色系统

**可用：** warm beige · linen · walnut brown · smoke black · soft ivory · aged wood · tea brown · charcoal  

**禁止：** 纯白 · 纯黑 · 鲜艳色 · 蓝/绿色偏  

---

## 十、时间系统（四档）

| 模式 | 特点 | 适用 |
|------|------|------|
| **Morning Quiet** 晨光 | 冷白柔光、亚麻透光、低对比 | 产品、茶器、linen、essays |
| **Afternoon Stillness** 午后 | 木色变暖、长阴影、柔金光 | 首页 Hero、Ritual、newsletter |
| **Evening Ritual** 黄昏 | 暖暗、炭黑角落、细烟 | 香、仪式细节、氛围 |
| **Rain Window** 阴雨 | 灰蓝空气、潮、柔窗 | Essays、雨后茶 |

代码：`TimeMode` in `data/visual-prompts.ts`

---

## 十一、空间系统

**推荐：** 木桌、窗边、亚麻、旧墙、纸、陶器  

**禁止：** 豪宅、极简 showroom、景区茶室、AI loft  

---

## 十二、镜头

50mm / 85mm · natural depth of field · editorial framing  

**禁止：** ultra cinematic · lens flare · hyper-sharp · 3D render  

---

## 十三、审图标准（不问美不美）

1. 真实吗？  
2. 像 Quiet Ash 吗？  
3. 像有人刚离开吗？  
4. 比例与材质可信吗？  

---

## 十四、参考方向（非模仿）

Kinfolk · Frama · Aesop home · Cereal · Japanese editorial interiors · Nordic lived-in — 但更安静、更东方、更私人、更有时间感。

---

## 全站用途对照

| 页面 | 时间模式 | 说明 |
|------|----------|------|
| 首页 Hero | Afternoon | 生活感，非产品棚拍 |
| 商品页 | **Morning Quiet only** | 统一晨光 + 头图简单直接；见 §商品 |
| Ritual | 见 `ritual-image-prompts.ts` | 每篇独立 cover + 4 steps |
| Journal | Morning / Rain | 空气与阅读 |
| Banner / IG | 与活动一致 | 始终带 brand base + negatives |

---

## 商品 / Objects 摄影（强制）

**时间：** 仅 **Morning Quiet 晨光**（代码里 `fullProductPrompt` / `fullProductHeroPrompt` 固定 `morning`）。

| 晨光 | 执行 |
|------|------|
| 冷白柔光 | 冷白漫射窗光或顶光；禁止蜜桃色、金黄午后、黄昏暖琥珀 |
| 亚麻透光 | 亚麻帘、亚麻布或统一亚麻纸感台面；头图在统一灰米亚麻纸纹理上完成 |
| 空气感 | 留白多、画面透气、不塞满道具 |
| 低对比 | 阴影柔和、无死黑、无过曝 |

**头图 hero — 简单直接：**

- **只拍一件物**：无手、无杂乱桌面、无水果花瓣等装饰道具  
- **一眼可读**：轻俯视或 3/4；物体约占画面 40–55%，其余为统一台面留白  
- **全站统一**：6 款商品同一套晨光 + 同一族灰米亚麻纸感背景（像同一场棚拍）  

**详情图 gallery / narrative / atmosphere：** 可带使用场景，但仍须晨光四要素；不得换回午后金光或暖色布景。

Prompt：`data/product-image-prompts.ts` · 安装：`npm run images:products-install`

---

## 文件路径

```
public/images/generated/rituals/{slug}/cover.png
public/images/generated/rituals/{slug}/step-01.png … step-04.png
public/images/generated/products/{slug}/hero.png
public/images/generated/products/{slug}/gallery-01.png … gallery-04.png
public/images/generated/products/{slug}/narrative.png · atmosphere.png
```

Ritual 内容：`content/rituals/{slug}.mdx` — **仅改 frontmatter 即可上新**，无需改代码。见 `content/rituals/README.md`。

---

## 工作流

```bash
npm run images:ritual-prompts              # 打印全部 prompt
npm run images:ritual-prompts incense-before-writing
```

生成 PNG（建议 3:2 或 4:3 横图）后放入上表路径。

---

## Changelog

- 2026-05 — 最终版品牌摄影圣经（中英对照执行摘要）
- 2026-05 — 商品图强制晨光 + 头图简单直接 + 统一亚麻纸感台面
