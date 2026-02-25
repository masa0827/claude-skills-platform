import { Metadata } from 'next';

export const metadata: Metadata = {
    title: '特定商取引法に基づく表記 | AI Skills Library',
};

export default function LegalPage() {
    return (
        <div className="max-w-[680px] mx-auto px-6 py-16">
            <h1 className="text-[32px] font-semibold tracking-tight text-[#1d1d1f] mb-2">
                特定商取引法に基づく表記
            </h1>
            <p className="text-[14px] text-[#86868b] mb-10">
                最終更新日: 2026年2月25日
            </p>

            <div className="space-y-6 text-[15px] text-[#424245] leading-relaxed">
                <div className="bg-[#f5f5f7] rounded-2xl p-6 space-y-4">
                    <div>
                        <dt className="text-[13px] font-semibold text-[#86868b] uppercase tracking-wider mb-1">事業者名</dt>
                        <dd className="text-[#1d1d1f]">株式会社ユーダイモニア</dd>
                    </div>
                    <div>
                        <dt className="text-[13px] font-semibold text-[#86868b] uppercase tracking-wider mb-1">代表者</dt>
                        <dd className="text-[#1d1d1f]">当社ウェブサイトに記載</dd>
                    </div>
                    <div>
                        <dt className="text-[13px] font-semibold text-[#86868b] uppercase tracking-wider mb-1">所在地</dt>
                        <dd className="text-[#1d1d1f]">当社ウェブサイト（eudaimonia.co.jp）に記載</dd>
                    </div>
                    <div>
                        <dt className="text-[13px] font-semibold text-[#86868b] uppercase tracking-wider mb-1">電話番号</dt>
                        <dd className="text-[#1d1d1f]">請求があった場合は遅滞なく開示いたします</dd>
                    </div>
                    <div>
                        <dt className="text-[13px] font-semibold text-[#86868b] uppercase tracking-wider mb-1">お問い合わせ</dt>
                        <dd className="text-[#1d1d1f]">
                            当社ウェブサイト（
                            <a href="https://eudaimonia.co.jp" target="_blank" rel="noopener noreferrer" className="text-[#0071e3] hover:underline">
                                eudaimonia.co.jp
                            </a>
                            ）のお問い合わせ窓口よりご連絡ください
                        </dd>
                    </div>
                    <div>
                        <dt className="text-[13px] font-semibold text-[#86868b] uppercase tracking-wider mb-1">販売価格</dt>
                        <dd className="text-[#1d1d1f]">各スキルの詳細ページに表示する価格（税込）に準じます。無料スキルについては料金は発生しません。</dd>
                    </div>
                    <div>
                        <dt className="text-[13px] font-semibold text-[#86868b] uppercase tracking-wider mb-1">販売価格以外にかかる費用</dt>
                        <dd className="text-[#1d1d1f]">インターネット接続にかかる通信料はお客様のご負担となります。</dd>
                    </div>
                    <div>
                        <dt className="text-[13px] font-semibold text-[#86868b] uppercase tracking-wider mb-1">支払い方法</dt>
                        <dd className="text-[#1d1d1f]">クレジットカード、その他当社が別途定める決済手段</dd>
                    </div>
                    <div>
                        <dt className="text-[13px] font-semibold text-[#86868b] uppercase tracking-wider mb-1">支払い時期</dt>
                        <dd className="text-[#1d1d1f]">購入手続き完了時に決済が行われます。クレジットカードの場合、各カード会社の規約に基づく引き落とし日となります。</dd>
                    </div>
                    <div>
                        <dt className="text-[13px] font-semibold text-[#86868b] uppercase tracking-wider mb-1">商品の引渡し時期</dt>
                        <dd className="text-[#1d1d1f]">決済完了後、ウェブサイト上でのコピーまたはダウンロードにより即時提供いたします。</dd>
                    </div>
                    <div>
                        <dt className="text-[13px] font-semibold text-[#86868b] uppercase tracking-wider mb-1">返品・返金について</dt>
                        <dd className="text-[#1d1d1f]">
                            <p>デジタルコンテンツの性質上、購入後の返品・返金は原則としてお受けしておりません。</p>
                            <p className="mt-2">ただし、以下の場合は購入日から14日以内にお問い合わせいただくことで返金に応じます。</p>
                            <ul className="list-disc list-inside mt-1 space-y-1">
                                <li>スキルの内容が商品説明と著しく異なる場合</li>
                                <li>技術的な問題によりスキルが正常に利用できない場合</li>
                            </ul>
                        </dd>
                    </div>
                    <div>
                        <dt className="text-[13px] font-semibold text-[#86868b] uppercase tracking-wider mb-1">動作環境</dt>
                        <dd className="text-[#1d1d1f]">最新版のChrome、Safari、Firefox、Edgeで動作を確認しています。スキルの利用には、各対応AIツールのアカウントが別途必要です。</dd>
                    </div>
                    <div>
                        <dt className="text-[13px] font-semibold text-[#86868b] uppercase tracking-wider mb-1">特別な販売条件</dt>
                        <dd className="text-[#1d1d1f]">有料スキルの購入にはアカウント登録が必要です。未成年の方は、法定代理人の同意を得てからご利用ください。</dd>
                    </div>
                </div>
            </div>
        </div>
    );
}
