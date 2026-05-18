import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronRight, Globe, Package, Zap, Users, Shield, Truck, Headphones } from "lucide-react";
import { useState } from "react";

/**
 * Design Philosophy: Modern Tech-Business Style
 * - Deep blue (#1E3A8A) as primary color representing trust and professionalism
 * - Gold (#F59E0B) as accent color representing value and excellence
 * - Clean, asymmetric layouts with generous whitespace
 * - Smooth animations and micro-interactions
 * - Support for bilingual content (English/Chinese)
 */

export default function Home() {
  const [language, setLanguage] = useState<"en" | "zh">("en");

  const content = {
    en: {
      nav: { about: "About", products: "Products", services: "Services", contact: "Contact", cn: "中文" },
      hero: {
        title: "Global Electronic Components One-Stop Service Expert",
        subtitle: "Dedicated to Creating More Value for You",
        cta: "Get Started",
        description: "Shenzhen Junqiang Electronics - Your trusted partner for comprehensive electronic component solutions worldwide"
      },
      strengths: {
        title: "Our Strengths",
        items: [
          { icon: Globe, title: "Global Supply Chain", desc: "Established cooperative relationships with renowned manufacturers and agents from Korea, USA, Germany, Japan, China, etc." },
          { icon: Package, title: "Abundant Inventory", desc: "Large stock in Hong Kong and Shenzhen warehouses, strategic alliance with numerous spot distributors ensuring stable supply." },
          { icon: Zap, title: "One-Stop Procurement", desc: "Eliminates the trouble of multiple settlements and reconciliations, simplifying the entire procurement process." }
        ]
      },
      services: {
        title: "Core Services",
        items: [
          { icon: Zap, title: "BOM Matching Service", desc: "Provides products from 400+ global brands, solving the problem of various components being difficult to procure." },
          { icon: Package, title: "Cyclic Ordering & Stocking", desc: "Helps customers reduce production/procurement costs and alleviate capital pressure." },
          { icon: Package, title: "Sample & Small Batch Service", desc: "Meets the needs of R&D and small batch trial production units." },
          { icon: Truck, title: "Excess Inventory Resale", desc: "Maximizes residual value and enables flexible capital turnover." }
        ]
      },
      products: {
        title: "Our Products",
        subtitle: "Covering 400+ global brands with 10+ product categories and 10000+ stock models",
        items: [
          { title: "Integrated Circuits (IC)", desc: "Microchip, TI, Maxim, ADI, NXP, ON Semiconductor and more" },
          { title: "Passive Components", desc: "Resistors, capacitors, inductors with premium quality" },
          { title: "Discrete Components", desc: "Diodes, transistors, MOSFETs for diverse applications" },
          { title: "Electromechanical", desc: "Relays, crystal oscillators, connectors with reliability" }
        ]
      },
      valueAdded: {
        title: "Value-Added Services & Support",
        subtitle: "Professional technical support and value-added services to safeguard your business",
        items: [
          { icon: Headphones, title: "Technical Support", desc: "Product specifications, application guides, change notifications" },
          { icon: Shield, title: "Professional Processing", desc: "Taping service, re-reeling tube-packed materials, SMT production line" },
          { icon: Shield, title: "Quality Assurance", desc: "Agency inspection service, experienced staff, reliable quality" },
          { icon: Zap, title: "Self-produced Transformers", desc: "Longgang factory, high quality, competitive price" }
        ]
      },
      partnership: {
        title: "Partnership & Win-Win",
        subtitle: "Working together to create a better future and achieve mutual benefits",
        items: [
          { title: "Long-term Partnership", desc: "Establish stable relationships with global renowned manufacturers and agents" },
          { title: "Mutual Growth", desc: "Providing professional technical support and quality services to help customer business growth" },
          { title: "Future Vision", desc: "Become the most trusted electronic component partner for customers" }
        ]
      },
      contact: {
        title: "Contact Us",
        subtitle: "Looking forward to cooperating with you to create a better future",
        address: "Room 2302, 23rd Floor, Building B, Oriental Times Square, Intersection of Huaqiangbei Road and Zhenxing Road, Futian District, Shenzhen",
        phone: "+86-0755-83772829",
        fax: "+86-0755-83772680",
        postal: "518031"
      },
      footer: {
        tagline: "Global Electronic Components One-Stop Service Expert",
        dedication: "Dedicated to Creating More Value for You"
      }
    },
    zh: {
      nav: { about: "关于我们", products: "产品中心", services: "核心服务", contact: "联系我们", cn: "English" },
      hero: {
        title: "全球电子元器件一站式服务专家",
        subtitle: "致力于为您创造更多价值",
        cta: "立即开始",
        description: "深圳市骏强电子有限公司 - 您值得信赖的全球电子元器件综合解决方案合作伙伴"
      },
      strengths: {
        title: "核心优势",
        items: [
          { icon: Globe, title: "全球供应链", desc: "与韩国、美国、德国、日本、中国等全球知名电子元器件制造商和代理商建立了良好的合作关系。" },
          { icon: Package, title: "库存充足", desc: "在香港和深圳拥有大型仓库，与众多现货分销商战略联盟，确保供应稳定。" },
          { icon: Zap, title: "一站式采购", desc: "消除多次结算和对账的麻烦，所有采购问题一站式解决。" }
        ]
      },
      services: {
        title: "核心服务",
        items: [
          { icon: Zap, title: "BOM 配单服务", desc: "覆盖 400+ 全球品牌，解决各种元器件难以采购的问题。" },
          { icon: Package, title: "循环订货与备货服务", desc: "帮助客户降低生产/采购成本，缓解资金压力。" },
          { icon: Package, title: "样品与小批量服务", desc: "满足研发和小批量试产单位的需求。" },
          { icon: Truck, title: "库存呆料转售服务", desc: "最大化残值，灵活周转资金。" }
        ]
      },
      products: {
        title: "主要产品",
        subtitle: "覆盖 400+ 全球品牌，10+ 产品类别，10000+ 库存型号",
        items: [
          { title: "集成电路 (IC)", desc: "Microchip、TI、Maxim、ADI、NXP、ON Semiconductor 等" },
          { title: "被动元件", desc: "电阻、电容、电感，优质品质" },
          { title: "分立器件", desc: "二极管、三极管、MOSFET 等" },
          { title: "机电元件", desc: "继电器、晶振、连接器等可靠产品" }
        ]
      },
      valueAdded: {
        title: "增值服务与支持",
        subtitle: "专业的技术支持和增值服务，保障您的业务发展",
        items: [
          { icon: Headphones, title: "技术支持", desc: "产品规格书、应用指南、变更通知" },
          { icon: Shield, title: "专业加工", desc: "编带服务、拆带重新编带、SMT 生产线" },
          { icon: Shield, title: "质量保证", desc: "代理检验服务、经验丰富的团队、可靠质量保证" },
          { icon: Zap, title: "自产高频变压器", desc: "龙岗工厂、高质量、价格有竞争力" }
        ]
      },
      partnership: {
        title: "合作共赢",
        subtitle: "携手共进，创造美好未来，实现互利共赢",
        items: [
          { title: "长期合作", desc: "与全球知名制造商和代理商建立稳定的合作关系" },
          { title: "互利共赢", desc: "提供专业的技术支持和优质服务，帮助客户业务增长" },
          { title: "未来愿景", desc: "成为客户最信赖的电子元器件合作伙伴" }
        ]
      },
      contact: {
        title: "联系我们",
        subtitle: "期待与您合作，共创美好未来",
        address: "深圳市福田区振兴路与华强北路交汇处东方时代广场 B 座 2302 室",
        phone: "+86-0755-83772829",
        fax: "+86-0755-83772680",
        postal: "518031"
      },
      footer: {
        tagline: "全球电子元器件一站式服务专家",
        dedication: "致力于为您创造更多价值"
      }
    }
  };

  const t = content[language];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <span className="font-bold text-primary text-lg">Junqiang</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-foreground hover:text-primary transition-colors">{t.nav.about}</a>
            <a href="#products" className="text-foreground hover:text-primary transition-colors">{t.nav.products}</a>
            <a href="#services" className="text-foreground hover:text-primary transition-colors">{t.nav.services}</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">{t.nav.contact}</a>
          </div>
          <button
            onClick={() => setLanguage(language === "en" ? "zh" : "en")}
            className="px-4 py-2 rounded-lg bg-accent/10 text-accent hover:bg-accent/20 transition-colors font-semibold"
          >
            {t.nav.cn}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://d2xsxph8kpxj0f.cloudfront.net/310419663032166958/K2fXVoNC4ffPac84a64vSx/hero-banner-gT7WcMhVkoQkvsP29rQTW5.webp')",
            opacity: 0.95
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
        <div className="relative container py-24 md:py-32">
          <div className="max-w-2xl animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{t.hero.title}</h1>
            <p className="text-xl text-blue-100 mb-8">{t.hero.subtitle}</p>
            <p className="text-lg text-blue-50 mb-8">{t.hero.description}</p>
            <Button className="btn-primary bg-accent text-primary hover:bg-yellow-500">
              {t.hero.cta} <ChevronRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Strengths Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-primary">{t.strengths.title}</h2>
          <div className="section-divider mb-12 max-w-xs mx-auto" />
          <div className="grid md:grid-cols-3 gap-8">
            {t.strengths.items.map((item, i) => (
              <Card key={i} className="card-hover p-8 border-0 shadow-md">
                <div className="icon-circle mb-6 mx-auto">
                  <item.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-primary text-center mb-3">{item.title}</h3>
                <p className="text-gray-600 text-center leading-relaxed">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-primary">{t.services.title}</h2>
          <div className="section-divider mb-12 max-w-xs mx-auto" />
          <div className="grid md:grid-cols-2 gap-8">
            {t.services.items.map((item, i) => (
              <Card key={i} className="card-hover p-8 border-l-4 border-accent shadow-md">
                <div className="flex items-start gap-4">
                  <div className="icon-circle flex-shrink-0">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-primary mb-2">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-gray-50">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "url('https://d2xsxph8kpxj0f.cloudfront.net/310419663032166958/K2fXVoNC4ffPac84a64vSx/products-section-bg-9GuyJeQy4rGMkQogHdQWMd.webp')",
            backgroundAttachment: "fixed"
          }}
        />
        <div className="relative container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-2 text-primary">{t.products.title}</h2>
          <p className="text-center text-gray-600 mb-4">{t.products.subtitle}</p>
          <div className="section-divider mb-12 max-w-xs mx-auto" />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.products.items.map((item, i) => (
              <Card key={i} className="card-hover p-6 border-0 shadow-md text-center">
                <h3 className="text-lg font-bold text-primary mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Value-Added Services */}
      <section className="py-20">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-2 text-primary">{t.valueAdded.title}</h2>
          <p className="text-center text-gray-600 mb-4">{t.valueAdded.subtitle}</p>
          <div className="section-divider mb-12 max-w-xs mx-auto" />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.valueAdded.items.map((item, i) => (
              <Card key={i} className="card-hover p-8 border-0 shadow-md text-center">
                <div className="icon-circle mb-4 mx-auto">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-primary mb-3">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="py-20 bg-primary text-white">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "url('https://d2xsxph8kpxj0f.cloudfront.net/310419663032166958/K2fXVoNC4ffPac84a64vSx/partnership-section-bg-BHBtcBgJjKqeN7UgpeLrN3.webp')",
            backgroundAttachment: "fixed"
          }}
        />
        <div className="relative container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">{t.partnership.title}</h2>
          <p className="text-center text-blue-100 mb-4">{t.partnership.subtitle}</p>
          <div className="h-1 bg-accent mb-12 max-w-xs mx-auto" />
          <div className="grid md:grid-cols-3 gap-8">
            {t.partnership.items.map((item, i) => (
              <div key={i} className="text-center">
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-blue-100 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-2 text-primary">{t.contact.title}</h2>
          <p className="text-center text-gray-600 mb-4">{t.contact.subtitle}</p>
          <div className="section-divider mb-12 max-w-xs mx-auto" />
          <div className="max-w-2xl mx-auto">
            <Card className="p-8 border-0 shadow-lg">
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-primary mb-2">📍 {language === "en" ? "Address" : "地址"}</h3>
                  <p className="text-gray-600">{t.contact.address}</p>
                </div>
                <div>
                  <h3 className="font-bold text-primary mb-2">📞 {language === "en" ? "Phone" : "电话"}</h3>
                  <p className="text-gray-600">{t.contact.phone}</p>
                </div>
                <div>
                  <h3 className="font-bold text-primary mb-2">📠 {language === "en" ? "Fax" : "传真"}</h3>
                  <p className="text-gray-600">{t.contact.fax}</p>
                </div>
                <div>
                  <h3 className="font-bold text-primary mb-2">📮 {language === "en" ? "Postal Code" : "邮编"}</h3>
                  <p className="text-gray-600">{t.contact.postal}</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-12">
        <div className="container">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-2">{t.footer.tagline}</h3>
            <p className="text-blue-100 mb-8">{t.footer.dedication}</p>
            <div className="border-t border-blue-400 pt-8">
              <p className="text-sm text-blue-200">© 2026 Shenzhen Junqiang Electronics Co., Ltd. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
