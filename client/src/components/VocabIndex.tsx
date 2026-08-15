/*
 * Microplastics Field Guide — SPECIMEN INDEX 單字索引面板
 * 搜尋框 + 分區按鈕（全部/A/B/C/D）+ 編號列表，點擊跳轉
 */
import { Search } from "lucide-react";
import { useMemo, useState } from "react";
import { vocab, type VocabItem } from "@/lib/vocab";

const SECTIONS = ["ALL", "A", "B", "C", "D"] as const;

interface Props {
  knownCount: number;
  onJump: (item: VocabItem) => void;
}

export default function VocabIndex({ knownCount, onJump }: Props) {
  const [query, setQuery] = useState("");
  const [section, setSection] = useState<(typeof SECTIONS)[number]>("ALL");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return vocab.filter((v) => {
      if (section !== "ALL" && v.section !== section) return false;
      if (!q) return true;
      return (
        v.word.toLowerCase().includes(q) ||
        v.cn.includes(query.trim()) ||
        v.en.toLowerCase().includes(q)
      );
    });
  }, [query, section]);

  return (
    <div className="border border-border bg-card p-5 shadow-[4px_4px_0_0_rgba(14,76,63,0.08)]">
      <div className="mb-4 flex items-center justify-between border-b border-border pb-3">
        <span className="font-display text-xs font-semibold tracking-[0.25em] text-sea uppercase">
          Specimen Index
        </span>
        <span className="font-display text-xs font-semibold text-brick">
          {knownCount}/{vocab.length} Known
        </span>
      </div>

      {/* 搜尋 */}
      <div className="relative mb-3">
        <Search className="absolute left-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <input
          type="text"
          placeholder="搜尋單字或中文…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full border border-border bg-background py-2 pl-8 pr-3 text-sm outline-none transition-colors focus:border-sea"
        />
        <span className="absolute right-2.5 top-1/2 -translate-y-1/2 font-display text-[10px] tracking-widest text-muted-foreground">
          /
        </span>
      </div>

      {/* 分區 */}
      <div className="mb-4 flex flex-wrap gap-1.5">
        {SECTIONS.map((s) => (
          <button
            key={s}
            onClick={() => setSection(s)}
            className={`border px-2.5 py-1 font-body text-xs transition-all duration-150 active:scale-[0.97] ${
              section === s
                ? "border-sea bg-sea text-primary-foreground"
                : "border-border bg-background text-muted-foreground hover:border-sea hover:text-sea"
            }`}
          >
            {s === "ALL" ? "全部" : `${s} · ${s === "A" ? "Ocean" : s === "B" ? "Ecology" : s === "C" ? "Health" : "Academic"}`}
          </button>
        ))}
      </div>

      {/* 列表 */}
      <div className="max-h-[420px] space-y-1 overflow-y-auto pr-1">
        {filtered.length === 0 && (
          <p className="py-6 text-center text-sm text-muted-foreground">
            沒有符合的單字
          </p>
        )}
        {filtered.map((v, i) => (
          <button
            key={v.word}
            onClick={() => onJump(v)}
            className="flex w-full items-center gap-3 border-b border-border/50 py-2 text-left transition-colors duration-150 hover:bg-accent/50 last:border-b-0"
          >
            <span className="w-7 font-display text-[10px] tracking-widest text-muted-foreground">
              {String(vocab.indexOf(v) + 1).padStart(2, "0")}
            </span>
            <span className="font-display text-sm font-bold text-foreground">
              {v.word}
            </span>
            <span className="font-serif-cn ml-auto text-xs italic text-muted-foreground">
              {v.pos}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
