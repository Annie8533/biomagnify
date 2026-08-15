/*
 * Microplastics Field Guide — 閃卡狀態與發音
 * 風格依 ideas.md：田野筆記雜誌風
 */
import { useCallback, useEffect, useState } from "react";
import { vocab, type VocabItem } from "@/lib/vocab";

const STORAGE_KEY = "micro-known-words";

function loadKnown(): Set<string> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return new Set();
    return new Set(JSON.parse(raw) as string[]);
  } catch {
    return new Set();
  }
}

/** 單字發音（Web Speech API，美式發音，失敗時降級） */
export function speakWord(word: string) {
  if (typeof window === "undefined" || !window.speechSynthesis) return;
  try {
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(word);
    u.lang = "en-US";
    u.rate = 0.92;
    const voices = window.speechSynthesis.getVoices();
    const us =
      voices.find((v) => v.lang.startsWith("en-US")) ||
      voices.find((v) => v.lang.startsWith("en"));
    if (us) u.voice = us;
    window.speechSynthesis.speak(u);
  } catch {
    /* speech not supported */
  }
}

/** 暖機 voice 列表（某些瀏覽器第一次 getVoices 回空） */
export function warmupVoices() {
  if (typeof window === "undefined" || !window.speechSynthesis) return;
  window.speechSynthesis.getVoices();
}

export function useVocabState() {
  const [known, setKnown] = useState<Set<string>>(() => loadKnown());
  const [index, setIndex] = useState(0);

  useEffect(() => {
    warmupVoices();
  }, []);

  const toggleKnown = useCallback((word: string) => {
    setKnown((prev) => {
      const next = new Set(prev);
      if (next.has(word)) next.delete(word);
      else next.add(word);
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(Array.from(next)));
      } catch {
        /* ignore */
      }
      return next;
    });
  }, []);

  const goTo = useCallback((i: number) => {
    setIndex(Math.max(0, Math.min(i, vocab.length - 1)));
  }, []);

  const jumpToWord = useCallback((item: VocabItem) => {
    const i = vocab.findIndex((v) => v.word === item.word);
    if (i >= 0) setIndex(i);
  }, []);

  const reset = useCallback(() => {
    setIndex(0);
    setKnown(new Set());
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      /* ignore */
    }
  }, []);

  return {
    vocab,
    index,
    setIndex: goTo,
    current: vocab[index],
    known,
    toggleKnown,
    jumpToWord,
    reset,
  };
}
