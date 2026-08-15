/* Microplastics 教材單字資料（extract_vocab.py 自原檔萃取） */
export interface VocabItem {
  word: string;
  pos: string;
  ipa_us: string;
  ipa_uk: string;
  cn: string;
  en: string;
  note: string;
  section: "A" | "B" | "C" | "D";
}

export const SECTION_NAMES: Record<string, string> = {
  A: "A · Ocean & Pollution",
  B: "B · Ecology & Food Web",
  C: "C · Health & Biology",
  D: "D · Academic & Descriptive",
};

export const SECTION_SUB: Record<string, string> = {
  A: "環境與塑膠汙染（最該先背）",
  B: "生態學與食物網（第二優先）",
  C: "醫療健康與生理機能（第三優先）",
  D: "學術／描述高分詞（第四優先）",
};

export const vocab: VocabItem[] = [
  {
    "word": "microplastic",
    "pos": "n.",
    "ipa_us": "ˌmaɪkroʊˈplæstɪk",
    "ipa_uk": "ˌmaɪkrəʊˈplæstɪk",
    "cn": "微塑膠",
    "en": "extremely small pieces of plastic debris in the environment (under 5mm)",
    "note": "全文核心；biggest environmental threat today。",
    "section": "A"
  },
  {
    "word": "nanoplastic",
    "pos": "n.",
    "ipa_us": "ˌnænoʊˈplæstɪk",
    "ipa_uk": "ˌnænəʊˈplæstɪk",
    "cn": "奈米塑膠",
    "en": "plastic particles smaller than 1 micrometer",
    "note": "比微塑膠更小，甚至能穿透人體細胞 (nanoplastics in lung alveoli)。",
    "section": "A"
  },
  {
    "word": "microbead",
    "pos": "n.",
    "ipa_us": "ˈmaɪkroʊˌbid",
    "ipa_uk": "ˈmaɪkrəʊbiːd",
    "cn": "塑膠微珠",
    "en": "an extremely small piece of plastic, used especially in cleansing products",
    "note": "banned the use of microbeads in toothpaste。",
    "section": "A"
  },
  {
    "word": "degrade",
    "pos": "v.",
    "ipa_us": "dɪˈɡred",
    "ipa_uk": "dɪˈɡreɪd",
    "cn": "降解；分解",
    "en": "break down or deteriorate chemically",
    "note": "degrading from bags, bottles。",
    "section": "A"
  },
  {
    "word": "fragment",
    "pos": "v./n.",
    "ipa_us": "ˈfræɡmənt",
    "ipa_uk": "ˈfræɡmənt",
    "cn": "碎裂；碎片",
    "en": "break or cause to break into pieces",
    "note": "UV radiation fragment them into smaller pieces。",
    "section": "A"
  },
  {
    "word": "pervasive",
    "pos": "adj.",
    "ipa_us": "pɚˈvesɪv",
    "ipa_uk": "pəˈveɪsɪv",
    "cn": "無處不在的；遍布的",
    "en": "spreading widely throughout an area or a group of people",
    "note": "combat this pervasive threat。",
    "section": "A"
  },
  {
    "word": "contamination",
    "pos": "n.",
    "ipa_us": "kənˌtæməˈneʃən",
    "ipa_uk": "kənˌtæmɪˈneɪʃn",
    "cn": "汙染",
    "en": "the action or state of making or being made impure by polluting",
    "note": "food web contamination。",
    "section": "A"
  },
  {
    "word": "abrasion",
    "pos": "n.",
    "ipa_us": "əˈbreʒən",
    "ipa_uk": "əˈbreɪʒn",
    "cn": "磨損；摩擦",
    "en": "the process of scraping or wearing away",
    "note": "wave abrasion (海浪的摩擦)。",
    "section": "A"
  },
  {
    "word": "radiation",
    "pos": "n.",
    "ipa_us": "ˌrediˈeʃən",
    "ipa_uk": "ˌreɪdiˈeɪʃn",
    "cn": "輻射",
    "en": "emission of energy as electromagnetic waves",
    "note": "UV (ultraviolet) radiation (紫外線輻射)。",
    "section": "A"
  },
  {
    "word": "macroplastic",
    "pos": "n.",
    "ipa_us": "ˈmækroʊˌplæstɪk",
    "ipa_uk": "ˈmækrəʊˌplæstɪk",
    "cn": "大型塑膠廢棄物",
    "en": "large pieces of plastic debris",
    "note": "recover 100,000 tons of macroplastic waste。",
    "section": "A"
  },
  {
    "word": "footprint",
    "pos": "n.",
    "ipa_us": "ˈfʊtˌprɪnt",
    "ipa_uk": "ˈfʊtprɪnt",
    "cn": "足跡（引申為環境影響）",
    "en": "the impact on the environment",
    "note": "reducing our individual plastic footprint。",
    "section": "A"
  },
  {
    "word": "bioaccumulation",
    "pos": "n.",
    "ipa_us": "ˌbaɪoʊəˌkjumjəˈleʃən",
    "ipa_uk": "ˌbaɪəʊəˌkjuːmjəˈleɪʃn",
    "cn": "生物累積",
    "en": "the gradual accumulation of substances, such as pesticides, or other chemicals in an organism",
    "note": "transfers harmful plastics layer by layer。",
    "section": "B"
  },
  {
    "word": "biomagnification",
    "pos": "n.",
    "ipa_us": "ˌbaɪoʊˌmæɡnəfɪˈkeʃən",
    "ipa_uk": "ˌbaɪəʊˌmæɡnɪfɪˈkeɪʃn",
    "cn": "生物放大作用",
    "en": "the concentration of toxins in an organism as a result of its ingesting other plants or animals in which the toxins are more widely disbursed",
    "note": "biomagnification proves even more terrifying。",
    "section": "B"
  },
  {
    "word": "food web",
    "pos": "n.",
    "ipa_us": "fud wɛb",
    "ipa_uk": "fuːd web",
    "cn": "食物網",
    "en": "a system of interlocking and interdependent food chains",
    "note": "up the marine food web。",
    "section": "B"
  },
  {
    "word": "trophic",
    "pos": "adj.",
    "ipa_us": "ˈtrɑfɪk",
    "ipa_uk": "ˈtrɒfɪk",
    "cn": "營養級的",
    "en": "relating to feeding and nutrition",
    "note": "low trophic level seafood (低營養級海鮮)。",
    "section": "B"
  },
  {
    "word": "plankton",
    "pos": "n.",
    "ipa_us": "ˈplæŋktən",
    "ipa_uk": "ˈplæŋktən",
    "cn": "浮游生物",
    "en": "the small and microscopic organisms drifting or floating in the sea",
    "note": "plankton mistake these tiny particles for food。",
    "section": "B"
  },
  {
    "word": "apex predator",
    "pos": "n.",
    "ipa_us": "ˈepɛks ˈprɛdətɚ",
    "ipa_uk": "ˈeɪpeks ˈpredətə(r)",
    "cn": "頂級掠食者",
    "en": "a predator at the top of a food chain, without natural predators",
    "note": "APEX predators face toxic overload。",
    "section": "B"
  },
  {
    "word": "ingest",
    "pos": "v.",
    "ipa_us": "ɪnˈdʒɛst",
    "ipa_uk": "ɪnˈdʒest",
    "cn": "攝入；嚥下",
    "en": "take (food, drink, or another substance) into the body by swallowing or absorbing it",
    "note": "we ingest the weight of a credit card。",
    "section": "B"
  },
  {
    "word": "absorb",
    "pos": "v.",
    "ipa_us": "əbˈzɔrb",
    "ipa_uk": "əbˈzɔːb",
    "cn": "吸收",
    "en": "take in or soak up",
    "note": "absorbing persistent organic pollutants。",
    "section": "B"
  },
  {
    "word": "reproduction",
    "pos": "n.",
    "ipa_us": "ˌriprəˈdʌkʃən",
    "ipa_uk": "ˌriːprəˈdʌkʃn",
    "cn": "繁殖",
    "en": "the production of offspring",
    "note": "reproduction drops by 30%。",
    "section": "B"
  },
  {
    "word": "starvation",
    "pos": "n.",
    "ipa_us": "stɑrˈveʃən",
    "ipa_uk": "stɑːˈveɪʃn",
    "cn": "飢餓",
    "en": "suffering or death caused by hunger",
    "note": "starvation rates soar。",
    "section": "B"
  },
  {
    "word": "overload",
    "pos": "n./v.",
    "ipa_us": "ˈoʊvɚˌloʊd",
    "ipa_uk": "ˌəʊvəˈləʊd",
    "cn": "超載；負荷過多",
    "en": "an excessive load or amount",
    "note": "face toxic overload。",
    "section": "B"
  },
  {
    "word": "microbiome",
    "pos": "n.",
    "ipa_us": "ˌmaɪkroʊˈbaɪoʊm",
    "ipa_uk": "ˌmaɪkrəʊˈbaɪəʊm",
    "cn": "微生物體；菌叢",
    "en": "the microorganisms in a particular environment (including the body or a part of the body)",
    "note": "gut microbiome balance (腸道菌叢平衡)。",
    "section": "C"
  },
  {
    "word": "endocrine",
    "pos": "adj.",
    "ipa_us": "ˈɛndəkrɪn",
    "ipa_uk": "ˈendəkrɪn",
    "cn": "內分泌的",
    "en": "relating to glands which secrete hormones or other products directly into the blood",
    "note": "disrupt endocrine systems。",
    "section": "C"
  },
  {
    "word": "inflammation",
    "pos": "n.",
    "ipa_us": "ˌɪnfləˈmeʃən",
    "ipa_uk": "ˌɪnfləˈmeɪʃn",
    "cn": "發炎",
    "en": "a localized physical condition in which part of the body becomes reddened, swollen, hot, and often painful",
    "note": "trigger chronic inflammation responses。",
    "section": "C"
  },
  {
    "word": "chronic",
    "pos": "adj.",
    "ipa_us": "ˈkrɑnɪk",
    "ipa_uk": "ˈkrɒnɪk",
    "cn": "慢性的",
    "en": "persisting for a long time or constantly recurring",
    "note": "chronic inflammation。",
    "section": "C"
  },
  {
    "word": "dysregulation",
    "pos": "n.",
    "ipa_us": "ˌdɪsˌrɛɡjəˈleʃən",
    "ipa_uk": "ˌdɪsˌreɡjuˈleɪʃn",
    "cn": "失調",
    "en": "impairment of a physiological regulatory mechanism",
    "note": "cause dangerous immune dysregulation (免疫失調)。",
    "section": "C"
  },
  {
    "word": "toxicity",
    "pos": "n.",
    "ipa_us": "tɑkˈsɪsəti",
    "ipa_uk": "tɒkˈsɪsəti",
    "cn": "毒性",
    "en": "the quality of being toxic or poisonous",
    "note": "increase reproductive toxicity。",
    "section": "C"
  },
  {
    "word": "placenta",
    "pos": "n.",
    "ipa_us": "pləˈsɛntə",
    "ipa_uk": "pləˈsentə",
    "cn": "胎盤",
    "en": "an organ that develops in your uterus during pregnancy",
    "note": "discovered within the human placenta。",
    "section": "C"
  },
  {
    "word": "respiration",
    "pos": "n.",
    "ipa_us": "ˌrɛspəˈreʃən",
    "ipa_uk": "ˌrespəˈreɪʃn",
    "cn": "呼吸",
    "en": "the action of breathing",
    "note": "enter via respiration。",
    "section": "C"
  },
  {
    "word": "circulation",
    "pos": "n.",
    "ipa_us": "ˌsɜrkjəˈleʃən",
    "ipa_uk": "ˌsɜːkjəˈleɪʃn",
    "cn": "循環",
    "en": "the continuous movement of blood through the body",
    "note": "absorb toxins into blood circulation。",
    "section": "C"
  },
  {
    "word": "exposure",
    "pos": "n.",
    "ipa_us": "ɪkˈspoʊʒɚ",
    "ipa_uk": "ɪkˈspəʊʒə(r)",
    "cn": "暴露",
    "en": "the state of being exposed to contact with something",
    "note": "human exposure proves most direct。",
    "section": "C"
  },
  {
    "word": "infant",
    "pos": "n./adj.",
    "ipa_us": "ˈɪnfənt",
    "ipa_uk": "ˈɪnfənt",
    "cn": "嬰兒",
    "en": "a very young child or baby",
    "note": "infant formula (嬰兒配方奶)。",
    "section": "C"
  },
  {
    "word": "persistent",
    "pos": "adj.",
    "ipa_us": "pɚˈsɪstənt",
    "ipa_uk": "pəˈsɪstənt",
    "cn": "持久的",
    "en": "continuing to exist or endure over a prolonged period",
    "note": "persistent organic pollutants (持久性有機汙染物)。",
    "section": "D"
  },
  {
    "word": "organic",
    "pos": "adj.",
    "ipa_us": "ɔrˈɡænɪk",
    "ipa_uk": "ɔːˈɡænɪk",
    "cn": "有機的",
    "en": "relating to or derived from living matter",
    "note": "organic pollutants。",
    "section": "D"
  },
  {
    "word": "pollutant",
    "pos": "n.",
    "ipa_us": "pəˈlutnt",
    "ipa_uk": "pəˈluːtənt",
    "cn": "汙染物",
    "en": "a substance that pollutes something, especially water or the atmosphere",
    "note": "persistent organic pollutants。",
    "section": "D"
  },
  {
    "word": "comprehensively",
    "pos": "adv.",
    "ipa_us": "ˌkɑmprɪˈhɛnsɪvli",
    "ipa_uk": "ˌkɒmprɪˈhensɪvli",
    "cn": "全面地",
    "en": "in a way that includes all or nearly all elements or aspects",
    "note": "comprehensively banned the use of microbeads。",
    "section": "D"
  },
  {
    "word": "implement",
    "pos": "v.",
    "ipa_us": "ˈɪmpləmənt",
    "ipa_uk": "ˈɪmplɪment",
    "cn": "實施；貫徹",
    "en": "put (a decision, plan, agreement) into effect",
    "note": "implemented plastic packaging taxes。",
    "section": "D"
  },
  {
    "word": "systemic",
    "pos": "adj.",
    "ipa_us": "sɪsˈtɛmɪk",
    "ipa_uk": "sɪsˈtemɪk",
    "cn": "系統性的",
    "en": "relating to a system, especially as opposed to a particular part",
    "note": "systemic policy improvements。",
    "section": "D"
  },
  {
    "word": "prioritize",
    "pos": "v.",
    "ipa_us": "praɪˈɔrəˌtaɪz",
    "ipa_uk": "praɪˈɒrətaɪz",
    "cn": "優先考慮",
    "en": "designate or treat (something) as more important than other things",
    "note": "prioritize low trophic level seafood。",
    "section": "D"
  },
  {
    "word": "migration",
    "pos": "n.",
    "ipa_us": "maɪˈɡreʃən",
    "ipa_uk": "maɪˈɡreɪʃn",
    "cn": "轉移；遷移",
    "en": "movement from one part of something to another",
    "note": "microplastic migration into the food。",
    "section": "D"
  },
  {
    "word": "alarming",
    "pos": "adj.",
    "ipa_us": "əˈlɑrmɪŋ",
    "ipa_uk": "əˈlɑːmɪŋ",
    "cn": "令人擔憂的",
    "en": "worrying or disturbing",
    "note": "most direct and alarming。",
    "section": "D"
  },
  {
    "word": "invisible",
    "pos": "adj.",
    "ipa_us": "ɪnˈvɪzəbəl",
    "ipa_uk": "ɪnˈvɪzəbl",
    "cn": "隱形的；看不見的",
    "en": "unable to be seen",
    "note": "invisible nanoplastics particles。",
    "section": "D"
  },
  {
    "word": "span",
    "pos": "v.",
    "ipa_us": "spæn",
    "ipa_uk": "spæn",
    "cn": "跨越；持續",
    "en": "extend across (a period of time or a range of subjects)",
    "note": "span across many coming centuries。",
    "section": "D"
  },
  {
    "word": "particle",
    "pos": "n.",
    "ipa_us": "ˈpɑrtɪkəl",
    "ipa_uk": "ˈpɑːtɪkl",
    "cn": "微粒；顆粒",
    "en": "a minute portion of matter",
    "note": "tiny plastic particles。",
    "section": "D"
  },
  {
    "word": "pitcher",
    "pos": "n.",
    "ipa_us": "ˈpɪtʃɚ",
    "ipa_uk": "ˈpɪtʃə(r)",
    "cn": "水罐；濾水壺",
    "en": "a large container, typically earthenware, glass, or plastic, with a handle and lip",
    "note": "filtered water pitchers。",
    "section": "D"
  }
] as VocabItem[];
