import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'プライバシーポリシー | AI Skills Library',
};

export default function PrivacyPage() {
    return (
        <div className="max-w-[680px] mx-auto px-6 py-16">
            <h1 className="text-[32px] font-semibold tracking-tight text-[#1d1d1f] mb-2">
                プライバシーポリシー
            </h1>
            <p className="text-[14px] text-[#86868b] mb-10">
                最終更新日: 2026年2月17日
            </p>

            <div className="space-y-8 text-[15px] text-[#424245] leading-relaxed">
                <section>
                    <h2 className="text-[19px] font-semibold text-[#1d1d1f] mb-3">1. 事業者情報</h2>
                    <p>
                        本サービス「AI Skills Library」（以下「本サービス」）は、株式会社ユーダイモニア（以下「当社」）が運営しています。
                    </p>
                    <ul className="mt-2 space-y-1">
                        <li>商号: 株式会社ユーダイモニア</li>
                        <li>所在地: 当社ウェブサイト（eudaimonia.co.jp）に記載</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-[19px] font-semibold text-[#1d1d1f] mb-3">2. 収集する情報</h2>
                    <p className="mb-3">
                        本サービスでは、サービスの改善およびユーザー体験の向上を目的として、以下の情報を収集する場合があります。
                    </p>
                    <h3 className="font-semibold text-[#1d1d1f] mb-2">2.1 自動的に収集される情報</h3>
                    <ul className="list-disc list-inside space-y-1 mb-3">
                        <li>アクセスログ（IPアドレス、ブラウザ情報、アクセス日時）</li>
                        <li>ページの閲覧履歴</li>
                        <li>デバイス情報（OS、画面解像度）</li>
                        <li>リファラー情報</li>
                    </ul>
                    <h3 className="font-semibold text-[#1d1d1f] mb-2">2.2 Cookieおよびトラッキング技術</h3>
                    <p>
                        本サービスでは、Google Tag Manager（GTM）およびGoogle Analyticsを使用してアクセス解析を行っています。これらのサービスはCookieを使用してデータを収集しますが、個人を特定する情報は含まれません。
                    </p>
                </section>

                <section>
                    <h2 className="text-[19px] font-semibold text-[#1d1d1f] mb-3">3. 情報の利用目的</h2>
                    <p>収集した情報は、以下の目的で利用します。</p>
                    <ul className="list-disc list-inside space-y-1 mt-2">
                        <li>本サービスの提供・運営・改善</li>
                        <li>利用状況の分析・統計の作成</li>
                        <li>不正アクセスの検知・防止</li>
                        <li>ユーザーサポートへの対応</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-[19px] font-semibold text-[#1d1d1f] mb-3">4. 第三者への提供</h2>
                    <p>
                        当社は、以下の場合を除き、収集した情報を第三者に提供することはありません。
                    </p>
                    <ul className="list-disc list-inside space-y-1 mt-2">
                        <li>ユーザーの同意がある場合</li>
                        <li>法令に基づく場合</li>
                        <li>人の生命、身体または財産の保護に必要な場合</li>
                        <li>業務委託先への提供（適切な管理のもと）</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-[19px] font-semibold text-[#1d1d1f] mb-3">5. 外部サービスの利用</h2>
                    <p className="mb-2">本サービスでは、以下の外部サービスを利用しています。</p>
                    <ul className="list-disc list-inside space-y-1">
                        <li>Google Tag Manager / Google Analytics（アクセス解析）</li>
                    </ul>
                    <p className="mt-2">
                        これらのサービスのプライバシーポリシーについては、各サービス提供元のウェブサイトをご確認ください。
                    </p>
                </section>

                <section>
                    <h2 className="text-[19px] font-semibold text-[#1d1d1f] mb-3">6. データの保管と安全管理</h2>
                    <p>
                        当社は、収集した情報について、不正アクセス、漏洩、改ざん、紛失等を防止するために、適切な安全管理措置を講じます。
                    </p>
                </section>

                <section>
                    <h2 className="text-[19px] font-semibold text-[#1d1d1f] mb-3">7. ユーザーの権利</h2>
                    <p>
                        ユーザーは、ブラウザの設定によりCookieの受け入れを拒否することができます。ただし、一部の機能が利用できなくなる場合があります。
                    </p>
                </section>

                <section>
                    <h2 className="text-[19px] font-semibold text-[#1d1d1f] mb-3">8. ポリシーの変更</h2>
                    <p>
                        当社は、必要に応じて本プライバシーポリシーを変更することがあります。重要な変更がある場合は、本サービス上で通知します。変更後のプライバシーポリシーは、本ページに掲載した時点で効力を生じるものとします。
                    </p>
                </section>

                <section>
                    <h2 className="text-[19px] font-semibold text-[#1d1d1f] mb-3">9. お問い合わせ</h2>
                    <p>
                        本プライバシーポリシーに関するお問い合わせは、当社ウェブサイト（
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
