var dinersTotals = [];
var tipTotals = [];

var diner = {
  name: '',
  dishes: { names : [], prices: [] },
  addTotal : function(Prices){
    var total = 0;
    for (var i = 0; i < Prices.length; i++){
      total += Prices[i];
    };
    this.total = total;
  },
  addTax : function() {
    var tax = 0;
    tax = parseFloat(this.total * 0.075);
    this.tax = tax;
  },
  addTip : function(){
    var tip = 0;
    this.total += this.tax;
    tip = (this.total * 0.20);
    this.tip = tip;
  },
};

var bill = {
  diners : [],
  dinersTotal : function(DinersTotals){
    var grandTotal = 0;
    var tax = 0;
    for (var i = 0; i < DinersTotals.length; i++ ){
        grandTotal += parseFloat(DinersTotals[i]);
    };
    this.total = grandTotal;
  },
  totalTips : function(Tips){
    totalTip = 0;
    for (var i =0; i < Tips.length; i++ ){
        totalTip += Tips[i];
    };
    this.tip = totalTip;
  },
  printEachDiner : function() {
    console.log(this.diners);
  }
};

function tonightsCheck(TheObjectName, TheName, DishNames, DishPrices){
  TheObjectName.name = TheName;
  TheObjectName.dishes.names = DishNames;
  TheObjectName.dishes.prices = DishPrices;
  TheObjectName.addTotal(TheObjectName.dishes.prices);
  TheObjectName.addTax();
  TheObjectName.addTip();
  tipTotals.push(TheObjectName.tip);
  dinersTotals.push(TheObjectName.total);
  bill.diners.push(TheObjectName);
}
function createBill(){
  var tonightsBill = Object.create(bill);
  tonightsBill.totalTips(tipTotals);
  tonightsBill.dinersTotal(dinersTotals);
  console.log('TOTAL BILL:' + ' ' + tonightsBill.total);
  console.log('TOTAL TIP:' + ' ' + tonightsBill.tip);
  tonightsBill.printEachDiner();
}
var katie = Object.create(diner);
var john = Object.create(diner);
var rick = Object.create(diner);
tonightsCheck(katie, 'Katie', ['Beef', 'Chicken', 'Rice'], [4, 5, 2]);
tonightsCheck(john, 'John', ['Tofu', 'Chicken', 'Pork'], [41, 15, 2]);
tonightsCheck(rick, 'Rick', ['Beef', 'Shrimp', 'Rice'], [3, 12, 2]);
createBill();
