
<template>
    <div class="min-h-full">
      <main class="py-10">
        <!-- Page header -->
        <div class="mx-auto max-w-3xl px-4 sm:px-6 md:flex md:items-center md:justify-between md:space-x-5 lg:max-w-7xl lg:px-8">
          <div class="flex items-center space-x-5">
            <div class="flex-shrink-0">
              <div class="relative">
                <img class="h-16 w-16 rounded-full" src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80" alt="" />
                <span class="absolute inset-0 rounded-full shadow-inner" aria-hidden="true" />
              </div>
            </div>
            <div>
              <h1 class="text-2xl font-bold text-gray-900">{{ data.name }}</h1>
              <p class="text-sm font-medium text-gray-500">Applied for <a href="#" class="text-gray-900">Front End Developer</a> on <time datetime="2020-08-25">August 25, 2020</time></p>
            </div>
          </div>
          <div class="mt-6 flex flex-col-reverse justify-stretch space-y-4 space-y-reverse sm:flex-row-reverse sm:justify-end sm:space-x-3 sm:space-y-0 sm:space-x-reverse md:mt-0 md:flex-row md:space-x-3">
            <button type="button" class="inline-flex items-center justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">Disqualify</button>
            <button type="button" class="inline-flex items-center justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">Advance to offer</button>
          </div>
        </div>
  
        <div class="mx-auto mt-8 grid max-w-3xl grid-cols-1 gap-6 sm:px-6 lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-3">
          <div class="space-y-6 lg:col-span-2 lg:col-start-1">
            <!-- Description list-->
            <section aria-labelledby="applicant-information-title">
              <div class="bg-white shadow sm:rounded-lg">
                <div class="px-4 py-5 sm:px-6">
                  <h2 id="applicant-information-title" class="text-lg font-medium leading-6 text-gray-900">Applicant Information</h2>
                  <p class="mt-1 max-w-2xl text-sm text-gray-500">Personal details and application.</p>
                </div>
                <div class="border-t border-gray-200 px-4 py-5 sm:px-6">
                  <dl class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                    <div class="sm:col-span-1">
                      <dt class="text-sm font-medium text-gray-500">User name</dt>
                      <dd class="mt-1 text-sm text-gray-900">{{ data.username }}</dd>
                    </div>
                    <div class="sm:col-span-1">
                      <dt class="text-sm font-medium text-gray-500">Email address</dt>
                      <dd class="mt-1 text-sm text-gray-900">{{ data.email }}</dd>
                    </div>
                    <div class="sm:col-span-1">
                      <dt class="text-sm font-medium text-gray-500">Phone number</dt>
                      <dd class="mt-1 text-sm text-gray-900">{{ data.phone }}</dd>
                    </div>
                    <div class="sm:col-span-1">
                      <dt class="text-sm font-medium text-gray-500">Website</dt>
                      <dd class="mt-1 text-sm text-gray-900">{{ data.website }}</dd>
                    </div>
                    <div class="sm:col-span-2">
                      <dt class="text-sm font-medium text-gray-500">Address</dt>
                      <dd class="mt-1 text-sm text-gray-900">{{ data?.address?.street }}, {{ data?.address?.suite }}, {{ data?.address?.city }}, {{ data?.address?.zipcode }}</dd>
                    </div>
                    <div class="sm:col-span-2">
                      <dt class="text-sm font-medium text-gray-500">Company</dt>
                      <dd class="mt-1 text-sm text-gray-900">{{ data?.company?.name }} <br /> {{ data?.company?.catchPhrase }} <br /> {{ data?.company?.bs }}</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </section>
          </div>
  
          <section aria-labelledby="timeline-title" class="lg:col-span-1 lg:col-start-3">
            <div class="bg-white px-4 py-5 shadow sm:rounded-lg sm:px-6">
              <h2 id="timeline-title" class="text-lg font-medium text-gray-900">Timeline</h2>
  
              <!-- Activity Feed -->
              <div class="mt-6 flow-root">
                <ul role="list" class="-mb-8">
                  <li v-for="(item, itemIdx) in timeline" :key="item.id">
                    <div class="relative pb-8">
                      <span v-if="itemIdx !== timeline.length - 1" class="absolute left-4 top-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true" />
                      <div class="relative flex space-x-3">
                        <div>
                          <span :class="[item.type.bgColorClass, 'flex h-8 w-8 items-center justify-center rounded-full ring-8 ring-white']">
                            <component :is="item.type.icon" class="h-5 w-5 text-white" aria-hidden="true" />
                          </span>
                        </div>
                        <div class="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                          <div>
                            <p class="text-sm text-gray-500">
                              {{ item.content }} <a href="#" class="font-medium text-gray-900">{{ item.target }}</a>
                            </p>
                          </div>
                          <div class="whitespace-nowrap text-right text-sm text-gray-500">
                            <time :datetime="item.datetime">{{ item.date }}</time>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div class="mt-6 flex flex-col justify-stretch">
                <button type="button" class="inline-flex items-center justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">Advance to offer</button>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  </template>
  
  <script setup>
  import {
    CheckIcon,
    HandThumbUpIcon,
    UserIcon,
  } from '@heroicons/vue/20/solid'
  import { useRoute } from 'vue-router';
  import {onMounted, ref } from 'vue';

  // get data according to url id
  const route = useRoute();
  const id = route.params.id;

  const data = ref({});

  onMounted(async () => {
    // fetch data from the server
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    data.value = await response.json();
  });

  const eventTypes = {
    applied: { icon: UserIcon, bgColorClass: 'bg-gray-400' },
    advanced: { icon: HandThumbUpIcon, bgColorClass: 'bg-blue-500' },
    completed: { icon: CheckIcon, bgColorClass: 'bg-green-500' },
  }
  const timeline = [
    {
      id: 1,
      type: eventTypes.applied,
      content: 'Applied to',
      target: 'Front End Developer',
      date: 'Sep 20',
      datetime: '2020-09-20',
    },
    {
      id: 2,
      type: eventTypes.advanced,
      content: 'Advanced to phone screening by',
      target: 'Bethany Blake',
      date: 'Sep 22',
      datetime: '2020-09-22',
    },
    {
      id: 3,
      type: eventTypes.completed,
      content: 'Completed phone screening with',
      target: 'Martha Gardner',
      date: 'Sep 28',
      datetime: '2020-09-28',
    },
    {
      id: 4,
      type: eventTypes.advanced,
      content: 'Advanced to interview by',
      target: 'Bethany Blake',
      date: 'Sep 30',
      datetime: '2020-09-30',
    },
    {
      id: 5,
      type: eventTypes.completed,
      content: 'Completed interview with',
      target: 'Katherine Snyder',
      date: 'Oct 4',
      datetime: '2020-10-04',
    },
  ]

  </script>