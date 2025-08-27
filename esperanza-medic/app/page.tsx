import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 min-h-screen">

      {/* Hero / Inicio */}
      <section className="bg-blue-600 text-white py-20 px-8 text-center">
        <h1 className="text-5xl font-bold mb-4">Esperanza Medic</h1>
        <p className="text-lg max-w-xl mx-auto mb-6">
          Tu tienda de productos de salud confiables y de calidad. Compra fácil, rápido y seguro.
        </p>
        <a
          href="#productos"
          className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-lg font-semibold transition"
        >
          Ver Productos
        </a>
      </section>

      {/* Quienes Somos */}
      <section id="quienes-somos" className="py-20 px-8 text-center max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-blue-600">Quiénes Somos</h2>
        <p className="text-gray-700 dark:text-gray-300">
          Esperanza Medic nace con el propósito de ofrecer productos de salud de alta calidad, confiables y accesibles. Nuestro compromiso es cuidar de ti y tu familia.
        </p>
      </section>

      {/* Productos */}
      <section id="productos" className="py-20 px-8 bg-gray-50 dark:bg-gray-800">
        <h2 className="text-3xl font-bold mb-8 text-center text-blue-600">Productos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Cada producto */}
          <div className="border rounded-lg p-4 flex flex-col items-center shadow hover:shadow-lg transition">
            <div className="bg-gray-200 w-full h-40 mb-4 flex items-center justify-center">
              <span className="text-gray-400">Foto Producto</span>
            </div>
            <h3 className="font-semibold mb-2">Producto 1</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-2">Descripción breve.</p>
            <p className="font-bold text-green-500 mb-2">$0.00</p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
              Añadir al carrito
            </button>
          </div>

          <div className="border rounded-lg p-4 flex flex-col items-center shadow hover:shadow-lg transition">
            <div className="bg-gray-200 w-full h-40 mb-4 flex items-center justify-center">
              <span className="text-gray-400">Foto Producto</span>
            </div>
            <h3 className="font-semibold mb-2">Producto 2</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-2">Descripción breve.</p>
            <p className="font-bold text-green-500 mb-2">$0.00</p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
              Añadir al carrito
            </button>
          </div>

          <div className="border rounded-lg p-4 flex flex-col items-center shadow hover:shadow-lg transition">
            <div className="bg-gray-200 w-full h-40 mb-4 flex items-center justify-center">
              <span className="text-gray-400">Foto Producto</span>
            </div>
            <h3 className="font-semibold mb-2">Producto 3</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-2">Descripción breve.</p>
            <p className="font-bold text-green-500 mb-2">$0.00</p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
              Añadir al carrito
            </button>
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="py-20 px-8 max-w-md mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 text-blue-600">Contacto</h2>
        <p className="mb-6 text-gray-700 dark:text-gray-300">Escríbenos y te responderemos lo antes posible.</p>
        <input className="w-full p-3 mb-3 border rounded" placeholder="Tu nombre" />
        <input className="w-full p-3 mb-3 border rounded" placeholder="Tu email" />
        <textarea className="w-full p-3 mb-3 border rounded" placeholder="Mensaje"></textarea>
        <button className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 transition">
          Enviar
        </button>
      </section>

      {/* Carrito de Compras (sección visual inicial) */}
      <section id="carrito" className="py-20 px-8 bg-gray-100 dark:bg-gray-800 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 text-blue-600">Carrito de Compras</h2>
        <p className="text-gray-700 dark:text-gray-300">Aquí aparecerán los productos que agregues al carrito.</p>
        <div className="mt-6 border-t pt-6">
          <p className="font-semibold text-gray-800 dark:text-gray-200">Subtotal: $0.00</p>
          <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
            Finalizar Compra
          </button>
        </div>
      </section>

    </div>
  );
}
