import { Skill } from '@/lib/types';

export const claudeCodeSkills: Skill[] = [
    // ============================================================
    // Claude Code スキル
    // ============================================================
    {
        id: 'slide-creator',
        name: 'スライド制作（Claude Code）',
        description: 'PPTX形式のプレゼン資料・提案書・ピッチデックを自動生成。pptxgenjsと37テンプレートで構成力・デザインまで担保。',
        longDescription: '上流工程（目的・構成確認）→テンプレート選択→コード生成→QAの順で進む本格スライド制作スキル。数字インパクト・グラフ・フロー図・タイムラインなど37種のテンプレートを組み合わせ、PowerPointで開けるプロ品質のPPTXを出力します。',
        category: '企画・リサーチ',
        iconName: 'Presentation',
        author: 'Eudaimonia',
        version: '1.0.0',
        githubPath: 'masa0827/claude-skills/slide-creator',
        setupNote: 'npm install pptxgenjs が必要です。ビジュアルQAにはLibreOfficeも必要。',
        content: `# Slide Creator Skill

## Overview

スライド制作は「上流→確認→下流」の順で進める。上流を省略すると「動く資料」は作れても「伝わる資料」にならない。この順番は絶対に守る。

**ツール**: pptxgenjs + slide-templates.js（37テンプレートライブラリ）
**出力形式**: .pptx（LAYOUT_16x9: 10"×5.625"）

## Step 1: 上流工程（実装前に必ず実施）

### 1-1. 目的×ターゲット
依頼文から読み取る。不明なら確認する：
- 誰に見せるか（社内/クライアント/投資家）
- 何をしてほしいか（理解/承認/行動）
- 読む場面（会議で説明/メールで送付/自分で読む）

### 1-2. 資料全体で「何を伝えるか」を1文で言語化
この1文が決まらないうちはスライド構成に入らない。

### 1-3. スライド構成（枚数・順番・各スライドの役割）
→ ユーザーに提示して確認を取る。確認なしにStep 2へ進まない。

## Step 2: 下流工程（確認後）

### テンプレート選択の原則
| 目的 | 推奨テンプレート |
|------|----------------|
| 概要・目次 | tableOfContents, sectionDivider |
| 3つの理由・特徴 | horizontal3, grid2x2, grid3 |
| ビフォーアフター | beforeAfter, horizontal2 |
| 手順・フロー | flowHorizontal, flowVertical |
| 数字インパクト | bigStat, ranking |
| データ可視化 | barChartSlide, lineChartSlide |
| 時間軸 | timeline |
| 表紙 | cover |

## 重要な設計原則

1. 1スライド = 1主役の図
2. 図は大きく・シンプル・3〜5秒で理解できる
3. NEVER use \`#\` in hex colors（pptxgenjsでファイル破損）
4. mkShadow()は毎回新規呼び出し（オブジェクト共有禁止）
5. グラフはデータポイントを10-20に増やしてプロ品質に
6. 日本語チャートはfix_chart_labels.pyを必ず実行（PowerPoint文字化け対策）`,
        tags: ['スライド', 'PowerPoint', 'PPTX', 'プレゼン', '提案書', 'Claude Code'],
        timeSaved: '3時間/資料',
        difficulty: 'しっかり',
        examples: [
            {
                title: '営業提案書の制作',
                context: 'クライアントへの提案資料をPPTX形式で作成する例',
                input: 'イラン危機が日本経済に与える影響について経営者向けのスライドを作って。12枚程度。',
                output: '上流工程でメッセージを「日本はホルムズ海峡への依存度が最も高い主要国であり、今すぐ代替調達戦略が必要」と1文で定義。表紙→エグゼクティブサマリー→タイムライン→各国立場→日本の脆弱性データ（グラフ）→3シナリオの順で構成案を提示→確認後にPPTX生成。',
            },
        ],
        useCases: [
            'クライアントへの提案書・ピッチデック',
            '経営層向けの報告資料',
            '市場調査レポートのビジュアル化',
            'カンファレンス登壇スライド',
        ],
        tips: [
            'まず「この資料で相手に何をしてほしいか」を1文で言語化してから依頼する',
            'グラフは最低10データポイントを用意すると一気にプロ品質になる',
            '表紙画像はloremflickrで自動取得されるので指定不要',
        ],
    },
    {
        id: 'ai-writer-claude-code',
        name: 'AIライター（Claude Code）',
        description: 'AI臭ゼロの自然な日本語文章を生成。もとやま氏「AIっぽい文章表現大全」の6パターン排除・3つの崩し技術を実装。',
        longDescription: 'ブログ・メルマガ・note・SNSなど、あらゆる文章生成時に自動適用。Markdown記法なし、語尾の変化、主観の混入、論理の蛇行など「人間が書いた」としか思えない文章を生成します。Claude Codeのプロジェクトに配置して使います。',
        category: 'マーケティング',
        iconName: 'PenTool',
        author: 'Eudaimonia',
        version: '1.0.0',
        githubPath: 'masa0827/claude-skills/ai-writer',
        content: `# AIライターv1 — 人間らしい文章生成スキル

## 概要

このスキルは、AIが生成する文章から「AI臭」を完全に除去し、人間が書いたような自然で説得力のある文章を生成します。

もとやま氏（@ysk_motoyama）の「AIっぽい文章表現大全」で定義された6つのAI特有パターンを避け、3つの「崩し技術」を適用します。

## AIっぽさの6つの特徴（絶対に避ける）

1. 視覚的な記号が残ったまま（**太字**、—、()多用）
2. 文のリズムが単調（同じ語尾が続く）
3. 導入と進行が説明書っぽい（「以下の3つの観点から〜」）
4. 事なかれ主義なスタンス（「一概には言えませんが」）
5. 言葉選びが抽象語・万能語に寄る
6. 変な比喩が多い（地図・羅針盤・DNA等）

## 人間らしさを作る3つの崩し技術

1. **バランスを崩す** — 敢えてスタンスを取る、言い切る
2. **客観を崩す** — 主観・一次情報・尖った価値観を入れる
3. **論理を崩す** — 話を蛇行させる、矛盾を残す、感情の動きを見せる

## 禁止事項

- \`**テキスト**\`（Markdown太字）
- 「結論から言うと」で始める定型文
- 「以下の〜つの観点から」構造宣言
- 「一概には言えませんが」などの保険表現
- 「メリットもあればデメリットもあります」
- 地図・羅針盤・土台・DNA・潤滑油などの陳腐な比喩
- 3回以上連続する同じ語尾`,
        tags: ['ライティング', '脱AI臭', 'ブログ', 'note', 'SNS', 'Claude Code'],
        timeSaved: '20分/記事',
        difficulty: 'かんたん',
        examples: [
            {
                title: 'ブログ記事のAI臭を除去',
                context: 'AI生成した記事を人間らしい文体にリライトする例',
                input: '「AIを活用した業務効率化について、以下の3つの観点から解説します。**メリットとデメリット**を踏まえ、一般的には〜」',
                output: 'AIで業務が変わった、というより、変わらざるを得なくなった。うちのチームの話をする。\n\n今年の4月から請求書処理をAIに任せた。正直、最初は懐疑的だった。ミスが怖かったし、確認作業が増えるだけでは？と。\n\n3ヶ月たった今、月40時間あった作業が8時間になった。数字だけ見ると魔法みたいだけど、全然そんなことはない。',
            },
        ],
        useCases: [
            'ブログ・note記事の執筆・リライト',
            'メルマガ・ニュースレターの本文',
            'SNS投稿の長文（X、Instagram等）',
            'AI生成文章の人間らしさ改善',
        ],
    },
    {
        id: 'x-research',
        name: 'Xリサーチ（Claude Code）',
        description: 'Grok x_searchでX(Twitter)のリアルタイム情報を検索・収集し、記事執筆やコンテンツ制作に使えるContext Packを生成。',
        longDescription: '通常のAIはXのリアルタイム情報の取得精度が低い。このスキルはxAI APIのGrokをX検索専用レイヤーとして活用し、一次情報・用語定義・反論・数字を揃えたContext Packを生成します。記事執筆・SNS投稿・提案資料の前工程として使います。',
        category: '企画・リサーチ',
        iconName: 'Search',
        author: 'Eudaimonia',
        version: '1.0.0',
        githubPath: 'masa0827/claude-skills/x-research',
        setupNote: 'xAI APIキーが必要です（x.ai で取得、約$0.1/回）。インストール後に npm install + .env設定が必要。',
        content: `# X Research — Grok x_search リサーチスキル

## Overview

AIでリサーチする際、X（Twitter）のリアルタイム情報の取得は精度が低い。
このスキルは **Grok (xAI API) を「X検索専用レイヤー」** として使い、記事執筆・コンテンツ作成の前工程で一次情報/用語/反論/数字を揃えた **Context Pack** を生成する。

## Prerequisites

- Node.js がインストールされていること
- xAI API Key（[x.ai](https://x.ai/) で取得、従量課金 約$0.1/回）

## Setup

\`\`\`bash
npm install
cp .env.example .env
# .env を編集して XAI_API_KEY を設定
\`\`\`

## Usage

\`\`\`bash
npx tsx scripts/grok_context_research.ts --topic "調べたいトピック"
npx tsx scripts/grok_context_research.ts --topic "xAI 2026" --locale global --audience investor
\`\`\`

## Context Pack の構成

- **Why Now**: なぜ今このトピックか
- **Key Questions**: 主要な問い（5-8個）
- **Terminology**: 用語定義（出典あり）
- **Data Points**: 数字データ（日付・出典あり）
- **Contrasts**: 反論・注意点
- **Suggested Angles**: 記事の切り口（3案）`,
        tags: ['X', 'Twitter', 'リサーチ', 'Grok', 'xAI', 'コンテンツ制作', 'Claude Code'],
        timeSaved: '1時間/記事',
        difficulty: 'ふつう',
        examples: [
            {
                title: 'AI最新動向のリサーチ',
                context: 'X上のリアルタイムな議論を収集してContext Packを生成する例',
                input: 'npx tsx scripts/grok_context_research.ts --topic "Claude Codeの最新活用事例" --locale ja',
                output: 'Context Pack生成完了。Why Now（3点）、Key Questions（7個）、用語定義（Claude Code、スキル、MCPサーバー等）、X上のデータポイント12件、反論2件、記事切り口3案が data/context-research/ に保存される。',
            },
        ],
        useCases: [
            'ブログ・note記事の執筆前リサーチ',
            'X投稿のネタ収集',
            'トレンド・業界動向の把握',
            '提案資料の一次情報収集',
        ],
        tips: [
            '--dry-run オプションでAPIを叩かずにリクエスト内容を確認できる',
            '--locale global で英語圏の議論も取得できる',
            'slide-creator や lp-generator と組み合わせると資料制作が高速化する',
        ],
    },
    {
        id: 'storyboard-creator',
        name: '動画ラフ絵コンテ生成（Claude Code）',
        description: '動画の企画（目的・尺・セリフ等）から、GPT Image 2 など画像生成AIに投げる「ラフ絵コンテ生成プロンプト」を組み立てる。企画合意を秒で取るための素材作り。',
        longDescription: '動画制作の「企画合意フェーズ」を高速化するスキル。尺からコマ数（15秒=6 / 30秒=9 / 60秒=12）を自動計算し、コマ単位でシーン・セリフ・カメラ指示を整理。GPT Image 2 の文字描画強みを活かしてコマ内に「カット番号・秒数・セリフ・カメラ指示」を焼き込むプロンプトを生成します。動画化は後続スキルへ委譲する単機能設計。',
        category: '企画・リサーチ',
        iconName: 'Clapperboard',
        author: 'Eudaimonia',
        version: '1.0.0',
        githubPath: 'masa0827/claude-skills/storyboard-creator',
        setupNote: '画像生成API（GPT Image 2 / Nano Banana Pro 等）は利用者環境に合わせて都度確認。APIキーは環境変数で扱う。',
        content: `# storyboard-creator — 動画ラフ絵コンテ生成スキル

## Overview

動画の企画テキストを受け取り、N×Nグリッドのラフ絵コンテ画像を生成するための「画像生成プロンプト」を組み立てる。

目的は「動画の企画合意を秒で取る」ための素材作り。きれいな絵より、構成・秒数・セリフ・カメラワークが一発で伝わることを重視。

## 推奨画像生成AI

| AI | 強み | 使い分け |
|----|------|---------|
| GPT Image 2 | 文字描画が強い。セリフ・カメラ指示をコマ内に焼き込める | 第一選択 |
| Nano Banana Pro | キャラ・画風の一貫性が強い | キャラ固定の連続コマ |
| Nano Banana 2 | コスト低 | フォールバック |

## コマ数計算

| 動画尺 | コマ数 | グリッド |
|-------|-------|---------|
| 〜15秒 | 6 | 2×3 / 3×2 |
| 〜30秒 | 9 | 3×3 |
| 〜60秒 | 12 | 3×4 / 4×3 |
| 60秒以上 | 15〜16 | 4×4 / 3×5 / 5×3 |

## 実行手順

1. 必須入力を取得（目的・ターゲット・コアメッセージ・尺・アスペクト比）
2. 尺からコマ数とグリッド形を決定
3. コマ単位でシーン設計（カット番号・秒数・内容・セリフ・カメラ・モーション）
4. 画像生成プロンプトを組み立て（固定テンプレート）
5. コマ割り表と画像生成プロンプトを提示
6. 承認後、利用者の画像生成環境で実行

## 承認ゲート

- 入力項目の確認
- コマ割り表の確認
- 画像生成プロンプトの確認
- 生成画像の確認（NGならコマ割り表に戻る）

## 後続への引き渡し

絵コンテ承認後、各コマを動画化する場合は nanobanana-creator 等で本番画像を生成し、Seedance / Kling / Runway 等の動画生成AIに投入。このスキルの責任範囲は「絵コンテ合意まで」。`,
        tags: ['動画', 'ストーリーボード', '絵コンテ', 'GPT Image 2', '企画', 'Claude Code'],
        timeSaved: '1本/動画企画',
        difficulty: 'ふつう',
        examples: [
            {
                title: 'SNS広告動画の企画承認',
                context: '30秒のB2B動画企画を社内合意するためのラフ絵コンテを生成する例',
                input: '目的: OEM相談フォーム誘導 / ターゲット: 中小メーカー社長 / コアメッセージ: 小ロット1個から試作可能 / 尺: 30秒 / アスペクト比: 16:9',
                output: '3×3グリッドのコマ割り表（#1悩み→#5弊社紹介→#9 CTA）と、GPT Image 2 に投入できる画像生成プロンプト一式を出力。生成された絵コンテ1枚で社内/クライアント承認を即取得。',
            },
        ],
        useCases: [
            'SNS広告動画の企画承認プロセス高速化',
            'クラファン動画のストーリー合意形成',
            'クライアント提案時のビジュアル共有',
            '動画生成AIへの入力前段の設計',
        ],
        tips: [
            '焼き込みテキストは全て日本語で統一（多言語混在で崩れる）',
            'コマ数とグリッド形は必ず整合させる（3×3=9コマ）',
            'セリフは短く（1コマ10〜15文字以内）',
            'カメラ指示は1つに絞る（引き/寄り/パン/ズーム/固定から混在禁止）',
        ],
    },
];
