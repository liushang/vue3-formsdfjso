<template>
  <a-layout-header style="background: #fff; padding: 0">
    <a-row
      type="flex"
      justify="end"
    >
      <a-col class="mr-3">
        <a-button
          type="primary"
          shape="circle"
          size="large"
          @click="this.$router.push('/')"
        >
          <template #icon>
            <HomeFilled />
          </template>
        </a-button>
      </a-col>
      <a-col class="mr-3">
        <a-button
          type="primary"
          shape="circle"
          size="large"
          @click="this.$router.push('/setting')"
        >
          <template #icon>
            <SettingFilled />
          </template>
        </a-button>
      </a-col>
    </a-row>
  </a-layout-header>
  <a-layout-content style="margin: 0 16px">
    <div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">
      <router-view />
    </div>
  </a-layout-content>
</template>

<script lang="ts">
export default {
  name: 'App',
  components: {
  }
}
</script>
