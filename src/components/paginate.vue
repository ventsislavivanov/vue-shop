<template>
  <div style="padding-left: 20px;">

    <div>
      <paginate
        v-model="page"
        :page-count="20"
        :margin-pages="2"
        :page-range="5"
        :container-class="'pagination'"
        :page-class="'page-item'"
        :page-link-class="'page-link-item'"
        :prev-class="'prev-item'"
        :prev-link-class="'prev-link-item'"
        :next-class="'next-item'"
        :next-link-class="'next-link-item'"
        :break-view-class="'break-view'"
        :break-view-link-class="'break-view-link'"
        :first-last-button="true"
      ></paginate>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        page: 1
      }
    },
  }
</script>

<style lang="css">
  .page-item {
  }
  .page-link-item {
  }
  .prev-item {
  }
  .prev-link-item {
  }
  .next-item {
  }
  .next-link-item {
  }
  .break-view {
  }
  .break-view-item {
  }
</style>
