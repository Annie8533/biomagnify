/*
 * Microplastics Field Guide — 大閃卡（SPECIMEN CARD）
 * 田野筆記雜誌風：紙卡細邊框、墨綠主色、磚紅 accent、襯線大字
 * 正面：詞性標籤 + 大字單字 + IPA + HEAR IT；點擊翻面
 * 背面：中文大字 + 英文例句 + FIELD NOTE；CLICK TO FLIP BACK
 */
import { ChevronLeft, ChevronRight, RotateCcw, Volume2, Check } from "lucide-react";
import { type VocabItem, SECTION_NAMES } from "@/lib/vocab";
import { speakWord } from "@/hooks/useVocabState";

interface Props {
  item: VocabItem;
  ordinal: number;
  total: number;
  flipped: boolean;
  onFlip: () => void;
  known: boolean;
  onToggleKnown: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export default function FlashCard({
  item,
  ordinal,
  total,
  flipped,
  onFlip,
  known,
  onToggleKnown,
  onPrev,
  onNext,
}: Props) {
  return (
    <div>
      {/* 頂部狀態列 */}
      <div className="mb-4 flex items-center justify-between font-display text-xs tracking-[0.25em] uppercase">
        <span className="flex items-center gap-2">
          <span className="inline-block h-2 w-2 rounded-full bg-brick" />
          <span className="text-muted-foreground">Current Specimen</span>
        </span>
        <span className="text-sea font-semibold">
          {item.section}-{String(ordinal).padStart(2, "0")}
        </span>
        <span className="text-muted-foreground">
          {ordinal} / {total}
        </span>
      </div>

      {/* 卡片 */}
      <div className="perspective-card">
        <div
          className={`flip-inner relative h-[420px] md:h-[440px] ${flipped ? "flipped" : ""}`}
        >
          {/* 正面 */}
          <div
            className="flip-face absolute inset-0 flex flex-col border border-border bg-card p-8 shadow-[6px_6px_0_0_rgba(14,76,63,0.14)] md:p-10"
            onClick={onFlip}
          >
            {/* 標本裝飾線 */}
            <div className="pointer-events-none absolute inset-3 border border-dashed border-sea/25" />
            <div className="flex items-start justify-between">
              <span className="border border-sea/40 bg-sea/5 px-2.5 py-1 font-display text-[11px] tracking-[0.2em] text-sea uppercase">
                English / 正面
              </span>
              <span className="font-serif-cn text-sm italic text-muted-foreground">
                {item.pos}
              </span>
            </div>
            <div className="mt-4 flex items-center justify-between border-b border-border pb-2 font-display text-[10px] tracking-[0.25em] text-muted-foreground uppercase">
              <span>No. {String(ordinal).padStart(2, "0")} / {SECTION_NAMES[item.section]}</span>
              <span>Specimen Sheet</span>
            </div>
            <div className="mt-5 flex flex-1 flex-col justify-center">
              <p className="font-display text-xs tracking-[0.3em] text-muted-foreground uppercase">
                Vocabulary Specimen
              </p>
              <h3 className="font-display mt-3 text-5xl leading-tight font-bold text-sea md:text-6xl">
                {item.word}
              </h3>
              <p className="mt-5 font-mono text-lg text-brick" aria-label={`${item.word} 音標 ${item.ipa_us}，點擊 HEAR IT 可聽發音`}>
                /{item.ipa_us}/
              </p>
            </div>
            <div className="flex items-center justify-between border-t border-border pt-4">
              <span className="font-display text-xs tracking-[0.2em] text-muted-foreground uppercase">
                Click to Reveal 中文
              </span>
              <button
                aria-label={`播放 ${item.word} 發音`}
                onClick={(e) => {
                  e.stopPropagation();
                  speakWord(item.word);
                }}
                className="flex items-center gap-1.5 border border-sea px-3.5 py-2 font-display text-xs font-semibold tracking-[0.15em] text-sea transition-transform duration-150 hover:bg-sea hover:text-primary-foreground active:scale-[0.97]"
              >
                <Volume2 className="h-4 w-4" />
                HEAR IT
              </button>
            </div>
          </div>

          {/* 背面 */}
          <div
            className="flip-face flip-back absolute inset-0 flex flex-col border border-border bg-[oklch(0.945_0.014_95)] p-8 shadow-[6px_6px_0_0_rgba(196,80,60,0.18)] md:p-10"
            onClick={onFlip}
          >
            <div className="pointer-events-none absolute inset-3 border border-dashed border-brick/25" />
            <div className="flex items-start justify-between">
              <span className="border border-brick/50 bg-brick px-2.5 py-1 font-display text-[11px] tracking-[0.2em] text-white uppercase">
                Chinese / 背面
              </span>
              <span className="font-serif-cn text-sm italic text-muted-foreground">
                {item.pos}
              </span>
            </div>
            <div className="flex items-center justify-between border-b border-border pb-2 font-display text-[10px] tracking-[0.25em] text-muted-foreground uppercase">
              <span>No. {String(ordinal).padStart(2, "0")} / {SECTION_NAMES[item.section]}</span>
              <span>Field Note Sheet</span>
            </div>
            <div className="mt-5 flex flex-1 flex-col justify-center">
              <p className="font-display text-xs tracking-[0.3em] text-muted-foreground uppercase">
                Vocabulary Specimen
              </p>
              <h3 className="font-serif-cn mt-3 text-4xl font-black text-sea md:text-[2.75rem]">
                {item.cn}
              </h3>
              <p className="mt-4 font-body text-base leading-relaxed text-foreground/85 italic">
                {item.en}
              </p>
              {item.note && (
                <div className="mt-5 border-l-2 border-brick bg-background/70 px-4 py-3">
                  <p className="font-display text-[10px] tracking-[0.25em] text-brick uppercase">
                    Field Note
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-foreground/80">
                    {item.note}
                  </p>
                </div>
              )}
            </div>
            <div className="flex items-center justify-between border-t border-border pt-4">
              <span className="font-display text-xs tracking-[0.2em] text-muted-foreground uppercase">
                Click to Flip Back 英文
              </span>
              <button
                aria-label={`播放 ${item.word} 發音`}
                onClick={(e) => {
                  e.stopPropagation();
                  speakWord(item.word);
                }}
                className="flex items-center gap-1.5 border border-sea px-3.5 py-2 font-display text-xs font-semibold tracking-[0.15em] text-sea transition-transform duration-150 hover:bg-sea hover:text-primary-foreground active:scale-[0.97]"
              >
                <Volume2 className="h-4 w-4" />
                HEAR IT
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 控制列 */}
      <div className="mt-4 grid grid-cols-3 gap-2">
        <button
          aria-label="上一張"
          onClick={onPrev}
          className="flex items-center justify-center border border-border bg-card py-2.5 transition-all duration-150 hover:border-sea active:scale-[0.97]"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <button
          onClick={onToggleKnown}
          className={`flex items-center justify-center gap-2 border py-2.5 font-body text-xs font-semibold transition-all duration-150 active:scale-[0.97] ${
            known
              ? "border-sea bg-sea text-primary-foreground"
              : "border-border bg-card text-foreground hover:border-sea"
          }`}
        >
          <Check className="h-3.5 w-3.5" />
          {known ? "已熟悉" : "標記已熟悉"}
        </button>
        <button
          aria-label="下一張"
          onClick={onNext}
          className="flex items-center justify-center border border-border bg-card py-2.5 transition-all duration-150 hover:border-sea active:scale-[0.97]"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

export { RotateCcw };
