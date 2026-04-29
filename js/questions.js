// Q1〜Q50 すべての質問データ
const QUESTIONS = [
    // ===== Q1〜Q5: スペック =====
    {
        id: 1,
        category: "スペック",
        question: "Q1. 年収",
        description: "現在の年収として最も近いものを選んでください",
        options: [
            "〜399万円",
            "400〜499万円",
            "500〜599万円",
            "600〜799万円",
            "800万円〜"
        ],
        factor: "income"
    },
    {
        id: 2,
        category: "スペック",
        question: "Q2. 年齢",
        description: "ご自身の年齢に最も近いものを選んでください",
        options: [
            "38〜39歳",
            "35〜37歳",
            "32〜34歳",
            "28〜31歳",
            "20〜27歳"
        ],
        factor: "age"
    },
    {
        id: 3,
        category: "スペック",
        question: "Q3. 学歴",
        description: "これまでの学歴として当てはまるものを選んでください",
        options: [
            "高卒",
            "専門・短大",
            "大卒（一般）",
            "上位大学",
            "旧帝大・早慶・院卒"
        ],
        factor: "education"
    },
    {
        id: 4,
        category: "スペック",
        question: "Q4. 職業",
        description: "現在の働き方として最も近いものは？",
        options: [
            "無職・不安定",
            "非正規",
            "正社員",
            "大手・専門職",
            "公務員・士業"
        ],
        factor: "job_stability"
    },
    {
        id: 5,
        category: "スペック",
        question: "Q5. 身長",
        description: "ご自身の身長を選んでください",
        options: [
            "〜164cm",
            "165〜169cm",
            "170〜174cm",
            "175〜179cm",
            "180cm〜"
        ],
        factor: "height"
    },

    // ===== Q6〜Q10: コミュニケーション能力 =====
    {
        id: 6,
        category: "コミュニケーション能力",
        question: "Q6. 会話力",
        description: "初対面の人と話している場面をイメージしてください。そのときの自分に一番近いのは？",
        options: [
            "何を話せばいいか分からず止まりがち",
            "話題は出すが広がらない",
            "無難には会話できる",
            "自然と話が続く",
            "気づいたら盛り上がっている"
        ],
        factor: "conversation_skill"
    },
    {
        id: 7,
        category: "コミュニケーション能力",
        question: "Q7. 共感力",
        description: "誰かが悩みを話してきたときの自分の反応に近いのは？",
        options: [
            "解決策や間違いを指摘する",
            "「そうなんだ」で終わる",
            "一通りは聞く",
            "気持ちに寄り添う",
            "相手の立場で深く考える"
        ],
        factor: "empathy"
    },
    {
        id: 8,
        category: "コミュニケーション能力",
        question: "Q8. 安心感",
        description: "周りから言われることが多い印象はどれに近い？",
        options: [
            "何を考えているか分からない",
            "少し気を使う",
            "普通",
            "落ち着く",
            "一緒にいると安心する"
        ],
        factor: "sense_of_security"
    },
    {
        id: 9,
        category: "コミュニケーション能力",
        question: "Q9. 居心地",
        description: "誰かと長時間一緒に過ごしたあとの自分の感覚は？",
        options: [
            "早く一人になりたい",
            "かなり疲れる",
            "普通",
            "そこまで疲れない",
            "むしろ心地いい"
        ],
        factor: "comfort_level"
    },
    {
        id: 10,
        category: "性格",
        question: "Q10. 誠実さ",
        description: "小さな約束（時間・連絡など）への向き合い方で近いのは？",
        options: [
            "状況次第で変わる",
            "忘れることもある",
            "特に意識していない",
            "守るようにしている",
            "自然と守っている"
        ],
        factor: "sincerity"
    },

    // ===== Q11〜Q20 =====
    {
        id: 11,
        category: "性格",
        question: "Q11. 優しさ",
        description: "誰かが困っていそうな場面での自分の動きに近いのは？",
        options: [
            "基本的に自分のことを優先する",
            "余裕があれば気にする",
            "状況によっては対応する",
            "声をかけたり行動することが多い",
            "自然と手助けしている"
        ],
        factor: "kindness"
    },
    {
        id: 12,
        category: "性格",
        question: "Q12. 感情安定性",
        description: "予想外のトラブルが起きたときの反応に近いのは？",
        options: [
            "感情的になりやすい",
            "動揺しやすい",
            "一度落ち着こうとする",
            "冷静に対処できる",
            "ほとんど動じない"
        ],
        factor: "emotional_stability"
    },
    {
        id: 13,
        category: "性格",
        question: "Q13. 責任感",
        description: "自分がミスをしたときの対応に近いのは？",
        options: [
            "できれば避けたい",
            "状況次第で対応",
            "必要なら対応する",
            "自分で責任を持つ",
            "先回りしてリカバーする"
        ],
        factor: "responsibility"
    },
    {
        id: 14,
        category: "価値観",
        question: "Q14. 金銭感覚",
        description: "買い物や出費の判断に一番近いのは？",
        options: [
            "欲しいと思ったらすぐ使う",
            "あまり深く考えない",
            "その時々で判断する",
            "バランスを考えて使う",
            "将来を考えて管理する"
        ],
        factor: "money_sense"
    },
    {
        id: 15,
        category: "価値観",
        question: "Q15. 家族観",
        description: "将来の家庭像についての考えに近いのは？",
        options: [
            "あまり具体的に考えていない",
            "人によって違うと思う",
            "なんとなくイメージはある",
            "自分なりの形がある",
            "はっきりした理想がある"
        ],
        factor: "family_values"
    },
    {
        id: 16,
        category: "価値観",
        question: "Q16. 仕事観",
        description: "仕事とプライベートのバランス感覚として近いのは？",
        options: [
            "状況で大きく変わる",
            "偏りがある",
            "普通",
            "バランスを意識している",
            "将来も見据えて選んでいる"
        ],
        factor: "work_life_balance"
    },
    {
        id: 17,
        category: "価値観",
        question: "Q17. 生活スタイル",
        description: "生活リズムや過ごし方について近いのは？",
        options: [
            "人と合わせるのが難しい",
            "ズレることが多い",
            "調整はできる",
            "比較的合わせやすい",
            "自然と馴染む"
        ],
        factor: "lifestyle_adaptability"
    },
    {
        id: 18,
        category: "生活力",
        question: "Q18. 家事能力",
        description: "日常の家事との関わり方に近いのは？",
        options: [
            "ほとんどやらない",
            "必要な時だけ",
            "一通りはできる",
            "普段からやっている",
            "自分から積極的にやる"
        ],
        factor: "household_ability"
    },
    {
        id: 19,
        category: "生活力",
        question: "Q19. 金銭管理能力",
        description: "お金の管理の仕方に近いのは？",
        options: [
            "あまり把握していない",
            "なんとなく管理",
            "特に問題はない",
            "計画的に管理",
            "将来を見据えて運用"
        ],
        factor: "money_management"
    },
    {
        id: 20,
        category: "生活力",
        question: "Q20. 自立性",
        description: "普段の生活の回し方に近いのは？",
        options: [
            "周りに頼ることが多い",
            "一部頼っている",
            "普通",
            "基本自分で回せる",
            "余裕をもって自立している"
        ],
        factor: "independence"
    },

    // ===== Q21〜Q30 =====
    {
        id: 21,
        category: "生活力",
        question: "Q21. 将来設計力",
        description: "将来について考えるタイミングとして近いのは？",
        options: [
            "ほとんど考えない",
            "気が向いたときだけ",
            "必要に応じて考える",
            "現実的に考えている",
            "具体的に計画・行動している"
        ],
        factor: "future_planning"
    },
    {
        id: 22,
        category: "外見・清潔感",
        question: "Q22. 髪・第一印象",
        description: "外出前の身だしなみとして一番近いのは？",
        options: [
            "特に気にせず出る",
            "軽く整える程度",
            "一応チェックする",
            "清潔感は意識して整える",
            "全体の印象まで意識して整える"
        ],
        factor: "appearance_hair"
    },
    {
        id: 23,
        category: "外見・清潔感",
        question: "Q23. 顔周り（肌・ヒゲ）",
        description: "顔まわりのケアに対する意識は？",
        options: [
            "特に何もしていない",
            "気になった時だけ",
            "最低限は整える",
            "定期的に整えている",
            "日常的にしっかりケア"
        ],
        factor: "facial_care"
    },
    {
        id: 24,
        category: "外見・清潔感",
        question: "Q24. 服装",
        description: "人と会う日の服選びに近いのは？",
        options: [
            "深く考えず選ぶ",
            "とりあえず無難",
            "普通",
            "清潔感を意識",
            "相手や場に合わせる"
        ],
        factor: "clothing_sense"
    },
    {
        id: 25,
        category: "外見・清潔感",
        question: "Q25. 靴・小物",
        description: "ふと足元や持ち物を見られたときの状態は？",
        options: [
            "気にしたことがない",
            "多少気になる",
            "普通",
            "清潔に保っている",
            "細部まで整えている"
        ],
        factor: "shoes_accessories"
    },
    {
        id: 26,
        category: "外見・清潔感",
        question: "Q26. 体型・姿勢",
        description: "自分の体型や姿勢への向き合い方は？",
        options: [
            "特に意識していない",
            "気にはしている",
            "普通",
            "ある程度意識している",
            "しっかり管理している"
        ],
        factor: "body_posture"
    },
    {
        id: 27,
        category: "外見・清潔感",
        question: "Q27. 匂い",
        description: "匂い（体臭・口臭など）への意識として近いのは？",
        options: [
            "特に気にしていない",
            "気になる時だけ",
            "普通",
            "日常的に気をつけている",
            "常に強く意識している"
        ],
        factor: "scent_hygiene"
    },
    {
        id: 28,
        category: "価値観",
        question: "Q28. 家族との距離感",
        description: "家族との関わり方として近いのは？",
        options: [
            "生活の多くを共有している",
            "頻繁に関わる",
            "適度な距離",
            "必要な時だけ",
            "かなり独立している"
        ],
        factor: "family_distance"
    },
    {
        id: 29,
        category: "価値観",
        question: "Q29. 仕事と家庭の優先度",
        description: "今の価値観として近いのは？",
        options: [
            "家庭が最優先",
            "やや家庭寄り",
            "バランス",
            "仕事寄り",
            "自己実現・仕事重視"
        ],
        factor: "priorities"
    },
    {
        id: 30,
        category: "価値観",
        question: "Q30. 結婚タイミング",
        description: "結婚についての感覚に近いのは？",
        options: [
            "できるだけ早くしたい",
            "ある程度の期限は考えている",
            "流れに任せたい",
            "恋愛を重視したい",
            "特にこだわりはない"
        ],
        factor: "marriage_timing"
    },

    // ===== Q31〜Q42: 恋愛・心理 =====
    {
        id: 31,
        category: "恋愛・心理",
        question: "Q31. コミット度（覚悟）",
        description: "パートナーとの関係に対する向き合い方として近いのは？",
        options: [
            "状況が変われば関係も変わると思う",
            "無理のない範囲で続けたい",
            "相手次第で変わる",
            "基本的には長く続けたい",
            "覚悟を持って関係を築きたい"
        ],
        factor: "commitment_level",
        love_type: true
    },
    {
        id: 32,
        category: "恋愛・心理",
        question: "Q32. 食生活",
        description: "一緒に生活する場合の食事スタイルとして近いのは？",
        options: [
            "完全に合わせたい",
            "できるだけ一緒にしたい",
            "柔軟に対応",
            "基本は別でもOK",
            "それぞれ自由でいい"
        ],
        factor: "food_compatibility",
        love_type: true
    },
    {
        id: 33,
        category: "恋愛・心理",
        question: "Q33. 趣味・休日",
        description: "休日の過ごし方として理想に近いのは？",
        options: [
            "常に一緒に過ごしたい",
            "基本一緒がいい",
            "半々くらい",
            "別々でもいい",
            "お互い自由がいい"
        ],
        factor: "hobby_time",
        love_type: true
    },
    {
        id: 34,
        category: "恋愛・心理",
        question: "Q34. 生活リズム",
        description: "生活時間や習慣の合わせ方として近いのは？",
        options: [
            "完全に合わせたい",
            "できるだけ合わせたい",
            "調整しながら",
            "無理に合わせなくていい",
            "それぞれ自由でいい"
        ],
        factor: "daily_rhythm",
        love_type: true
    },
    {
        id: 35,
        category: "恋愛・心理",
        question: "Q35. 親との関係",
        description: "パートナーと自分の親との関係について近いのは？",
        options: [
            "深く関わってほしい",
            "ある程度関わる",
            "状況に応じて",
            "必要最低限",
            "あまり関わらせたくない"
        ],
        factor: "in_law_relations",
        love_type: true
    },
    {
        id: 36,
        category: "恋愛・心理",
        question: "Q36. 家庭問題",
        description: "問題が起きたときのスタンスに近いのは？",
        options: [
            "すべて共有して一緒に考えたい",
            "基本は相談したい",
            "内容によって変える",
            "自分で処理したい",
            "あまり共有したくない"
        ],
        factor: "problem_sharing",
        love_type: true
    },
    {
        id: 37,
        category: "恋愛・心理",
        question: "Q37. 距離感（恋愛中）",
        description: "恋人との連絡や関わり方として近いのは？",
        options: [
            "常に繋がっていたい",
            "こまめに連絡したい",
            "適度でいい",
            "必要な時だけ",
            "あまり連絡しない"
        ],
        factor: "communication_frequency",
        love_type: true
    },
    {
        id: 38,
        category: "恋愛・心理",
        question: "Q38. 愛情表現",
        description: "愛情の伝え方として近いのは？",
        options: [
            "言葉や行動でかなり表現する",
            "行動で示すことが多い",
            "バランスよく",
            "控えめ",
            "あまり表現しない"
        ],
        factor: "expression_of_love",
        love_type: true
    },
    {
        id: 39,
        category: "恋愛・心理",
        question: "Q39. ケンカ対応",
        description: "意見がぶつかったときの対応として近いのは？",
        options: [
            "その場で解決したい",
            "話し合って決めたい",
            "一度時間を置く",
            "できれば避けたい",
            "放置することが多い"
        ],
        factor: "conflict_resolution",
        love_type: true
    },
    {
        id: 40,
        category: "恋愛・心理",
        question: "Q40. 夫婦関係",
        description: "結婚後の関係性として理想に近いのは？",
        options: [
            "常に一緒に行動",
            "協力しながら生活",
            "対等な関係",
            "ある程度別々",
            "それぞれ独立"
        ],
        factor: "marriage_relationship",
        love_type: true
    },
    {
        id: 41,
        category: "恋愛・心理",
        question: "Q41. お金の管理",
        description: "結婚後のお金の管理として近いのは？",
        options: [
            "完全に一つにまとめたい",
            "共同で管理",
            "分担",
            "基本別",
            "完全に別"
        ],
        factor: "money_handling",
        love_type: true
    },
    {
        id: 42,
        category: "恋愛・心理",
        question: "Q42. 問題解決スタンス",
        description: "大きな問題が起きたときの考え方に近いのは？",
        options: [
            "必ず一緒に解決したい",
            "話し合って決めたい",
            "分担して対応",
            "それぞれ対応",
            "干渉しない"
        ],
        factor: "problem_solving",
        love_type: true
    },

    // ===== Q43〜Q50 =====
    {
        id: 43,
        category: "恋愛・心理",
        question: "Q43. 連絡が遅いとき",
        description: "連絡の返信が遅いときの自分の反応に近いのは？",
        options: [
            "かなり不安になる",
            "少し気になる",
            "状況による",
            "あまり気にしない",
            "全く気にしない"
        ],
        factor: "anxiety_level",
        love_type: true
    },
    {
        id: 44,
        category: "恋愛・心理",
        question: "Q44. 相手の行動への意識",
        description: "恋人の行動や予定についての考えに近いのは？",
        options: [
            "常に把握していたい",
            "ある程度知りたい",
            "普通",
            "あまり気にしない",
            "基本気にしない"
        ],
        factor: "control_tendency",
        love_type: true
    },
    {
        id: 45,
        category: "恋愛・心理",
        question: "Q45. 愛情を感じる瞬間",
        description: "恋人からの愛情を感じる瞬間として近いのは？",
        options: [
            "頻繁な連絡や言葉",
            "一緒にいる時間",
            "バランスよく",
            "行動でのサポート",
            "放っておいてくれる"
        ],
        factor: "love_language",
        love_type: true
    },
    {
        id: 46,
        category: "恋愛・心理",
        question: "Q46. 一人の時間",
        description: "恋人がいる状態での一人の時間について近いのは？",
        options: [
            "ほぼいらない",
            "少しでいい",
            "普通",
            "ある程度必要",
            "かなり重要"
        ],
        factor: "personal_space_need",
        love_type: true
    },
    {
        id: 47,
        category: "恋愛・心理",
        question: "Q47. ケンカ後の感情",
        description: "恋人とケンカした後の自分の感情に近いのは？",
        options: [
            "すぐ不安になる",
            "引きずる",
            "普通",
            "切り替える",
            "あまり気にしない"
        ],
        factor: "conflict_recovery",
        love_type: true
    },
    {
        id: 48,
        category: "恋愛・心理",
        question: "Q48. 恋人の優先順位",
        description: "生活の中での恋人の優先度に近いのは？",
        options: [
            "最優先",
            "かなり高い",
            "バランス",
            "やや低め",
            "自分優先"
        ],
        factor: "partner_priority",
        love_type: true
    },
    {
        id: 49,
        category: "恋愛・心理",
        question: "Q49. 嫉妬・独占欲",
        description: "恋人が異性と親しくしているときの反応に近いのは？",
        options: [
            "強く嫉妬して制限したくなる",
            "嫉妬するが表には出さない",
            "少し気になる程度",
            "あまり気にならない",
            "全く気にならない"
        ],
        factor: "jealousy_level",
        love_type: true
    },
    {
        id: 50,
        category: "恋愛・心理",
        question: "Q50. 関係進展スピード",
        description: "恋愛関係の進み方として理想に近いのは？",
        options: [
            "すぐに深い関係になりたい",
            "比較的早く距離を縮めたい",
            "自然な流れで進めたい",
            "ゆっくり関係を築きたい",
            "慎重に時間をかけたい"
        ],
        factor: "relationship_speed",
        love_type: true
    }
];