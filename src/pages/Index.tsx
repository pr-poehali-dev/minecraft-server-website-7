import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Progress } from '@/components/ui/progress'
import Icon from '@/components/ui/icon'

export default function Index() {
  const players = [
    { name: 'CyberNinja', score: 15420, rank: 1 },
    { name: 'NeonGamer', score: 13890, rank: 2 },
    { name: 'PixelWarrior', score: 12340, rank: 3 },
    { name: 'TechMaster', score: 11200, rank: 4 },
    { name: 'QuantumPlayer', score: 10850, rank: 5 }
  ]

  const privileges = [
    { name: 'VIP', price: 500, color: 'from-neon-green to-neon-blue', perks: ['Приватные регионы', 'Цветной ник', 'Дополнительные слоты'] },
    { name: 'PREMIUM', price: 1200, color: 'from-neon-pink to-purple-500', perks: ['Все VIP привилегии', 'Флай в лобби', 'Кит /premium'] },
    { name: 'ULTIMATE', price: 2500, color: 'from-yellow-400 to-red-500', perks: ['Все предыдущие', 'Доступ к /god', 'Личный телепорт'] }
  ]

  const cases = [
    { name: 'Starter Case', price: 50, rarity: 'common' },
    { name: 'Epic Case', price: 200, rarity: 'epic' },
    { name: 'Legendary Case', price: 500, rarity: 'legendary' }
  ]

  const rules = [
    'Запрещен читерский софт и модификации',
    'Уважайте других игроков, без мата и оскорблений',
    'Запрещено использование багов и дюпов',
    'Гриферство наказывается баном',
    'Реклама других серверов запрещена'
  ]

  return (
    <div className="min-h-screen bg-black text-white dark">
      {/* Header */}
      <header className="border-b border-neon-green/20 bg-black/50 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-to-r from-neon-green to-neon-pink rounded-lg flex items-center justify-center">
                <Icon name="Zap" className="text-black" size={20} />
              </div>
              <h1 className="text-2xl font-bold font-mono text-neon-green neon-text">
                CYBERCRAFT
              </h1>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#home" className="text-neon-green hover:text-neon-pink transition-colors">Главная</a>
              <a href="#shop" className="hover:text-neon-green transition-colors">Магазин</a>
              <a href="#rules" className="hover:text-neon-green transition-colors">Правила</a>
              <a href="#rating" className="hover:text-neon-green transition-colors">Рейтинг</a>
            </nav>
            <Button className="bg-gradient-to-r from-neon-green to-neon-blue text-black font-bold hover:scale-105 transition-transform">
              ИГРАТЬ
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 space-y-16">
        {/* Hero Section */}
        <section id="home" className="text-center py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-neon-green/10 via-transparent to-neon-pink/10 rounded-3xl"></div>
          <div className="relative z-10">
            <h2 className="text-6xl md:text-8xl font-black font-mono mb-6 bg-gradient-to-r from-neon-green via-neon-blue to-neon-pink bg-clip-text text-transparent animate-fade-in">
              CYBERCRAFT
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Погрузись в футуристичный мир Minecraft с уникальными модами, 
              киберпанк атмосферой и бесконечными возможностями
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button size="lg" className="bg-gradient-to-r from-neon-green to-neon-blue text-black font-bold text-lg px-8 py-3 hover:scale-105 transition-transform">
                <Icon name="Play" className="mr-2" size={20} />
                ПОДКЛЮЧИТЬСЯ
              </Button>
              <div className="cyber-card px-6 py-3 rounded-lg">
                <span className="text-neon-green font-mono">play.cybercraft.ru</span>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="cyber-card p-6 rounded-xl">
                <Icon name="Users" className="text-neon-green mb-3 mx-auto" size={32} />
                <h3 className="text-xl font-bold text-neon-green mb-2">1,247</h3>
                <p className="text-gray-400">Онлайн игроков</p>
              </div>
              <div className="cyber-card p-6 rounded-xl">
                <Icon name="Server" className="text-neon-pink mb-3 mx-auto" size={32} />
                <h3 className="text-xl font-bold text-neon-pink mb-2">99.9%</h3>
                <p className="text-gray-400">Аптайм сервера</p>
              </div>
              <div className="cyber-card p-6 rounded-xl">
                <Icon name="Gamepad2" className="text-neon-blue mb-3 mx-auto" size={32} />
                <h3 className="text-xl font-bold text-neon-blue mb-2">15+</h3>
                <p className="text-gray-400">Игровых модов</p>
              </div>
            </div>
          </div>
        </section>

        {/* Shop Section */}
        <section id="shop" className="py-16">
          <h2 className="text-4xl md:text-6xl font-black text-center mb-12 font-mono">
            <span className="bg-gradient-to-r from-neon-pink to-neon-green bg-clip-text text-transparent">
              МАГАЗИН
            </span>
          </h2>
          
          <Tabs defaultValue="privileges" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 bg-black/50 border border-neon-green/30">
              <TabsTrigger value="privileges" className="data-[state=active]:bg-neon-green data-[state=active]:text-black">
                Привилегии
              </TabsTrigger>
              <TabsTrigger value="cases" className="data-[state=active]:bg-neon-pink data-[state=active]:text-black">
                Кейсы
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="privileges" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {privileges.map((privilege, index) => (
                  <Card key={index} className="cyber-card border-none text-white hover:scale-105 transition-transform">
                    <CardHeader>
                      <div className={`h-32 bg-gradient-to-br ${privilege.color} rounded-lg mb-4 flex items-center justify-center`}>
                        <Icon name="Crown" size={48} className="text-white" />
                      </div>
                      <CardTitle className="text-2xl font-bold text-center text-neon-green">
                        {privilege.name}
                      </CardTitle>
                      <CardDescription className="text-center">
                        <span className="text-3xl font-bold text-neon-pink">{privilege.price}₽</span>
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 mb-6">
                        {privilege.perks.map((perk, perkIndex) => (
                          <li key={perkIndex} className="flex items-center">
                            <Icon name="Check" className="text-neon-green mr-2" size={16} />
                            <span className="text-sm">{perk}</span>
                          </li>
                        ))}
                      </ul>
                      <Button className="w-full bg-gradient-to-r from-neon-green to-neon-blue text-black font-bold hover:scale-105 transition-transform">
                        КУПИТЬ
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="cases" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {cases.map((caseItem, index) => (
                  <Card key={index} className="cyber-card border-none text-white hover:scale-105 transition-transform">
                    <CardHeader>
                      <div className="h-32 bg-gradient-to-br from-gray-700 to-gray-900 rounded-lg mb-4 flex items-center justify-center">
                        <Icon name="Package" size={48} className="text-neon-green" />
                      </div>
                      <CardTitle className="text-xl font-bold text-center text-neon-green">
                        {caseItem.name}
                      </CardTitle>
                      <CardDescription className="text-center">
                        <span className="text-2xl font-bold text-neon-pink">{caseItem.price}₽</span>
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Badge className={`w-full justify-center mb-4 ${
                        caseItem.rarity === 'common' ? 'bg-gray-600' :
                        caseItem.rarity === 'epic' ? 'bg-purple-600' : 'bg-yellow-600'
                      }`}>
                        {caseItem.rarity.toUpperCase()}
                      </Badge>
                      <Button className="w-full bg-gradient-to-r from-neon-pink to-purple-500 text-white font-bold hover:scale-105 transition-transform">
                        ОТКРЫТЬ
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </section>

        {/* Rules Section */}
        <section id="rules" className="py-16">
          <h2 className="text-4xl md:text-6xl font-black text-center mb-12 font-mono">
            <span className="bg-gradient-to-r from-neon-blue to-neon-pink bg-clip-text text-transparent">
              ПРАВИЛА
            </span>
          </h2>
          <div className="max-w-4xl mx-auto">
            <Card className="cyber-card border-none text-white">
              <CardContent className="p-8">
                <div className="space-y-6">
                  {rules.map((rule, index) => (
                    <div key={index} className="flex items-start space-x-4 p-4 rounded-lg bg-black/30">
                      <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-neon-green to-neon-blue rounded-full flex items-center justify-center">
                        <span className="text-black font-bold font-mono">{index + 1}</span>
                      </div>
                      <p className="text-gray-300 leading-relaxed">{rule}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-8 p-6 bg-gradient-to-r from-red-900/20 to-red-800/20 rounded-lg border border-red-500/30">
                  <div className="flex items-center space-x-3 mb-3">
                    <Icon name="AlertTriangle" className="text-red-400" size={24} />
                    <h3 className="text-xl font-bold text-red-400">Важно!</h3>
                  </div>
                  <p className="text-gray-300">
                    Нарушение правил ведет к предупреждениям, мутам или банам. 
                    Администрация оставляет за собой право изменять правила без предварительного уведомления.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Rating Section */}
        <section id="rating" className="py-16">
          <h2 className="text-4xl md:text-6xl font-black text-center mb-12 font-mono">
            <span className="bg-gradient-to-r from-neon-green to-neon-blue bg-clip-text text-transparent">
              РЕЙТИНГ
            </span>
          </h2>
          <div className="max-w-4xl mx-auto">
            <Card className="cyber-card border-none text-white">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-center text-neon-green">
                  ТОП ИГРОКОВ
                </CardTitle>
                <CardDescription className="text-center text-gray-400">
                  Лучшие игроки нашего сервера
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {players.map((player, index) => (
                    <div key={index} className={`flex items-center justify-between p-4 rounded-lg ${
                      index === 0 ? 'bg-gradient-to-r from-yellow-600/20 to-yellow-400/20 border border-yellow-400/30' :
                      index === 1 ? 'bg-gradient-to-r from-gray-400/20 to-gray-300/20 border border-gray-300/30' :
                      index === 2 ? 'bg-gradient-to-r from-amber-600/20 to-amber-500/20 border border-amber-500/30' :
                      'bg-black/30'
                    }`}>
                      <div className="flex items-center space-x-4">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg ${
                          index === 0 ? 'bg-gradient-to-r from-yellow-400 to-yellow-600 text-black' :
                          index === 1 ? 'bg-gradient-to-r from-gray-300 to-gray-500 text-black' :
                          index === 2 ? 'bg-gradient-to-r from-amber-500 to-amber-700 text-black' :
                          'bg-gradient-to-r from-neon-green to-neon-blue text-black'
                        }`}>
                          #{player.rank}
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-neon-green">{player.name}</h3>
                          <p className="text-gray-400 text-sm">Очки: {player.score.toLocaleString()}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <Progress 
                          value={(player.score / 20000) * 100} 
                          className="w-32 h-2 mb-2" 
                        />
                        <Badge className={
                          index === 0 ? 'bg-yellow-600' :
                          index === 1 ? 'bg-gray-500' :
                          index === 2 ? 'bg-amber-600' : 'bg-neon-green/20 text-neon-green'
                        }>
                          {index === 0 ? 'ЛЕГЕНДА' : index === 1 ? 'МАСТЕР' : index === 2 ? 'ЭКСПЕРТ' : 'ПРО'}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-neon-green/20 bg-black/50 backdrop-blur-md py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-r from-neon-green to-neon-pink rounded-lg flex items-center justify-center">
                <Icon name="Zap" className="text-black" size={16} />
              </div>
              <span className="text-neon-green font-mono font-bold">CYBERCRAFT</span>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-neon-green transition-colors">
                <Icon name="MessageCircle" size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-neon-blue transition-colors">
                <Icon name="Users" size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-neon-pink transition-colors">
                <Icon name="Globe" size={20} />
              </a>
            </div>
          </div>
          <div className="text-center mt-6 pt-6 border-t border-gray-800">
            <p className="text-gray-400 text-sm">
              © 2024 CyberCraft. Все права защищены. Погружайся в будущее игр.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}