<template>
    <aside 
        :class="[
            'fixed inset-y-0 right-0 z-50 w-72 bg-card border-l transform transition-transform duration-200 ease-in-out',
            isSidebarOpen ? 'translate-x-0' : 'translate-x-full',
            'md:translate-x-0 md:block', // Always show on desktop unless hidden
            !isSidebarOpen && 'md:hidden' // Hide on desktop when closed
        ]"
        style="overflow-y: auto; max-height: 100vh;font-size: large;"
    >
        <div class="flex h-16 items-center justify-between border-b px-6">
            <h2 class="text-lg font-semibold">پنل مدیریت ایـوان</h2>
            <button 
                @click="toggleSidebar" 
                class="rounded-md p-2 hover:bg-accent md:hidden"
            >
                <XIcon class="h-5 w-5" />
            </button>
        </div>
        <nav class="p-4">
            <ul class="space-y-2">
                <li>
                    <NuxtLink 
                        to="/admin" 
                        :class="buttonClasses"
                    >
                    <HomeIcon class="h-4 w-4" />
                        <span class="mx-2">داشبورد</span>
                    </NuxtLink>
                </li>
                
                <MenuItem
                    title="ته‌دیگ"
                    :icon="UsersIcon"
                    :items="[
                        { label: 'لیست روز', link: '/admin/lunch' },
                        { label: 'افزودن روزغذا', link: '/admin/lunch' },
                        { label: 'لیست رستوران', link: '/admin/lunch' },
                        { label: 'لیست غذاها', link: '/admin/lunch' },
                        { label: 'لیست سالن ها', link: '/admin/lunch' },
                        { label: 'حساب غذا', link: '/admin/lunch' }
                    ]"
                    permission=""
                    :userModules="userStore.modules || []"
                />
                <li>
                    <NuxtLink 
                        to="/admin/rooms" 
                        :class="buttonClasses"
                    >
                    <Armchair class="h-4 w-4" />
                    <span class="mx-2">مدیریت اتاق</span>
                    </NuxtLink>
                </li>
                <MenuItem
                    title="رفقا"
                    :icon="UsersIcon"
                    :items="[
                        { label: 'لیست کاربران', link: '/admin/users' },
                        { label: 'لیست پرونده‌ها', link: '/admin/users' },
                        { label: 'اعلان سفارشی', link: '/admin/users' },
                        { label: 'دیوار', link: '/admin/users' },
                        { label: 'تیم ها', link: '/admin/users' },
                        { label: 'ساختار تیم ها', link: '/admin/users' }
                    ]"
                    permission=""
                    :userModules="userStore.modules || []"
                />
                <MenuItem
                    title="مالی و اداری"
                    :icon="Landmark"
                    :items="[
                        { label: 'جزئیات حقوق', link: '/admin/financial' },
                        { label: 'وام کوتاه مدت', link: '/admin/financial' },
                        { label: 'پیش‌دریافت حقوق', link: '/admin/financial' },
                        { label: 'شارژ اعتبار', link: '/admin/financial' },
                        { label: 'ماموریت ها', link: '/admin/financial' },
                        { label: 'چرتکه حقوق', link: '/admin/financial' },
                        { label: 'قراردادها', link: '/admin/financial' },
                        { label: 'صدور فاکتور', link: '/admin/financial' },
                        { label: 'تنظیمات', link: '/admin/financial' }
                    ]"
                    permission=""
                    :userModules="userStore.modules || []"
                />
                <MenuItem
                    title="فیشهای حقوق"
                    :icon="BanknoteArrowDown"
                    :items="[
                        { label: 'فیش حقوق', link: '/admin/financial' },
                        { label: 'دوره‌های حقوق', link: '/admin/financial' },
                        { label: 'مدخلهای فیش حقوق', link: '/admin/financial' },
                    ]"
                    permission=""
                    :userModules="userStore.modules || []"
                />
                <MenuItem
                    title="آنبوردینگ"
                    :icon="ClipboardCheck"
                    :items="[
                        { label: 'مدیریت کارتها', link: '/admin/onboarding' },
                        { label: 'نیمه راه', link: '/admin/onboarding' },
                    ]"
                    permission=""
                    :userModules="userStore.modules || []"
                />
                <MenuItem
                    title="محتوا"
                    :icon="BookOpenText"
                    :items="[
                        { label: 'مدیریت محتوا', link: '/admin/content' },
                        { label: 'مدیریت تگها', link: '/admin/content' },
                    ]"
                    permission=""
                    :userModules="userStore.modules || []"
                />
                <MenuItem
                    title="فرمساز-نظرسنجی"
                    :icon="CircleCheckBig"
                    :items="[
                        { label: 'فرمها', link: '/admin/survery' },
                        { label: 'وظایف', link: '/admin/survery' },
                        { label: 'نتایج', link: '/admin/survery' },
                    ]"
                    permission=""
                    :userModules="userStore.modules || []"
                />
                <MenuItem
                    title="حاسِبو"
                    :icon="Calculator"
                    :items="[
                        { label: 'آیتم ها', link: '/admin/job-report' },
                        { label: 'گزارش گیری', link: '/admin/job-report' },
                    ]"
                    permission=""
                    :userModules="userStore.modules || []"
                />
                <MenuItem
                    title="قفسه"
                    :icon="LibraryBig"
                    :items="[
                        { label: 'مدیریت کتاب‌ها', link: '/admin/library' },
                        { label: 'مدیریت امانات', link: '/admin/library' },
                    ]"
                    permission=""
                    :userModules="userStore.modules || []"
                />
                <li>
                    <NuxtLink 
                        to="/admin/podcasts" 
                        :class="buttonClasses"
                    >
                    <PodcastIcon class="h-4 w-4" />
                    <span class="mx-2">رادیو</span>
                    </NuxtLink>
                </li>
                <MenuItem
                    title="مدیریت اموال"
                    :icon="Ratio"
                    :items="[
                        { label: 'لیست اموال', link: '/admin/supplies' },
                        { label: 'تحویلات', link: '/admin/supplies' },
                        { label: 'تنظیمات', link: '/admin/supplies' },
                    ]"
                    permission=""
                    :userModules="userStore.modules || []"
                />
                <MenuItem
                    title="رفاهیات"
                    :icon="TicketPercent"
                    :items="[
                        { label: 'کارهای بیرونی', link: '/admin/' },
                        { label: 'رویدادها', link: '/admin/' },
                        { label: 'تخفیف ها', link: '/admin/' },
                        { label: 'دسته بندی تخفیف ها', link: '/admin/' },
                        { label: 'بیمه تکمیلی', link: '/admin/' },
                    ]"
                    permission=""
                    :userModules="userStore.modules || []"
                />
                <MenuItem
                    title="سپاس"
                    :icon="Gem"
                    :items="[
                        { label: 'لیست', link: '/admin/kudos' },
                        { label: 'درجه', link: '/admin/kudos' },
                        { label: 'دسته‌بندی', link: '/admin/kudos' },
                    ]"
                    permission=""
                    :userModules="userStore.modules || []"
                />
                <MenuItem
                    title="سهام"
                    :icon="ChartCandlestick"
                    :items="[
                        { label: 'سفارشات/معاملات pending', link: '/admin/stock' },
                        { label: 'معاملات', link: '/admin/stock' },
                        { label: 'گزارش معاملات مثقال', link: '/admin/stock' },
                        { label: 'ESOPS', link: '/admin/stock' },
                        { label: 'تغییرات نمادها', link: '/admin/stock' },
                        { label: 'نمادها', link: '/admin/stock' },
                        { label: 'مثقال افراد', link: '/admin/stock' },
                        { label: 'تنظیمات', link: '/admin/stock' },
                    ]"
                    permission=""
                    :userModules="userStore.modules || []"
                />
                <MenuItem
                    title="حال و هوا"
                    :icon="SmilePlus"
                    :items="[
                        { label: 'سیگنال ها', link: '/admin/mood' },
                        { label: 'خلاصه ها', link: '/admin/mood' },
                    ]"
                    permission=""
                    :userModules="userStore.modules || []"
                />
                <MenuItem
                    title="سوپرادمین"
                    :icon="ShieldUser"
                    :items="[
                        { label: 'مدیریت شرکت', link: '/admin/' },
                        { label: 'تنظیمات', link: '/admin/' },
                    ]"
                    permission=""
                    :userModules="userStore.modules || []"
                />
                <MenuItem
                    title="مدیریت ایوان"
                    :icon="Cog"
                    :items="[
                        { label: 'مدیریت شرکتها', link: '/admin/' },
                        { label: 'درخواستهای ثبت شرکت', link: '/admin/' },
                        { label: 'دسترسی ها', link: '/admin/' },
                        { label: 'مدیریت تنظیمات', link: '/admin/' },
                        { label: 'مدیریت زبان', link: '/admin/' },
                        { label: 'تلسکوپ', link: '/admin/' },
                        { label: 'Horizon', link: '/admin/' },
                        { label: 'تاریخچه تغییرات', link: '/admin/' },
                    ]"
                    permission=""
                    :userModules="userStore.modules || []"
                />
            </ul>
        </nav>
    </aside>
</template>

<script setup lang="ts">
import { useUserStore } from '~/stores/user'

import MenuItem from '~/components/ui/MenuItem.vue'
import { 
    HomeIcon, 
    UsersIcon, 
    XIcon,
    Landmark,
    Armchair,
    PodcastIcon,
    Ratio,
    LibraryBig,
    Calculator,
    CircleCheckBig,
    BookOpenText,
    ClipboardCheck,
    BanknoteArrowDown,
    TicketPercent,
    Gem,
    ChartCandlestick,
    SmilePlus,
    ShieldUser,
    Cog
} from 'lucide-vue-next'

const userStore = useUserStore()

// props
const props = defineProps<{
    isSidebarOpen: boolean,
    toggleSidebar: () => void
}>()

const isDarkMode = ref(false)

const buttonClasses = computed(() => {
  return [
    'flex w-full items-center px-4 py-2 text-sm font-medium rounded-md',
    isDarkMode.value ? 'hover:bg-gray-800' : 'hover:bg-green-900 hover:text-white',
  ]
})
</script>

<style>
/* Modern scrollbar styling */
::-webkit-scrollbar {
    width: 4px;
}

::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 10px;
}

::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
    background: #555;
}
</style>
