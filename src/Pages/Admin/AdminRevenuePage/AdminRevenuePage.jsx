import React, { useState, useEffect, useRef } from 'react';
import styles from './AdminRevenuePage.module.css';
import Sidebar from '../../../Components/Admin/Sidebar/Sidebar';
import Navbar from '../../../Components/Admin/Navbar/Navbar';
import Chart from 'chart.js/auto';

const AdminRevenuePage = () => {
  const [selectedYear, setSelectedYear] = useState('2024');
  const [selectedMonth, setSelectedMonth] = useState('0');
  const [selectedYearRange, setSelectedYearRange] = useState('2');

  const yearlyChartRef = useRef(null);
  const monthlyChartRef = useRef(null);
  const yearlyComparisonChartRef = useRef(null);

  const yearlyData = {
    '2023': [500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400, 1500, 1600],
    '2024': [700, 800, 900, 1000, 1100, 1200, 1300, 1400, 1500, 1600, 1700, 1800]
  };

  const monthlyData = {
    '0': [100, 200, 300, 400, 500, 600, 700],
    '1': [150, 250, 350, 450, 550, 650, 750],
    '2': [200, 300, 400, 500, 600, 700, 800]
  };

  const yearlyComparisonData = {
    '2020': [400, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900, 950],
    '2021': [450, 500, 550, 600, 650, 700, 750, 800, 850, 900, 950, 1000],
    '2022': [500, 550, 600, 650, 700, 750, 800, 850, 900, 950, 1000, 1050],
    '2023': [500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400, 1500, 1600],
    '2024': [700, 800, 900, 1000, 1100, 1200, 1300, 1400, 1500, 1600, 1700, 1800]
  };

  useEffect(() => {
    if (yearlyChartRef.current) yearlyChartRef.current.destroy();

    const ctx = document.getElementById('yearlyChart').getContext('2d');
    yearlyChartRef.current = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['T1', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'T8', 'T9', 'T10', 'T11', 'T12'],
        datasets: [{
          label: 'Doanh thu',
          data: yearlyData[selectedYear],
          backgroundColor: 'rgba(37, 99, 235, 0.1)',
          borderColor: '#2563eb',
          borderWidth: 2,
          borderRadius: 4,
          hoverBackgroundColor: 'rgba(37, 99, 235, 0.2)'
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    });
  }, [selectedYear]);

  useEffect(() => {
    if (monthlyChartRef.current) monthlyChartRef.current.destroy();

    const ctx = document.getElementById('monthlyChart').getContext('2d');
    monthlyChartRef.current = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7', 'CN'],
        datasets: [{
          label: 'Doanh thu',
          data: monthlyData[selectedMonth] || [0, 0, 0, 0, 0, 0, 0],
          borderColor: '#059669',
          backgroundColor: 'rgba(5, 150, 105, 0.1)',
          borderWidth: 2,
          tension: 0.4,
          fill: true
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    });
  }, [selectedMonth]);

  useEffect(() => {
    if (yearlyComparisonChartRef.current) yearlyComparisonChartRef.current.destroy();

    const ctx = document.getElementById('yearlyComparisonChart').getContext('2d');
    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: parseInt(selectedYearRange) }, (_, i) => currentYear - i).reverse();

    const colors = [
      { border: '#2563eb', background: 'rgba(37, 99, 235, 0.1)' },
      { border: '#059669', background: 'rgba(5, 150, 105, 0.1)' },
      { border: '#d97706', background: 'rgba(217, 119, 6, 0.1)' },
      { border: '#dc2626', background: 'rgba(220, 38, 38, 0.1)' },
      { border: '#7c3aed', background: 'rgba(124, 58, 237, 0.1)' }
    ];

    const datasets = years.map((year, index) => ({
      label: year.toString(),
      data: yearlyComparisonData[year.toString()] || Array(12).fill(0),
      borderColor: colors[index].border,
      backgroundColor: colors[index].background,
      borderWidth: 2,
      tension: 0.4,
      fill: true
    }));

    yearlyComparisonChartRef.current = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['T1', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'T8', 'T9', 'T10', 'T11', 'T12'],
        datasets
      },
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    });
  }, [selectedYearRange]);

  return (
    <>
      <Sidebar />
      <Navbar />
      <div className={styles.container}>
        <h2>Quản lý doanh thu</h2>

        <div className={styles.filterContainer}>
          <div className={styles.filterGroup}>
            <label htmlFor="yearSelect">Năm:</label>
            <select id="yearSelect" value={selectedYear} onChange={(e) => setSelectedYear(e.target.value)}>
              <option value="2023">2023</option>
              <option value="2024">2024</option>
            </select>
          </div>

          <div className={styles.filterGroup}>
            <label htmlFor="monthSelect">Tháng:</label>
            <select id="monthSelect" value={selectedMonth} onChange={(e) => setSelectedMonth(e.target.value)}>
              {[...Array(12)].map((_, index) => (
                <option key={index} value={index}>Tháng {index + 1}</option>
              ))}
            </select>
          </div>

          <div className={styles.filterGroup}>
            <label htmlFor="yearRangeSelect">So sánh theo năm:</label>
            <select id="yearRangeSelect" value={selectedYearRange} onChange={(e) => setSelectedYearRange(e.target.value)}>
              <option value="2">2 năm gần nhất</option>
              <option value="3">3 năm gần nhất</option>
              <option value="5">5 năm gần nhất</option>
            </select>
          </div>
        </div>

        <div className={styles.chartContainer}>
          <h3>Doanh thu theo tháng</h3>
          <canvas id="yearlyChart"></canvas>
        </div>

        <div className={styles.chartContainer}>
          <h3>Doanh thu theo tuần</h3>
          <canvas id="monthlyChart"></canvas>
        </div>

        <div className={styles.chartContainer}>
          <h3>So sánh doanh thu theo năm</h3>
          <canvas id="yearlyComparisonChart"></canvas>
        </div>
      </div>
    </>
  );
};

export default AdminRevenuePage;
