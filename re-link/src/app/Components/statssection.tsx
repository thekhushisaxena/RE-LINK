"use client"
import React, { useState, useEffect, useRef } from 'react';
import './statssection.css';

interface StatItemProps {
  endValue: number;
  suffix: string;
  label: string;
  colorClass: string;
}

const StatItem: React.FC<StatItemProps> = ({ endValue, suffix, label, colorClass }) => {
  const [currentValue, setCurrentValue] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (isVisible) {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const increment = endValue / steps;
      const stepTime = duration / steps;

      let step = 0;
      const timer = setInterval(() => {
        step++;
        const newValue = Math.min(Math.floor(increment * step), endValue);
        setCurrentValue(newValue);

        if (step >= steps) {
          clearInterval(timer);
          setCurrentValue(endValue);
        }
      }, stepTime);

      return () => clearInterval(timer);
    }
  }, [isVisible, endValue]);

  const formatNumber = (num: number) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(num % 1000 === 0 ? 0 : 1) + 'k';
    }
    return num.toString();
  };

  return (
    <div className="stat-item" ref={elementRef}>
      <div className={`stat-number ${colorClass}`}>
        {suffix === '%' ? `${currentValue}%` : `${formatNumber(currentValue)}${suffix}`}
      </div>
      <div className="stat-label">{label}</div>
    </div>
  );
};

const StatsSection = () => {
  return (
    <section className="stats-section">
      <div className="stats-container">
        <StatItem 
          endValue={50000} 
          suffix="+" 
          label="Active Alumni" 
          colorClass="teal"
        />
        <StatItem 
          endValue={200} 
          suffix="+" 
          label="Actual Events" 
          colorClass="orange"
        />
        <StatItem 
          endValue={85} 
          suffix="%" 
          label="Engagement rate" 
          colorClass="teal"
        />
        <StatItem 
          endValue={1500} 
          suffix="+" 
          label="Mentorship collections" 
          colorClass="orange"
        />
      </div>
    </section>
  );
};

export default StatsSection;