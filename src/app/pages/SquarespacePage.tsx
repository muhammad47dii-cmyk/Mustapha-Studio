import { motion } from "motion/react";
import { Palette, Image, Layout, Award, Eye, Heart, ArrowRight, CheckCircle } from "lucide-react";
import { ShoppingCart, BarChart, Smartphone } from "lucide-react";

export function SquarespacePage() {
  const features = [
  {
    icon: <Layout className="w-6 h-6" />,
    title: "Service Business Websites",
    description: "Perfect for agencies, consultants, coaches, and local businesses",
  },
  {
    icon: <Image className="w-6 h-6" />,
    title: "Portfolio & Personal Brands",
    description: "Showcase your work with clean, modern, high-impact layouts",
  },
  {
    icon: <ShoppingCart className="w-6 h-6" />,
    title: "E-commerce Ready",
    description: "Sell products, services, or digital offers directly on your site",
  },
  {
    icon: <Palette className="w-6 h-6" />,
    title: "Custom Design & Branding",
    description: "Fully tailored design to match your brand identity",
  },
  {
    icon: <BarChart className="w-6 h-6" />,
    title: "Conversion-Focused Layouts",
    description: "Designed to turn visitors into leads and paying clients",
  },
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: "Mobile Optimized",
    description: "Seamless experience across all devices",
  },
];

  const pricing = [
    {
      name: "Starter Website",
      price: "$199",
      description: "Perfect for new businesses, personal brands, or service providers",
      features: [
        "Up to 5 pages",
        "Portfolio gallery",
        "Mobile-responsive design",
        "Custom fonts & colors",
        "Contact form",
        "48-hour delivery",
      ],
    },
    {
      name: "Business Website",
      price: "$399",
      description: "Ideal for growing businesses that need a professional online presence",
      features: [
        "Up to 12 pages",
        "Advanced gallery layouts",
        "Custom animations",
        "Blog integration",
        "Client testimonials",
        "SEO optimization",
        "72-hour delivery",
      ],
      popular: true,
    },
    {
      name: "Premium Website",
      price: "$599",
      description: "For brands that want a high-end, fully customized website",
      features: [
        "Unlimited pages",
        "Fully custom design",
        "Video integration",
        "E-commerce features",
        "Member areas",
        "Advanced integrations",
        "Priority support",
      ],
    },
  ];

 const showcases = [
  {
    title: "Brevis Consulting",
    category: "Consulting Firm",
    image: "https://media.istockphoto.com/id/1413761479/photo/mature-couple-meeting-financial-advisor-for-investment.jpg?s=612x612&w=0&k=20&c=kKraGQ3d_90VsQVIwAx6mi3gNsiytiLT9jlEbmEh1lE=",
    url: "https://brevisconsulting.com",
  },
  {
    title: "ALW Studios",
    category: "Creative Studio",
    image: "https://media.istockphoto.com/id/1304287268/photo/studio-of-successful-artist.jpg?s=612x612&w=0&k=20&c=o1xN605yJnQxs7bzR2GwHhuqbLn_ph2oWDtV5oAMO5w=",
    url: "https://alwstudios.com",
  },
  {
    title: "The Lynn House",
    category: "Hospitality / Nonprofit",
    image: "https://media.istockphoto.com/id/1727988638/photo/community-services-young-team-of-people-helping-the-local-community.jpg?s=612x612&w=0&k=20&c=o_fpxdFrLExWud5ZEFKn94iq48Tn3Zhn34nSXzFchX0=",
    url: "https://www.thelynnhouse.org",
  },
  {
    title: "Vernon Staffing",
    category: "Recruitment Agency",
    image: "https://media.istockphoto.com/id/1907187799/photo/business-people-waiting-for-job-interview.jpg?s=612x612&w=0&k=20&c=4_FHZ1PP702O3eUAASOUCqKduZeTaGJvlcj-RPdidJY=",
    url: "https://www.vernonstaffing.com",
  },
  {
    title: "Pestrol",
    category: "Pest Control Agency",
    image: "https://media.istockphoto.com/id/1257975523/video/an-asian-chinese-female-farmer-with-protective-suit-spraying-on-bitter-groud-plants-in-the.avif?s=640x640&k=20&c=4Ke-Kkb13OV4u7EVGxGb9sBON1Q9sXCbQIbiUKhunlE=",
    url: "https://www.pestrol.com",
  },
  {
    title: "Oregon Care Home Council",
    category: "Adult Care Association",
    image: "https://media.istockphoto.com/id/602320994/photo/tea-and-cake-in-the-care-home.jpg?s=612x612&w=0&k=20&c=F55-2g0hwqaqg-VmlZxO9j-Zv1Jd_kfgPWS5AjEX1OM=",
    url: "https://www.oregoncarehomecouncil.com",
  },
  {
    title: "Healthy Lens Media",
    category: "A Media Company",
    image: "https://media.istockphoto.com/id/626071554/photo/film-crew.jpg?s=612x612&w=0&k=20&c=oWjru7tkCF3cfShi7648iKlU2SI_0xw0a0PnQWyTuYQ=",
    url: "https://www.healthylensmedia.com",
  },
  {
    title: "Gold Maple Group",
    category: "Business Consulting",
    image: "https://media.istockphoto.com/id/1927881398/photo/group-of-business-persons-talking-in-the-office.jpg?s=612x612&w=0&k=20&c=N0erlm9rQIa_kdBpwxSOa8E1my9bwY_oeN84wZIhais=",
    url: "https://www.goldmaplegroup.com",
  },
  {
    title: "Good Office BSG GmbH",
    category: "Corporate Business",
    image: "https://media.istockphoto.com/id/2198078409/photo/woman-lawyer-and-tablet-at-meeting-with-team-planning-and-discussion-for-review-for-legal.jpg?s=612x612&w=0&k=20&c=RtxJFQvIa_udlrP3mX93GbAEcOmHwNbc905TX0zboIg=",
    url: "https://www.goodofficebsgmbh.de",
  },
];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center bg-gradient-to-br from-amber-50 via-white to-rose-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-block px-4 py-2 bg-amber-100 text-amber-700 rounded-full text-sm font-semibold mb-6">
                ✨ Squarespace Design
              </div>
 <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
  High-Converting Squarespace Websites for Any Business
</h1>

<p className="text-xl text-gray-600 mb-8 max-w-2xl">
  We design professional Squarespace websites for service businesses, brands, portfolios, and online stores — built to attract clients, build trust, and drive results.
</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.a
                  href="https://wa.me/447877406516"
                  className="px-8 py-4 bg-amber-600 text-white rounded-full font-semibold text-lg inline-flex items-center justify-center gap-2 hover:bg-amber-700 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Start Your Website
                  <ArrowRight className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="#pricing"
                  className="px-8 py-4 bg-white text-gray-900 rounded-full font-semibold text-lg border-2 border-gray-200 inline-flex items-center justify-center hover:border-gray-300 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Pricing
                </motion.a>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <img
                src="https://cdn.dribbble.com/userupload/47461556/file/fe5fcceb82f859b8714c1b7e72859110.png?resize=1504x1128&vertical=center"
                alt="Squarespace website design"
                className="rounded-3xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
<h2>
  Everything You Need to Launch & Grow Online
</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Every detail crafted to perfection
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 bg-gradient-to-br from-amber-50 to-white rounded-2xl border border-amber-100"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-amber-600 text-white rounded-xl mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Showcase Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Websites We've Built
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
From services businesses to brands and portfolios            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {showcases.map((showcase, index) => (
  <a
    key={showcase.title}
    href={showcase.url}
    target="_blank"
    rel="noopener noreferrer"
    className="block group"
  >
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow"
      whileHover={{ y: -8 }}
    >
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={showcase.image}
          alt={showcase.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center pointer-events-none">
          <span className="text-white font-semibold text-sm tracking-wide">
            Visit Website →
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900">
          {showcase.title}
        </h3>
      </div>
    </motion.div>
  </a>
))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Our Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Premium design at transparent pricing
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative p-8 rounded-3xl ${
                  plan.popular
                    ? "bg-gradient-to-br from-amber-600 to-rose-600 text-white"
                    : "bg-white border-2 border-gray-200"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-yellow-400 text-gray-900 rounded-full text-sm font-bold">
                    Most Popular
                  </div>
                )}
                <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? "text-white" : "text-gray-900"}`}>
                  {plan.name}
                </h3>
                <p className={`mb-6 ${plan.popular ? "text-amber-100" : "text-gray-600"}`}>
                  {plan.description}
                </p>
                <div className="mb-6">
                  <span className={`text-5xl font-bold ${plan.popular ? "text-white" : "text-gray-900"}`}>
                    {plan.price}
                  </span>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <CheckCircle className={`w-5 h-5 mt-0.5 flex-shrink-0 ${plan.popular ? "text-white" : "text-amber-600"}`} />
                      <span className={plan.popular ? "text-amber-50" : "text-gray-600"}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <motion.a
                  href="https://wa.me/447877406516"
                  className={`block w-full px-6 py-3 rounded-full font-semibold text-center transition-colors ${
                    plan.popular
                      ? "bg-white text-amber-600 hover:bg-gray-100"
                      : "bg-amber-600 text-white hover:bg-amber-700"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Started
                </motion.a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-amber-600 to-rose-600 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
  Ready to Launch Your Squarespace Website?
</h2>

<p className="text-xl mb-8 text-amber-100 max-w-2xl mx-auto">
  Whether you're a business, brand, or creative, we’ll build a website that gets you clients and results.
</p>
            <motion.a
              href="https://wa.me/447877406516"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-amber-600 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us on WhatsApp
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
