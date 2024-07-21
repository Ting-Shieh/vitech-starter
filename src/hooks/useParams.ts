// Copyright (c) 2024 Ting<zsting29@gmail.com>
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT


import type { RouteParams } from 'vue-router';

export function useParams<P extends RouteParams>() {
  const route = useRoute()
  return computed(() => route.params as P)
}