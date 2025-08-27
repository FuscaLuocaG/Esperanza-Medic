import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans min-h-screen p-8 sm:p-20 bg-gray-50 dark:bg-gray-900">
      <main className="flex flex-col items-center gap-12">

        {/* Inicio */}
        <section className="text-center">
          <h1 className="text-5xl font-bold text-blue-500 mb-4">
            Bienvenido a Esperanza Medic
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-md mx-auto">
            Tu proyecto de ejemplo con Next.js y Tailwind. Empieza a construir tu aplicación desde aquí.
          </p>
          <a
            className="mt-4 inline-block bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition"
            href="#"
          >
            Comenzar
          </a>
        </section>

        {/* Servicios */}
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center w-full max-w-4xl">
          <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
            <h3 className="font-semibold mb-2">Servicio 1</h3>
            <p className="text-gray-600 dark:text-gray-300">Descripción breve del servicio 1.</p>
          </div>
          <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
            <h3 className="font-semibold mb-2">Servicio 2</h3>
            <p className="text-gray-600 dark:text-gray-300">Descripción breve del servicio 2.</p>
          </div>
          <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
            <h3 className="font-semibold mb-2">Servicio 3</h3>
            <p className="text-gray-600 dark:text-gray-300">Descripción breve del servicio 3.</p>
          </div>
        </section>

        {/* Contacto */}
        <section className="mt-12 w-full max-w-md mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Contacto</h2>
          <input
            className="w-full p-2 mb-2 border rounded"
            placeholder="Tu nombre"
          />
          <input
            className="w-full p-2 mb-2 border rounded"
            placeholder="Tu email"
          />
          <textarea
            className="w-full p-2 mb-2 border rounded"
            placeholder="Mensaje"
          />
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-2">
            Enviar
          </button>
        </section>

      </main>
    </div>
  );
}
