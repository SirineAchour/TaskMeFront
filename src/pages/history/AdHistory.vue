<template>
  <md-card>
    <md-card-header data-background-color="orange">
      <h4 class="title">Ad History</h4>
      <!--<p class="category">Here is a subtitle for this table</p>-->
    </md-card-header>
    <md-card-content>
      <ordered-table table-header-color="orange"></ordered-table>
    </md-card-content>
  </md-card>
</template>

<script>
import { OrderedTable } from "@/components";
export default {
  components: {
    OrderedTable,
  },
};
</script>
