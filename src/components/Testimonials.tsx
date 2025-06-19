export default function Testimonials() {
  return (
    <section className="py-16 px-6 bg-gray-100 dark:bg-gray-900 text-center">
      <h2 className="text-3xl font-bold mb-8">What Customers Say</h2>
      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
          <p className="italic">"Absolutely beautiful design and top-notch quality!"</p>
          <p className="mt-2 font-semibold">— Aarya Sharma</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
          <p className="italic">"Looks and feels premium. Highly recommended."</p>
          <p className="mt-2 font-semibold">— Vikram Joshi</p>
        </div>
      </div>
    </section>
  )
}
