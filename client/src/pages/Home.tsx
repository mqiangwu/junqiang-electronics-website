import { Card } from "@/components/ui/card";
import { ChevronRight, Globe, Package, Zap, Users, Shield, Truck, Headphones, Award, TrendingUp, CheckCircle2, Send, CheckCircle } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

/**
 * Design Philosophy: Premium Tech-Business Style
 * - Deep blue (#1E3A8A) as primary color representing trust and professionalism
 * - Gold (#F59E0B) as accent color representing value and excellence
 * - Clean, asymmetric layouts with generous whitespace
 * - Smooth animations and micro-interactions
 * - Support for bilingual content (English/Chinese)
 * - Enhanced with company achievements, real-world applications, and team expertise
 */

export default function Home() {
  const [language, setLanguage] = useState<"en" | "zh">("en");
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    productCategory: "",
    description: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const content = {
    en: {
      nav: { about: "About", products: "Products", services: "Services", contact: "Contact", cn: "中文" },
      hero: {
        title: "Global Electronic Components One-Stop Service Expert",
        subtitle: "Dedicated to Creating More Value for You",
        cta: "Get Started",
        description: "Shenzhen Junqiang Electronics - Your trusted partner for comprehensive electronic component solutions worldwide"
      },
      achievements: {
        title: "Company Achievements",
        subtitle: "Trusted by thousands of customers worldwide",
        stats: [
          { number: "20+", label: "Years of Experience", icon: Award },
          { number: "10000+", label: "Stock Models", icon: Package },
          { number: "400+", label: "Global Brands", icon: Globe },
          { number: "50000+", label: "Satisfied Customers", icon: Users }
        ]
      },
      strengths: {
        title: "Our Strengths",
        items: [
          { icon: Globe, title: "Global Supply Chain", desc: "Established cooperative relationships with renowned manufacturers and agents from Korea, USA, Germany, Japan, China, etc." },
          { icon: Package, title: "Abundant Inventory", desc: "Large stock in Hong Kong and Shenzhen warehouses, strategic alliance with numerous spot distributors ensuring stable supply." },
          { icon: Zap, title: "One-Stop Procurement", desc: "Eliminates the trouble of multiple settlements and reconciliations, simplifying the entire procurement process." }
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
      solutions: {
        title: "Real-World Solutions",
        subtitle: "Powering innovation across industries",
        items: [
          { title: "Power Systems", desc: "Reliable energy. Smarter grids. Supporting renewable energy and grid modernization." },
          { title: "Automotive", desc: "Smarter mobility. Safer journeys. Enabling EV and autonomous vehicle technologies." },
          { title: "Industrial Equipment", desc: "Optimized operations. Built for industry. Powering manufacturing and automation." },
          { title: "Smart Devices", desc: "Smarter technology. Better connected. Enabling IoT and smart home ecosystems." }
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
      valueAdded: {
        title: "Value-Added Services & Support",
        subtitle: "Professional technical support and value-added services to safeguard your business",
        items: [
          { icon: Headphones, title: "Technical Support", desc: "Product specifications, application guides, change notifications" },
          { icon: Shield, title: "Professional Processing", desc: "Taping service, re-reeling tube-packed materials, SMT production line" },
          { icon: Award, title: "Quality Assurance", desc: "Agency inspection service, experienced staff, reliable quality" },
          { icon: Zap, title: "Self-produced Transformers", desc: "Longgang factory, high quality, competitive price" }
        ]
      },
      expertise: {
        title: "Expert Team",
        subtitle: "Deep industry knowledge and proven track record",
        highlights: [
          { number: "50+", label: "Expert Engineers" },
          { number: "20+", label: "Years Average Experience" },
          { number: "100+", label: "Successful Projects" }
        ],
        values: [
          { icon: Users, title: "Collaboration", desc: "We work together to achieve more." },
          { icon: Zap, title: "Innovation", desc: "We challenge the status quo to create better solutions." },
          { icon: Shield, title: "Expertise", desc: "Deep technical knowledge. Proven industry experience." },
          { icon: CheckCircle2, title: "Trust", desc: "Integrity, reliability, and commitment in everything we do." }
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
        postal: "518031",
        form: {
          title: "Quick Inquiry Form",
          subtitle: "Submit your procurement needs and we'll respond within 24 hours",
          fields: {
            name: "Your Name",
            company: "Company Name",
            email: "Email Address",
            phone: "Phone Number",
            productCategory: "Product Category",
            description: "Procurement Details",
            submit: "Submit Inquiry",
            submitting: "Submitting...",
            success: "Thank you! We'll contact you soon."
          },
          categories: [
            "Integrated Circuits (IC)",
            "Passive Components",
            "Discrete Components",
            "Electromechanical",
            "Other"
          ]
        }
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
      achievements: {
        title: "公司成就",
        subtitle: "获得全球数千客户的信任",
        stats: [
          { number: "20+", label: "年行业经验", icon: Award },
          { number: "10000+", label: "库存型号", icon: Package },
          { number: "400+", label: "全球品牌", icon: Globe },
          { number: "50000+", label: "满意客户", icon: Users }
        ]
      },
      strengths: {
        title: "核心优势",
        items: [
          { icon: Globe, title: "全球供应链", desc: "与韩国、美国、德国、日本、中国等全球知名电子元器件制造商和代理商建立了良好的合作关系。" },
          { icon: Package, title: "库存充足", desc: "在香港和深圳拥有大型仓库，与众多现货分销商战略联盟，确保供应稳定。" },
          { icon: Zap, title: "一站式采购", desc: "消除多次结算和对账的麻烦，所有采购问题一站式解决。" }
        ]
      },
      products: {
        title: "产品中心",
        subtitle: "覆盖400+全球品牌，10+产品类别，10000+库存型号",
        items: [
          { title: "集成电路 (IC)", desc: "Microchip、TI、Maxim、ADI、NXP、ON Semiconductor等" },
          { title: "无源器件", desc: "电阻、电容、电感等高品质产品" },
          { title: "分立器件", desc: "二极管、三极管、MOSFET等多种应用" },
          { title: "机电元件", desc: "继电器、晶体振荡器、连接器等可靠产品" }
        ]
      },
      solutions: {
        title: "行业解决方案",
        subtitle: "为各行业创新赋能",
        items: [
          { title: "电力系统", desc: "可靠能源。智能电网。支持新能源和电网现代化。" },
          { title: "汽车工业", desc: "智能出行。安全驾行。赋能电动车和自动驾驶。" },
          { title: "工业设备", desc: "优化运营。为工业而生。驱动制造和自动化。" },
          { title: "智能设备", desc: "智能科技。互联互通。使能物联网和智能家居。" }
        ]
      },
      services: {
        title: "核心服务",
        items: [
          { icon: Zap, title: "BOM配单服务", desc: "提供400+全球品牌产品，解决各类元器件采购难题。" },
          { icon: Package, title: "循环订货与备货", desc: "帮助客户降低生产采购成本，缓解资金压力。" },
          { icon: Package, title: "样品与小批量服务", desc: "满足研发和小批量试产单位的需求。" },
          { icon: Truck, title: "库存积压品回收", desc: "最大化残值，灵活周转资金。" }
        ]
      },
      valueAdded: {
        title: "增值服务与技术支持",
        subtitle: "专业的技术支持和增值服务，为您的业务保驾护航",
        items: [
          { icon: Headphones, title: "技术支持", desc: "产品规格书、应用指南、变更通知" },
          { icon: Shield, title: "专业加工", desc: "编带服务、散料重卷、SMT生产线" },
          { icon: Award, title: "质量保证", desc: "代理检验服务、经验丰富的员工、可靠的品质" },
          { icon: Zap, title: "自产变压器", desc: "龙岗工厂、高品质、价格优势" }
        ]
      },
      expertise: {
        title: "专家团队",
        subtitle: "深厚的行业知识和卓越的成就记录",
        highlights: [
          { number: "50+", label: "工程师团队" },
          { number: "20+", label: "平均从业年限" },
          { number: "100+", label: "成功项目" }
        ],
        values: [
          { icon: Users, title: "协作合作", desc: "我们携手共进，成就更多。" },
          { icon: Zap, title: "创新进取", desc: "我们挑战现状，创造更优方案。" },
          { icon: Shield, title: "专业精深", desc: "深厚的技术知识。丰富的行业经验。" },
          { icon: CheckCircle2, title: "诚信可信", desc: "在所有事务中保持诚信、可靠和承诺。" }
        ]
      },
      partnership: {
        title: "合作共赢",
        subtitle: "携手共创美好未来，实现互利共赢",
        items: [
          { title: "长期合作", desc: "与全球知名制造商和代理商建立稳定关系" },
          { title: "互利共赢", desc: "提供专业技术支持和优质服务，帮助客户业务增长" },
          { title: "未来愿景", desc: "成为客户最值得信赖的电子元器件合作伙伴" }
        ]
      },
      contact: {
        title: "联系我们",
        subtitle: "期待与您合作，共创美好未来",
        address: "深圳市福田区华强北路与振兴路交界处东方时代广场B座23楼2302室",
        phone: "+86-0755-83772829",
        fax: "+86-0755-83772680",
        postal: "518031",
        form: {
          title: "快速询价表单",
          subtitle: "提交您的采购需求，我们将在24小时内回复",
          fields: {
            name: "您的姓名",
            company: "公司名称",
            email: "电子邮箱",
            phone: "联系电话",
            productCategory: "产品类别",
            description: "采购详情",
            submit: "提交询价",
            submitting: "提交中...",
            success: "感谢您的询价！我们将尽快与您联系。"
          },
          categories: [
            "集成电路 (IC)",
            "无源器件",
            "分立器件",
            "机电元件",
            "其他"
          ]
        }
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
          <div className="flex items-center gap-3">
            <img 
              src="/manus-storage/a8c0c037915bcad3b8d62ce846b9fef2_4515eb52.jpg" 
              alt="Junqiang Electronics Logo" 
              className="h-10 w-auto"
            />
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
            className="px-3 py-2 rounded-lg bg-accent/10 text-accent hover:bg-accent/20 transition-colors font-semibold text-sm flex items-center gap-1"
            title={language === "en" ? "切换到中文" : "Switch to English"}
          >
            {language === "en" ? (
              <>
                <span>EN</span>
                <span className="text-xs opacity-60">|</span>
                <span className="opacity-60">中文</span>
              </>
            ) : (
              <>
                <span className="opacity-60">EN</span>
                <span className="text-xs opacity-60">|</span>
                <span>中文</span>
              </>
            )}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[600px] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://d2xsxph8kpxj0f.cloudfront.net/310419663032166958/K2fXVoNC4ffPac84a64vSx/hero-banner-v2-icGWXPRJGhec3VvEymnRJR.webp')",
            backgroundAttachment: "fixed"
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-transparent"></div>
        </div>
        
        <div className="relative h-full container flex flex-col justify-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
              {t.hero.title}
            </h1>
            <p className="text-xl text-white/90 mb-6">{t.hero.subtitle}</p>
            <p className="text-lg text-white/80 mb-8">{t.hero.description}</p>
            <button className="inline-flex items-center gap-2 px-8 py-3 bg-accent text-primary font-semibold rounded-lg hover:bg-accent/90 transition-all transform hover:scale-105">
              {t.hero.cta}
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">{t.achievements.title}</h2>
            <p className="text-xl text-foreground/70">{t.achievements.subtitle}</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {t.achievements.stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div key={idx} className="text-center p-6 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow">
                  <Icon className="w-12 h-12 text-accent mx-auto mb-4" />
                  <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-foreground/70">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Strengths Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container">
          <h2 className="text-4xl font-bold text-primary mb-12 text-center">{t.strengths.title}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {t.strengths.items.map((item, idx) => {
              const Icon = item.icon;
              return (
                <Card key={idx} className="p-8 hover:shadow-lg transition-shadow border-0 bg-gradient-to-br from-white to-blue-50">
                  <Icon className="w-12 h-12 text-accent mb-4" />
                  <h3 className="text-xl font-bold text-primary mb-3">{item.title}</h3>
                  <p className="text-foreground/70">{item.desc}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "url('https://d2xsxph8kpxj0f.cloudfront.net/310419663032166958/K2fXVoNC4ffPac84a64vSx/products-showcase-bg-kngDXPYwjmhMfRuKQdh5rH.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        ></div>
        
        <div className="container relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">{t.products.title}</h2>
            <p className="text-xl text-foreground/70">{t.products.subtitle}</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.products.items.map((item, idx) => (
              <Card key={idx} className="p-6 hover:shadow-lg transition-all hover:border-accent border-2 border-transparent">
                <h3 className="text-lg font-bold text-primary mb-2">{item.title}</h3>
                <p className="text-foreground/70 text-sm">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 bg-white">
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "url('https://d2xsxph8kpxj0f.cloudfront.net/310419663032166958/K2fXVoNC4ffPac84a64vSx/solutions-section-bg-d8crTHY56kGi5RpHvzBp3o.webp')",
            backgroundSize: "cover"
          }}
        ></div>
        
        <div className="container relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">{t.solutions.title}</h2>
            <p className="text-xl text-foreground/70">{t.solutions.subtitle}</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {t.solutions.items.map((item, idx) => (
              <div key={idx} className="p-8 rounded-lg bg-gradient-to-br from-primary/5 to-accent/5 border-l-4 border-accent hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-primary mb-3">{item.title}</h3>
                <p className="text-foreground/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container">
          <h2 className="text-4xl font-bold text-primary mb-12 text-center">{t.services.title}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {t.services.items.map((item, idx) => {
              const Icon = item.icon;
              return (
                <Card key={idx} className="p-8 border-0 bg-white shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex gap-4">
                    <Icon className="w-10 h-10 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-bold text-primary mb-2">{item.title}</h3>
                      <p className="text-foreground/70">{item.desc}</p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Value-Added Services Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">{t.valueAdded.title}</h2>
            <p className="text-xl text-foreground/70">{t.valueAdded.subtitle}</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.valueAdded.items.map((item, idx) => {
              const Icon = item.icon;
              return (
                <Card key={idx} className="p-6 text-center hover:shadow-lg transition-shadow border-0 bg-gradient-to-br from-white to-blue-50">
                  <Icon className="w-12 h-12 text-accent mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-primary mb-2">{item.title}</h3>
                  <p className="text-foreground/70 text-sm">{item.desc}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "url('https://d2xsxph8kpxj0f.cloudfront.net/310419663032166958/K2fXVoNC4ffPac84a64vSx/team-expertise-bg-FXdZZMvByE96DdZAWtpWQb.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        ></div>
        
        <div className="container relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">{t.expertise.title}</h2>
            <p className="text-xl text-foreground/70">{t.expertise.subtitle}</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {t.expertise.highlights.map((highlight, idx) => (
              <div key={idx} className="text-center p-8 bg-white rounded-lg shadow-sm">
                <div className="text-4xl font-bold text-accent mb-2">{highlight.number}</div>
                <div className="text-foreground/70">{highlight.label}</div>
              </div>
            ))}
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.expertise.values.map((value, idx) => {
              const Icon = value.icon;
              return (
                <Card key={idx} className="p-6 text-center hover:shadow-lg transition-shadow border-0 bg-white">
                  <Icon className="w-12 h-12 text-accent mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-primary mb-2">{value.title}</h3>
                  <p className="text-foreground/70 text-sm">{value.desc}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">{t.partnership.title}</h2>
            <p className="text-xl text-foreground/70">{t.partnership.subtitle}</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {t.partnership.items.map((item, idx) => (
              <Card key={idx} className="p-8 border-l-4 border-accent hover:shadow-lg transition-shadow bg-gradient-to-br from-white to-blue-50">
                <h3 className="text-xl font-bold text-primary mb-3">{item.title}</h3>
                <p className="text-foreground/70">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">{t.contact.title}</h2>
            <p className="text-xl text-foreground/70">{t.contact.subtitle}</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-primary mb-8">{language === "en" ? "Contact Information" : "联系信息"}</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-primary mb-2">📍 {language === "en" ? "Address" : "地址"}</h4>
                  <p className="text-foreground/70">{t.contact.address}</p>
                </div>
                
                <div>
                  <h4 className="font-bold text-primary mb-2">📞 {language === "en" ? "Phone" : "电话"}</h4>
                  <p className="text-foreground/70">{t.contact.phone}</p>
                </div>
                
                <div>
                  <h4 className="font-bold text-primary mb-2">📠 {language === "en" ? "Fax" : "传真"}</h4>
                  <p className="text-foreground/70">{t.contact.fax}</p>
                </div>
                
                <div>
                  <h4 className="font-bold text-primary mb-2">📮 {language === "en" ? "Postal Code" : "邮编"}</h4>
                  <p className="text-foreground/70">{t.contact.postal}</p>
                </div>
              </div>
            </div>
            
            {/* Inquiry Form */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-primary mb-2">{t.contact.form.title}</h3>
              <p className="text-foreground/70 mb-8">{t.contact.form.subtitle}</p>
              
              {submitSuccess ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <CheckCircle className="w-16 h-16 text-accent mb-4" />
                  <p className="text-lg font-semibold text-primary mb-2">{t.contact.form.fields.success}</p>
                  <button
                    onClick={() => {
                      setSubmitSuccess(false);
                      setFormData({ name: "", company: "", email: "", phone: "", productCategory: "", description: "" });
                    }}
                    className="text-accent hover:text-primary transition-colors mt-4"
                  >
                    {language === "en" ? "Submit Another Inquiry" : "提交新询价"}
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setIsSubmitting(true);
                    // Simulate form submission
                    setTimeout(() => {
                      setIsSubmitting(false);
                      setSubmitSuccess(true);
                      toast.success(t.contact.form.fields.success);
                    }, 1500);
                  }}
                  className="space-y-4"
                >
                  <div>
                    <label className="block text-sm font-semibold text-primary mb-2">{t.contact.form.fields.name}</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                      placeholder={t.contact.form.fields.name}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-primary mb-2">{t.contact.form.fields.company}</label>
                    <input
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                      placeholder={t.contact.form.fields.company}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-primary mb-2">{t.contact.form.fields.email}</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                      placeholder={t.contact.form.fields.email}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-primary mb-2">{t.contact.form.fields.phone}</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                      placeholder={t.contact.form.fields.phone}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-primary mb-2">{t.contact.form.fields.productCategory}</label>
                    <select
                      required
                      value={formData.productCategory}
                      onChange={(e) => setFormData({ ...formData, productCategory: e.target.value })}
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent bg-white"
                    >
                      <option value="">{language === "en" ? "Select a category" : "选择产品类别"}</option>
                      {t.contact.form.categories.map((cat, idx) => (
                        <option key={idx} value={cat}>{cat}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-primary mb-2">{t.contact.form.fields.description}</label>
                    <textarea
                      required
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      rows={4}
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent resize-none"
                      placeholder={t.contact.form.fields.description}
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-6 py-3 bg-accent text-primary font-semibold rounded-lg hover:bg-accent/90 transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
                        {t.contact.form.fields.submitting}
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        {t.contact.form.fields.submit}
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-12">
        <div className="container">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">{t.footer.tagline}</h3>
            <p className="text-white/80">{t.footer.dedication}</p>
          </div>
          
          <div className="border-t border-white/20 pt-8 text-center text-white/70">
            <p>&copy; 2024 Shenzhen Junqiang Electronics Co., Ltd. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
