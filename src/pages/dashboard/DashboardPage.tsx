import GridLayout, { type Layout } from 'react-grid-layout';
import { GRID_CONFIG } from '../../shared/config';
import { Card } from '../../entities/card/ui';
import { useEffect, useState } from 'react';
import { AddCard } from '../../features/cardCRUD/ui';
import { useUnit } from 'effector-react';
import { $cards } from '../../features/cardCRUD/model';

export const DashboardPage = () => {
  const cards = useUnit($cards);
  const [layout, setLayout] = useState<Layout[]>(
    cards.length > 0
      ? cards.map((card) => ({
          i: card.id,
          x: card.x,
          y: card.y,
          w: card.w,
          h: card.h,
          minW: 2,
          minH: 1,
        }))
      : []
  );

  useEffect(() => {
    setLayout(
      cards.map((card) => ({
        i: card.id,
        x: card.x,
        y: card.y,
        w: card.w,
        h: card.h,
        minW: 2,
        minH: 1,
      }))
    );
  }, [cards]);

  return (
    <div className="w-full h-full">
      <GridLayout
        className="layout w-full"
        layout={layout}
        cols={GRID_CONFIG.cols}
        rowHeight={GRID_CONFIG.row_height}
        width={1200}
        margin={GRID_CONFIG.margin}
        containerPadding={GRID_CONFIG.container_padding}
        isDraggable={true}
        isResizable={true}
        compactType="vertical"
      >
        {cards.map((card) => (
          <div key={card.id}>
            <Card {...card} />
          </div>
        ))}
      </GridLayout>
      <AddCard layout={layout} />
    </div>
  );
};
