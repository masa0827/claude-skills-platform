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
                最終更新日: 2026年2月17日
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
                        <dd className="text-[#1d1d1f]">本サービスで提供するスキルファイルはすべて無料です</dd>
                    </div>
                    <div>
                        <dt className="text-[13px] font-semibold text-[#86868b] uppercase tracking-wider mb-1">商品の引渡し</dt>
                        <dd className="text-[#1d1d1f]">ウェブサイト上でのコピーまたはダウンロードにより即時提供</dd>
                    </div>
                    <div>
                        <dt className="text-[13px] font-semibold text-[#86868b] uppercase tracking-wider mb-1">返品・キャンセル</dt>
                        <dd className="text-[#1d1d1f]">無料サービスのため、返品・キャンセルの取り扱いはありません</dd>
                    </div>
                    <div>
                        <dt className="text-[13px] font-semibold text-[#86868b] uppercase tracking-wider mb-1">動作環境</dt>
                        <dd className="text-[#1d1d1f]">最新版のChrome、Safari、Firefox、Edgeで動作を確認しています</dd>
                    </div>
                </div>
            </div>
        </div>
    );
}
