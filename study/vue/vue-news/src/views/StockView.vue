<template>
  <div class="content">
    <div class="compList">
      <ul>
        <li>AAPL</li>
        <li>GOOG</li>
        <li>MSFT</li>
        <li>ASML</li>
        <li>NET</li>
        <li>PFE</li>
        <li>DWAC</li>
        <li>BTC/USD</li>
      </ul>
    </div>
    <form>
      <fieldset>
        <label for="stock_name">알고싶은 해외주식은?</label><br />
        <input type="text" name="company" id="stock_name" v-model="COMPANY" />
        <button @click.prevent="getStockData2">알아보기</button>
      </fieldset>
    </form>
    <hr />
    <form>
      <fieldset>
        <label for="stock_name2">실시간 해외주식은?!</label><br />
        <input
          type="text"
          name="company2"
          id="stock_name2"
          v-model="COMPANY2"
        />
        <button @click.prevent="getStockData3">알아보기</button>
      </fieldset>
    </form>
    <div class="quote">
      <ul v-for="data in stockList">
        {{
          data.name
        }}
        <li>{{ data.datetime }}</li>
        <li>HIGH : ${{ data.high }}</li>
        <li>LOW : ${{ data.low }}</li>
        <li>{{ data.percent_change }}%</li>
      </ul>
    </div>
    <div class="realtime">
      <ul v-for="data in Rprice">
        {{
          data.name
        }}
        <li>{{ data.price }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      COMPANY: "",
      COMPANY2: "",
      stockList: [],
      Rprice: [],
      compList: [],
    };
  },
  methods: {
    ...mapActions(["GET_STOCK2", "GET_STOCK3", "GET_STOCKLIST"]),
    // getStockData() {
    //   this.$store.dispatch("GET_STOCK", this.COMPANY);
    // },
    async getStockData2() {
      let result = await this.GET_STOCK2(this.COMPANY);
      if (result.data.code === 400) {
        alert("회사이름을 명확히 작성하세요!");
        this.COMPANY = "";

        return;
      }
      console.log(result.data);
      this.stockList.push(result.data);
    },
    async getStockData3() {
      let result = await this.GET_STOCK3(this.COMPANY2);
      if (result.data.code === 400) {
        alert("회사이름을 명확히 작성하세요!");
        this.COMPANY2 = "";

        return;
      }
      this.Rprice.push({ name: this.COMPANY2, price: result.data.price });
    },
  },
};
</script>

<style>
</style>