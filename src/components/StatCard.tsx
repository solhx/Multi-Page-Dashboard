import React from 'react';

interface StatCardProps {
  title: string;
  value: string | number;
  change?: number;
  changeType?: 'increase' | 'decrease';
  icon: string;
  iconBg: string;
}

const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  change,
  changeType,
  icon,
  iconBg,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-gray-600 mb-1">{title}</p>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">{value}</h3>
          {change !== undefined && (
            <div className="flex items-center space-x-1">
              <span
                className={`text-sm font-medium ${
                  changeType === 'increase'
                    ? 'text-green-600'
                    : 'text-red-600'
                }`}
              >
                {changeType === 'increase' ? '↑' : '↓'} {Math.abs(change)}%
              </span>
              <span className="text-xs text-gray-500">from last month</span>
            </div>
          )}
        </div>
        <div
          className={`w-12 h-12 ${iconBg} rounded-lg flex items-center justify-center text-2xl flex-shrink-0`}
        >
          {icon}
        </div>
      </div>
    </div>
  );
};

export default StatCard;