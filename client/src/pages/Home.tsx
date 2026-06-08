import { ChevronRight, Globe, Package, Zap, Users, Shield, Truck, Headphones, Award, TrendingUp, CheckCircle2, Send, CheckCircle, MessageSquare, Phone, Qq, Wechat, Whatsapp } from "lucide-react";
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
name: "", company: "", email: "", phone: "", productCategory: "", description: ""
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
social: {
qq: "81573042", // 仅QQ号
wechat: "wxid_qnwqgqyudqt022", // 仅微信号
whatsapp: "+8613652418132" // 仅WhatsApp号码，不带空格
},
form: {
title: "Quick Inquiry Form",
subtitle: "Submit your procurement needs and we\"ll respond within 24 hours",
fields: {
name: "Your Name", company: "Company Name", email: "Email Address", phone: "Phone Number", productCategory: "Product Category", description: "Procurement Details", submit: "Submit Inquiry", submitting: "Submitting...", success: "Thank you! We\"ll contact you soon."
},
categories: ["Integrated Circuits (IC)", "Passive Components", "Discrete Components", "Electromechanical", "Other"]
}
},
footer: { tagline: "Global Electronic Components One-Stop Service Expert", dedication: "Dedicated to Creating More Value for You" }
},
zh: {
nav: { about: "关于我们", products: "产品中心", services: "核心服务", contact: "联系我们", cn: "English" },
hero: {
title: "全球电子元器件一站式服务专家",
subtitle: "致力于为您创造更多价值",
cta: "立即开始",
description: "深圳市骏强电子有限公司 - 您值得信赖的全球电子元器件综合解决方案合作伙伴"
},
contact: {
title: "联系我们",
subtitle: "期待与您合作，共创美好未来",
address: "深圳市福田区华强北路与振兴路交界处东方时代广场B座23楼2302室",
phone: "+86-0755-83772829",
fax: "+86-0755-83772680",
postal: "518031",
social: {
qq: "81573042",
wechat: "wxid_qnwqgqyudqt022",
whatsapp: "+8613652418132"
},
form: {
title: "快速询价表单",
subtitle: "提交您的采购需求，我们将在24小时内回复",
fields: {
name: "您的姓名", company: "公司名称", email: "电子邮箱", phone: "联系电话", productCategory: "产品类别", description: "采购详情", submit: "提交询价", submitting: "提交中...", success: "感谢您的询价！我们将尽快与您联系。"
},
categories: ["集成电路 (IC)", "无源器件", "分立器件", "机电元件", "其他"]
}
},
footer: { tagline: "全球电子元器件一站式服务专家", dedication: "致力于为您创造更多价值" }
}
};

const t = content[language];

const handleSubmit = async (e: React.FormEvent) => {
e.preventDefault();
setIsSubmitting(true);

// Simulate API call
await new Promise(resolve => setTimeout(resolve, 1500));

setIsSubmitting(false);
setSubmitSuccess(true);
toast.success(t.contact.form.fields.success);
};

const copyToClipboard = (text: string, message: string) => {
navigator.clipboard.writeText(text).then(() => {
toast.success(message);
}).catch(err => {
console.error("Failed to copy: ", err);
toast.error("复制失败，请手动复制。");
});
};

return (
<div className="min-h-screen bg-white">
{/* Navigation */}
<nav className="sticky top-0 z-50 bg-white shadow-sm">
<div className="container flex items-center justify-between py-4">
<div className="flex items-center gap-3">
<img
src="/logo.png"
alt="Logo"
className="h-10 w-auto"
onError={(e) => {
// Fallback if logo fails to load
e.currentTarget.style.display = 'none';
}}
/>
<span className="font-bold text-primary text-lg">SZJQDZ</span>
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
<section className="relative py-24 overflow-hidden bg-primary text-white">
<div className="absolute inset-0 opacity-10">
<div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80' )] bg-cover bg-center"></div>
</div>
<div className="container relative">
<div className="max-w-3xl">
<h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
{t.hero.title}
</h1>
<p className="text-xl mb-8 text-white/80 leading-relaxed">
{t.hero.description}
</p>
<div className="flex flex-wrap gap-4">
<a
href="#contact"
className="px-8 py-4 bg-accent text-primary font-bold rounded-lg hover:bg-accent/90 transition-all transform hover:scale-105"
>
{t.hero.cta}
</a>
<a
href="#products"
className="px-8 py-4 border-2 border-white/30 font-bold rounded-lg hover:bg-white/10 transition-all"
>
{t.nav.products}
</a>
</div>
</div>
</div>
</section>

{/* Achievements Section */}
<section className="py-20 bg-blue-50">
<div className="container">
<div className="text-center mb-16">
<h2 className="text-4xl font-bold text-primary mb-4">{t.achievements.title}</h2>
<p className="text-xl text-foreground/70">{t.achievements.subtitle}</p>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
{t.achievements.stats.map((stat, idx) => (
<div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-blue-100 text-center hover:shadow-md transition-shadow">
<div className="inline-flex p-3 bg-accent/10 rounded-xl mb-4">
<stat.icon className="w-8 h-8 text-accent" />
</div>
<div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
<div className="text-sm font-semibold text-foreground/60 uppercase tracking-wider">{stat.label}</div>
</div>
))}
</div>
</div>
</section>

{/* Strengths Section */}
<section id="about" className="py-24">
<div className="container">
<div className="text-center mb-16">
<h2 className="text-4xl font-bold text-primary mb-4">{t.strengths.title}</h2>
</div>
<div className="grid md:grid-cols-3 gap-12">
{t.strengths.items.map((item, idx) => (
<div key={idx} className="group p-8 rounded-2xl border border-border hover:border-accent hover:shadow-xl transition-all duration-300">
<div className="w-14 h-14 bg-primary text-white rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<item.icon className="w-8 h-8" />
</div>
<h3 className="text-2xl font-bold text-primary mb-4">{item.title}</h3>
<p className="text-foreground/70 leading-relaxed">{item.desc}</p>
</div>
))}
</div>
</div>
</section>

{/* Products Section */}
<section id="products" className="py-24 bg-primary text-white">
<div className="container">
<div className="text-center mb-16">
<h2 className="text-4xl font-bold mb-4">{t.products.title}</h2>
<p className="text-xl text-white/70">{t.products.subtitle}</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
{t.products.items.map((item, idx) => (
<div key={idx} className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
<h3 className="text-xl font-bold mb-4 text-accent">{item.title}</h3>
<p className="text-white/70 leading-relaxed">{item.desc}</p>
</div>
))}
</div>
</div>
</section>

{/* Services Section */}
<section id="services" className="py-24">
<div className="container">
<div className="text-center mb-16">
<h2 className="text-4xl font-bold text-primary mb-4">{t.services.title}</h2>
</div>
<div className="grid md:grid-cols-2 gap-8">
{t.services.items.map((item, idx) => (
<div key={idx} className="flex gap-6 p-8 rounded-2xl bg-blue-50/50 border border-blue-100 hover:bg-blue-50 transition-colors">
<div className="shrink-0 w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center">
<item.icon className="w-6 h-6 text-accent" />
</div>
<div>
<h3 className="text-xl font-bold text-primary mb-2">{item.title}</h3>
<p className="text-foreground/70 leading-relaxed">{item.desc}</p>
</div>
</div>
))}
</div>
</div>
</section>

{/* Partnership Section */}
<section className="py-24 bg-white">
<div className="container">
<div className="text-center mb-16">
<h2 className="text-4xl font-bold text-primary mb-4">{t.partnership.title}</h2>
<p className="text-xl text-foreground/70">{t.partnership.subtitle}</p>
</div>

<div className="grid md:grid-cols-3 gap-8">
{t.partnership.items.map((item, idx) => (
<div key={idx} className="p-8 border-l-4 border-accent hover:shadow-lg transition-shadow bg-gradient-to-br from-white to-blue-50 rounded-r-2xl">
<h3 className="text-xl font-bold text-primary mb-3">{item.title}</h3>
<p className="text-foreground/70">{item.desc}</p>
</div>
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

<div className="pt-4 border-t border-border">
<h4 className="font-bold text-primary mb-4">{language === "en" ? "Social Media" : "社交媒体"}</h4>
<div className="flex flex-wrap gap-4">
{/* QQ */}
<a
href={`tencent://message/?uin=${t.contact.social.qq}`}
target="_blank"
rel="noopener noreferrer"
className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-colors"
title="QQ"
>
<Qq className="w-6 h-6" />
</a>
{/* WeChat */}
<button
onClick={() => copyToClipboard(t.contact.social.wechat, language === "en" ? "WeChat ID copied!" : "微信号已复制！")}
className="flex items-center justify-center w-12 h-12 rounded-full bg-green-500 text-white hover:bg-green-600 transition-colors"
title="WeChat (Click to copy ID)"
>
<Wechat className="w-6 h-6" />
</button>
{/* WhatsApp */}
<a
href={`https://wa.me/${t.contact.social.whatsapp}`}
target="_blank"
rel="noopener noreferrer"
className="flex items-center justify-center w-12 h-12 rounded-full bg-green-600 text-white hover:bg-green-700 transition-colors"
title="WhatsApp"
>
<Whatsapp className="w-6 h-6" />
</a>
</div>
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
onClick={( ) => {
setSubmitSuccess(false);
setFormData({ name: "", company: "", email: "", phone: "", productCategory: "", description: "" });
}}
className="text-accent font-bold hover:underline"
>
{language === "en" ? "Send another inquiry" : "发送另一条询价"}
</button>
</div>
) : (
<form onSubmit={handleSubmit} className="space-y-4">
<div className="grid grid-cols-2 gap-4">
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
<p>&copy; 2024 SZJQDZ Co., Ltd. All rights reserved.</p>
</div>
</div>
</footer>
</div>
);
}
