# Google Search Console 导出

## 在后台手动导出（无需代码�?
适用于你截图里的 **图片搜索** 报告�?
1. 打开 [Search Console](https://search.google.com/search-console) �?资源�?**quietash.life**
2. 左侧 **效果**（Performance�?3. 顶部 **搜索类型** �?�?**图片**
4. 选日期范围（如过�?7 �?/ 28 天）
5. 右上�?**导出**（Export）→ 下载表格（多�?Google 表格链接�?CSV�?
可按维度切换后分别导出：

- **网页** �?哪条 URL 有图片曝�? 
- **查询** �?用户搜了什么词时出现你的图  
- **国家/地区** �?与你截图一�? 

## 用脚本批量导�?CSV（API�?
```bash
# 一次性：�?OAuth Playground 取得 token，scope:
# https://www.googleapis.com/auth/webmasters.readonly

set GSC_ACCESS_TOKEN=ya29....
set GSC_SITE_URL=https://www.quietash.life/

npm run gsc:export
npm run gsc:export -- --days 7 --type image
npm run gsc:export -- --days 28 --web
```

生成目录：`exports/gsc/`（已 gitignore，勿提交 token）�?
`GSC_SITE_URL` 必须�?Search Console 资源列表里显示的地址完全一致（常见�?`https://www.quietash.life/` �?`sc-domain:quietash.life`）�?