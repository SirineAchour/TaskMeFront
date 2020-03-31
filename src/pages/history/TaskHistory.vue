<template>
            <md-card>
          <md-card-header data-background-color="orange">
            <h4 class="title">Task History</h4>
            <!--<p class="category">Here is a subtitle for this table</p>-->
          </md-card-header>
          <md-card-content>
            <simple-table table-header-color="orange"></simple-table>
          </md-card-content>
        </md-card>
</template>

<script>
import { SimpleTable} from "@/components";
export default {
      components: {
    SimpleTable,
  }

}
</script>