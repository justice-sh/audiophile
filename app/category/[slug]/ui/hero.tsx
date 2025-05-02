const CategoryHero = ({ slug }: { slug: string }) => {
  return (
    <section className="sm-8:h-[336px] flex h-[192px] w-full items-center justify-center bg-black">
      <h2 className="max-sm-8:app-text-h4 text-white">{slug}</h2>
    </section>
  )
}

export default CategoryHero
