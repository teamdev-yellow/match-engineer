function Match() {
  return (
    <div className="flex h-full rounded-t-xl bg-neutral-100">
      <div className="flex w-full flex-col gap-5 self-center justify-self-center">
        <h1 className="self-center text-4xl font-semibold">
          チーム開発に参加しよう！
        </h1>
        <p className="self-center text-sm font-medium">
          実務経験がなくても安心。エンジニア仲間と一緒にプロジェクトを始め、成長できる環境を提供
        </p>
        <div className="mt-7 self-center">
          <button className="rounded-xl bg-neutral-900 px-8 py-4 text-sm font-bold text-neutral-50">
            プロジェクトを選ぶ
          </button>
        </div>
      </div>
    </div>
  );
}

export default Match;
