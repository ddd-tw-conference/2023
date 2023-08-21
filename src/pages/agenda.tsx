/** @jsx jsx */
import { jsx } from "@emotion/react";
import { Fragment } from "react";
import { Agenda, Translation, translationContext } from "../layout/agenda";

const translation: Translation = {
  layout: {
    title: "議程表",
  },
  common: {
    difficulty: {
      label: "難度",
    },
    cls: {
      checkIn: "報到",
      breakTime: "休息",
      lunchTime: "午餐",
    },
  },
  category: {
    keynote: "Keynotes",
    speech: "講座",
    workshop: "工作坊",
  },
  session: {
    balancing_coupling_in_software_design_balancing_coupling_in_software_design:
      "Balancing Coupling in Software Design",
    "importing-domain-driven-design-at-the-right-moment":
      "導入 Domain-Driven Design 的最佳時機",
    "eventstorming-practical-experience-sharing": "EventStorming 實戰經驗分享",
    "practical-experience-of-applying-ddd-and-ca-in-spring-boot-3-java-17":
      "Practical experience of applying DDD and CA in Spring Boot 3 + Java 17",
    "dont-forget-ucd-balanced-teams-reap-the-full-benefits-with-modern-development-practices":
      "Don’t Forget UCD & Balanced Teams: Reap the Full Benefits with Modern Development Practices",
    "secretly-applying-simplified-event-storming-to-information-architecture-design-workshops-for-requirements-exploration":
      "偷偷將 Event Storming 簡化運用於需求探索的資訊架構設計工作坊",
    "the-superpowers-of-event-sourcing": "The Superpowers of Event Sourcing",
    "ddd-applied-introducing-tdd-while-breaking-down-legacy-monolith":
      "DDD Applied - Introducing TDD while breaking down legacy monolith",
    "exploring-system-observability": "探索系統的可觀測性",
    "when-customers-dont-share-a-language-online":
      "When Customers Don't Share a Language（線上）",
    "get-hands-on-with-event-sourcing": "動動手手練練 Event Sourcing",
    "the-microservices-weve-pursued-over-the-years": "這些年我們所追的微服務",
    "achieving-architectural-evolution-and-governance-with-constructor-theory":
      "用 Constructor theory 实现架构演进和治理",
    "how-to-clarify-requirements-using-example-mapping":
      "如何利用 Example Mapping 來釐清需求",
    "exploring-ddd-in-turbulent-waters-from-confusion-to-enlightenment":
      "在風雨交加的航道上探索 DDD：從困惑到啟發",
    "modernization-approaches-and-practices-for-complex-legacy-systems-online":
      "複雜遺留系統的現代化改造方法與實踐（線上）",
    "from-chaos-to-organization-continuously-improving-with-ddd-clean-architecture":
      "從混亂到組織：DDD 與 Clean Architecture 的持續精進挑戰之道",
    "decompressing-cqrs-with-pattern-language-a-case-study-with-ezkanban-system":
      "用模式語言解壓縮 CQRS：以 ezKanban 系統為例",
    "code-with-me-we-wrote-an-api": "「Code with Me」- 我們寫了一支 API",

    "the-value-flywheel-effect-guiding-decision-making-in-solution-domain":
      "The value flywheel effect : 指導解決方案域的決策指南",
    "introducing-ddd-in-my-startup-for-iterative-development-of-a-complex-online-gaming-education-innovation-product":
      "在自己的新創導入 DDD 來迭代開發一個有夠複雜的線上遊戲教育創新產品",
    "you-dont-know-solid": (
      <Fragment>
        你真的懂 SOLID 原則嗎？
        <br />
        You Don't Know SOLID
      </Fragment>
    ),
    "solo-mission-improving-an-existing-inventory-management-system-with-domain-driven-design-ddd-strategies-and-practices":
      "單兵作戰：以領域驅動設計 (DDD) 改善既有進銷存管理系統的策略與實踐",
    "bridging-the-gap-in-ddd-transitioning-from-strategic-to-tactical-through-effective-modeling-and-design":
      "DDD 中的橋樑：透過有效建模與設計，從戰略走向戰術",
    "tactical-ddd-the-art-of-flexibility": "DDD 戰術 - 柔型要術",
    "domain-storytelling-one-size-fits-all-connecting-requirements-design-development-and-testing-for-product-services":
      "Domain Storytelling— One-size-fits-all 串連產品服務的需求、設計、開發與測試",
  },
  speaker: {
    aotokitsuruya: { name: "蒼時弦也" },
    arthur: { name: "Arthur" },
    chris_simon: { name: "Chris Simon" },
    david_ko: { name: "David Ko" },
    david_wang: { name: "王威" },
    ean: { name: "Ean" },
    fong: { name: "Fong" },
    huang_jian: { name: "黃健旻" },
    james_cheng: { name: "程章尧" },
    james_wang: { name: "James" },
    ken_ni: { name: "倪國凱" },
    kim_kao: { name: "Kim" },
    kuma_syu: { name: "Kuma Syu" },
    lex_liu: { name: "Lex Liu" },
    matthew_wei: { name: "魏宣德" },
    michael: { name: "Michael" },
    miles_chou: { name: "Miles" },
    nathan_lu: { name: "雷 N" },
    nina_weng: { name: "Nina" },
    soking: { name: "Soking" },
    steny_liu: { name: "劉宥辰" },
    stephen_tung: { name: "Stephen Tung" },
    steven_gao: { name: "高松" },
    teddy_chen: { name: "陳建村" },
    vlad_khononov: { name: "Vlad Khononov" },
    water_ball: { name: "水球潘" },
    wesley_chiu: { name: "邱凡遠" },
  },
  rooms: {
    202: "Room 202",
    302: "Room 302",
    303: "Room 303",
    online: "線上",
  },
};

export default function Page() {
  return (
    <translationContext.Provider value={translation}>
      <Agenda />
    </translationContext.Provider>
  );
}
