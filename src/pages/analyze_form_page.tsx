import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// 本番ではAPIから取得する
const storeOptions = [
  { label: "店舗を選択", value: "" },
  { label: "全店舗", value: "/all-store-analysis" },
  { label: "店舗a", value: "/shop-a-analysis" },
];

export default function AnalyzeForm() {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (selectedOption) {
      navigate(selectedOption);
    }
  };

  return (
    <div>
      <h1>商品分析ページ</h1>
      <form onSubmit={handleFormSubmit}>
        <p>店舗を選択してください</p>
        <nav>
          <select
            id="orderSelect"
            name="select"
            value={selectedOption}
            onChange={handleSelectChange}
          >
            {storeOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </nav>
        <button type="submit" disabled={!selectedOption}>
          遷移
        </button>
      </form>
      <Link to="/">戻る</Link>
    </div>
  );
}
