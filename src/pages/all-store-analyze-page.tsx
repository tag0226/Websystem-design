import React from 'react';
import Plot from "react-plotly.js";
import { Link } from 'react-router-dom';

export default function AllStoreAnalyzePage() {
  const xArray = ["店舗a", "店舗b", "店舗c", "店舗d", "店舗e"];
  const yArray = [55, 49, 44, 24, 15];

  // 売上データの計算用
  const generateLineData = () => {
    const xValues = [];
    const yValues = [];
    for (let x = 1; x <= 12; x += 0.1) {
      xValues.push(x);
      yValues.push(x * 1.3); // 式を変更可能
    }
    return { xValues, yValues };
  };

  const lineData = generateLineData();

  return (
    <div>
      <h1>全店舗のデータ</h1>
      <p>全店舗の売上に関するデータの表示</p>
      <Link to="/analyze-form">店舗選択ページに戻る</Link>

      {/* 棒グラフ */}
      <Plot
        data={[
          {
            x: xArray,
            y: yArray,
            type: "bar",
            marker: { color: "rgba(0,0,255,0.6)" },
          },
        ]}
        layout={{ title: "全店売上", width: 700, height: 400 }}
      />

      <Plot
        data={[
          {
            labels: xArray,
            values: yArray,
            type: "pie",
          },
        ]}
        layout={{ title: "売上構成比", width: 700, height: 400 }}
      />

      <Plot
        data={[
          {
            x: lineData.xValues,
            y: lineData.yValues,
            mode: "lines",
          },
        ]}
        layout={{ title: "年間の売上", width: 700, height: 400 }}
      />
    </div>
  );
}
