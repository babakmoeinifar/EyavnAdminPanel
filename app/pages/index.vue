<template>
  <div class="min-h-screen bg-gradient-to-br from-[#01664d] to-white" dir="rtl">
    <div class="container mx-auto px-4 py-8">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <!-- Left Column -->
        <div class="lg:col-span-4 bg-white rounded-lg shadow-lg p-6">
          <div class="text-center">
            <NuxtLink class="text-[#01664d] hover:text-[#01664d]/80">
              <img src="~/assets/img/Logo.png" class="w-40 mx-auto" alt="Logo">
            </NuxtLink>
            <!-- add a button to go to the login page with a nice and modern description -->
            <div class="mt-8 space-y-4">
              <p class="text-gray-600 text-md leading-relaxed">
                به سامانه مدیریت یکپارچه ایوان خوش آمدید.
                 برای دسترسی به پنل کاربری خود وارد شوید.
              </p>
              <NuxtLink 
                to="/login"
                class="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-[#01664d] rounded-lg shadow-sm hover:bg-[#01664d]/90 transition-colors duration-200 gap-2"
              >
                ورود به سامانه
                <span class="w-5 h-5 flex items-center justify-center">→</span>
              </NuxtLink>
            </div>
          </div>
        </div>

        <!-- Right Column -->
        <div class="lg:col-span-8">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-5">
            <div v-for="(feature, index) in features" :key="index" 
                 class="bg-white rounded-2xl p-8 shadow-lg transition-all duration-300 hover:-translate-y-2.5 
                 hover:shadow-xl relative overflow-hidden group text-center">
              <!-- Gradient Overlay -->
              <div class="absolute inset-0 bg-gradient-to-br from-purple-600 to-purple-400 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              
              <!-- Icon Container -->
              <div :class="[
                'w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110',
                feature.bgClass === 'bg-purple-soft' ? 'bg-purple-50 text-purple-600' :
                feature.bgClass === 'bg-blue-soft' ? 'bg-blue-50 text-blue-600' :
                'bg-pink-50 text-pink-600'
              ]">
                <component :is="feature.icon" class="w-6 h-6" />
              </div>

              <!-- Content -->
              <h3 class="text-xl font-semibold mb-4 relative z-10 text-gray-800">{{ feature.title }}</h3>
              <p class="text-gray-600 leading-relaxed relative z-10 text-sm">{{ feature.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  Clipboard,
  Utensils,
  Heart,
  ClipboardCheck,
  DollarSign,
  BookOpen,
  Smile,
  CreditCard,
  LayoutGrid
} from 'lucide-vue-next'

const form = ref({
  company_name: '',
  sys_admin_name: '',
  mobile: '',
  website: '',
  email: ''
})

const features = [
  {
    icon: Clipboard,
    bgClass: 'bg-purple-soft',
    title: 'مثقال',
    description: 'بازاری برای تخصیص و معامله‌ی سهام اعضای تیم‌تون!'
  },
  {
    icon: Utensils,
    bgClass: 'bg-blue-soft',
    title: 'ته‌دیگ',
    description: 'سر ظهر درگیر سفارش ناهار نشو، از قبل رزرو کن!'
  },
  {
    icon: Heart,
    bgClass: 'bg-pink-soft',
    title: 'سپاس',
    description: 'قدردانی از هم‌تیمی‌ها، با یه فلسفه‌ی متفاوت و تاثیرگذار.'
  },
  {
    icon: ClipboardCheck,
    bgClass: 'bg-purple-soft',
    title: 'آنبوردینگ',
    description: 'فرآیند استقرار یه عضو جدید در تیم، خیلی آسون، خیلی شفاف!'
  },
  {
    icon: DollarSign,
    bgClass: 'bg-pink-soft',
    title: 'حقوق',
    description: 'آخر ماه وقت خیلی کمتری برای محاسبه واریزی‌ها صرف می‌کنی.'
  },
  {
    icon: BookOpen,
    bgClass: 'bg-blue-soft',
    title: 'قفسه',
    description: 'کتاب‌های مهمی که اعضای تیمت قراره بخونن رو لیست کن.'
  },
  {
    icon: Smile,
    bgClass: 'bg-purple-soft',
    title: 'حال و هوا',
    description: 'از حال و هوای تیم، با کیفیت و سرعت بیشتری باخبر باش و تصمیم بگیر.'
  },
  {
    icon: CreditCard,
    bgClass: 'bg-blue-soft',
    title: 'مالی و اداری',
    description: 'پیش‌دریافت حقوق، دریافت وام و نامه‌اداری سلف‌سرویس شده.'
  },
  {
    icon: LayoutGrid,
    bgClass: 'bg-pink-soft',
    title: 'مدیریت اموال',
    description: 'راه حلی ساده‌تر برای مدیریت اموال، اگر شرکت بزرگی داری.'
  }
]

const submitCompanyRequest = async () => {
  try {
    // Implement your API call here
    console.log('Form submitted:', form.value)
  } catch (error) {
    console.error('Error submitting form:', error)
  }
}

</script>