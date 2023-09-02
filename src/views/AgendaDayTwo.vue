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
    <h2 class="text-3xl mb-3 mt-3">線上講座</h2>
    <p class="text-red-300">* 螢幕若較小，請左右滑動檢視。</p>

    <h3 class="font-semibold mt-5 mb-5"><span class="text-xl">Day 2</span><br /><span class="text-4xl">2023/09/17</span></h3>
    <p class="text-yellow-300">* 本日講座皆為線上講座，請待在合適地方上線即可。</p>
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
                <h2 class="mb-3 text-xl font-semibold">
                  <router-link to="/agenda/ol01">
                    The value flywheel effect : 指導解決方案域的決策指南
                  </router-link>
                </h2>
                <h3>
                  講者：<strong class="text-xl"><router-link to="/speakers/Kim">Kim</router-link></strong>
                </h3>
                <p class="flex items-center">
                  <span class="mr-2">難度:</span>
                  <img src="/images/level.svg" alt="level">
                  <img src="/images/level.svg" alt="level">
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
                <h2 class="mb-3 text-xl font-semibold">
                  <router-link to="/agenda/ol02">
                    在自己的新創導入 DDD 來迭代開發一個有夠複雜的線上遊戲教育創新產品
                  </router-link>
                </h2>
                <h3>
                  講者：<strong class="text-xl"><router-link to="/speakers/水球潘">水球潘</router-link></strong>
                </h3>
                <p class="flex items-center">
                  <span class="mr-2">難度:</span>
                  <img src="/images/level.svg" alt="level">
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
                <h2 class="mb-3 text-xl font-semibold">
                  <router-link to="/agenda/ol03">
                    真的懂 SOLID 原則嗎？ You Don't Know SOLID
                  </router-link>
                </h2>
                <h3>
                  講者：<strong class="text-xl"><router-link to="/speakers/Fong">Fong</router-link></strong>
                </h3>
                <p class="flex items-center">
                  <span class="mr-2">難度:</span>
                  <img src="/images/level.svg" alt="level">
                  <img src="/images/level.svg" alt="level">
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
                <h2 class="mb-3 text-xl font-semibold">
                  <router-link :to="{ name: 'agendaDetails', params: { agendaId: 'ol04' } }">
                    單兵作戰：以領域驅動設計 (DDD) 改善既有進銷存管理系統的策略與實踐
                  </router-link>
                </h2>
                <h3>
                  講者：<strong class="text-xl"><router-link to="/speakers/Ean">Ean</router-link></strong>
                </h3>
                <p class="flex items-center">
                  <span class="mr-2">難度:</span>
                  <img src="/images/level.svg" alt="level">
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
                <h2 class="mb-3 text-xl font-semibold">
                  <router-link to="/agenda/ol05">
                    DDD 中的橋樑：透過有效建模與設計，從戰略走向戰術
                  </router-link>
                </h2>
                <h3>
                  講者：<strong class="text-xl"><router-link to="/speakers/James">James</router-link></strong>
                </h3>
                <p class="flex items-center">
                  <span class="mr-2">難度:</span>
                  <img src="/images/level.svg" alt="level">
                  <img src="/images/level.svg" alt="level">
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
                <h2 class="mb-3 text-xl font-semibold">
                  <router-link to="/agenda/ol06">
                    DDD 戰術 - 柔型要術
                  </router-link>
                </h2>
                <h3>
                  講者：<strong class="text-xl"><router-link to="/speakers/Arthur">Arthur</router-link></strong>
                </h3>
                <p class="flex items-center">
                  <span class="mr-2">難度:</span>
                  <img src="/images/level.svg" alt="level">
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
                <h2 class="mb-3 text-xl font-semibold">
<router-link to="/agenda/ol07">
  Domain Storytelling— One-size-fits-all 串連產品服務的需求、設計、開發與測試難度
</router-link>
                </h2>
                <h3>
                  講者：<strong class="text-xl"><router-link to="/speakers/Michael">Michael</router-link></strong>
                </h3>
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