import GridLayout, { type Layout } from 'react-grid-layout';
import { GRID_CONFIG } from '../../shared/config';
import { Card } from '../../entities/card/ui';
import { useState } from 'react';

export const DashboardPage = () => {
  const [layout, setLayout] = useState<Layout[]>([
    { i: 'a', x: 0, y: 0, w: 3, h: 2, minW: 2, minH: 1 },
    { i: 'b', x: 3, y: 0, w: 3, h: 2, minW: 2, minH: 1 },
    { i: 'c', x: 6, y: 0, w: 3, h: 2, minW: 2, minH: 1 },
  ]);

  const onLayoutChange = (newLayout: Layout[]) => {
    setLayout(newLayout);
  };

  return (
    <div className="w-full h-full">
      <GridLayout
        className="layout w-full"
        layout={layout}
        cols={12}
        rowHeight={GRID_CONFIG.row_height}
        width={1200}
        margin={GRID_CONFIG.margin}
        containerPadding={GRID_CONFIG.container_padding}
        onLayoutChange={onLayoutChange}
        isDraggable={true}
        isResizable={true}
        compactType="vertical"
      >
        <div key="a">
          <Card id="a" title="Карточка A" content="Содержимое карточки A" x={0} y={0} w={3} h={2} />
        </div>
        <div key="b">
          <Card id="b" title="Карточка B" content="Содержимое карточки B" x={3} y={0} w={3} h={2} />
        </div>
        <div key="c">
          <Card id="c" title="Карточка C" content="Содержимое карточки C" x={6} y={0} w={3} h={2} />
        </div>
      </GridLayout>
    </div>
  );
};
