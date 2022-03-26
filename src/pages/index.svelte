<script>
  import LayoutGrid, { Cell } from "@smui/layout-grid";
  import Card, { Content } from "@smui/card";
  import Line from "#graph/Line.svelte";
</script>

<LayoutGrid>
  <Cell span={12} />
  <div class=".message">
    <Card>
      <Content>Woah this is a message!</Content>
    </Card>
  </div>
  <Cell span={6}>
    <Card>
      <Content>
        <Line />
      </Content>
    </Card>
  </Cell>
</LayoutGrid>
