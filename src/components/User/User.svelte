<script>
  import Card from "@smui/card";
  import LayoutGrid, { Cell } from "@smui/layout-grid";
</script>

<div class="card">
  <Card padded>
    <LayoutGrid>
      <Cell span={4}>
        <div class="mdc-typography--body1">Woah this is a message!</div>
      </Cell>
      <Cell span={8}>
        <div class="center">
          <div class="mdc-typography--body1">Woah this is a message!</div>
        </div>
      </Cell>
    </LayoutGrid>
  </Card>
</div>

<style lang="scss">
  @import "User.scss";
</style>
