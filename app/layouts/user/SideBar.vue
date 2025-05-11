<template>
    <aside>
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
                        to="" 
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
            { label: 'لیست روز', link: '/lunch' },
        ]
    },
    {
        title: 'مدیریت اتاق',
        icon: Armchair,
        items: [
            { label: 'لیست اتاق‌ها', link: '/rooms' },
        ]
    },
    {
        title: 'رفقا',
        icon: UsersIcon,
        items: [
            { label: 'لیست کاربران', link: '/users' },
        ]
    },
    {
        title: 'مالی و اداری',
        icon: Landmark,
        items: [
            { label: 'جزئیات حقوق', link: '/financial' },
        ]
    },
    {
        title: 'فیشهای حقوق',
        icon: BanknoteArrowDown,
        items: [
            { label: 'فیش حقوق', link: '/financial' },
        ]
    },
    {
        title: 'آنبوردینگ',
        icon: ClipboardCheck,
        items: [
            { label: 'نیمه راه', link: '/onboarding' },
        ]
    },
    {
        title: 'محتوا',
        icon: BookOpenText,
        items: [
            { label: 'مدیریت محتوا', link: '/content' },
        ]
    },
    {
        title: 'فرمساز-نظرسنجی',
        icon: CircleCheckBig,
        items: [
            { label: 'فرمها', link: '/survery' },
        ]
    },
    {
        title: 'حاسِبو',
        icon: Calculator,
        items: [
            { label: 'آیتم ها', link: '/job-report' },
        ]
    },
    {
        title: 'قفسه',
        icon: LibraryBig,
        items: [
            { label: 'مدیریت کتاب‌ها', link: '/library' },
        ]
    },
    {
        title: 'رادیو',
        icon: PodcastIcon,
        items: [
            { label: 'لیست پادکست‌ها', link: '/podcasts' },
        ]
    },
    {
        title: 'مدیریت اموال',
        icon: Ratio,
        items: [
            { label: 'لیست اموال', link: '/supplies' },
        ]
    },
    {
        title: 'رفاهیات',
        icon: TicketPercent,
        items: [
            { label: 'کارهای بیرونی', link: '/' },
        ]
    },
    {
        title: 'سپاس',
        icon: Gem,
        items: [
            { label: 'لیست', link: '/kudos' },
        ]
    },
    {
        title: 'سهام',
        icon: ChartCandlestick,
        items: [
            { label: 'معاملات', link: '/stock' },
        ]
    },
    {
        title: 'حال و هوا',
        icon: SmilePlus,
        items: [
            { label: 'سیگنال ها', link: '/mood' },
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
