/*
 * Microplastics Field Guide — 單頁田野筆記
 * 依 ideas.md：米白紙感、墨綠、磚紅、襯線 display、左側導覽 + 單頁長捲動
 * Hero → 因果鏈 → 單字標本庫（閃卡+索引）→ 輸出練習 → Footer
 */
import { useState } from "react";
import { ArrowDown, ArrowRight, RotateCcw, Volume2 } from "lucide-react";
import { toast } from "sonner";
import FlashCard from "@/components/FlashCard";
import VocabIndex from "@/components/VocabIndex";
import { useVocabState, speakWord } from "@/hooks/useVocabState";
import { SECTION_NAMES, SECTION_SUB } from "@/lib/vocab";

const HERO_IMG = "/assets/mp-hero.jpg";
const LOGO_IMG = "/assets/mp-logo.jpg";
const STRATA_IMG = "/assets/mp-strata.jpg";

const NAV = [
  { no: "00", label: "先看證據", sub: "建立食物鏈地圖" },
  { no: "01", label: "微粒進入鏈", sub: "理解因果順序" },
  { no: "02", label: "單字標本庫", sub: "翻卡、聽、說" },
  { no: "03", label: "輸出練習", sub: "用英文重述" },
];

const CHAIN = [
  { no: "01", en: "Plastic", cn: "塑膠進入環境", desc: "從包裝、微珠到纖維，塑膠以微粒形式進入水體與土壤，成為最優先的記憶起點。" },
  { no: "02", en: "Food Web", cn: "食物網放大", desc: "浮游生物誤食微粒，經生物累積與生物放大沿食物鏈層層向上遞增。" },
  { no: "03", en: "Human Body", cn: "進入人體", desc: "經食物、飲水、呼吸與皮膚接觸，微粒穿過腸道、胎盤與循環系統。" },
  { no: "04", en: "Policy & Action", cn: "政策與行動", desc: "理解健康風險後，用學術詞彙談政策、治理與優先排序。" },
];

export default function Home() {
  const state = useVocabState();
  const { current, index, vocab, known, toggleKnown, jumpToWord, reset } = state;
  const [flipped, setFlipped] = useState(false);

  const goNext = () => {
    setFlipped(false);
    state.setIndex(Math.min(index + 1, vocab.length - 1));
  };
  const goPrev = () => {
    setFlipped(false);
    state.setIndex(Math.max(index - 1, 0));
  };
  const onJump = (item: typeof current) => {
    setFlipped(false);
    jumpToWord(item);
    document.getElementById("library")?.scrollIntoView({ behavior: "smooth" });
  };

  const ordinal = index + 1;

  return (
    <div className="paper-grain min-h-screen bg-background">
      {/* ===== 頂列 ===== */}
      <header className="border-b border-border bg-card/80 backdrop-blur-sm">
        <div className="flex items-center justify-between px-5 py-3 md:px-8">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2.5"
          >
            <img src={LOGO_IMG} alt="Microplastics Field Guide" className="h-8 w-8" />
            <span className="font-display text-sm font-bold tracking-[0.2em] text-sea uppercase">
              Microplastics Field Guide
            </span>
          </button>
          <div className="hidden items-center gap-6 font-display text-[11px] tracking-[0.2em] text-muted-foreground uppercase md:flex">
            <span className="flex items-center gap-2">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-brick" />
              Interactive Textbook 01
            </span>
            <span>46 Word Specimens</span>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* ===== 左側導覽（桌面） ===== */}
        <aside className="sticky top-0 hidden h-screen w-56 shrink-0 flex-col justify-between border-r border-border bg-sidebar p-6 lg:flex">
          <nav className="space-y-1">
            <p className="mb-4 font-display text-[10px] font-semibold tracking-[0.3em] text-brick uppercase">
              Learning Route
            </p>
            <p className="font-serif-cn mb-1 text-lg font-bold text-foreground">學習路徑</p>
            <p className="font-display mb-5 hidden text-[10px] tracking-[0.15em] text-muted-foreground uppercase xl:block">
              Microplastics Field Guide ／ 微塑膠田野筆記
            </p>
            {NAV.map((n, i) => (
              <a
                key={n.no}
                href={n.no === "00" ? "#evidence" : n.no === "01" ? "#chain" : n.no === "02" ? "#library" : "#speaking"}
                className="group flex items-start gap-3 border-l-2 border-transparent py-2.5 pl-3 transition-colors hover:border-sea"
              >
                <span className="font-display text-[10px] tracking-widest text-brick">
                  {n.no}
                </span>
                <span>
                  <span className="font-serif-cn block text-sm font-bold text-foreground">
                    {n.label}
                  </span>
                  <span className="block text-xs text-muted-foreground">{n.sub}</span>
                </span>
              </a>
            ))}
          </nav>
          <div className="space-y-2 border-t border-border pt-4 font-display text-[10px] tracking-[0.2em] text-muted-foreground uppercase">
            <p className="flex items-center gap-1.5">
              <Volume2 className="h-3 w-3" /> 先按播放，聽一次；再看中文，說一次。
            </p>
            <p>TOEFL / INTERMEDIATE · EDITION 01 · 2026</p>
          </div>
        </aside>

        {/* ===== 主內容 ===== */}
        <main className="min-w-0 flex-1">
          {/* ===== Hero ===== */}
          <section className="border-b border-border">
            <div className="grid gap-8 px-6 py-12 md:grid-cols-[1.1fr_0.9fr] md:px-10 md:py-16 lg:px-14">
              {/* 整頁英文介紹句（對應 NAV 00） */}
              <div>
                <p className="mb-5 flex items-center gap-3 font-display text-[11px] font-semibold tracking-[0.3em] text-sea uppercase">
                  <span className="inline-block w-8 border-t border-brick" />
                  Basic Field Guide ／ 基礎版單字地圖
                </p>
                <h1 className="font-display text-5xl leading-[1.15] font-extrabold text-sea md:text-6xl lg:text-7xl">
                  Microplastics
                  <br />
                  <span className="text-3xl font-bold text-brick md:text-4xl lg:text-5xl">
                    單字閃卡與發音
                  </span>
                </h1>
                <p className="mt-5 font-body text-base font-semibold text-sea">
                  Learn the key words. Flip, listen, and speak.
                </p>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
                  用互動閃卡學習微塑膠與食物鏈的 46 個核心單字，翻面查看中文，點擊聽取英文發音。
                </p>
                <div className="mt-7 flex flex-wrap items-center gap-3">
                  <a
                    href="#library"
                    className="inline-flex items-center gap-2 bg-sea px-5 py-3 font-display text-sm font-semibold tracking-wider text-primary-foreground transition-transform duration-150 hover:bg-sea-deep active:scale-[0.97]"
                  >
                    進入單字標本庫 <ArrowRight className="h-4 w-4" />
                  </a>
                  <button
                    onClick={() => speakWord(current.word)}
                    className="inline-flex items-center gap-2 border-2 border-dashed border-brick/60 px-5 py-3 font-display text-sm font-semibold tracking-wider text-brick transition-transform duration-150 hover:bg-brick hover:text-white active:scale-[0.97]"
                  >
                    <Volume2 className="h-4 w-4" /> 先聽一個詞
                  </button>
                </div>
              </div>
              <div className="relative border border-border bg-card p-3 shadow-[6px_6px_0_0_rgba(14,76,63,0.12)]">
                <img
                  src={HERO_IMG}
                  alt="微塑膠田野筆記插畫：海水中漂浮的塑膠微粒與食物鏈"
                  className="aspect-[4/3] w-full object-cover"
                />
                <div className="absolute -left-2 top-4 border border-sea bg-card px-2.5 py-1.5 font-display text-[10px] font-bold tracking-[0.15em] text-sea uppercase">
                  Read
                  <br />
                  The
                  <br />
                  Evidence
                </div>
                <p className="mt-3 flex items-center justify-between font-display text-[10px] tracking-[0.2em] text-muted-foreground uppercase">
                  <span>Fig. 01</span>
                  <span>plastic → food web → human health</span>
                </p>
              </div>
            </div>
          </section>

          {/* ===== 00 先看證據 ===== */}
          <section id="evidence" className="border-b border-border px-6 py-14 md:px-10 lg:px-14">
            <p className="font-display text-[11px] font-semibold tracking-[0.3em] text-brick uppercase">
              Chapter 00 / Evidence First
            </p>
            <div className="mt-4 grid gap-8 md:grid-cols-[1fr_0.8fr]">
              <div>
                <h2 className="font-serif-cn text-4xl font-black leading-snug text-sea md:text-5xl">
                  先看清楚，
                  <br />
                  <span className="text-brick">再開始記。</span>
                </h2>
                <p className="mt-3 font-display text-sm font-semibold italic text-brick">
                  Look before you memorize.
                </p>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
                  一個塑膠微粒的旅程，可以拆成四個可以聽懂、可以複述的節點。先記住這四個節點，單字就會自己歸位。
                </p>
              </div>
              <p className="self-end font-serif-cn text-sm leading-relaxed text-muted-foreground">
                每個節點都有一組代表詞：記住它們的因果順序，整份教材的單字就串起來了。
              </p>
            </div>
            <div id="chain" className="mt-10 grid grid-cols-1 gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4 scroll-mt-16">
              {CHAIN.map((c) => (
                <div key={c.no} className="bg-card p-6 transition-colors hover:bg-accent/40">
                  <div className="flex items-center justify-between border-b-2 border-brick pb-3">
                    <span className="font-display text-sm text-muted-foreground">{c.no}</span>
                    <ArrowDown className="h-3.5 w-3.5 rotate-[-45deg] text-brick" />
                  </div>
                  <h3 className="font-display mt-4 text-2xl font-bold text-sea">{c.en}</h3>
                  <p className="mt-1 font-serif-cn text-sm font-bold text-foreground">{c.cn}</p>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{c.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
              <div className="relative overflow-hidden border border-border">
                <img src={STRATA_IMG} alt="海洋層狀剖面插畫" className="aspect-[3/4] w-full object-cover" />
                <p className="absolute bottom-3 left-3 bg-card/90 px-2.5 py-1.5 font-display text-xs font-bold tracking-wider text-sea uppercase">
                  Field Note 01 — 每一層，都是一段記憶。
                </p>
              </div>
              <div className="flex flex-col justify-center border border-border bg-sea p-8 text-primary-foreground">
                <p className="font-display text-[10px] tracking-[0.3em] opacity-70 uppercase">
                  Memory Tip
                </p>
                <p className="font-serif-cn mt-3 text-lg font-bold leading-relaxed">
                  bioaccumulation 是「層層累積」，
                  biomagnification 是「越吃越濃」。
                </p>
                <p className="mt-3 text-xs leading-relaxed opacity-80">
                  一個沿時間堆疊，一個沿食物鏈放大——分清楚這兩個詞，B 區就半熟。
                </p>
              </div>
              <div className="border border-border bg-[oklch(0.88_0.05_70)] p-8">
                <p className="font-display text-[10px] tracking-[0.3em] text-sea uppercase">
                  Field Note 02
                </p>
                <p className="font-serif-cn mt-3 text-lg font-bold leading-relaxed text-foreground">
                  microplastic 不是故事裡的配角；它是整篇教材的主角。
                </p>
                <p className="mt-3 text-xs leading-relaxed text-foreground/70">
                  從製作、碎裂、累積到進入人體，所有單字都圍繞它展開。
                </p>
              </div>
            </div>
          </section>

          {/* ===== 02 單字標本庫 ===== */}
          <section id="library" className="border-b border-border bg-secondary/40 px-6 py-14 md:px-10 lg:px-14">
            <p className="font-display text-[11px] font-semibold tracking-[0.3em] text-brick uppercase">
              Chapter 02 / Specimen Library
            </p>
            <div className="mt-4 grid gap-8 md:grid-cols-[1fr_0.8fr]">
              <div>
                <h2 className="font-serif-cn text-4xl font-black leading-snug text-sea md:text-5xl">
                  把字翻過來，
                  <br />
                  <span className="text-brick">讓它留下來。</span>
                </h2>
                <p className="mt-3 font-display text-sm font-semibold italic text-brick">
                  Flip it over, and it stays.
                </p>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
                  每張卡都來自教材的 46 個核心詞彙，依背誦優先順序排列。翻面看中文，按下播放，把發音放進耳朵裡。
                </p>
              </div>
              <div className="space-y-2 self-end">
                {(["A", "B", "C", "D"] as const).map((s) => (
                  <p key={s} className="text-xs text-muted-foreground">
                    <span className="mr-2 font-display font-bold text-sea">{s}.</span>
                    {SECTION_NAMES[s]} — {SECTION_SUB[s]}
                  </p>
                ))}
              </div>
            </div>

            <div className="mt-10 grid items-start gap-6 lg:grid-cols-[1fr_360px]">
              <div className="border border-border bg-background p-3 shadow-[6px_6px_0_0_rgba(14,76,63,0.10)] md:p-4">
                <p className="mb-3 font-display text-[10px] tracking-[0.3em] text-sea uppercase">
                  Field Desk ／ 翻卡工作站
                </p>
              <FlashCard
                item={current}
                ordinal={ordinal}
                total={vocab.length}
                flipped={flipped}
                onFlip={() => setFlipped((f) => !f)}
                known={known.has(current.word)}
                onToggleKnown={() => toggleKnown(current.word)}
                onPrev={goPrev}
                onNext={goNext}
              />
              </div>
              <div className="lg:sticky lg:top-6">
                <VocabIndex knownCount={known.size} onJump={onJump} />
              </div>
            </div>
          </section>

          {/* ===== 03 輸出練習 ===== */}
          <section id="speaking" className="px-6 py-14 md:px-10 lg:px-14">
            <p className="font-display text-[11px] font-semibold tracking-[0.3em] text-brick uppercase">
              Chapter 03 / Speaking Notes
            </p>
            <div className="mt-4 grid gap-8 md:grid-cols-[1fr_0.8fr]">
              <div>
                <h2 className="font-serif-cn text-4xl font-black leading-snug text-sea md:text-5xl">
                  從認得，
                  <br />
                  <span className="text-brick">走到會說。</span>
                </h2>
                <p className="mt-3 font-display text-sm font-semibold italic text-brick">
                  From recognition to your own voice.
                </p>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
                  做完一輪閃卡，選一個詞，用自己的聲音把它送回塑膠的故事裡。
                </p>
              </div>
            </div>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {[
                {
                  no: "01",
                  title: "the source",
                  word: vocab[0],
                  example: "cosmetic companies add microbeads to face wash.",
                },
                {
                  no: "02",
                  title: "the damage",
                  word: vocab.find((v) => v.word === "biomagnification")!,
                  example: "toxins concentrate as they rise up the food web.",
                },
              ].map((s) => (
                <div
                  key={s.no}
                  className="border border-border bg-card p-7 transition-colors hover:bg-accent/40"
                >
                  <p className="font-display text-xs tracking-[0.25em] text-brick uppercase">
                    {s.no} / {s.title}
                  </p>
                  <h3 className="font-display mt-3 text-2xl font-bold text-sea">{s.word.word}</h3>
                  <p className="mt-2 font-serif-cn text-sm font-bold text-foreground">{s.word.cn}</p>
                  <p className="mt-2 text-sm italic text-muted-foreground">{s.example}</p>
                  <button
                    onClick={() => {
                      jumpToWord(s.word);
                      setFlipped(false);
                      document.getElementById("library")?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="mt-4 border border-sea px-4 py-2 font-display text-xs font-semibold tracking-[0.15em] text-sea transition-all duration-150 hover:bg-sea hover:text-primary-foreground active:scale-[0.97]"
                  >
                    查看詞卡
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-10 border border-border bg-sea p-8 text-primary-foreground md:p-10">
              <p className="font-display text-[10px] tracking-[0.3em] opacity-70 uppercase">
                One More Time / 再聽一次
              </p>
              <h3 className="font-serif-cn mt-3 text-2xl font-black md:text-3xl">
                把微塑膠的旅程，說成你的故事。
              </h3>
              <p className="mt-3 max-w-xl text-sm leading-relaxed opacity-85">
                今天先選三張卡：聽、翻、說。當詞彙有了聲音，英文就不再只是頁面上的字。
              </p>
              <button
                onClick={() => {
                  reset();
                  setFlipped(false);
                  toast.success("已重新開始一輪");
                  document.getElementById("library")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="mt-6 inline-flex items-center gap-2 border border-primary-foreground/70 px-5 py-2.5 font-display text-xs font-semibold tracking-[0.2em] text-primary-foreground transition-transform duration-150 hover:bg-primary-foreground hover:text-sea active:scale-[0.97]"
              >
                <RotateCcw className="h-3.5 w-3.5" /> 重新開始一輪
              </button>
            </div>
          </section>

          {/* ===== Footer ===== */}
          <footer className="border-t border-border bg-card px-6 py-10 md:px-10 lg:px-14">
            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <p className="font-display text-sm font-bold tracking-[0.2em] text-sea uppercase">
                Microplastics Field Guide ／ Archive 01
              </p>
              <div>
                <p className="font-serif-cn text-lg font-black text-foreground">
                  MICROPLASTICS FIELD GUIDE／微塑膠田野筆記
                </p>
                <p className="mt-1 font-display text-xs tracking-[0.25em] text-muted-foreground uppercase">
                  46 Specimens · 4 Chapters · Listen / Flip / Speak
                </p>
                <p className="mt-1 font-serif-cn text-xs text-muted-foreground">
                  為準備托福與英文測驗的 learners 而作
                </p>
              </div>
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
}
