'use client';

import { useEffect, useState } from 'react';
import { 
  TrendingUp, 
  Users, 
  DollarSign, 
  Activity,
  Eye,
  ShoppingCart,
  Target,
  Award
} from 'lucide-react';

export default function Dashboard() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const stats = [
    {
      title: 'Total Revenue',
      value: '$45,231',
      change: '+20.1%',
      icon: DollarSign,
      color: 'from-blue-400 to-cyan-400'
    },
    {
      title: 'Active Users',
      value: '2,345',
      change: '+15.3%',
      icon: Users,
      color: 'from-purple-400 to-pink-400'
    },
    {
      title: 'Page Views',
      value: '12,345',
      change: '+8.2%',
      icon: Eye,
      color: 'from-green-400 to-emerald-400'
    },
    {
      title: 'Conversion Rate',
      value: '3.24%',
      change: '+2.4%',
      icon: Target,
      color: 'from-orange-400 to-red-400'
    }
  ];

  const recentActivity = [
    { id: 1, action: 'New user registration', user: 'Sarah Johnson', time: '2 min ago' },
    { id: 2, action: 'Purchase completed', user: 'Michael Chen', time: '5 min ago' },
    { id: 3, action: 'Profile updated', user: 'Emma Williams', time: '12 min ago' },
    { id: 4, action: 'New review posted', user: 'James Brown', time: '18 min ago' },
    { id: 5, action: 'Support ticket created', user: 'Lisa Anderson', time: '25 min ago' }
  ];

  const topProducts = [
    { id: 1, name: 'Premium Dashboard Pro', sales: 1234, revenue: '$24,680' },
    { id: 2, name: 'Analytics Suite', sales: 987, revenue: '$19,740' },
    { id: 3, name: 'Team Collaboration', sales: 756, revenue: '$15,120' },
    { id: 4, name: 'Data Visualization', sales: 543, revenue: '$10,860' }
  ];

  if (!mounted) return null;

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* VIBRANT ANIMATED GRADIENT BACKGROUND */}
      <div className="fixed inset-0 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-500 animate-gradient-xy">
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 via-cyan-500 to-teal-400 opacity-70 animate-gradient-xy-slow"></div>
      </div>

      {/* Floating orbs for more depth */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-40 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10">
        {/* GLASS NAVIGATION BAR */}
        <nav className="glass-nav sticky top-0 z-50 border-b border-white/30">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="glass-icon p-2">
                  <Activity className="w-6 h-6 text-white" />
                </div>
                <h1 className="text-2xl font-bold text-white drop-shadow-lg">Glass Analytics</h1>
              </div>
              <div className="flex items-center space-x-4">
                <button className="glass-button">
                  <Users className="w-5 h-5 mr-2" />
                  Team
                </button>
                <button className="glass-button-primary">
                  <Award className="w-5 h-5 mr-2" />
                  Upgrade Pro
                </button>
                <div className="glass-avatar">
                  <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=PB" alt="User" className="w-10 h-10 rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* MAIN DASHBOARD CONTENT */}
        <div className="max-w-7xl mx-auto px-6 py-8 space-y-8">
          {/* WELCOME CARD */}
          <div className="glass-card-strong">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-3xl font-bold text-white drop-shadow-lg mb-2">Welcome back, Prakriti! 👋</h2>
                <p className="text-white/90 text-lg drop-shadow">Here's what's happening with your analytics today</p>
              </div>
              <div className="glass-badge">
                <TrendingUp className="w-5 h-5 mr-2" />
                All systems operational
              </div>
            </div>
          </div>

          {/* STATS GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="glass-card hover-lift">
                <div className="flex items-start justify-between mb-4">
                  <div className={`glass-icon-gradient bg-gradient-to-br ${stat.color}`}>
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="glass-badge-success text-sm">
                    {stat.change}
                  </span>
                </div>
                <h3 className="text-white/80 text-sm font-medium mb-1">{stat.title}</h3>
                <p className="text-3xl font-bold text-white drop-shadow-lg">{stat.value}</p>
              </div>
            ))}
          </div>

          {/* TWO COLUMN LAYOUT */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* RECENT ACTIVITY - 2 COLUMNS */}
            <div className="lg:col-span-2 glass-card">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-white drop-shadow-lg flex items-center">
                  <Activity className="w-5 h-5 mr-2" />
                  Recent Activity
                </h3>
                <button className="glass-button-small">
                  View All
                </button>
              </div>
              <div className="space-y-3">
                {recentActivity.map((activity) => (
                  <div key={activity.id} className="glass-list-item group">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="glass-avatar-small">
                          <img 
                            src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${activity.user}`} 
                            alt={activity.user}
                            className="w-10 h-10 rounded-full"
                          />
                        </div>
                        <div>
                          <p className="text-white font-medium drop-shadow">{activity.action}</p>
                          <p className="text-white/70 text-sm">{activity.user}</p>
                        </div>
                      </div>
                      <span className="text-white/60 text-sm">{activity.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* TOP PRODUCTS - 1 COLUMN */}
            <div className="glass-card">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-white drop-shadow-lg flex items-center">
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Top Products
                </h3>
              </div>
              <div className="space-y-4">
                {topProducts.map((product, index) => (
                  <div key={product.id} className="glass-list-item">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-3">
                        <div className="glass-rank">
                          {index + 1}
                        </div>
                        <span className="text-white font-medium text-sm drop-shadow">{product.name}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-white/70">{product.sales} sales</span>
                      <span className="text-white font-bold drop-shadow">{product.revenue}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* PERFORMANCE CHART PLACEHOLDER */}
          <div className="glass-card-strong">
            <h3 className="text-xl font-bold text-white drop-shadow-lg mb-6 flex items-center">
              <TrendingUp className="w-5 h-5 mr-2" />
              Performance Overview
            </h3>
            <div className="h-64 flex items-center justify-center">
              <div className="text-center">
                <div className="glass-icon-gradient bg-gradient-to-br from-blue-400 to-purple-400 w-16 h-16 mx-auto mb-4">
                  <Activity className="w-8 h-8 text-white" />
                </div>
                <p className="text-white/80 text-lg drop-shadow">Chart visualization goes here</p>
                <p className="text-white/60 text-sm mt-2">Integrate with your favorite charting library</p>
              </div>
            </div>
          </div>

          {/* FOOTER INFO */}
          <div className="glass-card text-center">
            <p className="text-white/80 drop-shadow">
              ✨ Glass Morphism Dashboard • Built with Next.js 14 & Tailwind CSS
            </p>
            <p className="text-white/60 text-sm mt-2">
              Ultra-visible glass effects with backdrop-blur-2xl for maximum clarity
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}