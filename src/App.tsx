import React, { useState } from 'react';
import { Home, Star, User, DollarSign, MessageCircle, Building2, CreditCard, Headphones, Menu, X, Crown } from 'lucide-react';

function App() {
  const [balance] = useState('0.00');
  const [userId] = useState('0647530905');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const gameCategories = [
    {
      title: 'เลขเด็ด',
      subtitle: 'LOTTO ONLINE',
      color: 'from-red-600 to-red-800',
      icon: '🎯'
    },
    {
      title: 'มังกรทอง',
      subtitle: 'SLOT & CASINO ONLINE',
      color: 'from-yellow-600 to-orange-600',
      icon: '🎰'
    },
    {
      title: 'กีฬาจักรพรรดิ',
      subtitle: 'SPORTSBOOK',
      color: 'from-red-700 to-red-900',
      icon: '⚽',
      badge: 'HOT'
    },
    {
      title: 'เกมมังกร',
      subtitle: 'MINI GAME',
      color: 'from-yellow-500 to-red-600',
      icon: '🎮'
    },
    {
      title: 'ยีกีมังกร',
      subtitle: 'YEEKEE LOTTO',
      color: 'from-red-800 to-black',
      icon: '🎲'
    },
    {
      title: 'ทองคำโปรโมชั่น',
      subtitle: 'PROMOTION',
      color: 'from-yellow-400 to-yellow-600',
      icon: '🎁',
      badge: 'NEW'
    }
  ];

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Background sparkles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-2 h-2 bg-yellow-300 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-1 h-1 bg-white rounded-full animate-ping"></div>
        <div className="absolute top-64 left-32 w-1.5 h-1.5 bg-yellow-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-2 h-2 bg-pink-300 rounded-full animate-ping"></div>
        <div className="absolute bottom-64 left-20 w-1 h-1 bg-white rounded-full animate-pulse"></div>
        {/* Golden dragon elements */}
        <div className="absolute top-20 right-10 text-6xl opacity-20 animate-pulse">🐉</div>
        <div className="absolute bottom-20 left-10 text-4xl opacity-10 rotate-45">🐲</div>
      </div>

      {/* Header */}
      <header className="relative z-10 bg-gradient-to-r from-red-600 to-red-900 px-4 py-3 shadow-lg border-b-2 border-yellow-500">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center shadow-lg border-2 border-yellow-300">
              <Crown className="w-6 h-6 text-red-900" />
            </div>
            <div>
              <span className="text-yellow-300 font-bold text-xl tracking-wide">Rich King</span>
              <span className="text-yellow-500 font-bold text-xl ml-1">99</span>
            </div>
          </div>

          {/* Navigation Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <Home className="w-6 h-6 text-white cursor-pointer hover:text-yellow-300 transition-colors" />
            <Star className="w-6 h-6 text-white cursor-pointer hover:text-yellow-300 transition-colors" />
            <User className="w-6 h-6 text-white cursor-pointer hover:text-yellow-300 transition-colors" />
            <DollarSign className="w-6 h-6 text-white cursor-pointer hover:text-yellow-300 transition-colors" />
          </div>

          {/* Balance and User Info */}
          <div className="flex items-center space-x-3">
            <div className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-2">
              <span className="text-white text-sm font-medium">{balance} ฿</span>
            </div>
            <MessageCircle className="w-6 h-6 text-green-400" />
            <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
              <User className="w-4 h-4 text-white" />
              <span className="text-white text-sm hidden sm:inline">{userId}</span>
            </div>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-white/20">
            <div className="flex justify-around mt-4">
              <Home className="w-6 h-6 text-white cursor-pointer hover:text-yellow-300 transition-colors" />
              <Star className="w-6 h-6 text-white cursor-pointer hover:text-yellow-300 transition-colors" />
              <User className="w-6 h-6 text-white cursor-pointer hover:text-yellow-300 transition-colors" />
              <DollarSign className="w-6 h-6 text-white cursor-pointer hover:text-yellow-300 transition-colors" />
            </div>
          </div>
        )}
      </header>

      <div className="relative z-10 p-4 space-y-6">
        {/* Hero Banner */}
        <div className="bg-gradient-to-r from-red-800/90 to-black/90 backdrop-blur-sm rounded-3xl p-6 shadow-xl border border-yellow-500/30">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-transparent bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text mb-2 font-serif">
                皇帝游戏 (ราชาเกม)
              </h1>
              <h2 className="text-2xl md:text-3xl font-bold text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text mb-4">
                黄金赌场 (วางเดิมพัน)
              </h2>
              <p className="text-white text-sm md:text-base opacity-90">
                龙王游戏 - สล็อต บาคาร่า กีฬา และอื่น ๆ กว่า 1,000 เกม
              </p>
              <p className="text-yellow-300 text-xs mt-2">🐉 มังกรทองนำโชค 🐉</p>
            </div>
            <div className="hidden md:block">
              <div className="w-32 h-32 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-xl">
                <span className="text-4xl">🐉</span>
              </div>
            </div>
          </div>
        </div>

        {/* User Balance Card */}
        <div className="bg-gradient-to-br from-black/80 to-red-900/60 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-yellow-500/20">
          <div className="flex items-center justify-between mb-4">
            <div className="bg-gradient-to-r from-red-600 to-red-800 rounded-xl px-4 py-2 border border-yellow-500/30">
              <span className="text-white font-medium">User: {userId}</span>
            </div>
            <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-xl px-4 py-2 shadow-lg">
              <span className="text-purple-900 font-bold">ลิงค์รับทรัพย์</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-white text-lg mb-2">จำนวนเครดิต</h3>
              <div className="text-4xl font-bold text-yellow-300 mb-4">
                {balance} <span className="text-2xl">฿</span>
              </div>
            </div>
            <div className="text-right">
              <p className="text-white/80 mb-2">ยอดค่าแนะนำคงเหลือ</p>
              <div className="text-2xl font-bold text-white mb-4">0.00</div>
              <button className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105">
                ถอนทรัพย์มังกร
              </button>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-3 gap-4">
          <button className="bg-gradient-to-br from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 rounded-2xl p-4 shadow-lg transition-all duration-300 transform hover:scale-105 group">
            <Building2 className="w-8 h-8 text-red-900 mx-auto mb-2 group-hover:scale-110 transition-transform" />
            <span className="text-red-900 font-bold text-sm">ฝากเงิน</span>
          </button>
          <button className="bg-gradient-to-br from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 rounded-2xl p-4 shadow-lg transition-all duration-300 transform hover:scale-105 group">
            <CreditCard className="w-8 h-8 text-red-900 mx-auto mb-2 group-hover:scale-110 transition-transform" />
            <span className="text-red-900 font-bold text-sm">ถอนเงิน</span>
          </button>
          <button className="bg-gradient-to-br from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 rounded-2xl p-4 shadow-lg transition-all duration-300 transform hover:scale-105 group">
            <Headphones className="w-8 h-8 text-red-900 mx-auto mb-2 group-hover:scale-110 transition-transform" />
            <span className="text-red-900 font-bold text-sm">แจ้งปัญหา</span>
          </button>
        </div>

        {/* Game Categories */}
        <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-yellow-500/20">
          <h2 className="text-pink-300 text-xl font-bold text-center mb-6">ทางเข้าเล่น</h2>
          <div className="grid grid-cols-2 gap-4">
            {gameCategories.map((category, index) => (
              <button
                key={index}
                className={`relative bg-gradient-to-br ${category.color} rounded-2xl p-6 shadow-lg transition-all duration-300 transform hover:scale-105 overflow-hidden group`}
              >
                {category.badge && (
                  <div className="absolute top-2 left-2 bg-yellow-400 text-red-900 text-xs font-bold px-2 py-1 rounded-full shadow-lg">
                    {category.badge}
                  </div>
                )}
                <div className="text-center">
                  <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">
                    {category.icon}
                  </div>
                  <h3 className="text-white font-bold text-lg mb-1">{category.title}</h3>
                  <p className="text-white/80 text-xs font-medium">{category.subtitle}</p>
                  <div className="mt-4 bg-yellow-400 hover:bg-yellow-500 text-red-900 px-4 py-2 rounded-full text-sm font-bold transition-colors">
                    เข้าเล่น
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Footer Spacing */}
        <div className="h-8"></div>
      </div>
    </div>
  );
}

export default App;