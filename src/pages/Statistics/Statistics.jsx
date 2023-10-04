
import React, { useEffect, useState } from "react";
import { PieChart, Pie, Cell } from "recharts";

const Statistics = () => {
  const [totalDonation, setTotalDonation] = useState([]);
  const [donationPaid, setDonationPaid] = useState([]);
  const [donationPending, setDonationPending] = useState(0);

  useEffect(() => {
    const getDonationLists = JSON.parse(localStorage.getItem("donation_list"));
    setDonationPaid(getDonationLists || []); 

    fetch("/donation.json")
      .then((res) => res.json())
      .then((data) => {
        setTotalDonation(data);
        calculateDonationPending(data, getDonationLists || []); 
      });
  }, []);

  const calculateDonationPending = (lengthData, paidData) => {
    const totalDonationNumber = lengthData.length;
    const donationPaidNumber = paidData.length;
    const donationPending = totalDonationNumber - donationPaidNumber;
    setDonationPending(donationPending);
  };

  const data = [
    { name: "Donation Paid", value: donationPaid.length },
    { name: "Donation Pending", value: donationPending },
  ];

  const COLORS = ["#4ade80", "#ef4444"];

  const RADIAN = Math.PI / 180;

  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    value,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {value}
      </text>
    );
  };

  return (
    <div className="py-5 px-4 md:px-6 lg:px-20 xl:px-32">
      <h1 className="font-bold text-xl pb-4">Pie Chart Color Defined by Donation Info...</h1>
      <h5>Donation Categories: {totalDonation.length}</h5>
      <h5 className="text-green-400">Donation Paid: {donationPaid.length}</h5>
      <h5 className="text-red-500">Donation Pending: {donationPending}</h5>
      <div className="flex justify-center items-center">
        <PieChart width={400} height={400}>
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
      </div>
    </div>
  );
};

export default Statistics;

