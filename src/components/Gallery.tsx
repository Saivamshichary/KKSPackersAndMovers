import React from 'react'


const Gallery = () => {

  const images = Object.values(
  import.meta.glob("../assets/gallery/*.{jpg,jpeg,png,webp}", {
    eager: true,
    import: "default",
  })
);
  return (
        <section id="Gallery" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">Our Gallery</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

            {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Gallery ${index + 1}`}
          className="w-full h-64 object-cover rounded-lg shadow"
          loading="lazy"
        />
      ))}
</div>
</div>
</section >
  )
}

export default Gallery