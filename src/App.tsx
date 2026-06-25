import { useState } from 'react'
import {
  Shield, CheckCircle2, ChevronLeft, User, Briefcase, Globe,
  Calendar, Loader2, Star, TrendingUp, Users, Award, MapPin, ArrowLeft,
  Sparkles, X, AlertCircle, Phone, PartyPopper
} from 'lucide-react'
import { supabase } from './supabaseClient'
import { jobs, nationalities } from './data'

const CPA_OFFER_URL = 'https://www.underlingmistery.wiki/?sl=6003878-5b57b&pub_click_id={External_ID_from_traffic_source}&site={subID}&pub_sub_id={sub_subID}'

interface FormData {
  fullName: string
  profession: string
  nationality: string
  age: string
}

type Step = 'form' | 'done'

export default function App() {
  const [selectedJob, setSelectedJob] = useState<string>('')
  const [showForm, setShowForm] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [step, setStep] = useState<Step>('form')
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    profession: '',
    nationality: '',
    age: '',
  })

  const handleJobSelect = (jobId: string) => {
    setSelectedJob(jobId)
    setShowForm(true)
    setStep('form')
    setTimeout(() => {
      document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' })
    }, 100)
  }

  const validate = () => {
    if (!formData.fullName.trim()) return 'الرجاء إدخال الاسم الثلاثي'
    if (!formData.profession.trim()) return 'الرجاء إدخال المهنة'
    if (!formData.nationality) return 'الرجاء اختيار الجنسية'
    if (!formData.age || parseInt(formData.age) < 18 || parseInt(formData.age) > 70)
      return 'الرجاء إدخال سن صحيح (18 - 70)'
    return ''
  }

  const handleSubmit = async () => {
    const err = validate()
    if (err) { setError(err); return }
    setError('')
    setLoading(true)
    try {
      await supabase.from('job_applications').insert({
        full_name: formData.fullName,
        profession: formData.profession,
        nationality: formData.nationality,
        age: parseInt(formData.age),
        selected_job: selectedJob,
      })
    } catch {
      // continue regardless
    }
    setLoading(false)
    setStep('done')
  }

  const selectedJobData = jobs.find((j) => j.id === selectedJob)

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white" dir="rtl">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 sm:h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 sm:w-10 sm:h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg">
              <Briefcase className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </div>
            <div>
              <h1 className="text-base sm:text-lg font-bold text-slate-800">وظائف شركات المراعي</h1>
              <p className="hidden sm:block text-xs text-slate-500">للمواطنين والمقيمين</p>
            </div>
          </div>
          <a href="#jobs" className="flex items-center gap-2 px-4 sm:px-5 py-2 bg-emerald-600 text-white rounded-lg font-semibold text-xs sm:text-sm hover:bg-emerald-700 transition-all hover:shadow-lg hover:shadow-emerald-200">
            تصفح الوظائف
            <ChevronLeft className="w-4 h-4" />
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="hero" className="relative pt-20 sm:pt-24 pb-12 sm:pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-200/30 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-teal-200/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            <div className="text-center lg:text-right animate-fade-in-up">
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6">
                <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
                أكثر من 500 وظيفة متاحة فوراً
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-slate-800 leading-tight mb-4 sm:mb-6">
                وظائف شركات
                <span className="bg-gradient-to-l from-emerald-600 to-teal-600 bg-clip-text text-transparent"> المراعي</span>
              </h1>
              <p className="text-base sm:text-lg text-slate-600 mb-6 sm:mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
                وظائف متاحة للمواطنين السعوديين والمقيمين برواتب مجزية ومزايا متكاملة.
                قدّم الآن وتم التواصل معك في أقرب وقت.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                <a href="#jobs" className="flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-l from-emerald-600 to-teal-600 text-white rounded-xl font-bold text-base sm:text-lg hover:shadow-2xl hover:shadow-emerald-300 transition-all hover:scale-105">
                  قدّم الآن
                  <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
                <a href="#features" className="flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white text-slate-700 rounded-xl font-bold text-base sm:text-lg border-2 border-slate-200 hover:border-emerald-300 transition-all hover:scale-105">
                  لماذا نحن؟
                </a>
              </div>
              <div className="grid grid-cols-3 gap-2 sm:gap-4 mt-8 sm:mt-12 max-w-md mx-auto lg:mx-0">
                {[
                  { val: '+500', label: 'وظيفة متاحة', color: 'text-emerald-600' },
                  { val: '+10K', label: 'متقدم ناجح', color: 'text-teal-600' },
                  { val: '24/7', label: 'دعم متواصل', color: 'text-cyan-600' },
                ].map((s, i) => (
                  <div key={i} className="text-center">
                    <div className={`text-2xl sm:text-3xl font-extrabold ${s.color}`}>{s.val}</div>
                    <div className="text-xs sm:text-sm text-slate-500 mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/3184465/photos/3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="وظائف شركات المراعي"
                  loading="lazy"
                  className="w-full h-[300px] sm:h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
              </div>
              <div className="hidden sm:flex absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-4 items-center gap-3 animate-float">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-800">نسبة القبول</div>
                  <div className="text-xs text-slate-500">85% من المتقدمين</div>
                </div>
              </div>
              <div className="hidden sm:flex absolute -top-6 -left-6 bg-white rounded-2xl shadow-xl p-4 items-center gap-3 animate-float" style={{ animationDelay: '1s' }}>
                <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center">
                  <Award className="w-6 h-6 text-teal-600" />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-800">توظيف مضمون</div>
                  <div className="text-xs text-slate-500">للمواطنين والمقيمين</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-800 mb-3 sm:mb-4">لماذا التقدم معنا؟</h2>
            <p className="text-slate-600 text-base sm:text-lg">نوفر لك أفضل الفرص الوظيفية في المملكة</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              { icon: Shield, title: 'توظيف موثوق', desc: 'شركات مرخصة ومعتمدة بالكامل', color: 'emerald' },
              { icon: Users, title: 'للجميع', desc: 'مواطنين سعوديين ومقيمين', color: 'blue' },
              { icon: TrendingUp, title: 'رواتب مجزية', desc: 'أجور تنافسية ومزايا متكاملة', color: 'teal' },
              { icon: MapPin, title: 'جميع المدن', desc: 'الرياض، جدة، الدمام، مكة والمزيد', color: 'amber' },
            ].map((f, i) => (
              <div key={i} className="group p-4 sm:p-6 bg-slate-50 rounded-2xl hover:bg-white hover:shadow-xl transition-all border border-slate-100 hover:border-emerald-200 cursor-default">
                <div className={`w-12 h-12 sm:w-14 sm:h-14 bg-${f.color}-100 rounded-2xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform`}>
                  <f.icon className={`w-6 h-6 sm:w-7 sm:h-7 text-${f.color}-600`} />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-800 mb-1 sm:mb-2">{f.title}</h3>
                <p className="text-xs sm:text-sm text-slate-500">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Jobs */}
      <section id="jobs" className="py-12 sm:py-16 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
              <Briefcase className="w-3 h-3 sm:w-4 sm:h-4" />
              وظائف متاحة
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-800 mb-3 sm:mb-4">اختر الوظيفة المناسبة لك</h2>
            <p className="text-slate-600 text-base sm:text-lg">اضغط على أي وظيفة للتقدم مباشرة</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {jobs.map((job, i) => {
              const Icon = job.icon
              const isSelected = selectedJob === job.id
              return (
                <div
                  key={job.id}
                  onClick={() => handleJobSelect(job.id)}
                  className={`group relative p-4 sm:p-6 rounded-2xl cursor-pointer transition-all border-2 animate-fade-in-up ${isSelected ? 'border-emerald-500 bg-emerald-50 shadow-xl scale-105' : 'border-slate-100 bg-white hover:shadow-xl hover:border-emerald-200 hover:scale-105'}`}
                  style={{ animationDelay: `${i * 0.05}s` }}
                >
                  {isSelected && (
                    <div className="absolute top-3 left-3 sm:top-4 sm:left-4 w-7 h-7 sm:w-8 sm:h-8 bg-emerald-500 rounded-full flex items-center justify-center animate-scale-in">
                      <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </div>
                  )}
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 ${job.bgColor} rounded-2xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className={`w-6 h-6 sm:w-7 sm:h-7 ${job.color}`} />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-800 mb-1 sm:mb-2">{job.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-500 mb-3 sm:mb-4 leading-relaxed">{job.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-emerald-600 font-bold text-xs sm:text-sm">
                      <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-emerald-500 text-emerald-500" />
                      {job.salary}
                    </div>
                    <span className="text-xs sm:text-sm text-slate-400 group-hover:text-emerald-600 transition-colors flex items-center gap-1 font-semibold">
                      قدّم الآن
                      <ChevronLeft className="w-3 h-3 sm:w-4 sm:h-4" />
                    </span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Application Form + Success */}
      {showForm && (
        <section id="application-form" className="py-12 sm:py-16 bg-white">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-slate-100 overflow-hidden">
              <div className="bg-gradient-to-l from-emerald-600 to-teal-600 p-5 sm:p-6 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold mb-1">تقديم على وظيفة</h2>
                    {selectedJobData && (
                      <p className="text-emerald-100 text-sm flex items-center gap-2">
                        <Briefcase className="w-4 h-4" />
                        {selectedJobData.title}
                      </p>
                    )}
                  </div>
                  <button onClick={() => { setShowForm(false); setSelectedJob(''); setStep('form') }} className="p-2 hover:bg-white/20 rounded-lg transition-colors">
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Step 1: Form */}
              {step === 'form' && (
                <div className="p-5 sm:p-8 space-y-4 sm:space-y-5">
                  <div>
                    <label className="flex items-center gap-2 text-sm font-semibold text-slate-700 mb-2">
                      <User className="w-4 h-4 text-emerald-600" />
                      الاسم الثلاثي
                    </label>
                    <input
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="مثال: محمد أحمد عبدالله"
                      className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 outline-none transition-all text-slate-800"
                    />
                  </div>
                  <div>
                    <label className="flex items-center gap-2 text-sm font-semibold text-slate-700 mb-2">
                      <Briefcase className="w-4 h-4 text-emerald-600" />
                      المهنة
                    </label>
                    <input
                      type="text"
                      value={formData.profession}
                      onChange={(e) => setFormData({ ...formData, profession: e.target.value })}
                      placeholder="مثال: عامل نظافة، مندوب مبيعات..."
                      className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 outline-none transition-all text-slate-800"
                    />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="flex items-center gap-2 text-sm font-semibold text-slate-700 mb-2">
                        <Globe className="w-4 h-4 text-emerald-600" />
                        الجنسية
                      </label>
                      <select
                        value={formData.nationality}
                        onChange={(e) => setFormData({ ...formData, nationality: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 outline-none transition-all text-slate-800 bg-white"
                      >
                        <option value="">اختر الجنسية</option>
                        {nationalities.map((nat) => (
                          <option key={nat} value={nat}>{nat}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="flex items-center gap-2 text-sm font-semibold text-slate-700 mb-2">
                        <Calendar className="w-4 h-4 text-emerald-600" />
                        السن
                      </label>
                      <input
                        type="number"
                        min="18"
                        max="70"
                        value={formData.age}
                        onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                        placeholder="مثال: 28"
                        className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 outline-none transition-all text-slate-800"
                      />
                    </div>
                  </div>
                  {error && (
                    <div className="flex items-center gap-2 p-3 bg-red-50 text-red-600 rounded-xl text-sm animate-fade-in">
                      <AlertCircle className="w-4 h-4 flex-shrink-0" />
                      {error}
                    </div>
                  )}
                  <button
                    onClick={handleSubmit}
                    disabled={loading}
                    className="w-full py-3 sm:py-4 bg-gradient-to-l from-emerald-600 to-teal-600 text-white rounded-xl font-bold text-base sm:text-lg hover:shadow-xl hover:shadow-emerald-200 transition-all hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        جاري الحفظ...
                      </>
                    ) : (
                      <>
                        تأكيد التقديم
                        <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                      </>
                    )}
                  </button>
                </div>
              )}

              {/* Step 2: Success */}
              {step === 'done' && (
                <div className="p-6 sm:p-10 text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-scale-in shadow-lg shadow-emerald-200">
                    <PartyPopper className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-800 mb-3">تم استلام طلبك بنجاح!</h3>
                  <p className="text-sm sm:text-base text-slate-500 mb-2 max-w-md mx-auto">
                    تم تسجيل بياناتك بنجاح. للتواصل معك وإكمال طلب التقديم،
                  </p>
                  <p className="text-sm sm:text-base text-slate-700 mb-8 font-semibold">
                    الرجاء تأكيد رقم هاتفك بالضغط على الزر أدناه
                  </p>
                  <a
                    href={CPA_OFFER_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4 sm:py-5 bg-gradient-to-l from-emerald-600 to-teal-600 text-white rounded-2xl font-bold text-lg sm:text-xl hover:shadow-2xl hover:shadow-emerald-300 transition-all hover:scale-105 animate-fade-in-up"
                  >
                    <Phone className="w-6 h-6" />
                    تأكيد رقم الهاتف للتواصل
                    <ArrowLeft className="w-5 h-5" />
                  </a>
                  <p className="text-xs text-slate-400 mt-6">
                    سيتم تحويلك لإكمال طلب التقديم
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Trust */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-emerald-600 to-teal-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 text-center">
            {[
              { num: '+500', label: 'وظيفة متاحة' },
              { num: '+10K', label: 'موظف تم توظيفه' },
              { num: '+50', label: 'شركة شريكة' },
              { num: '13', label: 'مدينة سعودية' },
            ].map((s, i) => (
              <div key={i}>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-2">{s.num}</div>
                <div className="text-xs sm:text-base text-emerald-100">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 sm:py-8 bg-slate-900 text-slate-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-3 sm:mb-4">
            <div className="w-9 h-9 sm:w-10 sm:h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center">
              <Briefcase className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </div>
            <span className="text-base sm:text-lg font-bold text-white">وظائف شركات المراعي</span>
          </div>
          <p className="text-xs sm:text-sm">فرص عمل للمواطنين السعوديين والمقيمين في المملكة العربية السعودية</p>
          <p className="text-xs mt-3 sm:mt-4 text-slate-600">© 2026 جميع الحقوق محفوظة</p>
        </div>
      </footer>
    </div>
  )
}
