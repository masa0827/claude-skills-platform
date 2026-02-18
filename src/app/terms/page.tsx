import { Metadata } from 'next';

export const metadata: Metadata = {
    title: '利用規約 | AI Skills Library',
};

export default function TermsPage() {
    return (
        <div className="max-w-[680px] mx-auto px-6 py-16">
            <h1 className="text-[32px] font-semibold tracking-tight text-[#1d1d1f] mb-2">
                利用規約
            </h1>
            <p className="text-[14px] text-[#86868b] mb-10">
                最終更新日: 2026年2月17日
            </p>

            <div className="space-y-8 text-[15px] text-[#424245] leading-relaxed">
                <section>
                    <h2 className="text-[19px] font-semibold text-[#1d1d1f] mb-3">第1条（適用）</h2>
                    <p>
                        本規約は、株式会社ユーダイモニア（以下「当社」）が提供するサービス「AI Skills Library」（以下「本サービス」）の利用条件を定めるものです。ユーザーは、本規約に同意の上、本サービスを利用するものとします。
                    </p>
                </section>

                <section>
                    <h2 className="text-[19px] font-semibold text-[#1d1d1f] mb-3">第2条（サービスの内容）</h2>
                    <p>
                        本サービスは、AIツール（ChatGPT、Claude、Gemini、Copilot等）向けのスキルファイル（指示テンプレート）を無料で提供するウェブサービスです。ユーザーはアカウント登録不要で、スキルのコピー・ダウンロードを行うことができます。
                    </p>
                </section>

                <section>
                    <h2 className="text-[19px] font-semibold text-[#1d1d1f] mb-3">第3条（利用条件）</h2>
                    <ol className="list-decimal list-inside space-y-2">
                        <li>本サービスは、個人利用および商用利用のいずれにおいても無料でご利用いただけます。</li>
                        <li>スキルファイルの内容は、ユーザーの責任において利用するものとします。</li>
                        <li>スキルを利用したAIの出力結果については、当社は一切の責任を負いません。</li>
                    </ol>
                </section>

                <section>
                    <h2 className="text-[19px] font-semibold text-[#1d1d1f] mb-3">第4条（禁止事項）</h2>
                    <p className="mb-2">ユーザーは、本サービスの利用にあたり、以下の行為を行ってはなりません。</p>
                    <ol className="list-decimal list-inside space-y-2">
                        <li>本サービスのスキルを自身のサービスとして再販売する行為</li>
                        <li>本サービスのコンテンツを大量に自動収集（スクレイピング）する行為</li>
                        <li>本サービスの運営を妨害する行為</li>
                        <li>法令または公序良俗に違反する行為</li>
                        <li>他のユーザーまたは第三者の権利を侵害する行為</li>
                        <li>その他、当社が不適切と判断する行為</li>
                    </ol>
                </section>

                <section>
                    <h2 className="text-[19px] font-semibold text-[#1d1d1f] mb-3">第5条（知的財産権）</h2>
                    <ol className="list-decimal list-inside space-y-2">
                        <li>本サービスに掲載されるスキルファイルの著作権は、当社または正当な権利者に帰属します。</li>
                        <li>ユーザーは、本サービスで提供されるスキルを、個人利用および社内業務での利用を目的として、自由にコピー・改変・利用することができます。</li>
                        <li>ただし、スキルの内容を実質的に複製して第三者に有償で提供する行為は禁止します。</li>
                    </ol>
                </section>

                <section>
                    <h2 className="text-[19px] font-semibold text-[#1d1d1f] mb-3">第6条（免責事項）</h2>
                    <ol className="list-decimal list-inside space-y-2">
                        <li>当社は、本サービスで提供するスキルの正確性、完全性、有用性について、いかなる保証もしません。</li>
                        <li>スキルを利用したAIの出力結果に起因する損害について、当社は一切の責任を負いません。</li>
                        <li>本サービスの利用に起因してユーザーに生じた損害について、当社の故意または重大な過失による場合を除き、当社は責任を負いません。</li>
                        <li>本サービスは、予告なくサービス内容の変更、一時停止、または終了することがあります。</li>
                    </ol>
                </section>

                <section>
                    <h2 className="text-[19px] font-semibold text-[#1d1d1f] mb-3">第7条（サービスの変更・中断）</h2>
                    <p>
                        当社は、以下の場合に本サービスの全部または一部を変更・中断・終了することができるものとします。
                    </p>
                    <ol className="list-decimal list-inside space-y-1 mt-2">
                        <li>システムの保守・更新を行う場合</li>
                        <li>天災、障害等により本サービスの提供が困難な場合</li>
                        <li>その他、当社が必要と判断した場合</li>
                    </ol>
                </section>

                <section>
                    <h2 className="text-[19px] font-semibold text-[#1d1d1f] mb-3">第8条（規約の変更）</h2>
                    <p>
                        当社は、必要に応じて本規約を変更することがあります。変更後の規約は、本ページに掲載した時点で効力を生じるものとし、ユーザーが変更後に本サービスを利用した場合、変更後の規約に同意したものとみなします。
                    </p>
                </section>

                <section>
                    <h2 className="text-[19px] font-semibold text-[#1d1d1f] mb-3">第9条（準拠法・管轄）</h2>
                    <p>
                        本規約の解釈にあたっては日本法を準拠法とし、本サービスに関して紛争が生じた場合は、当社の本店所在地を管轄する裁判所を第一審の専属的合意管轄裁判所とします。
                    </p>
                </section>

                <section>
                    <h2 className="text-[19px] font-semibold text-[#1d1d1f] mb-3">第10条（お問い合わせ）</h2>
                    <p>
                        本規約に関するお問い合わせは、当社ウェブサイト（
                        <a href="https://eudaimonia.co.jp" target="_blank" rel="noopener noreferrer" className="text-[#0071e3] hover:underline">
                            eudaimonia.co.jp
                        </a>
                        ）のお問い合わせ窓口までご連絡ください。
                    </p>
                </section>
            </div>
        </div>
    );
}
