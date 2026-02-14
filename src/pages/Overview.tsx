import React from 'react';
import StatCard from '../components/StatCard';
import { mockProjects, mockActivities, mockTasks, monthlyEarnings, taskDistribution } from '../data/mockData';
import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const Overview: React.FC = () => {
  const totalProjects = mockProjects.length;
  const activeProjects = mockProjects.filter((p) => p.status === 'active').length;
  const totalEarnings = mockProjects
    .filter((p) => p.status === 'completed')
    .reduce((sum, p) => sum + p.budget, 0);
  const tasksDue = mockTasks.filter((t) => !t.completed).length;

  const COLORS = ['#0ea5e9', '#8b5cf6', '#ec4899', '#f59e0b'];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));

    if (diffInHours < 1) return 'Just now';
    if (diffInHours < 24) return `${diffInHours}h ago`;
    const days = Math.floor(diffInHours / 24);
    if (days === 1) return 'Yesterday';
    return `${days} days ago`;
  };

  const getActivityIcon = (type: string): string => {
    switch (type) {
      case 'payment':
        return '💰';
      case 'project':
        return '📁';
      case 'task':
        return '✅';
      case 'message':
        return '💬';
      default:
        return '🔔';
    }
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard Overview</h1>
        <p className="text-gray-600 mt-1">
          Welcome back! Here's what's happening with your projects today.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Projects"
          value={totalProjects}
          change={12.5}
          changeType="increase"
          icon="💼"
          iconBg="bg-blue-100"
        />
        <StatCard
          title="Active Projects"
          value={activeProjects}
          change={8.2}
          changeType="increase"
          icon="🚀"
          iconBg="bg-green-100"
        />
        <StatCard
          title="Total Earnings"
          value={`$${totalEarnings.toLocaleString()}`}
          change={15.3}
          changeType="increase"
          icon="💰"
          iconBg="bg-purple-100"
        />
        <StatCard
          title="Tasks Due"
          value={tasksDue}
          change={5.1}
          changeType="decrease"
          icon="📋"
          iconBg="bg-orange-100"
        />
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Monthly Earnings Chart */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900">
              Monthly Earnings
            </h2>
            <p className="text-sm text-gray-600 mt-1">
              Revenue overview for the last 6 months
            </p>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={monthlyEarnings}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="name" stroke="#6b7280" />
              <YAxis stroke="#6b7280" />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#fff',
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                }}
              />
              <Legend />
              <Bar dataKey="earnings" fill="#0ea5e9" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Task Distribution Pie Chart */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900">
              Task Types
            </h2>
            <p className="text-sm text-gray-600 mt-1">
              Distribution by category
            </p>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={taskDistribution}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) =>
                  `${name} ${(percent * 100).toFixed(0)}%`
                }
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {taskDistribution.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">
            Recent Activity
          </h2>
          <p className="text-sm text-gray-600 mt-1">
            Your latest project updates and milestones
          </p>
        </div>
        <div className="divide-y divide-gray-100">
          {mockActivities.slice(0, 5).map((activity) => (
            <div
              key={activity.id}
              className="p-6 hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-xl">
                  {getActivityIcon(activity.type)}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-gray-900">
                    {activity.description}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    {formatDate(activity.timestamp)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="p-4 border-t border-gray-200 text-center">
          <button className="text-sm text-primary-600 hover:text-primary-700 font-medium">
            View all activities →
          </button>
        </div>
      </div>
    </div>
  );
};

export default Overview;