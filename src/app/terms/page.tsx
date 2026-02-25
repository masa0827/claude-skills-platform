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
                最終更新日: 2026年2月25日
            </p>

            <div className="space-y-8 text-[15px] text-[#424245] leading-relaxed">
                <section>
                    <h2 className="text-[19px] font-semibold text-[#1d1d1f] mb-3">第1条（適用）</h2>
                    <ol className="list-decimal list-inside space-y-2">
                        <li>本規約は、株式会社ユーダイモニア（以下「当社」）が運営するサービス「AI Skills Library」（以下「本サービス」）の利用に関する条件を、本サービスを利用するすべての方（以下「ユーザー」）と当社との間で定めるものです。</li>
                        <li>ユーザーは、本規約に同意の上、本サービスを利用するものとします。本サービスの利用をもって、本規約に同意したものとみなします。</li>
                        <li>当社が本サービスに関して別途定める個別規約、ガイドライン、ポリシー等（以下「個別規約等」）は、本規約の一部を構成するものとします。本規約と個別規約等が矛盾する場合は、個別規約等が優先するものとします。</li>
                    </ol>
                </section>

                <section>
                    <h2 className="text-[19px] font-semibold text-[#1d1d1f] mb-3">第2条（サービスの内容）</h2>
                    <ol className="list-decimal list-inside space-y-2">
                        <li>本サービスは、AIツール（ChatGPT、Claude、Gemini、Copilot等）向けのスキルファイル（指示テンプレート、以下「スキル」）を提供するプラットフォームです。</li>
                        <li>本サービスでは、当社が別途定める無料スキルおよび有料スキルを取り扱います。</li>
                        <li>当社は、本サービスの内容（スキルの無料・有料の区分、価格、提供方法等を含みます）を、当社の裁量により変更することができるものとします。</li>
                    </ol>
                    <div className="mt-3 p-4 bg-[#f5f5f7] rounded-xl text-[14px]">
                        <p className="font-semibold text-[#1d1d1f] mb-1">経過措置</p>
                        <p>本規約改訂前（2026年2月25日以前）に無料で提供されていたスキルは、当面の間、無料での利用を継続できるものとします。ただし、当社は事前に通知の上、当該スキルの提供条件を変更できるものとします。</p>
                    </div>
                </section>

                <section>
                    <h2 className="text-[19px] font-semibold text-[#1d1d1f] mb-3">第3条（アカウント登録）</h2>
                    <ol className="list-decimal list-inside space-y-2">
                        <li>本サービスの一部の機能（有料スキルの購入、スキルの出品等）を利用するには、当社所定の方法によりアカウント登録が必要です。無料スキルの閲覧・コピーは、アカウント登録なしで利用できます。</li>
                        <li>ユーザーは、アカウント登録にあたり、真実かつ正確な情報を登録するものとし、登録情報に変更が生じた場合は速やかに更新するものとします。</li>
                        <li>ユーザーは、自己のアカウントの管理について一切の責任を負い、第三者に利用させ、または貸与、譲渡、売買等してはならないものとします。</li>
                        <li>アカウントの不正利用等により生じた損害について、当社は一切の責任を負いません。</li>
                        <li>当社は、以下の場合にユーザーのアカウントを停止または削除できるものとします。
                            <ul className="list-disc list-inside ml-4 mt-1 space-y-1">
                                <li>本規約に違反した場合</li>
                                <li>登録情報に虚偽があることが判明した場合</li>
                                <li>その他、当社がアカウントの維持が不適切と判断した場合</li>
                            </ul>
                        </li>
                    </ol>
                </section>

                <section>
                    <h2 className="text-[19px] font-semibold text-[#1d1d1f] mb-3">第4条（料金および支払い）</h2>
                    <ol className="list-decimal list-inside space-y-2">
                        <li>無料スキルは、当社が別途指定するものに限り、無償で利用できます。</li>
                        <li>有料スキルの価格は、各スキルのページに表示される金額（税込）とします。</li>
                        <li>有料スキルの購入代金の支払いは、当社が指定する決済手段（クレジットカード、その他当社が認める方法）により行うものとします。</li>
                        <li>当社は、第三者クリエイターが出品するスキルの売上から、当社が別途定めるプラットフォーム手数料を差し引いた金額を、クリエイターに支払うものとします。手数料の料率その他の支払条件は、クリエイター向け規定（第8条）に定めるものとします。</li>
                        <li>ユーザーが支払いを遅滞した場合、年14.6%の割合による遅延損害金を支払うものとします。</li>
                    </ol>
                </section>

                <section>
                    <h2 className="text-[19px] font-semibold text-[#1d1d1f] mb-3">第5条（利用条件）</h2>
                    <ol className="list-decimal list-inside space-y-2">
                        <li>無料スキルは、個人利用および社内業務での利用を目的として、自由にコピー・改変・利用することができます。</li>
                        <li>有料スキルは、購入したユーザー本人が、個人利用および社内業務での利用を目的として、コピー・改変・利用することができます。</li>
                        <li>スキルファイルの内容は、ユーザーの責任において利用するものとします。スキルを利用したAIの出力結果については、当社は一切の責任を負いません。</li>
                        <li>有料スキルの購入後の返金は、第9条に定める場合を除き、原則として行いません。デジタルコンテンツの性質上、ダウンロードまたはコピーが完了した時点で、サービスの提供が完了するものとします。</li>
                        <li>ただし、以下の場合は返金の対象とします。
                            <ul className="list-disc list-inside ml-4 mt-1 space-y-1">
                                <li>スキルの内容が、説明と著しく異なる場合</li>
                                <li>技術的な問題により、スキルが正常に利用できない場合</li>
                                <li>その他、当社が返金が相当と認めた場合</li>
                            </ul>
                        </li>
                        <li>返金を希望する場合は、購入日から14日以内に当社所定の方法により申請するものとします。</li>
                    </ol>
                </section>

                <section>
                    <h2 className="text-[19px] font-semibold text-[#1d1d1f] mb-3">第6条（禁止事項）</h2>
                    <p className="mb-2">ユーザーは、本サービスの利用にあたり、以下の行為を行ってはなりません。</p>
                    <ol className="list-decimal list-inside space-y-2">
                        <li>当社が許諾した範囲を超えて、スキルを第三者に再配布または再販売する行為</li>
                        <li>有料スキルを購入せずに不正に取得する行為、または購入したスキルを未購入の第三者に共有する行為</li>
                        <li>本サービスのコンテンツを大量に自動収集（スクレイピング）する行為</li>
                        <li>本サービスの運営を妨害する行為（サーバーへの過度な負荷を含みます）</li>
                        <li>他のユーザー、クリエイター、または第三者の知的財産権その他の権利を侵害する行為</li>
                        <li>虚偽の情報を登録し、または他人になりすます行為</li>
                        <li>不正な決済手段を利用する行為</li>
                        <li>法令または公序良俗に違反する行為</li>
                        <li>反社会的勢力等への利益供与その他の関与</li>
                        <li>その他、当社が不適切と判断する行為</li>
                    </ol>
                </section>

                <section>
                    <h2 className="text-[19px] font-semibold text-[#1d1d1f] mb-3">第7条（知的財産権）</h2>
                    <ol className="list-decimal list-inside space-y-2">
                        <li>当社が作成・提供するスキルの著作権その他の知的財産権は、当社に帰属します。</li>
                        <li>第三者のクリエイターが本サービスに出品するスキルの著作権は、当該クリエイターに帰属します。クリエイターは、本サービスを通じてスキルを販売・配布するために必要な範囲で、当社に対し非独占的な利用許諾を行うものとします。</li>
                        <li>ユーザーは、購入または取得したスキルを、本規約で認められた範囲（個人利用および社内業務での利用）で利用する権利を取得しますが、スキル自体の著作権を取得するものではありません。</li>
                        <li>本サービスのウェブサイト全体のデザイン、ロゴ、テキスト、画像その他のコンテンツに関する知的財産権は、当社に帰属します。</li>
                    </ol>
                </section>

                <section>
                    <h2 className="text-[19px] font-semibold text-[#1d1d1f] mb-3">第8条（クリエイター向け規定）</h2>
                    <ol className="list-decimal list-inside space-y-2">
                        <li>
                            <span className="font-semibold text-[#1d1d1f]">クリエイター登録:</span> 本サービスにスキルを出品するには、ユーザーアカウントに加え、当社所定の審査を経たクリエイター登録が必要です。
                        </li>
                        <li>
                            <span className="font-semibold text-[#1d1d1f]">出品の審査:</span> 当社は、出品されるスキルの品質・適法性を確保するため、スキルの掲載前に審査を行います。当社は、審査基準を満たさないスキルの掲載を拒否し、または掲載後に削除する権利を有します。
                        </li>
                        <li>
                            <span className="font-semibold text-[#1d1d1f]">プラットフォーム手数料:</span> 当社は、クリエイターのスキル売上から、当社が別途定める料率のプラットフォーム手数料を差し引くものとします。手数料の料率は、クリエイター登録時に通知し、変更する場合は30日前までに通知します。
                        </li>
                        <li>
                            <span className="font-semibold text-[#1d1d1f]">売上金の支払い:</span> 手数料控除後の売上金は、当社所定の支払いサイクルおよび方法によりクリエイターに支払います。支払い条件の詳細は、クリエイター向けガイドラインに定めます。
                        </li>
                        <li>
                            <span className="font-semibold text-[#1d1d1f]">コンテンツ基準:</span> クリエイターは、以下の基準を遵守するものとします。
                            <ul className="list-disc list-inside ml-4 mt-1 space-y-1">
                                <li>独自に作成した、または正当な権利を有するスキルのみを出品すること</li>
                                <li>第三者の著作権、商標権その他の権利を侵害しないこと</li>
                                <li>違法、有害、差別的、または公序良俗に反する内容を含まないこと</li>
                                <li>スキルの説明を正確に記載し、誇大な表現をしないこと</li>
                                <li>当社が別途定めるコンテンツガイドラインに従うこと</li>
                            </ul>
                        </li>
                        <li>
                            <span className="font-semibold text-[#1d1d1f]">クリエイターの責任:</span> クリエイターは、出品するスキルに関する問い合わせ対応およびサポートについて、合理的な範囲で責任を負うものとします。
                        </li>
                        <li>
                            <span className="font-semibold text-[#1d1d1f]">登録の取り消し:</span> 当社は、クリエイターが本規約またはコンテンツ基準に違反した場合、クリエイター登録を取り消すことができるものとします。
                        </li>
                    </ol>
                </section>

                <section>
                    <h2 className="text-[19px] font-semibold text-[#1d1d1f] mb-3">第9条（免責事項）</h2>
                    <ol className="list-decimal list-inside space-y-2">
                        <li>当社は、本サービスで提供するスキルの正確性、完全性、有用性、特定目的への適合性について、いかなる保証もしません。</li>
                        <li>スキルを利用したAIの出力結果に起因する損害について、当社は一切の責任を負いません。</li>
                        <li>第三者クリエイターが出品するスキルに関して生じた問題（品質、正確性、権利侵害等を含みます）について、当社はプラットフォーム提供者としての合理的な対応を行いますが、スキルの内容自体について保証するものではありません。</li>
                        <li>本サービスの利用に起因してユーザーに生じた損害について、当社の故意または重大な過失による場合を除き、当社の責任は、当該ユーザーが過去12か月間に当社に支払った利用料金の総額を上限とします。</li>
                        <li>当社は、ユーザー間またはユーザーとクリエイター間のトラブルについて、一切の責任を負いません。ただし、当社は紛争の解決に向けた合理的な協力を行うよう努めるものとします。</li>
                    </ol>
                </section>

                <section>
                    <h2 className="text-[19px] font-semibold text-[#1d1d1f] mb-3">第10条（サービスの変更・中断）</h2>
                    <ol className="list-decimal list-inside space-y-2">
                        <li>当社は、以下の場合に本サービスの全部または一部を変更・中断・終了することができるものとします。
                            <ul className="list-disc list-inside ml-4 mt-1 space-y-1">
                                <li>システムの保守・更新を行う場合</li>
                                <li>天災、障害等により本サービスの提供が困難な場合</li>
                                <li>その他、当社が必要と判断した場合</li>
                            </ul>
                        </li>
                        <li>当社は、本サービスの重大な変更または終了を行う場合、合理的な期間をもって事前に通知するよう努めるものとします。</li>
                        <li>当社は、本条に基づくサービスの変更・中断・終了によりユーザーに生じた損害について、責任を負いません。</li>
                    </ol>
                </section>

                <section>
                    <h2 className="text-[19px] font-semibold text-[#1d1d1f] mb-3">第11条（規約の変更）</h2>
                    <ol className="list-decimal list-inside space-y-2">
                        <li>当社は、必要に応じて本規約を変更することがあります。</li>
                        <li>規約を変更する場合、当社は変更内容および効力発生日を、本サービス上での掲示その他当社が適当と判断する方法により、事前に通知します。</li>
                        <li>変更後の規約は、効力発生日をもって効力を生じるものとし、ユーザーが効力発生日以降に本サービスを利用した場合、変更後の規約に同意したものとみなします。</li>
                    </ol>
                </section>

                <section>
                    <h2 className="text-[19px] font-semibold text-[#1d1d1f] mb-3">第12条（準拠法・管轄）</h2>
                    <ol className="list-decimal list-inside space-y-2">
                        <li>本規約の解釈にあたっては、日本法を準拠法とします。</li>
                        <li>本サービスに関して紛争が生じた場合は、東京地方裁判所を第一審の専属的合意管轄裁判所とします。</li>
                    </ol>
                </section>

                <section>
                    <h2 className="text-[19px] font-semibold text-[#1d1d1f] mb-3">第13条（お問い合わせ）</h2>
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
