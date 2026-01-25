import Image from 'next/image';
import Link from 'next/link';
import { FaCheck, FaDumbbell, FaLaptop, FaUsers } from 'react-icons/fa';

export const metadata = {
  title: 'Coaching Services & Pricing | Chi-Rho Power & Strength',
  description: 'Expert strength coaching for beginners and intermediate lifters. Online and in-person options available in Toledo, OH.',
};

export default function CoachingServices() {
  const onlinePackages = [
    {
      name: 'Foundation Program',
      tagline: 'For Self-Motivated Lifters',
      price: '$97',
      period: '/month',
      description: 'Perfect for experienced beginners who need solid programming but can handle execution on their own.',
      features: [
        'Custom training program based on detailed assessment',
        'Monthly program updates',
        'Email support (48-hour response)',
        'Monthly progress review and adjustments'
      ],
      notIncluded: [
        'Real-time form checks',
        'Frequent communication',
        'Nutrition guidance'
      ],
      cta: 'Get Started',
      href: '/contact?service=foundation',
      popular: false
    },
    {
      name: 'Strength Athlete Coaching',
      tagline: 'Most Popular',
      price: '$247',
      period: '/month',
      description: 'Comprehensive coaching for serious lifters who want expert guidance and accountability.',
      features: [
        'Everything in Foundation Program',
        'Weekly check-ins via discord',
        'Form check video analysis (up to 3 videos/week)',
        'Program adjustments based on your performance',
        'Direct messaging support',
        'Bi-weekly accountability calls (15 minutes)',
        'Basic nutrition framework (macros, meal timing)',
        'Access to "Shut Up and Lift" resources'
      ],
      guarantee: 'See measurable strength gains in first 8 weeks',
      cta: 'Start Coaching',
      href: '/contact?service=strength-athlete',
      popular: true
    },
    {
      name: 'Elite Performance Coaching',
      tagline: 'Premium Service',
      price: '$447',
      period: '/month',
      description: 'White-glove service for competitive lifters and those pursuing elite strength.',
      features: [
        'Everything in Strength Athlete Coaching',
        'Bi-weekly video coaching calls (30 minutes)',
        'Unlimited form check reviews (48-hour turnaround)',
        'Daily messaging access via private channel',
        'Comprehensive nutrition coaching with meal planning',
        'Competition prep and attempt selection',
        'Quarterly in-depth program design sessions',
        'Priority support - same-day responses'
      ],
      bonus: 'Free copy of "Shut Up and Lift" + training journal',
      cta: 'Apply Now',
      href: '/contact?service=elite',
      popular: false
    }
  ];

  const inPersonOptions = [
    {
      name: 'Single Session',
      price: '$75',
      period: '/session',
      duration: '60 minutes',
      description: 'Perfect for technique refinement or getting started.'
    },
    {
      name: '4-Session Package',
      price: '$280',
      period: 'total',
      savings: 'Save $20',
      pricePerSession: '$70/session',
      description: 'Build consistency with weekly training.'
    },
    {
      name: '10-Session Package',
      price: '$650',
      period: 'total',
      savings: 'Save $100',
      pricePerSession: '$65/session',
      description: 'Best value for serious commitment.',
      popular: true
    }
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-yellow-400">
            Coaching Services & Pricing
          </h1>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Whether you're in Toledo or training remotely, I offer coaching that cuts through the garbage and focuses on what actually builds strength.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#online-coaching"
              className="inline-block bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-8 rounded-lg transition duration-200"
            >
              View Online Coaching
            </a>
            <a 
              href="#in-person-training"
              className="inline-block bg-transparent border-2 border-yellow-500 hover:bg-yellow-500 hover:text-gray-900 text-yellow-500 font-bold py-3 px-8 rounded-lg transition duration-200"
            >
              View In-Person Training
            </a>
          </div>
        </div>
      </section>

      {/* Online Coaching Section */}
      <section id="online-coaching" className="py-16 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-500/10 rounded-full mb-4">
              <FaLaptop className="w-8 h-8 text-yellow-500" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-4">
              Online Strength Coaching
            </h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Train anywhere with expert programming and accountability
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {onlinePackages.map((pkg, index) => (
              <div 
                key={index}
                className={`bg-gray-900 rounded-xl overflow-hidden border-2 ${
                  pkg.popular ? 'border-yellow-500' : 'border-gray-800'
                } hover:border-yellow-500/50 transition-all relative`}
              >
                {pkg.popular && (
                  <div className="absolute top-0 right-0 bg-yellow-500 text-gray-900 font-bold px-4 py-1 text-sm">
                    MOST POPULAR
                  </div>
                )}
                
                <div className="p-6 border-b border-gray-800">
                  <h3 className="text-2xl font-bold text-white mb-1">{pkg.name}</h3>
                  <p className="text-yellow-400 text-sm mb-4">{pkg.tagline}</p>
                  <div className="flex items-baseline mb-2">
                    <span className="text-4xl font-bold text-yellow-500">{pkg.price}</span>
                    <span className="text-gray-400 ml-2">{pkg.period}</span>
                  </div>
                  <p className="text-gray-300 text-sm">{pkg.description}</p>
                </div>

                <div className="p-6">
                  <h4 className="font-semibold text-white mb-4">What's Included:</h4>
                  <ul className="space-y-3 mb-6">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start text-sm">
                        <FaCheck className="w-4 h-4 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {pkg.notIncluded && (
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-400 mb-3 text-sm">Not Included:</h4>
                      <ul className="space-y-2">
                        {pkg.notIncluded.map((item, i) => (
                          <li key={i} className="flex items-start text-sm">
                            <span className="text-gray-600 mr-2">✗</span>
                            <span className="text-gray-500">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {pkg.guarantee && (
                    <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-3 mb-4">
                      <p className="text-yellow-400 text-xs font-semibold">✓ GUARANTEE</p>
                      <p className="text-gray-300 text-sm">{pkg.guarantee}</p>
                    </div>
                  )}

                  {pkg.bonus && (
                    <div className="bg-gray-800/50 rounded-lg p-3 mb-4">
                      <p className="text-yellow-400 text-xs font-semibold">🎁 BONUS</p>
                      <p className="text-gray-300 text-sm">{pkg.bonus}</p>
                    </div>
                  )}

                  <Link
                    href={pkg.href}
                    className={`block w-full text-center font-bold py-3 px-6 rounded-lg transition duration-200 ${
                      pkg.popular
                        ? 'bg-yellow-500 hover:bg-yellow-600 text-gray-900'
                        : 'bg-gray-800 hover:bg-gray-700 text-white'
                    }`}
                  >
                    {pkg.cta}
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Hybrid Coaching Callout */}
          <div className="bg-gradient-to-r from-yellow-500/10 to-yellow-500/5 rounded-xl p-8 border border-yellow-500/20 mb-8">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-2xl font-bold text-yellow-400 mb-3">
                🏆 Hybrid Coaching (Toledo Area Only)
              </h3>
              <p className="text-xl text-white mb-4">$497/month</p>
              <p className="text-gray-300 mb-6">
                Everything in Elite Performance Coaching PLUS 2 in-person sessions per month (60 minutes each). 
                Real-time coaching on competition lifts, in-person movement assessment, and technique refinement.
              </p>
              <p className="text-yellow-400 font-semibold mb-4">Limited to 5 clients maximum</p>
              <Link
                href="/contact?service=hybrid"
                className="inline-block bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-8 rounded-lg transition duration-200"
              >
                Apply for Hybrid Coaching
              </Link>
            </div>
          </div>

          {/* Special Offers */}
          <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
            <h3 className="text-xl font-bold text-yellow-400 mb-4">Special Offers</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-gray-800/50 p-4 rounded-lg">
                <p className="text-yellow-400 font-semibold mb-2">📚 Book Buyer Discount</p>
                <p className="text-gray-300 text-sm">Show proof of "Shut Up and Lift" purchase → 15% off first month</p>
              </div>
              <div className="bg-gray-800/50 p-4 rounded-lg">
                <p className="text-yellow-400 font-semibold mb-2">🤝 Referral Bonus</p>
                <p className="text-gray-300 text-sm">Refer a client → $50 credit. They get $25 off first month</p>
              </div>
              <div className="bg-gray-800/50 p-4 rounded-lg">
                <p className="text-yellow-400 font-semibold mb-2">💰 Multi-Month Discount</p>
                <p className="text-gray-300 text-sm">Pay upfront: 3 months = 5% off | 6 months = 10% off | 12 months = 15% off</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* In-Person Training Section */}
      <section id="in-person-training" className="py-16 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-500/10 rounded-full mb-4">
              <FaDumbbell className="w-8 h-8 text-yellow-500" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-4">
              In-Person Training (Toledo Area)
            </h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Hands-on strength coaching. Perfect your squat, bench, and deadlift with expert technique guidance.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {inPersonOptions.map((option, index) => (
              <div 
                key={index}
                className={`bg-black rounded-xl p-6 border-2 ${
                  option.popular ? 'border-yellow-500' : 'border-gray-800'
                } hover:border-yellow-500/50 transition-all relative`}
              >
                {option.popular && (
                  <div className="absolute top-0 right-0 bg-yellow-500 text-gray-900 font-bold px-4 py-1 text-sm">
                    BEST VALUE
                  </div>
                )}
                
                <h3 className="text-2xl font-bold text-white mb-2">{option.name}</h3>
                {option.duration && (
                  <p className="text-gray-400 text-sm mb-4">{option.duration}</p>
                )}
                
                <div className="flex items-baseline mb-2">
                  <span className="text-4xl font-bold text-yellow-500">{option.price}</span>
                  <span className="text-gray-400 ml-2">{option.period}</span>
                </div>
                
                {option.savings && (
                  <p className="text-yellow-400 font-semibold mb-2">{option.savings}</p>
                )}
                {option.pricePerSession && (
                  <p className="text-gray-400 text-sm mb-4">{option.pricePerSession}</p>
                )}
                
                <p className="text-gray-300 mb-6">{option.description}</p>
                
                <Link
                  href="/contact?service=in-person"
                  className={`block w-full text-center font-bold py-3 px-6 rounded-lg transition duration-200 ${
                    option.popular
                      ? 'bg-yellow-500 hover:bg-yellow-600 text-gray-900'
                      : 'bg-gray-800 hover:bg-gray-700 text-white'
                  }`}
                >
                  Book Sessions
                </Link>
              </div>
            ))}
          </div>

          {/* What's Included in Sessions */}
          <div className="bg-black rounded-xl p-8 border border-gray-800">
            <h3 className="text-2xl font-bold text-yellow-400 mb-6 text-center">
              What's Included in Every Session
            </h3>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {[
                'Personalized strength training focused on your goals',
                'Hands-on technique coaching for compound lifts',
                'Program design and progression strategy',
                'Exercise selection based on your biomechanics',
                'Training log review and planning',
                'Real-time form corrections and cues'
              ].map((item, i) => (
                <div key={i} className="flex items-start">
                  <FaCheck className="w-5 h-5 text-yellow-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Semi-Private Training */}
          <div className="mt-8 bg-gradient-to-r from-gray-800 to-black rounded-xl p-8 border border-gray-700">
            <h3 className="text-2xl font-bold text-yellow-400 mb-4">Semi-Private Training</h3>
            <p className="text-gray-300 mb-4">
              Train with 1-2 partners and split the cost while still getting individual attention.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-gray-900/50 p-4 rounded-lg">
                <p className="text-yellow-400 font-semibold mb-2">2 People</p>
                <p className="text-2xl font-bold text-white">$50<span className="text-gray-400 text-base">/person/session</span></p>
                <p className="text-gray-400 text-sm">4 sessions: $190/person | 8 sessions: $360/person</p>
              </div>
              <div className="bg-gray-900/50 p-4 rounded-lg">
                <p className="text-yellow-400 font-semibold mb-2">3 People</p>
                <p className="text-2xl font-bold text-white">$40<span className="text-gray-400 text-base">/person/session</span></p>
                <p className="text-gray-400 text-sm">4 sessions: $150/person | 8 sessions: $288/person</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Competition Prep */}
      <section className="py-16 px-4 bg-black">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-yellow-500/10 to-yellow-500/5 rounded-xl p-8 border border-yellow-500/20">
            <h2 className="text-3xl font-bold text-yellow-400 mb-4 text-center">
              Competition Prep Intensive
            </h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <div className="text-center mb-6">
              <p className="text-3xl font-bold text-white mb-2">$799 one-time</p>
              <p className="text-gray-400">8-Week Powerlifting Meet Preparation</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="font-semibold text-yellow-400 mb-3">What's Included:</h4>
                <ul className="space-y-2">
                  {[
                    'Complete 8-week meet prep program',
                    '6 in-person coaching sessions',
                    'Weekly online check-ins',
                    'Competition lift technique refinement',
                    'Peak week strategy',
                    'Meet-day attempt selection'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start text-sm">
                      <FaCheck className="w-4 h-4 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-yellow-400 mb-3">Perfect For:</h4>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• First-time meet competitors</li>
                  <li>• Experienced lifters wanting expert prep</li>
                  <li>• Anyone seeking a total on the platform</li>
                </ul>
              </div>
            </div>
            <div className="text-center">
              <Link
                href="/contact?service=competition-prep"
                className="inline-block bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-8 rounded-lg transition duration-200"
              >
                Apply for Competition Prep
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-16 px-4 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-yellow-400 mb-8 text-center">Common Questions</h2>
          <div className="space-y-4 mb-8">
            {[
              {
                q: "I'm a beginner. Which package should I choose?",
                a: "Foundation Program works for experienced beginners (6+ months of consistent training). True beginners in Toledo should start with in-person sessions. Remote beginners can start with Foundation and upgrade as needed."
              },
              {
                q: "Can I switch packages?",
                a: "Yes. You can upgrade anytime (effective immediately). Downgrading is available at the end of your current billing cycle."
              },
              {
                q: "What's your refund policy?",
                a: "First month is risk-free. If you're not satisfied within 30 days, you get a full refund, no questions asked. After that, coaching is month-to-month with 30-day notice to cancel."
              }
            ].map((faq, i) => (
              <div key={i} className="bg-black rounded-lg p-6 border border-gray-800">
                <h3 className="font-bold text-white mb-2">{faq.q}</h3>
                <p className="text-gray-300 text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link 
              href="/faq"
              className="text-yellow-400 hover:text-yellow-300 font-semibold"
            >
              View All FAQs →
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-4 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Strong?
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 mb-8">
            Limited coaching spots available. Apply now to see if we're a good fit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-4 px-8 rounded-lg transition duration-200 shadow-lg hover:shadow-xl hover:scale-105 transform"
            >
              Apply for Coaching
            </Link>
            <Link
              href="/contact?service=consultation"
              className="inline-block bg-transparent border-2 border-yellow-500 hover:bg-yellow-500 hover:text-gray-900 text-yellow-500 font-bold py-4 px-8 rounded-lg transition duration-200"
            >
              Schedule Free Consultation
            </Link>
          </div>
          <p className="text-gray-400 text-sm mt-6">
            No pressure. No hard sell. Let's just talk about your goals and see if I can help.
          </p>
        </div>
      </section>
    </main>
  );
}