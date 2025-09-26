import React from 'react'
import { BentoGrid, BentoGridItem } from '@/components/ui/bento-grid'
import { gridItems } from '@/data/idx'

function Grid() {
  return (
    <section id="about">
      <BentoGrid>
        {gridItems.map(
          ({
            id,
            title,
            description,
            className,
            img,
            imgClassName,
            titleClassName,
            spareImg,
          }) => (
            <BentoGridItem
              id={id}
              key={id}
              title={title}
              description={description}
              className={className}
              img={img}
              spareImg={spareImg}
            />
          )
        )}
      </BentoGrid>
    </section>
  )
}

export default Grid
