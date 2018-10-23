<template lang="html">
  <div id="Calc" class="container-fluid">
    <div class="row">
      <div class="col-md-4"></div>
      <div class="col-md-4">
        <div class="monthly-cost">
          <div class="monthly-cost-label font-weight-bold">{{ apiContent.monthlyCostLabel }}</div>
          <div class="monthly-cost-value font-italic lead">{{ calculateMonthlyCost }} {{ apiContent.loanAmountSuffix }}</div>
        </div>
        <div class="amount">
          <div class="amount-label font-weight-bold">{{ apiContent.loanAmountLabel }}</div>
          <div class="row justify-content-center">
            <decrement-button class="calculator-button" :amount="loanAmount" min="5000" decrementBy="5000" @clicked="loanAmount = $event" />
            <input-valueSuffix v-model="loanAmountAndSuffix" />
            <increment-button class="calculator-button" :amount="loanAmount" max="600000" incrementBy="5000" @clicked="loanAmount = $event" />
          </div>
        </div>
        <br>
        <div>
          <div class="font-weight-bold">{{ apiContent.repaymentYearsLabel }}</div>
          <div class="row justify-content-center">
            <decrement-button class="calculator-button" :amount="repaymentYears" min="1" decrementBy="1" @clicked="repaymentYears = $event" />
            <input-valueSuffix v-model="yearAndSuffix" />
            <increment-button class="calculator-button" :amount="repaymentYears" max="15" incrementBy="1" @clicked="repaymentYears = $event" />
          </div>
        </div>
        <br>
        <br>
        <div>
          <button class="calculator-button cta-button" :class="{active:isActive}"> {{ apiContent.ctaLabel }} <i class="fas fa-arrow-right float-right"></i></button>
        </div>
      </div>
      <div class="col-md-4"></div>
    </div>
  </div>
</template>

<script>
  import IncrementButton from '../calc/Increment'
  import DecrementButton from '../calc/Decrement'
  import InputValueSuffix from "../calc/ValueSuffix"
  import { getContent } from '../../API/calcAPI.js'


  export default {
    data() {
      return {
        isActive: false,
        repaymentYears: 14,
        loanAmount: 250000,
        apiContent: getContent(),
      }
    },
    components: {
      IncrementButton,
      DecrementButton,
      InputValueSuffix
    },
    computed: {
      calculateMonthlyCost() {
        let months = this.repaymentYears * 12;
        return Math.round(this.loanAmount * (this.apiContent.interest / 100) / 12 / (1 - Math.pow(1 + (this.apiContent.interest / 100) / 12, (months * -1))));
      },

      // TODO generic function for values and suffix values
      // valueAndsuffix(value, suffix){
      // let valueAndSuffix = value + ' ' + suffix;
      // return "somethingsomething";
      // },

      loanAmountAndSuffix() {
        return this.loanAmount + ' ' + this.apiContent.loanAmountSuffix;
      },
      yearAndSuffix() {
        return this.repaymentYears + ' ' + this.apiContent.repaymentYearsSuffix;
      }
    }
  }
</script>

<style lang="css">
  .calculator-button {
    border: none;
    line-height: 1;
    overflow: hidden;
    display: inline-block;
    width: 44px;
    height: 44px;
    content: "";
    font-size: 40px;
    color: white;
    background: #61d5a7;
    border-radius: 50%;
    cursor: pointer;
    box-sizing: border-box;
    font-weight: lighter;
    padding-bottom: 4px;
  }

  .cta-button {
    width: 265px;
    font-size: 100%;
    border-radius: 15%/100%;
    padding-bottom: 0.3%;
    padding-left: 1%;
    text-align: left;
  }

  .active{
    background-color: green;
  }

</style>
