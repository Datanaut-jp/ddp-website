// 各役割のデータ
const roles = [
  {
    name: '業務という宇宙空間に地図を描く',
    description: 'BPR支援を通じて、複雑な業務フローを整理・最適化し、進むべき航路を明確にします。',
    icon: 'map',
  },
  {
    name: '見えない情報を可視化する',
    description: 'ITツールの導入や業務の自動化により、これまで眠っていたデータを価値ある情報へと変え、視界をクリアにします。',
    icon: 'eye',
  },
  {
    name: '意思決定の軌道を最適化する',
    description: 'AIとデータ活用支援を通じて、勘や経験だけに頼らない、データに基づいた最適な意思決定を可能にします。',
    icon: 'orbit',
  },
  {
    name: '限られた資源で未来を切り拓く',
    description: 'IT導入やDX推進に活用できる最適な助成金をご提案し、挑戦のための「燃料」を確保します。',
    icon: 'fuel',
  },
  {
    name: '経営者とともにゴールを目指す',
    description: '中小企業診断士として、孤独な航海にはさせません。良きパートナーとして、経営のゴールまで伴走します。',
    icon: 'users',
  },
];

// アイコンを仮置きするためのコンポーネント
const RoleIcon = () => (
  <div className="flex-shrink-0">
    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600 text-white">
      {/* 仮のSVGアイコン */}
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/></svg>
    </div>
  </div>
);

// Rolesセクション本体
export const Roles = () => {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">Our Roles</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Datanautの役割
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            私たちは、データという広大な宇宙を旅するお客様の航海士として、様々な役割を担い、ビジネスの成功をナビゲートします。
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            {roles.map((role) => (
              <div key={role.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-lg font-semibold leading-7 text-gray-900">
                  <RoleIcon />
                  {role.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{role.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}