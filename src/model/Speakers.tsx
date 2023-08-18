import Arthur from '@site/src/assets/programer/Arthur.png';
import MatthewWei from '@site/src/assets/programer/Matthew Wei.png';
import James from '@site/src/assets/programer/james.jpg';
import Kim from '@site/src/assets/programer/kim-kao-dddconf2023 - Kao Kim 1.png';
import WaterBall from '@site/src/assets/programer/style=水球潘.png';
import Vlad from '@site/src/assets/programer/vlad.png';
import Wesley from '@site/src/assets/programer/wesley_chiu.png';
import Wang from '@site/src/assets/programer/王彥博 Soking.png';
import ChrisSimon from '@site/src/assets/programer/講師-ChrisSimon.png';
import DavidKo from '@site/src/assets/programer/講師-David Ko.png';
import Ean from '@site/src/assets/programer/講師-Ean.png';
import Fong from '@site/src/assets/programer/講師-Fong 劉鳳軒.png';
import Kuma from '@site/src/assets/programer/講師-Kuma.png';
import Lex from '@site/src/assets/programer/講師-Lex.png';
import Miles from '@site/src/assets/programer/講師-Miles.png';
import Nina from '@site/src/assets/programer/講師-Nina.png';
import Stephen from '@site/src/assets/programer/講師-Stephen.png';
import Steven from '@site/src/assets/programer/講師-Steven高松 1.png';
import Teddy from '@site/src/assets/programer/講師-Teddy 陳建村.png';
import Ni from '@site/src/assets/programer/講師-倪國凱.png';
import Steny from '@site/src/assets/programer/講師-劉宥辰.png';
import Nathan from '@site/src/assets/programer/講師-呂健誠.png';
import David from '@site/src/assets/programer/講師-王威.png';
import JamesCheng from '@site/src/assets/programer/講師-程章堯.png';
import Aotokitsuruya from '@site/src/assets/programer/講師-邱政憲 蒼時弦也.png';
import JianMin from '@site/src/assets/programer/講師-黃健旻 Huang Jian-Min.png';
import Michael from '@site/src/assets/programer/陳勉修.png';

export const SPEECH_LEVEL = {
  en: {
    HEIGH: 'High',
    MIDDLE: 'Middle',
    LOW: 'Low',
  },
  zh: {
    HEIGH: '高階',
    MIDDLE: '進階',
    LOW: '初階',
  },
};

export type SpeechLevel =
  | (typeof SPEECH_LEVEL)['en'][keyof (typeof SPEECH_LEVEL)['en']]
  | (typeof SPEECH_LEVEL)['zh'][keyof (typeof SPEECH_LEVEL)['zh']];

export type programer_type = {
  name: string;
  slug?: string;
  photo?: Img;
  title?: string;
  contact?: string;
  speech?: {
    level?: SpeechLevel[];
    title?: string;
    point?: string;
    intro?: string;
    takeaways?: string;
  };
};
export interface Programer {
  en: programer_type;
  zh: programer_type;
  photo: Img;
  slug?: string;
}

/**
 * @description
 * 講師照片放在 src/assets/programer 資料夾
 * @property {string} en.name 英文名字
 * @property {string} zh.name 中文名字
 * @property {string} en.title 英文職稱
 * @property {string} zh.title 中文職稱
 * @property {string} en.contact 英文聯絡方式
 * @property {string} zh.contact 中文聯絡方式
 * @property {string} en.speech.level 英文演講難易度
 * @property {string} zh.speech.level 中文演講難易度
 * @property {string} en.speech.title 英文演講標題
 * @property {string} zh.speech.title 中文演講標題
 * @property {string} en.speech.point 英文演講重點
 * @property {string} zh.speech.point 中文演講重點
 * @property {string} en.speech.intro 英文演講介紹
 * @property {string} zh.speech.intro 中文演講介紹
 * @property {string} en.speech.takeaways 英文演講結論
 * @property {string} zh.speech.takeaways 中文演講結論
 * @property {string} photo 講師照片
 *
 */
export const PROGRAMER: Programer[] = [
  {
    en: { name: 'Aotokitsuruya' },
    zh: {
      name: '蒼時弦也',
      speech: { title: '導入 Domain-Driven Design 的最佳時機' },
    },
    photo: Aotokitsuruya,
  },
  {
    en: { name: 'Arthur' },
    zh: { name: 'Arthur', speech: { title: 'DDD戰術-柔型要術' } },
    photo: Arthur,
  },
  {
    en: { name: 'Chris Simon' },
    zh: {
      name: 'Chris Simon',
      speech: { title: "When Customers Don't Share a Language" },
    },
    photo: ChrisSimon,
  },
  {
    en: { name: 'David Ko' },
    zh: {
      name: 'David Ko',
      speech: { title: '如何利用 Example Mapping 來釐清需求' },
    },
    photo: DavidKo,
  },
  {
    en: { name: 'David Wang' },
    zh: { name: '王威' },
    photo: David,
  },
  {
    en: { name: 'Ean' },
    zh: {
      name: 'Ean',
      speech: {
        title: '單兵作戰: 以領域驅動設計 (DDD) 改善既有進銷存管理系統的策略與實踐',
      },
    },
    photo: Ean,
  },
  {
    en: { name: 'Fong' },
    zh: { name: 'Fong', speech: { title: '你真的懂 SOLID 原則嗎？' } },
    photo: Fong,
  },
  {
    en: { name: 'James Wang' },
    zh: { name: 'James' },
    photo: James,
  },
  {
    en: { name: 'James Cheng' },
    zh: {
      name: '程章尧',
      speech: {
        title: 'DDD Applied - Introducing TDD while breaking down legacy monolith',
      },
    },
    photo: JamesCheng,
  },
  {
    en: { name: 'Huang Jian' },
    zh: {
      name: '黃健旻',
      speech: {
        title: '在 Spring Boot 3 + Java 17 中實戰 Domain Driven Design + Clean Architecture',
      },
    },
    photo: JianMin,
  },
  {
    en: { name: 'Ken Ni' },
    zh: { name: '倪國凱', speech: { title: '這些年我們所追的微服務' } },
    photo: Ni,
  },
  {
    en: {
      name: 'Kim Kao',
    },
    zh: {
      name: 'Kim',
      speech: {
        level: [SPEECH_LEVEL.zh.MIDDLE],
        title: 'Value Flywheel Effect : 那些藏在價值飛輪下你該知道的策略',
        intro:
          '在這個演講當中，主要會提及企業希望提升競爭力的過程中，可以通過可視化、通盤觀察企業核心競爭力的綜合整理，並且通過大規模的善用科技來推進這些改造與轉變。在雲服務時代中，有幾個經典的市場上的案例可以作為分享。主題內容包含但不限於 Wardley Mapping、Sense-making approach ，以及基於 Working Backward 的思維來做可參考執行的發展模式。',
      },
    },
    photo: Kim,
  },
  {
    en: { name: 'Kuma Syu' },
    zh: {
      name: 'Kuma Syu',
      speech: { title: '「Code with Me」--- 我們寫了一支 API' },
    },
    photo: Kuma,
  },
  {
    en: { name: 'Lex Liu' },
    zh: { name: 'Lex Liu', speech: { title: '動動手手練練 Event Sourcing' } },
    photo: Lex,
  },
  {
    en: { name: 'Matthew Wei' },
    zh: {
      name: '魏宣德',
      speech: {
        title:
          'Don’t Forget UCD & Balanced Teams: Reap the Full Benefits with Modern Development Practices',
      },
    },
    photo: MatthewWei,
  },
  {
    en: {
      name: 'Michael',
      title: '樂屋網 產品處 副總經理',
      contact: '0930062400',
    },
    zh: {
      name: 'Michael',
      title: 'Domain Storytelling— One-size-fits-all 串連產品服務的需求、設計、開發與測試',
      contact: 'iamhugh@gmail.com',
      speech: {
        title: '從事件風暴中探索業務指標可觀測性',
        point: '事件風暴中探索領域專家們與業務們想看到的事件，並記錄下來，轉換成即時的業務指標',
        intro:
          '討如何利用事件風暴的方法找出關鍵的業務事件流程與內容，並從中識別和建立對業務運營有實際影響的指標與事件追蹤。也會講到可觀測性的基本組成與概念。',
      },
    },
    photo: Michael,
  },
  {
    en: { name: 'Miles Chou' },
    zh: {
      name: 'Miles',
      speech: { title: '在風雨交加的航道上探索 DDD：從困惑到啟發' },
    },
    photo: Miles,
  },
  {
    en: { name: 'Nathan Lu' },
    zh: {
      name: '雷N',
      title: '從事件風暴中探索業務指標可觀測性',
      contact: 'iamhugh@gmail.com',
      speech: {
        title: '從事件風暴中探索業務指標可觀測性',
        point: '事件風暴中探索領域專家們與業務們想看到的事件，並記錄下來，轉換成即時的業務指標',
        intro:
          '討如何利用事件風暴的方法找出關鍵的業務事件流程與內容，並從中識別和建立對業務運營有實際影響的指標與事件追蹤。也會講到可觀測性的基本組成與概念。',
      },
    },
    photo: Nathan,
  },
  {
    en: { name: 'Nina Weng' },
    zh: { name: 'Nina', speech: { title: 'Event Storming實戰經驗分享' } },
    photo: Nina,
  },
  {
    en: { name: 'Soking' },
    zh: {
      name: 'Soking',
      speech: {
        title: '偷偷將 Event Storming 簡化運用於需求探索的資訊架構設計工作坊',
      },
    },
    photo: Wang,
  },
  {
    en: { name: 'Steny Liu' },
    zh: {
      name: '劉宥辰',
      speech: {
        title: '從混亂到組織：DDD與Clean Architecture的持續精進挑戰之道',
      },
    },
    photo: Steny,
  },
  {
    en: { name: 'Stephen Tung' },
    zh: {
      name: 'Stephen Tung',
      speech: { title: 'The Superpowers of Event Sourcing' },
    },
    photo: Stephen,
  },
  {
    en: { name: 'Steven Gao' },
    zh: {
      name: '高松',
      speech: { title: '複雜遺留系統的現代化改造方法與實踐' },
    },
    photo: Steven,
  },
  {
    en: { name: 'Teddy Chen' },
    zh: {
      name: '陳建村',
      speech: { title: '用模式語言解壓縮CQRS：以ezKanban系統為例' },
    },
    photo: Teddy,
  },
  {
    en: { name: 'Vlad Khononov' },
    zh: { name: 'Vlad Khononov' },
    photo: Vlad,
  },
  {
    en: { name: 'Water ball' },
    zh: {
      name: '水球潘',
      speech: {
        title: '在自己的新創導入 DDD 來迭代開發一個有夠複雜的線上遊戲教育創新產品',
      },
    },
    photo: WaterBall,
  },
  {
    en: { name: 'Wesley Chiu' },
    zh: { name: '邱凡遠' },
    photo: Wesley,
  },
];
