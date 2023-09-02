<template>
  <section class="container mx-auto">
    <div class="banner-main">
      <div class="hidden sm:block">
        <img src="/images/banner-agenda.png" alt="Banner" />
      </div>
      <div class="block sm:hidden">
        <img src="/images/banner-mobile-agenda.png" alt="Banner" />
      </div>
    </div>
    <h2 class="text-3xl mb-3 mt-3">實體講座</h2>
    <p class="text-red-300">* 螢幕若較小，請左右滑動檢視。</p>

    <h3 class="font-semibold mt-5 mb-5"><span class="text-xl">Day 1</span><br /><span class="text-4xl">2023/09/16</span></h3>
    <p class="text-yellow-300">* 講座分為：Keynotes、講座及工作坊共三類型，請注意。</p>
    <div role="region" aria-label="data table" tabindex="0" class="primary">
      <table>
        <thead>
          <tr>
            <th class="pin text-3xl font-semibold bg-sky-950 ">Room</th>
            <th class="text-3xl font-semibold text-amber-300 bg-cyan-300/10 min-w-[50%]">303</th>
            <th class="text-3xl font-semibold text-lime-300 bg-lime-300/10 min-w-[50%]">202</th>
            <th class="text-3xl font-semibold text-cyan-500 bg-cyan-500/10 min-w-[50%]">302</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th class="pin text-xl font-semibold bg-sky-950">08:30<br />報到</th>
            <td class="bg-cyan-950/20 font-semibold text-amber-300" style="border-bottom: 0; border-top:0; vertical-align: middle;">大型教室</td>
            <td class="bg-cyan-950/20 font-semibold text-lime-300" style="border-bottom: 0; border-top:0; vertical-align: middle;">大型教室</td>
            <td class="bg-cyan-950/20 font-semibold text-cyan-500" style="border-bottom: 0; border-top:0; vertical-align: middle;">小型教室</td>
          </tr>
          <tr>
            <th class="pin text-xl font-semibold bg-sky-950">09:30 ~ 10:15</th>
            <td class="bg-cyan-300/10">
                <h2 class="mb-3 text-xl font-semibold">
                  <router-link to="/agenda/room30301">
                    Balancing Coupling in Software Design
                  </router-link>
                </h2>
                <h3>
                  講者：<strong class="text-xl"><router-link to="/speakers/Vlad Khononov">Vlad Khononov</router-link></strong>
                </h3>
                <p class="mt-3">類型：Keynotes</p>
                <p class="flex items-center">
                  <span class="mr-2">難度:</span>
                  <img src="/images/level.svg" alt="level">
                </p>
            </td>
            <td class="bg-lime-300/10">
                <h2 class="mb-3 text-xl font-semibold">
                  <router-link to="/agenda/room30201">
                    導入 Domain-Driven Design 的最佳時機
                  </router-link>
                </h2>
                <h3>
                  講者：
                  <strong class="text-xl">
                    <router-link to="/speakers/蒼時弦也">蒼時弦也</router-link>
                  </strong>
                </h3>
                <p class="mt-3">類型：講座</p>
                <p class="flex items-center">
                  <span class="mr-2">難度:</span>
                  <img src="/images/level.svg" alt="level">
                </p>
            </td>
            <td class="bg-cyan-500/10">
                <h2 class="mb-3 text-xl font-semibold">
                  <router-link to="/agenda/room20201">
                    EventStorming 實戰經驗分享
                  </router-link>
                </h2>
                <h3>
                  講者：<strong class="text-xl"><router-link to="/speakers/Nina">Nina</router-link></strong>
                </h3>
                <p class="mt-3">類型：講座</p>
                <p class="flex items-center">
                  <span class="mr-2">難度:</span>
                  <img src="/images/level.svg" alt="level">
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
                <h2 class="mb-3 text-xl font-semibold">
                  <router-link to="/agenda/room30302">
                    Practical experience of applying DDD and CA in Spring Boot 3 + Java 17
                  </router-link>
                </h2>
                <h3>
                  講者：<strong class="text-xl"><router-link to="/speakers/黃健旻">黃健旻</router-link></strong>
                </h3>
                <p class="mt-3">類型：講座</p>
                <p class="flex items-center">
                  <span class="mr-2">難度:</span>
                  <img src="/images/level.svg" alt="level">
                </p>
            </td>
            <td class="bg-lime-300/10">
                <h2 class="mb-3 text-xl font-semibold">
                  <router-link to="/agenda/room30202">
                    Don’t Forget UCD & Balanced Teams: Reap the Full Benefits with Modern Development Practices
                  </router-link></h2>
                <h3 class="mb-2">
                  講者：<strong class="text-xl"><router-link to="/speakers/魏宣德">魏宣德</router-link></strong>
                </h3>
                <h3>
                  講者：<strong class="text-xl"><router-link to="/speakers/邱凡遠">邱凡遠</router-link></strong>
                </h3>
                <p class="mt-3">類型：講座</p>
                <p class="flex items-center">
                  <span class="mr-2">難度:</span>
                  <img src="/images/level.svg" alt="level">
                </p>
            </td>
            <td class="bg-cyan-500/10" style="border-bottom: 0">
                <h2 class="mb-3 text-xl font-semibold">
                  <router-link to="/agenda/room20202">
                    偷偷將 Event Storming 簡化運用於需求探索的資訊架構設計工作坊
                  </router-link>
                </h2>
                <h3>
                  講者：<strong class="text-xl"><router-link to="/speakers/Soking">Soking</router-link></strong>
                </h3>
                <p class="mt-3">類型：工作坊</p>
                <p class="flex items-center">
                  <span class="mr-2">難度:</span>
                  <img src="/images/level.svg" alt="level">
                </p>
            </td>
          </tr>
          <tr>
            <th class="pin text-xl font-semibold bg-sky-950">11:15 ~ 11:30<br />休息</th>
            <td class="bg-sky-950/20"></td>
            <td class="bg-sky-950/20"></td>
            <td class="bg-cyan-500/10 text-yellow-300" style="border-bottom: 0; border-top:0; vertical-align: middle;">* 不休息，讓我們繼續戰下去！</td>
          </tr>
          <tr>
            <th class="pin text-xl font-semibold bg-sky-950">11:30 ~ 12:15</th>
            <td class="bg-cyan-300/10">
                <h2 class="mb-3 text-xl font-semibold">
                  <router-link to="/agenda/room30303">
                    The Superpowers of Event Sourcing
                  </router-link>
                </h2>
                <h3>
                  講者：<strong class="text-xl"><router-link to="/speakers/Stephen Tung">Stephen Tung</router-link></strong>
                </h3>
                <p class="mt-3">類型：講座</p>
                <p class="flex items-center">
                  <span class="mr-2">難度:</span>
                  <img src="/images/level.svg" alt="level">
                  <img src="/images/level.svg" alt="level">
                </p>
            </td>
            <td class="bg-lime-300/10">
                <h2 class="mb-3 text-xl font-semibold">
                  <router-link to="/agenda/room30203">
                    DDD Applied - Introducing TDD while breaking down legacy monolith
                  </router-link>
                </h2>
                <h3>
                  講者：<strong class="text-xl"><router-link to="/speakers/程章尧">程章尧</router-link></strong>
                </h3>
                <p class="mt-3">類型：講座</p>
                <p class="flex items-center">
                  <span class="mr-2">難度:</span>
                  <img src="/images/level.svg" alt="level">
                  <img src="/images/level.svg" alt="level">
                </p>
            </td>
            <td class="bg-cyan-500/10" style="border-top:0;">
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
                <h2 class="mb-3 text-xl font-semibold">
                  <router-link to="/agenda/room30304">
                    探索系統的可觀測性
                  </router-link>
                </h2>
                <h3>
                  講者：<strong class="text-xl"><router-link to="/speakers/雷N">雷N</router-link></strong>
                </h3>
                <p class="mt-3">類型：講座</p>
                <p class="flex items-center">
                  <span class="mr-2">難度:</span>
                  <img src="/images/level.svg" alt="level">
                </p>
            </td>
            <td class="bg-lime-300/10">
                <h2 class="mb-3 text-xl font-semibold">
                  <router-link to="/agenda/room30204">
                    When Customers Don't Share a Language（線上）
                  </router-link>
                </h2>
                <h3>
                  講者：<strong class="text-xl"><router-link to="/speakers/Chris Simon">Chris Simon</router-link></strong>
                </h3>
                <p class="mt-3">類型：講座</p>
                <p class="flex items-center">
                  <span class="mr-2">難度:</span>
                  <img src="/images/level.svg" alt="level">
                  <img src="/images/level.svg" alt="level">
                </p>
            </td>
            <td class="bg-cyan-500/10">
                <h2 class="mb-3 text-xl font-semibold">
                  <router-link to="/agenda/room20204">
                    動動手手練練 Event Sourcing 難度
                  </router-link>
                </h2>
                <h3>
                  講者：<strong class="text-xl"><router-link to="/speakers/Lex Liu">Lex Liu</router-link></strong>
                </h3>
                <p class="mt-3">類型：工作坊</p>
                <p class="flex items-center">
                  <span class="mr-2">難度:</span>
                  <img src="/images/level.svg" alt="level">
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
                <h2 class="mb-3 text-xl font-semibold">
                  <router-link to="/agenda/room30305">
                    這些年我們所追的微服務
                  </router-link>
                </h2>
                <h3>
                  講者：<strong class="text-xl"><router-link to="/speakers/倪國凱">倪國凱</router-link></strong>
                </h3>
                <p class="mt-3">類型：講座</p>
                <p class="flex items-center">
                  <span class="mr-2">難度:</span>
                  <img src="/images/level.svg" alt="level">
                </p>
            </td>
            <td class="bg-lime-300/10">
                <h2 class="mb-3 text-xl font-semibold">
                  <router-link to="/agenda/room30205">
                    用 Constructor theory 实现架构演进和治理（線上）
                  </router-link>
                </h2>
                <h3>
                  講者：<strong class="text-xl"><router-link to="/speakers/王威">王威</router-link></strong>
                </h3>
                <p class="mt-3">類型：講座</p>
                <p class="flex items-center">
                  <span class="mr-2">難度:</span>
                  <img src="/images/level.svg" alt="level">
                  <img src="/images/level.svg" alt="level">
                </p>
            </td>
            <td class="bg-cyan-500/10" style="border-bottom: 0">
                <h2 class="mb-3 text-xl font-semibold">
                  <router-link to="/agenda/room20205">
                    如何利用 Example Mapping 來釐清需求
                  </router-link>
                </h2>
                <h3>
                  講者：<strong class="text-xl"><router-link to="/speakers/David Ko">David Ko</router-link></strong>
                </h3>
                <p class="mt-3">類型：工作坊</p>
                <p class="flex items-center">
                  <span class="mr-2">難度:</span>
                  <img src="/images/level.svg" alt="level">
                </p>
            </td>
          </tr>

          <tr>
            <th class="pin text-xl font-semibold bg-sky-950">15:00 ~ 15:15<br />休息</th>
            <td class="bg-sky-950/20"></td>
            <td class="bg-sky-950/20"></td>
            <td class="bg-cyan-500/10 text-yellow-300" style="border-bottom: 0; border-top:0; vertical-align: middle;">* 不休息，讓我們繼續戰下去！</td>
          </tr>
          <tr>
            <th class="pin text-xl font-semibold bg-sky-950">15:15 ~ 16:00</th>
            <td class="bg-cyan-300/10">
                <h2 class="mb-3 text-xl font-semibold">
                  <router-link to="/agenda/room30306">
                    在風雨交加的航道上探索 DDD：從困惑到啟發
                  </router-link>
                </h2>
                <h3>
                  講者：<strong class="text-xl"><router-link to="/speakers/Miles">Miles</router-link></strong>
                </h3>
                <p class="mt-3">類型：講座</p>
                <p class="flex items-center">
                  <span class="mr-2">難度:</span>
                  <img src="/images/level.svg" alt="level">
                </p>
            </td>
            <td class="bg-lime-300/10">
                <h2 class="mb-3 text-xl font-semibold">
                  <router-link to="/agenda/room30206">
                    複雜遺留系統的現代化改造方法與實踐（線上）
                  </router-link>
                </h2>
                <h3>
                  講者：<strong class="text-xl"><router-link to="/speakers/高松">高松</router-link></strong>
                </h3>
                <p class="mt-3">類型：講座</p>
                <p class="flex items-center">
                  <span class="mr-2">難度:</span>
                  <img src="/images/level.svg" alt="level">
                </p>
            </td>
            <td class="bg-cyan-500/10" style="border-top:0;">
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
                <h2 class="mb-3 text-xl font-semibold">
                  <router-link to="/agenda/room30307">
                    從混亂到組織：DDD 與 Clean Architecture 的持續精進挑戰之道
                  </router-link>
                </h2>
                <h3>
                  講者：<strong class="text-xl"><router-link to="/speakers/劉宥辰">劉宥辰</router-link></strong>
                </h3>
                <p class="mt-3">類型：講座</p>
                <p class="flex items-center">
                  <span class="mr-2">難度:</span>
                  <img src="/images/level.svg" alt="level">
                </p>
            </td>
            <td class="bg-lime-300/10">
                <h2 class="mb-3 text-xl font-semibold">
                  <router-link to="/agenda/room30207">
                    用模式語言解壓縮 CQRS：以 ezKanban 系統為例
                  </router-link>
                </h2>
                <h3>
                  講者：<strong class="text-xl"><router-link to="/speakers/陳建村">陳建村</router-link></strong>
                </h3>
                <p class="mt-3">類型：講座</p>
                <p class="flex items-center">
                  <span class="mr-2">難度:</span>
                  <img src="/images/level.svg" alt="level">
                  <img src="/images/level.svg" alt="level">
                </p>
            </td>
            <td class="bg-cyan-500/10">
                <h2 class="mb-3 text-xl font-semibold">
                  <router-link to="/agenda/room20207">
                    「Code with Me」- 我們寫了一支 API
                  </router-link>
                </h2>
                <h3>
                  講者：<strong class="text-xl"><router-link to="/speakers/Kuma Syu">Kuma Syu</router-link></strong>
                </h3>
                <p class="mt-3">類型：工作坊</p>
                <p class="flex items-center">
                  <span class="mr-2">難度:</span>
                  <img src="/images/level.svg" alt="level">
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
import speakersData from '../data/speakersData';

export default {
  data() {
    return {
      agendaData: agendaData,
      speakersData: speakersData,
    };
  }
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