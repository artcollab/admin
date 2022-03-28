<script>
  import LayoutGrid, { Cell } from "@smui/layout-grid";
  import Card, { Content } from "@smui/card";
  import Line from "#graph/Line.svelte";
  import Bar from "#graph/Bar.svelte";
  import Scatter from "#graph/Scatter.svelte";
  import Events from "#user/Events.svelte";
</script>

<div class="index">
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
    <Cell span={6}>
      <Card>
        <Content>
          <Bar />
        </Content>
      </Card>
    </Cell>
    <Cell span={4}>
      <Card>
        <Content>
          <div class="mdc-typography--headline6">Recent events</div>
          <Events />
        </Content>
      </Card>
    </Cell>
    <Cell span={8}>
      <Card>
        <Content>
          <Scatter />
        </Content>
      </Card>
    </Cell>
  </LayoutGrid>
</div>

<style lang="scss">
  @import "index.scss";
</style>
