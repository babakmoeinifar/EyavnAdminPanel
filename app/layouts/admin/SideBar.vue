<template>
    <aside 
        :class="[
            'fixed inset-y-0 right-0 z-50 w-72 bg-card border-l transform transition-transform duration-200 ease-in-out',
            isSidebarOpen ? 'translate-x-0' : 'translate-x-full',
            'md:translate-x-0 md:block',
            !isSidebarOpen && 'md:hidden'
        ]"
        style="overflow-y: auto; max-height: 100vh;"
        role="navigation"
        aria-label="Main navigation"
    >
        <div class="flex h-16 items-center justify-between border-b px-6">
            <h2 class="text-lg font-semibold">پنل مدیریت ایـوان</h2>
            <Button 
                @click="toggleSidebar" 
                variant="ghost"
                size="icon"
                class="md:hidden"
                aria-label="Close sidebar"
            >
                <XIcon class="h-5 w-5" />
            </Button>
        </div>
        <nav class="p-4">
            <ul class="space-y-2" role="menu">
                <li role="none">
                    <NuxtLink 
                        to="/admin" 
                        :class="buttonClasses"
                        role="menuitem"
                    >
                        <HomeIcon class="h-4 w-4" />
                        <span class="mx-2">داشبورد</span>
                    </NuxtLink>
                </li>
                
                <!-- Use v-for for menu items to reduce repetition -->
                <MenuItem
                    v-for="(menuItem, index) in menuItems"
                    :key="index"
                    :title="menuItem.title"
                    :icon="menuItem.icon"
                    :items="menuItem.items"
                    :module="menuItem.module || ''"
                    :permission="menuItem.permission || ''"
                    :userModules="userStore.modules || []"
                />
            </ul>
        </nav>
    </aside>
</template>

<script setup lang="ts">
import { useUserStore } from '@/stores/user';
import MenuItem from '@/components/ui/MenuItem.vue'
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

const buttonClasses = computed(() => [
    'flex w-full items-center px-4 py-2 text-sm font-medium rounded-md',
    'hover:bg-accent hover:text-accent-foreground',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring'
])

// Define menu items structure for better maintainability
const menuItems = [
    {
        title: 'ته‌دیگ',
        icon: UsersIcon,
        items: [
            { label: 'لیست روز', link: '/admin/lunch' },
            { label: 'افزودن روزغذا', link: '/admin/lunch' },
            { label: 'لیست رستوران', link: '/admin/lunch' },
            { label: 'لیست غذاها', link: '/admin/lunch' },
            { label: 'لیست سالن ها', link: '/admin/lunch' },
            { label: 'حساب غذا', link: '/admin/lunch' }
        ]
    },
    {
        title: 'مدیریت اتاق',
        icon: Armchair,
        items: [
            { label: 'لیست اتاق‌ها', link: '/admin/rooms' },
            { label: 'افزودن اتاق', link: '/admin/rooms/new' }
        ]
    },
    {
        title: 'رفقا',
        icon: UsersIcon,
        items: [
            { label: 'لیست کاربران', link: '/admin/users' },
            { label: 'لیست پرونده‌ها', link: '/admin/users' },
            { label: 'اعلان سفارشی', link: '/admin/users' },
            { label: 'دیوار', link: '/admin/users' },
            { label: 'تیم ها', link: '/admin/users' },
            { label: 'ساختار تیم ها', link: '/admin/users' }
        ]
    },
    {
        title: 'مالی و اداری',
        icon: Landmark,
        items: [
            { label: 'جزئیات حقوق', link: '/admin/financial' },
            { label: 'وام کوتاه مدت', link: '/admin/financial' },
            { label: 'پیش‌دریافت حقوق', link: '/admin/financial' },
            { label: 'شارژ اعتبار', link: '/admin/financial' },
            { label: 'ماموریت ها', link: '/admin/financial' },
            { label: 'چرتکه حقوق', link: '/admin/financial' },
            { label: 'قراردادها', link: '/admin/financial' },
            { label: 'صدور فاکتور', link: '/admin/financial' },
            { label: 'تنظیمات', link: '/admin/financial' }
        ]
    },
    {
        title: 'فیشهای حقوق',
        icon: BanknoteArrowDown,
        items: [
            { label: 'فیش حقوق', link: '/admin/financial' },
            { label: 'دوره‌های حقوق', link: '/admin/financial' },
            { label: 'مدخلهای فیش حقوق', link: '/admin/financial' },
        ]
    },
    {
        title: 'آنبوردینگ',
        icon: ClipboardCheck,
        items: [
            { label: 'مدیریت کارتها', link: '/admin/onboarding' },
            { label: 'نیمه راه', link: '/admin/onboarding' },
        ]
    },
    {
        title: 'محتوا',
        icon: BookOpenText,
        items: [
            { label: 'مدیریت محتوا', link: '/admin/content' },
            { label: 'مدیریت تگها', link: '/admin/content' },
        ]
    },
    {
        title: 'فرمساز-نظرسنجی',
        icon: CircleCheckBig,
        items: [
            { label: 'فرمها', link: '/admin/survery' },
            { label: 'وظایف', link: '/admin/survery' },
            { label: 'نتایج', link: '/admin/survery' },
        ]
    },
    {
        title: 'حاسِبو',
        icon: Calculator,
        items: [
            { label: 'آیتم ها', link: '/admin/job-report' },
            { label: 'گزارش گیری', link: '/admin/job-report' },
        ]
    },
    {
        title: 'قفسه',
        icon: LibraryBig,
        items: [
            { label: 'مدیریت کتاب‌ها', link: '/admin/library' },
            { label: 'مدیریت امانات', link: '/admin/library' },
        ]
    },
    {
        title: 'رادیو',
        icon: PodcastIcon,
        items: [
            { label: 'لیست پادکست‌ها', link: '/admin/podcasts' },
            { label: 'افزودن پادکست', link: '/admin/podcasts/new' }
        ]
    },
    {
        title: 'مدیریت اموال',
        icon: Ratio,
        items: [
            { label: 'لیست اموال', link: '/admin/supplies' },
            { label: 'تحویلات', link: '/admin/supplies' },
            { label: 'تنظیمات', link: '/admin/supplies' },
        ]
    },
    {
        title: 'رفاهیات',
        icon: TicketPercent,
        items: [
            { label: 'کارهای بیرونی', link: '/admin/' },
            { label: 'رویدادها', link: '/admin/' },
            { label: 'تخفیف ها', link: '/admin/' },
            { label: 'دسته بندی تخفیف ها', link: '/admin/' },
            { label: 'بیمه تکمیلی', link: '/admin/' },
        ]
    },
    {
        title: 'سپاس',
        icon: Gem,
        items: [
            { label: 'لیست', link: '/admin/kudos' },
            { label: 'درجه', link: '/admin/kudos' },
            { label: 'دسته‌بندی', link: '/admin/kudos' },
        ]
    },
    {
        title: 'سهام',
        icon: ChartCandlestick,
        items: [
            { label: 'سفارشات/معاملات pending', link: '/admin/stock' },
            { label: 'گزارش معاملات مثقال', link: '/admin/stock' },
            { label: 'تغییرات نمادها', link: '/admin/stock' },
            { label: 'مثقال افراد', link: '/admin/stock' },
            { label: 'معاملات', link: '/admin/stock' },
            { label: 'ESOPS', link: '/admin/stock' },
            { label: 'نمادها', link: '/admin/stock' },
            { label: 'تنظیمات', link: '/admin/stock' },
        ]
    },
    {
        title: 'حال و هوا',
        icon: SmilePlus,
        items: [
            { label: 'سیگنال ها', link: '/admin/mood' },
            { label: 'خلاصه ها', link: '/admin/mood' },
        ]
    },
    {
        title: 'سوپرادمین',
        icon: ShieldUser,
        items: [
            { label: 'مدیریت شرکت', link: '/admin/' },
            { label: 'تنظیمات', link: '/admin/' },
        ]
    },
    {
        title: 'مدیریت ایوان',
        icon: Cog,
        items: [
            { label: 'مدیریت شرکتها', link: '/admin/' },
            { label: 'درخواستهای ثبت شرکت', link: '/admin/' },
            { label: 'دسترسی ها', link: '/admin/' },
            { label: 'مدیریت تنظیمات', link: '/admin/' },
            { label: 'مدیریت زبان', link: '/admin/' },
            { label: 'تلسکوپ', link: '/admin/' },
            { label: 'Horizon', link: '/admin/' },
            { label: 'تاریخچه تغییرات', link: '/admin/' },
        ]
    }
]
</script>

<style>
/* Modern scrollbar styling */
::-webkit-scrollbar {
    width: 4px;
}

::-webkit-scrollbar-track {
    @apply bg-accent;
    border-radius: 10px;
}

::-webkit-scrollbar-thumb {
    @apply bg-muted-foreground/50;
    border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
    @apply bg-muted-foreground;
}
</style>
