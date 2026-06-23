import { Sparkles, Truck, Package, Trash2, ShoppingCart, Wrench, HardHat, ChefHat, Building2, Headphones } from 'lucide-react'

export interface JobCategory {
  id: string
  title: string
  icon: typeof Sparkles
  description: string
  salary: string
  color: string
  bgColor: string
}

export const jobs: JobCategory[] = [
  {
    id: 'cleaning',
    title: 'عمال نظافة',
    icon: Trash2,
    description: 'تنظيف المكاتب والمنشآت والمرافق العامة',
    salary: '2,000 - 3,500 ريال',
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-50',
  },
  {
    id: 'sales',
    title: 'مندوب مبيعات',
    icon: ShoppingCart,
    description: 'ترويج المنتجات وزيادة المبيعات في مختلف القطاعات',
    salary: '3,000 - 6,000 ريال',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
  },
  {
    id: 'packaging',
    title: 'عمال تغليف وتعبئة',
    icon: Package,
    description: 'تغليف وتعبئة المنتجات في المستودعات والمصانع',
    salary: '2,500 - 4,000 ريال',
    color: 'text-amber-600',
    bgColor: 'bg-amber-50',
  },
  {
    id: 'driver',
    title: 'سائقين',
    icon: Truck,
    description: 'قيادة مركبات النقل والتوصيل داخل المدن',
    salary: '3,500 - 5,500 ريال',
    color: 'text-teal-600',
    bgColor: 'bg-teal-50',
  },
  {
    id: 'maintenance',
    title: 'عمال صيانة',
    icon: Wrench,
    description: 'صيانة المباني والأجهزة الكهربائية والميكانيكية',
    salary: '3,000 - 5,000 ريال',
    color: 'text-orange-600',
    bgColor: 'bg-orange-50',
  },
  {
    id: 'construction',
    title: 'عمال بناء',
    icon: HardHat,
    description: 'أعمال البناء والإنشاءات في المشاريع الكبرى',
    salary: '2,500 - 4,500 ريال',
    color: 'text-stone-600',
    bgColor: 'bg-stone-50',
  },
  {
    id: 'chef',
    title: 'طباخين',
    icon: ChefHat,
    description: 'إعداد الطعام في المطاعم والفنادق والمستشفيات',
    salary: '3,000 - 5,500 ريال',
    color: 'text-red-600',
    bgColor: 'bg-red-50',
  },
  {
    id: 'security',
    title: 'أمن وحراسة',
    icon: Building2,
    description: 'حراسة المنشآت والمباني السكنية والتجارية',
    salary: '2,500 - 4,000 ريال',
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-50',
  },
  {
    id: 'service',
    title: 'خدمة عملاء',
    icon: Headphones,
    description: 'الرد على استفسارات العملاء وتقديم الدعم',
    salary: '3,000 - 5,000 ريال',
    color: 'text-cyan-600',
    bgColor: 'bg-cyan-50',
  },
]

export const nationalities = [
  'سعودي',
  'مصري',
  'سوداني',
  'يمني',
  'سوري',
  'باكستاني',
  'بنغلاديشي',
  'هندي',
  'فلبيني',
  'إندونيسي',
  'أوغندي',
  'كيني',
  'إثيوبي',
  'أخرى',
]
