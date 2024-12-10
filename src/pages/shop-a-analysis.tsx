import React from "react";
import Plot from "react-plotly.js";
import { Link } from "react-router-dom";

export const ShopAAnalysis: React.FC = () => {
  const xArray = ["書籍1", "書籍2", "書籍3", "書籍4", "書籍5"];
  const yArray = [55, 49, 44, 24, 15];

  const generateLineData = () => {
    const xValues: number[] = [];
    const yValues: number[] = [];
    for (let x = 1; x <= 12; x += 0.1) {
      xValues.push(x);
      yValues.push(x * 1.3);
    }
    return { xValues, yValues };
  };

  const lineData = generateLineData();

  return (
    <div>
      <h1>店舗aの売上データ</h1>
      <p>店舗aに関するデータの表示</p>

      <Link to="/analyze-form">店舗選択ページに戻る</Link>

      <table border={1}>
        <thead>
          <tr>
            <th>商品名</th>
            <th>売上冊数</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>書籍1</td>
            <td>55</td>
          </tr>
          <tr>
            <td>書籍2</td>
            <td>49</td>
          </tr>
          <tr>
            <td>書籍3</td>
            <td>44</td>
          </tr>
        </tbody>
      </table>

      <Plot
        data={[
          {
            x: xArray,
            y: yArray,
            type: "bar",
            marker: { color: "rgba(0,0,255,0.6)" },
          },
        ]}
        layout={{ title: "書籍売上冊数", width: 700, height: 400 }}
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
};
