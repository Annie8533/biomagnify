# Microplastics 單字學習網站設計構想

## 參考基準（用戶指定）
用戶明確要求照著 https://mass-extinction-study-e7u8.vercel.app/ 做。該站風格即為本專案的 ground-truth 規格：

- **風格**：田野筆記（Field Guide）雜誌風——米白/羊皮紙背景（約 #f2ede3）、深墨綠（約 #0e4c3f）主色、磚紅 accent、襯線大標題（serif display）、卡片紙質感細邊框。
- **結構**：單頁長捲動 + 左側固定導覽（學習路徑錨點）；Hero（大標題+CTA+插圖）、Chapter 01 因果鏈四格卡、Chapter 02 單字標本庫（核心）、Chapter 03 輸出練習、Footer。
- **核心互動（Chapter 02）**：
  - 大閃卡 3D 翻轉：正面=詞性標籤、大字單字、IPA、HEAR IT 喇叭；點擊翻面看中文釋義+英文例句+FIELD NOTE；CLICK TO FLIP BACK
  - 上一張/下一張/標記已熟悉；進度 已知/總數
  - 右側 SPECIMEN INDEX 面板：搜尋框+分區按鈕（全部/A/B/C/D）+編號列表，點擊直接跳轉
- **發音**：HEAR IT 按鈕用 Web Speech API（speechSynthesis），同時顯示美式/英式 IPA。

## 主題改寫（貼合 Microplastics 內容）
- 品牌名：**MICROPLASTICS FIELD GUIDE／微塑膠田野筆記**
- 四區改寫為：A · Ocean & Pollution（環境與塑膠汙染）／B · Ecology & Food Web（生態學與食物網）／C · Health & Biology（醫療健康）／D · Academic & Descriptive（學術描述高分詞）
- 視覺意象：海洋、塑膠微粒、食物鏈——Hero 插圖用深綠海水中微粒漂浮的田野筆記插畫；icon 用 🌊🪨🧬📘 對應四區。
- 標題：「Microplastics 單字閃卡與發音」＋ Learn the key words. Flip, listen, and speak.

## 設計要點
- 字體：襯線 display（Playfair Display 或 Source Serif 4）+ 中文襯線（Noto Serif TC）+ 內文（系統無襯線）。
- 色彩：紙白 #f2ede3、墨綠 #0e4c3f、磚紅 #c4503c、次要灰棕。
- 閃卡翻轉用 CSS 3D transform（preserve-3d），過渡 <300ms ease-out。
- 熟悉度存 localStorage。

## Style Decisions
- Chapter 02 桌面佈局必須讀為雙面板「field desk」：左側大閃卡標本 + 右側 SPECIMEN INDEX 面板，作為單一主互動組合（閃卡在 xl 以上不應被索引面板擠到下方）。
- 品牌全名一律使用 MICROPLASTICS FIELD GUIDE／微塑膠田野筆記 作為刊物身份；僅在緊湊 masthead 使用 MICROPLASTICS。
- 閃卡是學習體驗的主角物件：以紙質標本頁處理——場域標籤、編號、IPA/發音標記、雙語翻面語言，而非普通 app 卡片。
