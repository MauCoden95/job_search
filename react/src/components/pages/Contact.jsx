import Header from "../parts-website/Header";
import Footer from "../parts-website/Footer";
import Title from "../parts-website/Title";

const Contact = () => {
    return (
        <>
            <Header />
            <Title title="Contacto" />


            <section class="bg-gray-200">
                <div class="w-11/12 mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                    <div class="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
                        <div class="lg:col-span-2 lg:py-12">
                            <p class="max-w-xl text-lg">
                                At the same time, the fact that we are wholly owned and totally
                                independent from manufacturer and other group control gives you
                                confidence that we will only recommend what is right for you.
                            </p>

                            <div class="mt-8">
                                <a href="" class="text-2xl font-bold text-blue-600">
                                    0151 475 4450
                                </a>

                                <address class="mt-2 not-italic">
                                    Av 9 de Julio 9800 - CABA
                                </address>
                            </div>
                        </div>

                        <div class="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
                            <form action="" class="space-y-4">
                                <div>
                                    <label class="sr-only" for="name">Name</label>
                                    <input
                                        class="w-full rounded-lg border-gray-200 placeholder-gray-700 p-3 text-sm bg-gray-200"
                                        placeholder="Nombre completo..."
                                        type="text"
                                        id="name"
                                    />
                                </div>

                                <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    <div>
                                        <label class="sr-only" for="email">Email</label>
                                        <input
                                            class="w-full rounded-lg border-gray-200 placeholder-gray-700 p-3 text-sm bg-gray-200"
                                            placeholder="Email..."
                                            type="email"
                                            id="email"
                                        />
                                    </div>

                                    <div>
                                        <label class="sr-only" for="phone">Phone</label>
                                        <input
                                            class="w-full rounded-lg border-gray-200 placeholder-gray-700 p-3 text-sm bg-gray-200"
                                            placeholder="Teléfono..."
                                            type="tel"
                                            id="phone"
                                        />
                                    </div>
                                </div>

                               

                                <div>
                                    <label class="sr-only" for="message">Message</label>

                                    <textarea
                                        class="w-full rounded-lg border-gray-200 placeholder-gray-700 bg-gray-200 p-3 text-sm"
                                        placeholder="Mensaje..."
                                        rows="8"
                                        id="message"
                                    ></textarea>
                                </div>

                                <div class="mt-4">
                                    <button
                                        type="submit"
                                        class="inline-block w-full rounded-lg bg-blue-800 hover:bg-blue-900 px-5 py-3 font-medium text-white sm:w-auto"
                                    >
                                        Enviar &#128233;
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}

export default Contact;