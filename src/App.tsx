import { useState } from 'react'
import {
  Shield, CheckCircle2, ChevronLeft, User, Briefcase, Globe,
  Calendar, Loader2, Star, TrendingUp, Users, Award, MapPin, ArrowLeft,
  Sparkles, X, AlertCircle, ExternalLink
} from 'lucide-react'
import { jobs, nationalities } from './data'

const CPA_OFFER_URL = 'https://fiodie.com/cl/b8ab799cdbe3f678'

interface FormData {
  fullName: string
  profession: string
  nationality: string
  age: string
  selectedJob: string
}

export default function App() {
  const [selectedJob, setSelectedJob] = useState<string>('')
  const [showForm, setShowForm] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    profession: '',
    nationality: '',
    age: '',
    selectedJob: '',
  })

  const handleJobSelect = (jobId: string) => {
    setSelectedJob(jobId)
    setFormData({ ...formData, selectedJob: jobId })
    setShowForm(true)
    setTimeout(() => {
      document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' })
    }, 100)
  }

  const validateForm = () => {
    if (!formData.fullName.trim()) return 'الرجاء إدخال الاسم الثلاثي'
    if (!formData.profession.trim()) return 'الرجاء إدخال المهنة'
    if (!formData.nationality) return 'الرجاء اختيار الجنسية'
    if (!formData.age || parseInt(formData.age) < 18 || parseInt(formData.age) > 70)
      return 'الرجاء إدخال سن صحيح (18 - 70)'
    return ''
  }

  const handleSubmit = async () => {
    const validationError = validateForm()
    if (validationError) {
      setError(validationError)
      return
    }
    setError('')
    setLoading(true)
    window.location.href = CPA_OFFER_URL
  }

  const selectedJobData = jobs.find((j) => j.id === selectedJob)

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white" dir="rtl">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 sm:h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/s12/logo.png" alt="Logo" className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl shadow-lg object-cover" />
            <div>
              <h1 className="text-base sm:text-lg font-bold text-slate-800">وظائف السعودية</h1>
            </div>
          </div>
          <a href="#jobs" className="flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-lg font-semibold text-sm">تصفح الوظائف</a>
        </div>
      </header>
      {/* باقي الكود سيعمل الآن لأن الهيدر أصبح سليماً */}
    </div>
  )
}
