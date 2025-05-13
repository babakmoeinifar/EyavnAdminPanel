<template>
  <div class="space-y-6">
    <!-- Header -->
    <div class="flex items-center justify-between">
      <div>
        <h1 class="text-2xl font-bold">نمای کلی داشبورد</h1>
        <p class="text-muted-foreground">خوش آمدید</p>
      </div>
      <div class="flex items-center gap-2">
        <button class="rounded-md border px-4 py-2 text-sm font-medium hover:bg-accent">
          خروجی
        </button>
        <button class="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90">
          افزودن جدید
        </button>
      </div>
    </div>

    <!-- Stats Grid -->
    <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      <div class="rounded-lg border bg-card p-6">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm font-medium text-muted-foreground">درآمد کل</p>
            <p class="text-2xl font-bold">۴۵,۲۳۱.۸۹ تومان</p>
          </div>
          <div class="rounded-full bg-primary/10 p-3">
            <DollarSignIcon class="h-5 w-5 text-primary" />
          </div>
        </div>
        <p class="mt-2 text-xs text-green-500">+۲۰.۱٪ نسبت به ماه گذشته</p>
      </div>

      <div class="rounded-lg border bg-card p-6">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm font-medium text-muted-foreground">کاربران فعال</p>
            <p class="text-2xl font-bold">۲,۳۴۵</p>
          </div>
          <div class="rounded-full bg-primary/10 p-3">
            <UsersIcon class="h-5 w-5 text-primary" />
          </div>
        </div>
        <p class="mt-2 text-xs text-green-500">+۱۸۰.۱٪ نسبت به ماه گذشته</p>
      </div>

      <div class="rounded-lg border bg-card p-6">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm font-medium text-muted-foreground">سفارشات جدید</p>
            <p class="text-2xl font-bold">۱,۲۳۴</p>
          </div>
          <div class="rounded-full bg-primary/10 p-3">
            <ShoppingCartIcon class="h-5 w-5 text-primary" />
          </div>
        </div>
        <p class="mt-2 text-xs text-green-500">+۱۲٪ نسبت به ماه گذشته</p>
      </div>

      <div class="rounded-lg border bg-card p-6">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm font-medium text-muted-foreground">نرخ تبدیل</p>
            <p class="text-2xl font-bold">۱۲.۵٪</p>
          </div>
          <div class="rounded-full bg-primary/10 p-3">
            <TrendingUpIcon class="h-5 w-5 text-primary" />
          </div>
        </div>
        <p class="mt-2 text-xs text-green-500">+۲٪ نسبت به ماه گذشته</p>
      </div>
    </div>

    <!-- Charts Grid -->
    <div class="grid gap-6 md:grid-cols-2">
      <div class="rounded-lg border bg-card p-6">
        <h3 class="text-lg font-semibold mb-4">نمودار درآمد</h3>
        <div class="h-[300px] flex items-center justify-center text-muted-foreground">
          نمودار
        </div>
      </div>
      <div class="rounded-lg border bg-card p-6">
        <h3 class="text-lg font-semibold mb-4">رشد کاربران</h3>
        <div class="h-[300px] flex items-center justify-center text-muted-foreground">
          نمودار
        </div>
      </div>
    </div>

    <!-- Recent Activity -->
    <div class="rounded-lg border bg-card">
      <div class="flex items-center justify-between p-6">
        <h3 class="text-lg font-semibold">فعالیت‌های اخیر</h3>
        <button class="text-sm text-primary hover:underline">مشاهده همه</button>
      </div>
      <div class="divide-y">
        <div class="flex items-center justify-between p-6">
          <div class="flex items-center gap-4">
            <div class="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
              <UserPlusIcon class="h-5 w-5 text-primary" />
            </div>
            <div>
              <p class="font-medium">کاربر جدید ثبت نام کرد</p>
              <p class="text-sm text-muted-foreground">۲ ساعت پیش</p>
            </div>
          </div>
          <span class="text-sm text-green-500">+۱</span>
        </div>
        <div class="flex items-center justify-between p-6">
          <div class="flex items-center gap-4">
            <div class="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
              <ShoppingBagIcon class="h-5 w-5 text-primary" />
            </div>
            <div>
              <p class="font-medium">سفارش جدید دریافت شد</p>
              <p class="text-sm text-muted-foreground">۳ ساعت پیش</p>
            </div>
          </div>
          <span class="text-sm text-green-500">+۲۹۹.۰۰ تومان</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { DollarSignIcon, UsersIcon, ShoppingCartIcon, TrendingUpIcon, UserPlusIcon, ShoppingBagIcon } from 'lucide-vue-next'

definePageMeta({
  layout: 'admin',
  middleware: ['admin']
})

useHead({
  titleTemplate: '%s - داشبورد مدیریت',
})
</script> 