<script>
  import LayoutGrid, { Cell } from "@smui/layout-grid";
  import Card, { Content } from "@smui/card";
  import Line from "#graph/Line.svelte";
</script>

<LayoutGrid>
  <Cell span={12}>
    <Card>
      <Content>
        <div class="mdc-typography--body1">Woah this is a message!</div>
      </Content>
    </Card>
  </Cell>
  <Cell span={6}>
    <Card>
      <Content>
        <Line />
      </Content>
    </Card>
  </Cell>
</LayoutGrid>

<style type="text/scss">
  @import "index.scss";
</style>
