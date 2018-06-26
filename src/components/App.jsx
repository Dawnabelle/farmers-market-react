import React from "react";
import Header from './Header';
import MarketSchedule from './MarketSchedule';
import SeasonalProduce from './SeasonalProduce';

function App(){
  var pageStyle = {
    backgroundColor: '#79f8c3'
  }
  return (
    <div style={pageStyle}>
      <Header/>
      <MarketSchedule/>
      <SeasonalProduce/>
    </div>
  );
}

export default App;
