<template>
  <section class="container mx-auto">
    <div class="banner-main">
      <div class="hidden sm:block">
        <img src="../assets/banner-agenda.png" alt="Banner" />
      </div>
      <div class="block sm:hidden">
        <img src="../assets/banner-mobile-agenda.png" alt="Banner" />
      </div>
    </div>
    <h2 class="text-3xl mb-3 mt-3">議程資訊</h2>
    <p class="text-red-300">* 螢幕若較小，請左右滑動檢視。</p>

    <h3 class="font-semibold mt-5 mb-5"><span class="text-xl">Day 1</span><br /><span class="text-4xl">2023/09/16</span></h3>
    <p class="text-yellow-300">* 講座分為：Keynotes、講座及工作坊共三類型，請注意。</p>
    <div role="region" aria-label="data table" tabindex="0" class="primary">
      <table>
        <thead>
          <tr>
            <th class="pin text-3xl font-semibold bg-sky-950 ">Room</th>
            <th class="text-3xl font-semibold text-amber-300 bg-cyan-300/10 min-w-[50%]">303</th>
            <th class="text-3xl font-semibold text-lime-300 bg-lime-300/10 min-w-[50%]">302</th>
            <th class="text-3xl font-semibold text-cyan-500 bg-cyan-500/10 min-w-[50%]">202</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th class="pin text-xl font-semibold bg-sky-950">08:30<br />報到</th>
            <td class="bg-sky-950/20"></td>
            <td class="bg-sky-950/20"></td>
            <td class="bg-sky-950/20"></td>
          </tr>
          <tr>
            <th class="pin text-xl font-semibold bg-sky-950">09:30 ~ 10:15</th>
            <td class="bg-cyan-300/10">
                <h2 class="mb-3 text-xl font-semibold"><a href="/agenda/30301">Balancing Coupling in Software Design</a></h2>
                <h3>
                  講者：<strong class="text-xl"><a href="/speakers/Vlad%20Khononov">Vlad Khononov</a></strong>
                </h3>
                <p class="mt-3">類型：Keynotes</p>
                <p class="flex items-center">
                  <span class="mr-2">難度:</span>
                  <img src="../assets/level.svg" alt="level">
                </p>
            </td>
            <td class="bg-lime-300/10">
                <h2 class="mb-3 text-xl font-semibold"><a href="/agenda/30201">Balancing Coupling in Software Design</a></h2>
                <h3>
                  講者：<strong class="text-xl"><a href="/speakers/Nina">Nina</a></strong>
                </h3>
                <p class="mt-3">類型：講座</p>
                <p class="flex items-center">
                  <span class="mr-2">難度:</span>
                  <img src="../assets/level.svg" alt="level">
                </p>
            </td>
            <td class="bg-cyan-500/10">
                <h2 class="mb-3 text-xl font-semibold"><a href="/agenda/20201">EventStorming 實戰經驗分享</a></h2>
                <h3>
                  講者：<strong class="text-xl"><a href="/speakers/蒼時弦也">蒼時弦也</a></strong>
                </h3>
                <p class="mt-3">類型：講座</p>
                <p class="flex items-center">
                  <span class="mr-2">難度:</span>
                  <img src="../assets/level.svg" alt="level">
                </p>
            </td>
          </tr>
          <tr>
            <th class="pin text-xl font-semibold bg-sky-950">10:15 ~ 10:30<br />休息</th>
            <td class="bg-sky-950/20"></td>
            <td class="bg-sky-950/20"></td>
            <td class="bg-sky-950/20"></td>
          </tr>
          <tr>
            <th class="pin text-xl font-semibold bg-sky-950">10:30 ~ 11:15</th>
            <td class="bg-cyan-300/10">
                <h2 class="mb-3 text-xl font-semibold"><a href="/agenda/30302">Practical experience of applying DDD and CA in Spring Boot 3 + Java 17</a></h2>
                <h3>
                  講者：<strong class="text-xl"><a href="/speakers/黃健旻">黃健旻</a></strong>
                </h3>
                <p class="mt-3">類型：講座</p>
                <p class="flex items-center">
                  <span class="mr-2">難度:</span>
                  <img src="../assets/level.svg" alt="level">
                </p>
            </td>
            <td class="bg-lime-300/10">
                <h2 class="mb-3 text-xl font-semibold"><a href="/agenda/30202">Don’t Forget UCD & Balanced Teams: Reap the Full Benefits with Modern Development Practices</a></h2>
                <h3 class="mb-2">
                  講者：<strong class="text-xl"><a href="/speakers/魏宣德">魏宣德</a></strong>
                </h3>
                <h3>
                  講者：<strong class="text-xl"><a href="/speakers/邱凡遠">邱凡遠</a></strong>
                </h3>
                <p class="mt-3">類型：講座</p>
                <p class="flex items-center">
                  <span class="mr-2">難度:</span>
                  <img src="../assets/level.svg" alt="level">
                </p>
            </td>
            <td class="bg-cyan-500/10">
                <h2 class="mb-3 text-xl font-semibold"><a href="/agenda/20202">偷偷將 Event Storming 簡化運用於需求探索的資訊架構設計工作坊 (1/2)</a></h2>
                <h3>
                  講者：<strong class="text-xl"><a href="/speakers/Soking">Soking</a></strong>
                </h3>
                <p class="mt-3">類型：工作坊</p>
                <p class="flex items-center">
                  <span class="mr-2">難度:</span>
                  <img src="../assets/level.svg" alt="level">
                </p>
            </td>
          </tr>
          <tr>
            <th class="pin text-xl font-semibold bg-sky-950">11:15 ~ 11:30<br />休息</th>
            <td class="bg-sky-950/20"></td>
            <td class="bg-sky-950/20"></td>
            <td class="bg-sky-950/20"></td>
          </tr>
          <tr>
            <th class="pin text-xl font-semibold bg-sky-950">11:30 ~ 12:15</th>
            <td class="bg-cyan-300/10">
                <h2 class="mb-3 text-xl font-semibold"><a href="/agenda/30303">The Superpowers of Event Sourcing</a></h2>
                <h3>
                  講者：<strong class="text-xl"><a href="/speakers/Stephen%20Tung">Stephen Tung</a></strong>
                </h3>
                <p class="mt-3">類型：講座</p>
                <p class="flex items-center">
                  <span class="mr-2">難度:</span>
                  <img src="../assets/level.svg" alt="level">
                  <img src="../assets/level.svg" alt="level">
                </p>
            </td>
            <td class="bg-lime-300/10">
                <h2 class="mb-3 text-xl font-semibold"><a href="/agenda/30203">DDD Applied - Introducing TDD while breaking down legacy monolith</a></h2>
                <h3>
                  講者：<strong class="text-xl"><a href="/speakers/Stephen%20Tung">程章尧</a></strong>
                </h3>
                <p class="mt-3">類型：講座</p>
                <p class="flex items-center">
                  <span class="mr-2">難度:</span>
                  <img src="../assets/level.svg" alt="level">
                  <img src="../assets/level.svg" alt="level">
                </p>
            </td>
            <td class="bg-cyan-500/10">
                <h2 class="mb-3 text-xl font-semibold"><a href="/agenda/20202">偷偷將 Event Storming 簡化運用於需求探索的資訊架構設計工作坊 (2/2)</a></h2>
                <h3>
                  講者：<strong class="text-xl"><a href="/speakers/Soking">Soking</a></strong>
                </h3>
                <p class="mt-3">類型：工作坊</p>
                <p class="flex items-center">
                  <span class="mr-2">難度:</span>
                  <img src="../assets/level.svg" alt="level">
                </p>
            </td>
          </tr>
          <tr>
            <th class="pin text-xl font-semibold bg-sky-950">12:15 ~ 13:15<br />午餐</th>
            <td class="bg-sky-950/20"></td>
            <td class="bg-sky-950/20"></td>
            <td class="bg-sky-950/20"></td>
          </tr>
          <tr>
            <th class="pin text-xl font-semibold bg-sky-950">13:15 ~ 14:00</th>
            <td class="bg-cyan-300/10">
                <h2 class="mb-3 text-xl font-semibold"><a href="/agenda/30304">探索系統的可觀測性</a></h2>
                <h3>
                  講者：<strong class="text-xl"><a href="/speakers/雷N">雷 N</a></strong>
                </h3>
                <p class="mt-3">類型：講座</p>
                <p class="flex items-center">
                  <span class="mr-2">難度:</span>
                  <img src="../assets/level.svg" alt="level">
                </p>
            </td>
            <td class="bg-lime-300/10">
                <h2 class="mb-3 text-xl font-semibold"><a href="/agenda/30204">When Customers Don't Share a Language（線上）</a></h2>
                <h3>
                  講者：<strong class="text-xl"><a href="/speakers/Chris%20Simon">Chris Simon</a></strong>
                </h3>
                <p class="mt-3">類型：講座</p>
                <p class="flex items-center">
                  <span class="mr-2">難度:</span>
                  <img src="../assets/level.svg" alt="level">
                  <img src="../assets/level.svg" alt="level">
                </p>
            </td>
            <td class="bg-cyan-500/10">
                <h2 class="mb-3 text-xl font-semibold"><a href="/agenda/20204">動動手手練練 Event Sourcing 難度</a></h2>
                <h3>
                  講者：<strong class="text-xl"><a href="/speakers/Lex%20Liu">Lex Liu</a></strong>
                </h3>
                <p class="mt-3">類型：工作坊</p>
                <p class="flex items-center">
                  <span class="mr-2">難度:</span>
                  <img src="../assets/level.svg" alt="level">
                </p>
            </td>
          </tr>
          <tr>
            <th class="pin text-xl font-semibold bg-sky-950">14:00 ~ 14:15<br />休息</th>
            <td class="bg-sky-950/20"></td>
            <td class="bg-sky-950/20"></td>
            <td class="bg-sky-950/20"></td>
          </tr>
          <tr>
            <th class="pin text-xl font-semibold bg-sky-950">13:15 ~ 14:00</th>
            <td class="bg-cyan-300/10">
                <h2 class="mb-3 text-xl font-semibold"><a href="/agenda/30305">這些年我們所追的微服務</a></h2>
                <h3>
                  講者：<strong class="text-xl"><a href="/speakers/倪國凱">倪國凱</a></strong>
                </h3>
                <p class="mt-3">類型：講座</p>
                <p class="flex items-center">
                  <span class="mr-2">難度:</span>
                  <img src="../assets/level.svg" alt="level">
                </p>
            </td>
            <td class="bg-lime-300/10">
                <h2 class="mb-3 text-xl font-semibold"><a href="/agenda/30205">用 Constructor theory 实现架构演进和治理</a></h2>
                <h3>
                  講者：<strong class="text-xl"><a href="/speakers/王威">王威</a></strong>
                </h3>
                <p class="mt-3">類型：講座</p>
                <p class="flex items-center">
                  <span class="mr-2">難度:</span>
                  <img src="../assets/level.svg" alt="level">
                  <img src="../assets/level.svg" alt="level">
                </p>
            </td>
            <td class="bg-cyan-500/10">
                <h2 class="mb-3 text-xl font-semibold"><a href="/agenda/20205">如何利用 Example Mapping 來釐清需求 (1/2)</a></h2>
                <h3>
                  講者：<strong class="text-xl"><a href="/speakers/David%20Ko">David Ko</a></strong>
                </h3>
                <p class="mt-3">類型：工作坊</p>
                <p class="flex items-center">
                  <span class="mr-2">難度:</span>
                  <img src="../assets/level.svg" alt="level">
                </p>
            </td>
          </tr>

          <tr>
            <th class="pin text-xl font-semibold bg-sky-950">15:00 ~ 15:15<br />休息</th>
            <td class="bg-sky-950/20"></td>
            <td class="bg-sky-950/20"></td>
            <td class="bg-sky-950/20"></td>
          </tr>
          <tr>
            <th class="pin text-xl font-semibold bg-sky-950">15:15 ~ 16:00</th>
            <td class="bg-cyan-300/10">
                <h2 class="mb-3 text-xl font-semibold"><a href="/agenda/30306">在風雨交加的航道上探索 DDD：從困惑到啟發</a></h2>
                <h3>
                  講者：<strong class="text-xl"><a href="/speakers/Miles">Miles</a></strong>
                </h3>
                <p class="mt-3">類型：講座</p>
                <p class="flex items-center">
                  <span class="mr-2">難度:</span>
                  <img src="../assets/level.svg" alt="level">
                </p>
            </td>
            <td class="bg-lime-300/10">
                <h2 class="mb-3 text-xl font-semibold"><a href="/agenda/30206">複雜遺留系統的現代化改造方法與實踐（線上）</a></h2>
                <h3>
                  講者：<strong class="text-xl"><a href="/speakers/高松">高松</a></strong>
                </h3>
                <p class="mt-3">類型：講座</p>
                <p class="flex items-center">
                  <span class="mr-2">難度:</span>
                  <img src="../assets/level.svg" alt="level">
                </p>
            </td>
            <td class="bg-cyan-500/10">
                <h2 class="mb-3 text-xl font-semibold"><a href="/agenda/20205">如何利用 Example Mapping 來釐清需求 (2/2)</a></h2>
                <h3>
                  講者：<strong class="text-xl"><a href="/speakers/David%20Ko">David Ko</a></strong>
                  講者：<strong class="text-xl"></strong>
                </h3>
                <p class="mt-3">類型：工作坊</p>
                <p class="flex items-center">
                  <span class="mr-2">難度:</span>
                  <img src="../assets/level.svg" alt="level">
                </p>
            </td>
          </tr>

          <tr>
            <th class="pin text-xl font-semibold bg-sky-950">16:00 ~ 16:15<br />休息</th>
            <td class="bg-sky-950/20"></td>
            <td class="bg-sky-950/20"></td>
            <td class="bg-sky-950/20"></td>
          </tr>
          <tr>
            <th class="pin text-xl font-semibold bg-sky-950">16:15 ~ 17:45</th>
            <td class="bg-cyan-300/10">
                <h2 class="mb-3 text-xl font-semibold"><a href="/agenda/30307">從混亂到組織：DDD 與 Clean Architecture 的持續精進挑戰之道</a></h2>
                <h3>
                  講者：<strong class="text-xl"><a href="/speakers/劉宥辰">劉宥辰</a></strong>
                </h3>
                <p class="mt-3">類型：講座</p>
                <p class="flex items-center">
                  <span class="mr-2">難度:</span>
                  <img src="../assets/level.svg" alt="level">
                </p>
            </td>
            <td class="bg-lime-300/10">
                <h2 class="mb-3 text-xl font-semibold"><a href="/agenda/30207">用模式語言解壓縮 CQRS：以 ezKanban 系統為例</a></h2>
                <h3>
                  講者：<strong class="text-xl"><a href="/speakers/陳建村">陳建村</a></strong>
                </h3>
                <p class="mt-3">類型：講座</p>
                <p class="flex items-center">
                  <span class="mr-2">難度:</span>
                  <img src="../assets/level.svg" alt="level">
                  <img src="../assets/level.svg" alt="level">
                </p>
            </td>
            <td class="bg-cyan-500/10">
                <h2 class="mb-3 text-xl font-semibold"><a href="/agenda/20207">「Code with Me」- 我們寫了一支 API</a></h2>
                <h3>
                  講者：<strong class="text-xl"><a href="/speakers/Kuma%20Syu">Kuma Syu</a></strong>
                </h3>
                <p class="mt-3">類型：工作坊</p>
                <p class="flex items-center">
                  <span class="mr-2">難度:</span>
                  <img src="../assets/level.svg" alt="level">
                </p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <hr class="border-top border-cyan-300 mt-10 mb-10" />
    <h3 class="font-semibold mt-5 mb-5"><span class="text-xl">Day 2</span><br /><span class="text-4xl">2023/09/17</span></h3>
    <div role="region2" aria-label="data table 2" tabindex="0" class="primary">
      <table>
        <thead>
          <tr>
            <th class="pin text-3xl font-semibold bg-sky-950 ">線上</th>
            <th class="text-3xl font-semibold text-amber-300 bg-cyan-300/10 min-w-[50%]"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th class="pin text-xl font-semibold bg-sky-950">09:30 ~ 10:15</th>
            <td class="bg-cyan-300/10">
                <h2 class="mb-3 text-xl font-semibold"><a href="/agenda/ol01">The value flywheel effect : 指導解決方案域的決策指南</a></h2>
                <h3>
                  講者：<strong class="text-xl"><a href="/speakers/Kim">Kim</a></strong>
                </h3>
                <p class="flex items-center">
                  <span class="mr-2">難度:</span>
                  <img src="../assets/level.svg" alt="level">
                  <img src="../assets/level.svg" alt="level">
                </p>
            </td>
          </tr>
          <tr>
            <th class="pin text-xl font-semibold bg-sky-950">10:15 ~ 10:30<br />休息</th>
            <td class="bg-sky-950/20"></td>
          </tr>
          <tr>
            <th class="pin text-xl font-semibold bg-sky-950">10:30 ~ 11:15</th>
            <td class="bg-cyan-300/10">
                <h2 class="mb-3 text-xl font-semibold"><a href="/agenda/ol02">在自己的新創導入 DDD 來迭代開發一個有夠複雜的線上遊戲教育創新產品</a></h2>
                <h3>
                  講者：<strong class="text-xl"><a href="/speakers/水球潘">水球潘</a></strong>
                  講者：<strong class="text-xl"></strong>
                </h3>
                <p class="flex items-center">
                  <span class="mr-2">難度:</span>
                  <img src="../assets/level.svg" alt="level">
                </p>
            </td>
          </tr>
          <tr>
            <th class="pin text-xl font-semibold bg-sky-950">11:15 ~ 11:30<br />休息</th>
            <td class="bg-sky-950/20"></td>
          </tr>
          <tr>
            <th class="pin text-xl font-semibold bg-sky-950">11:30 ~ 12:15</th>
            <td class="bg-cyan-300/10">
                <h2 class="mb-3 text-xl font-semibold"><a href="/agenda/ol03">真的懂 SOLID 原則嗎？ You Don't Know SOLID</a></h2>
                <h3>
                  講者：<strong class="text-xl"><a href="/speakers/Fong">Fong</a></strong>
                  講者：<strong class="text-xl">Fong</strong>
                </h3>
                <p class="flex items-center">
                  <span class="mr-2">難度:</span>
                  <img src="../assets/level.svg" alt="level">
                  <img src="../assets/level.svg" alt="level">
                </p>
            </td>
          </tr>
          <tr>
            <th class="pin text-xl font-semibold bg-sky-950">12:15 ~ 13:15<br />午餐</th>
            <td class="bg-sky-950/20"></td>
          </tr>
          <tr>
            <th class="pin text-xl font-semibold bg-sky-950">13:15 ~ 14:00</th>
            <td class="bg-cyan-300/10">
                <h2 class="mb-3 text-xl font-semibold"><a href="/agenda/ol04">單兵作戰：以領域驅動設計 (DDD) 改善既有進銷存管理系統的策略與實踐</a></h2>
                <h3>
                  講者：<strong class="text-xl"><a href="/speakers/Ean">Ean</a></strong>
                </h3>
                <p class="flex items-center">
                  <span class="mr-2">難度:</span>
                  <img src="../assets/level.svg" alt="level">
                </p>
            </td>
          </tr>
          <tr>
            <th class="pin text-xl font-semibold bg-sky-950">14:00 ~ 14:15<br />休息</th>
            <td class="bg-sky-950/20"></td>
          </tr>
          <tr>
            <th class="pin text-xl font-semibold bg-sky-950">14:15 ~ 15:00</th>
            <td class="bg-cyan-300/10">
                <h2 class="mb-3 text-xl font-semibold"><a href="/agenda/ol05">DDD 中的橋樑：透過有效建模與設計，從戰略走向戰術</a></h2>
                <h3>
                  講者：<strong class="text-xl"><a href="/speakers/James">James</a></strong>
                </h3>
                <p class="flex items-center">
                  <span class="mr-2">難度:</span>
                  <img src="../assets/level.svg" alt="level">
                  <img src="../assets/level.svg" alt="level">
                </p>
            </td>
          </tr>

          <tr>
            <th class="pin text-xl font-semibold bg-sky-950">15:00 ~ 15:15<br />休息</th>
            <td class="bg-sky-950/20"></td>
          </tr>
          <tr>
            <th class="pin text-xl font-semibold bg-sky-950">15:15 ~ 16:15</th>
            <td class="bg-cyan-300/10">
                <h2 class="mb-3 text-xl font-semibold"><a href="/agenda/ol06">DDD 戰術 - 柔型要術</a></h2>
                <h3>
                  講者：<strong class="text-xl"><a href="/speakers/Arthur">Arthur</a></strong>
                </h3>
                <p class="flex items-center">
                  <span class="mr-2">難度:</span>
                  <img src="../assets/level.svg" alt="level">
                </p>
            </td>
          </tr>

          <tr>
            <th class="pin text-xl font-semibold bg-sky-950">16:15 ~ 16:30<br />休息</th>
            <td class="bg-sky-950/20"></td>
          </tr>
          <tr>
            <th class="pin text-xl font-semibold bg-sky-950">16:30 ~ 17:30</th>
            <td class="bg-cyan-300/10">
                <h2 class="mb-3 text-xl font-semibold"><a href="/agenda/ol07">Domain Storytelling— One-size-fits-all 串連產品服務的需求、設計、開發與測試難度</a></h2>
                <h3>
                  講者：<strong class="text-xl"><a href="/speakers/Michael">Michael</a></strong>
                </h3>
                <p class="flex items-center">
                  <span class="mr-2">難度:</span>
                  <img src="../assets/level.svg" alt="level">
                </p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script>
import agendaData from '../data/agendaData';

export default {
  data() {
    return {
      agendaData: agendaData,
    };
  },
};
</script>

<style scoped>
.primary {
  overflow: auto;
  scroll-snap-type: both mandatory;
}
table {
  border-collapse: collapse;
  border: 0;
  width: 100%;
}
th,
td {
  border: 1px dotted #464d67;
  background-clip: padding-box;
  padding: 0.5rem;
  text-align: left;
  margin: 0;
  min-width: 22rem;
  vertical-align: top;
}
thead {
  z-index: 5;
  position: relative;
}
thead th {
  position: sticky;
  top: 0;
  background-clip: padding-box;
}
thead .pin ,
tbody .pin {
  left: -2px;
  z-index: 6;
  min-width: 10rem;
  text-align: center;
}
tbody th {
  background-clip: padding-box;
}
tbody {
  z-index: 5;
  position: relative;
}
tbody th {
  position: sticky;
  left: 0;
}
</style>