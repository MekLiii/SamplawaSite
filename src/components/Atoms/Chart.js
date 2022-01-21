import React, { PureComponent } from "react";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";
import styled from "styled-components";

const COLORS = ["#ffe600", "black", "#FFBB28", "#FF8042"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="black"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {/* {`${(percent * 100).toFixed(0)}%`} */}
      {((percent * 100).toFixed(0) == 0)  ? "" : `${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export default function Chart({ allMiuts, coutMatches, title }) {
  const data = [
    { name: "Group A", value: allMiuts },
    { name: "Group B", value: coutMatches < 0 ? 0 : coutMatches },
  ];
  console.log(allMiuts, coutMatches);
  if(coutMatches == ("0" || NaN) || allMiuts ==("0" || NaN)) {
      return <div></div>;
  }else{
    return (
        <Box>
          <p style={{ color: "white",fontFamily:"poppins",textAlign: "center" }}>{title}</p>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart width={"100%"} height={"100%"}>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </Box>
      );
  }
  
}
const Box = styled.div`
  width: 300px;
  height: 300px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
